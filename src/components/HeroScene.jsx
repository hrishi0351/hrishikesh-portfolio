import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei';

// Loaded lazily from Hero.jsx so the 3D code does not block the first paint.

const SHAPES = [
  { kind: 'octa', position: [-2.7, 1.5, -0.8], size: 0.3, color: '#8CCBFF' },
  { kind: 'tetra', position: [2.6, -1.3, 0.2], size: 0.32, color: '#2F80FF' },
  { kind: 'box', position: [-2.2, -1.5, 0.6], size: 0.22, color: '#8CCBFF' },
  { kind: 'octa', position: [2.9, 1.6, -1.2], size: 0.2, color: '#2F80FF' },
];

// Group that leans toward the pointer.
function Rig({ reduce, children }) {
  const group = useRef(null);

  useFrame((state) => {
    const g = group.current;
    if (!g || reduce) return;
    g.rotation.y += (state.pointer.x * 0.35 - g.rotation.y) * 0.05;
    g.rotation.x += (-state.pointer.y * 0.2 - g.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

// Central distorted orb. It grows slightly on hover.
function CoreOrb({ reduce }) {
  const mesh = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    if (!reduce) m.rotation.y += delta * 0.18;
    const target = hovered ? 1.12 : 1;
    m.scale.setScalar(m.scale.x + (target - m.scale.x) * 0.12);
  });

  return (
    <Float speed={reduce ? 0 : 1.6} rotationIntensity={0.3} floatIntensity={reduce ? 0 : 1.2}>
      <mesh
        ref={mesh}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.2, 96, 96]} />
        <MeshDistortMaterial
          color="#1f63e0"
          emissive="#06204f"
          roughness={0.18}
          metalness={0.55}
          distort={reduce ? 0 : 0.32}
          speed={reduce ? 0 : 1.6}
        />
      </mesh>
    </Float>
  );
}

function Ring({ radius, tube, rotation, speed, reduce }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!reduce && ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 180]} />
      <meshBasicMaterial color="#8CCBFF" transparent opacity={0.35} />
    </mesh>
  );
}

function Shape({ kind, position, size, color, reduce }) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!reduce && ref.current) {
      ref.current.rotation.x += delta * 0.4;
      ref.current.rotation.y += delta * 0.25;
    }
  });

  let geometry;
  if (kind === 'tetra') geometry = <tetrahedronGeometry args={[size]} />;
  else if (kind === 'box') geometry = <boxGeometry args={[size, size, size]} />;
  else geometry = <octahedronGeometry args={[size]} />;

  return (
    <Float speed={reduce ? 0 : 1.4} rotationIntensity={0.5} floatIntensity={reduce ? 0 : 1.5}>
      <mesh ref={ref} position={position}>
        {geometry}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.75} />
      </mesh>
    </Float>
  );
}

export default function HeroScene({ reduce = false }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={2.4} color="#2F80FF" />
      <pointLight position={[-4, -2, 2]} intensity={1} color="#8CCBFF" />

      <Rig reduce={reduce}>
        <CoreOrb reduce={reduce} />
        <Ring radius={1.9} tube={0.008} rotation={[Math.PI / 2.6, 0, 0]} speed={0.12} reduce={reduce} />
        <Ring radius={2.3} tube={0.006} rotation={[Math.PI / 4, Math.PI / 5, 0]} speed={-0.08} reduce={reduce} />
        {SHAPES.map((shape, i) => (
          <Shape key={i} {...shape} reduce={reduce} />
        ))}
      </Rig>

      <Sparkles count={60} scale={[7, 4, 4]} size={2} speed={reduce ? 0 : 0.3} color="#8CCBFF" opacity={0.6} />
      <Stars radius={60} depth={40} count={800} factor={2.5} fade speed={reduce ? 0 : 0.3} />
    </Canvas>
  );
}
