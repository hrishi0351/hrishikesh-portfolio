import { useState } from 'react';
import { Link2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const EMPTY_FORM = { name: '', email: '', message: '', company: '' };

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = 'Enter your name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (message.length < 10) errors.message = 'Add a few more details (at least 10 characters).';
  else if (message.length > 2000) errors.message = 'Keep the message under 2,000 characters.';

  return errors;
}

function Field({ id, label, error, multiline = false, ...props }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-200">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={multiline ? 5 : undefined}
        className="field mt-2"
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

const STATUS_STYLES = {
  idle: 'text-mist',
  sending: 'text-mist',
  success: 'text-emerald-300',
  error: 'text-rose-300',
  mailto: 'text-glow',
};

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const openEmailApp = () => {
    const name = values.name.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n${name}\n${values.email.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: hidden field that real visitors never fill in. Bots that do are ignored.
    if (values.company) {
      setValues(EMPTY_FORM);
      setStatus({ type: 'success', text: 'Message sent. Thank you!' });
      return;
    }

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ type: 'error', text: 'Fix the highlighted fields and try again.' });
      return;
    }

    if (!endpoint) {
      openEmailApp();
      setStatus({
        type: 'mailto',
        text: `Your email app should open with this message. If it does not, write to ${profile.email} directly.`,
      });
      return;
    }

    setStatus({ type: 'sending', text: '' });
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setValues(EMPTY_FORM);
      setStatus({ type: 'success', text: 'Message sent. I will reply to your email soon.' });
    } catch {
      setStatus({
        type: 'error',
        text: `The message could not be sent. Try again, or email ${profile.email} directly.`,
      });
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            title="Contact"
            lead="Have a role, a project or a question? Send a message and I will get back to you."
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4 text-slate-200">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 hover:text-white">
                  <Mail size={18} aria-hidden="true" className="text-glow" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-3 hover:text-white">
                  <Phone size={18} aria-hidden="true" className="text-glow" />
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} aria-hidden="true" className="text-glow" />
                {profile.location}
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-white"
                >
                  <Link2 size={18} aria-hidden="true" className="text-glow" />
                  LinkedIn profile
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form noValidate onSubmit={handleSubmit} aria-label="Contact form" className="glass space-y-5 p-6 sm:p-8">
            <Field
              id="name"
              label="Name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              id="message"
              label="Message"
              multiline
              value={values.message}
              onChange={handleChange}
              error={errors.message}
            />

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={values.company}
              onChange={handleChange}
              className="hidden"
            />

            <button
              type="submit"
              disabled={status.type === 'sending'}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.type === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={18} aria-hidden="true" />
                  Send message
                </>
              )}
            </button>

            <p role="status" aria-live="polite" className={`min-h-[1.5rem] text-sm ${STATUS_STYLES[status.type]}`}>
              {status.text}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
