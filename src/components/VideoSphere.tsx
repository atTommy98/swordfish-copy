export default function VideoSphere({ url }: any) {

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 64, 64]} />
      <meshStandardMaterial attach="material" side={2}>
        <videoTexture attach="map" args={[url]} />
      </meshStandardMaterial>
    </mesh>
  );
}
