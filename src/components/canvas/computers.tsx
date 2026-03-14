import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import heroPoster from "../../assets/hero-poster.jpg";
import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

const canUseWebGL = () => {
  const canvas = document.createElement("canvas");

  return !!(
    canvas.getContext("webgl", {
      powerPreference: "low-power",
      antialias: false,
    }) ||
    canvas.getContext("experimental-webgl")
  );
};

const HeroFallback = () => {
  return (
    <div className="h-full w-full flex items-end justify-center px-4 pb-16 pt-36 sm:px-8 sm:pb-20">
      <div className="relative h-[240px] w-full max-w-[720px] overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-2xl shadow-black/40 backdrop-blur-sm xs:h-[300px] sm:h-[420px]">
        <img
          src={heroPoster}
          alt="Desktop workstation preview"
          className="h-full w-full object-cover object-[66%_82%]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent px-4 py-4">
          <p className="text-center text-[12px] font-medium text-white/80 xs:text-[13px]">
            Optimized preview shown for this device.
          </p>
        </div>
      </div>
    </div>
  );
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");

  return (
    // Mesh
    <mesh>
      {/* Light */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={isMobile ? 0.85 : 1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.9 : 1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);
  const [showFallback, setShowFallback] = useState(() => !canUseWebGL());

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (showFallback) {
    return <HeroFallback />;
  }

  return (
    <Canvas
      dpr={isMobile ? [0.75, 1] : [1, 2]}
      frameloop="demand"
      shadows={!isMobile}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        alpha: true,
        antialias: !isMobile,
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (event) => {
            event.preventDefault();
            setShowFallback(true);
          },
          { once: true },
        );
      }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3.2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
