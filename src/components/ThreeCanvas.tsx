import VideoSphere from "./VideoSphere";
import { Canvas } from "react-three-fiber";
import { DeviceOrientationControls, OrbitControls } from "@react-three/drei";

export default function ThreeCanvas({video}: any) {
  
  return (
    <Canvas camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 0, 0.1] }}>
      <DeviceOrientationControls />
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.4} />
      <VideoSphere video={video} />
    </Canvas>
  );
}
