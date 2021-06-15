import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ url }) {
  const gltf = useGLTF(url);
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
