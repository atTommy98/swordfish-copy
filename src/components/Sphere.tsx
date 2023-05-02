import { useVideoTexture } from "@react-three/drei";
import video from "../videos/360Vid.mp4";

export default function AnimatedSphere() {
  const texture = useVideoTexture(video);

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[2, 128, 256]} />
      <meshStandardMaterial side={2} attach="material" map={texture} />
    </mesh>
  );
}
