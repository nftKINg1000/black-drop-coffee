"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  ContactShadows, 
  Environment, 
  Float, 
  PerspectiveCamera, 
  Decal, 
  useTexture,
  Html 
} from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  scrollProgress: any;
}

export function Cup3D({ scrollProgress }: ModelProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/antigravity_assets/hero.png");

  // Define points for a real coffee cup shape (Lathe)
  const cupPoints = React.useMemo(() => {
    const pts = [];
    for (let i = 0; i < 15; i++) {
        const x = Math.sin(i * 0.15) * 1.5 + 1.2;
        const y = (i - 7) * 0.4;
        pts.push(new THREE.Vector2(x, y));
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const progress = typeof scrollProgress === "object" && "get" in scrollProgress 
        ? scrollProgress.get() 
        : scrollProgress;
        
      meshRef.current.rotation.y = progress * Math.PI * 2; // Full rotation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
      meshRef.current.scale.setScalar(1.5 + progress * 0.4); // Scale up on scroll
    }
  });

  return (
    <group>
      <mesh ref={meshRef} castShadow receiveShadow>
        <latheGeometry args={[cupPoints, 64]} />
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.2} 
          metalness={0.1} 
          envMapIntensity={2} 
        />
        <Decal position={[0, 0, 1.4]} rotation={[0, 0, 0]} scale={[2.5, 3.5, 1]}>
          <meshStandardMaterial map={texture} transparent polygonOffset polygonOffsetFactor={-10} />
        </Decal>
      </mesh>
    </group>
  );
}

export function Bag3D({ scrollProgress }: ModelProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/antigravity_assets/product.png");

  useFrame(() => {
    if (meshRef.current) {
      const progress = typeof scrollProgress === "object" && "get" in scrollProgress 
        ? scrollProgress.get() 
        : scrollProgress;

      meshRef.current.rotation.y = (progress - 0.5) * 1.5;
      meshRef.current.rotation.z = Math.sin(progress * Math.PI) * 0.2;
      meshRef.current.position.x = (progress - 0.5) * 2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[3, 4.5, 0.8]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f0f0f0" roughness={0.4} metalness={0.1} />
      <Decal position={[0, 0, 0.51]} rotation={[0, 0, 0]} scale={[0.9, 0.9, 1]}>
        <meshStandardMaterial map={texture} transparent />
      </Decal>
    </mesh>
  );
}

export function Pastry3D({ scrollProgress }: ModelProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/antigravity_assets/ingredients.png");

  useFrame((state) => {
    if (meshRef.current) {
      const progress = typeof scrollProgress === "object" && "get" in scrollProgress 
        ? scrollProgress.get() 
        : scrollProgress;

      meshRef.current.rotation.z = -progress * Math.PI;
      meshRef.current.rotation.x = 0.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[6, 6, 0.6]} castShadow>
      <cylinderGeometry args={[1, 1, 0.2, 128]} />
      <meshStandardMaterial map={texture} roughness={0.3} metalness={0.2} />
    </mesh>
  );
}

export default function ThreeDCanvas({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={3} castShadow />
        <pointLight position={[-10, 10, 5]} intensity={1.5} color="#4444ff" />
        <spotLight position={[0, 20, 0]} intensity={5} castShadow />
        
        <React.Suspense fallback={null}>
          {children}
        </React.Suspense>
        
        <ContactShadows position={[0, -4, 0]} opacity={0.6} scale={15} blur={3} far={10} />
      </Canvas>
    </div>
  );
}
