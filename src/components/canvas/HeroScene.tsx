"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, PerspectiveCamera, Grid } from "@react-three/drei";
import * as THREE from "three";

/* ============================================================================
   1. ENHANCED CODING SYNTAX PARTICLES (Interactive Code Sparks)
   ============================================================================ */
function CodingStarsBackground() {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const count = 450;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#50FA7B"), // Syntax Green
      new THREE.Color("#8BE9FD"), // Cyan
      new THREE.Color("#BD93F9"), // Violet
      new THREE.Color("#FF79C6"), // Pink
      new THREE.Color("#F1FA8C")  // Yellow
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 34;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24 + 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 24 - 6;

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = randomColor.r;
      col[i * 3 + 1] = randomColor.g;
      col[i * 3 + 2] = randomColor.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.88}
        sizeAttenuation
      />
    </points>
  );
}

/* ============================================================================
   2. DYNAMIC DUAL-SIDE CODE MESH (Left vs Right Logic split with Fun Logs)
   ============================================================================ */
function ProfessionalDataSilk() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const codeTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext("2d")!;
    
    ctx.fillStyle = "#27374D"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const syntaxColors = ["#50FA7B", "#8BE9FD", "#FF79C6", "#BD93F9", "#F1FA8C"];
    
    const leftLogs = [
      "GET /api/v1/telemetry/edge HTTP/1.1",
      "STATUS: 200 OK [Next.js 15 App Router Cache: HIT]",
      "MIDDLEWARE: Zero-latency token verification passed",
      "QUERY: { enterpriseNode(id: 'core') { latency status } }",
      "RUNTIME: Edge Computing Active [Turbopack Build]",
      "OPTIMIZING: Core Web Vitals [LCP: 0.68s, FID: 1ms]",
      "DATABASE: Supabase real-time synchronization active",
      "SECURITY: SHA-256 cryptographic payload verified"
    ];

    const rightLogs = [
      "console.log('Coffee level: 99% ☕');",
      "while(true) { writeCode(); eat(); sleep(0.01); }",
      "if (bugFound) { blameTheCache(); fixItFast(); }",
      "git commit -m 'Fixed bug that I created at 3 AM 🚀'",
      "const vibes = 'immaculate' && code === 'clean';",
      "// TODO: Remove this masterpiece before Friday deploy",
      "ERROR: Too much brilliance detected in this component ✨",
      "return { status: 'Coffee powered perfection' };"
    ];

    ctx.font = "bold 30px monospace";
    
    for (let i = 0; i < 160; i++) {
      const isRightSide = i % 2 === 1;
      const textArray = isRightSide ? rightLogs : leftLogs;
      const text = textArray[Math.floor(i / 2) % textArray.length];
      
      const x = isRightSide ? 1100 + ((i % 2) * 150) : 60 + ((i % 2) * 150);
      const y = i * 45;
      
      ctx.fillStyle = syntaxColors[i % syntaxColors.length];
      ctx.globalAlpha = isRightSide ? 0.65 : 0.5;
      ctx.fillText(text, x, y);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 16;
    return tex;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    codeTexture.offset.y = time * 0.014;
  });

  return (
    <Float speed={1.9} rotationIntensity={0.25} floatIntensity={0.4}>
      <mesh ref={meshRef} rotation={[0.48, -0.18, 0]}>
        <planeGeometry args={[32, 32, 72, 72]} />
        <MeshDistortMaterial
          map={codeTexture}
          distort={0.3}
          speed={1.7}
          metalness={0.68}
          roughness={0.22}
          transparent
          opacity={0.94}
        />
      </mesh>
    </Float>
  );
}

/* ============================================================================
   3. MASTER EXPORTED SCENE (HeroScene)
   ============================================================================ */
export default function HeroScene() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full bg-[#27374D] overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 4.8, 11.5]} fov={45} rotation={[-0.28, 0, 0]} />
        
        <Grid
          position={[0, -1.2, 0]}
          args={[35, 35]}
          sectionSize={1.5}
          cellSize={0.5}
          sectionThickness={1.5}
          cellThickness={0.5}
          sectionColor="#526D82"
          cellColor="#27374D"
          fadeDistance={26}
          infiniteGrid
        />

        <ambientLight intensity={0.65} />
        <pointLight position={[12, 12, 12]} intensity={2.4} color="#DDE6ED" />
        <pointLight position={[-10, 8, -5]} intensity={1.6} color="#8BE9FD" />

        <CodingStarsBackground />
        <ProfessionalDataSilk />

        <fog attach="fog" args={["#27374D", 10, 26]} />
      </Canvas>
    </div>
  );
}