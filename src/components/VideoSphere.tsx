import video from "../videos/mountain-pass.mp4";
import { useVideoTexture } from "@react-three/drei";
import THREE from "three";

export default function VideoSphere({ url }: any) {
  // const videoTexture = useVideoTexture(video)
  // videoTexture.source.data.paused = true
  // console.log(videoTexture.source.data)
  // const texture = useVideoTexture(url)

  const texture = useVideoTexture(url)

  console.log(texture.source.data)


  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 64, 64]} />
      <meshStandardMaterial attach="material" side={2} map={texture} />
    </mesh>
  );
}
