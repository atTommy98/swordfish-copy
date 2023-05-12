export default function VideoSphere({ video }: any) {

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 64, 64]} />
      <meshStandardMaterial attach="material" side={2}>
        <videoTexture attach="map" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
}
