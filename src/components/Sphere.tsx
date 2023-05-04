import { useVideoTexture } from "@react-three/drei";
import video1 from "../videos/mountain-pass.mp4";
import video2 from "../videos/aerial-2-sphere.mp4"

export default function AnimatedSphere({ videoSrc }: IVideoProps) {
  let video;
  if (videoSrc === "video1") {
    video = video1
  } else if (videoSrc === "video2") {
    video = video2
  }

  const texture = useVideoTexture(video);

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 512, 1028]} />
      <meshStandardMaterial side={2} attach="material" map={texture} />
    </mesh>
  );
}
