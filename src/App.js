import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import Environment from "../components/Environment";
import "./styles.css";

export default function App() {
  const [modelUrl, setModelUrl] = useState(
    "https://d1a370nemizbjq.cloudfront.net/553320cf-7feb-4a5c-940f-bc4f7932253f.glb"
  );

  return (
    <Canvas>
      <Environment />
      <Suspense fallback={null}>
        <Model url={modelUrl} />
      </Suspense>
    </Canvas>
  );
}
