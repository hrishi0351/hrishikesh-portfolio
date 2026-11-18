<<<<<<< HEAD
# Hrishikesh Shelar Portfolio

A 3D portfolio built with React, Vite, Tailwind CSS, React Three Fiber, Framer Motion and Lucide icons.

## Run locally

1. Install Node.js 20 or newer.
2. Open the project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:5173 in your browser.

To build for production, run `npm run build`. To preview that build, run `npm run preview`.

## Edit your content

All text, skills, experience, projects, education and contact details are in `src/data/portfolio.js`.

Replace `public/Hrishikesh_Shelar_Resume.pdf` with a newer resume to update the Download Resume button.

Project links are not included. Add them to `src/data/portfolio.js` only when you have real URLs.

## Contact form

By default, Send message opens the visitor's email app with the message filled in.

To receive messages through a form service (such as Formspree or Web3Forms):

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_FORM_ENDPOINT` to your endpoint URL.
3. Restart `npm run dev`.

Add the same variable under Project Settings, then Environment Variables, in Vercel before you deploy.

## Deploy to Vercel

1. Create a GitHub repository and push this project to it.
2. Sign in at vercel.com with your GitHub account.
3. Click Add New, then Project, and import the repository.
4. Vercel detects Vite automatically. Confirm: Build Command `npm run build`, Output Directory `dist`.
5. Click Deploy.
6. Vercel gives you a public URL such as `https://your-project-name.vercel.app`.

To use your own domain later, open Project Settings, then Domains.
=======
# hrishikesh-portfolio
Personal portfolio of Hrishikesh Shelar, Full-Stack Developer. Features a 3D hero, animated skills, experience timeline, project cards and a validated contact form.

