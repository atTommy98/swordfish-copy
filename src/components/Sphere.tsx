import { useVideoTexture } from "@react-three/drei";
import video1 from "../videos/mountain-pass.mp4";
import video2 from "../videos/aerial-2-sphere.mp4";
import video3 from "../videos/timelapse-sphere.mp4";
import video4 from "../videos/yak.mp4";

export default function AnimatedSphere({ videoSrc }: IVideoProps) {
  let video;
  
  switch (videoSrc) {
    case "video1":
      video = video1;
      break;
    case "video2":
      video = video2;
      break;
    case "video3":
      video = video3;
      break;
    case "video4":
      video = video4;
      break;
  }

  const texture = useVideoTexture(video);

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 512, 1028]} />
      <meshStandardMaterial side={2} attach="material" map={texture} />
    </mesh>
  );
}
