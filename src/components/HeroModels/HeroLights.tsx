import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="white" />

      <spotLight
        position={[1, 1, 1]}
        intensity={100}
        angle={2}
        penumbra={0.5}
        color={"white"}
      />

      <primitive
        object={new THREE.RectAreaLight("orange", 8, 25, 25)}
        position={[10, 10, 4]}
        intensity={1}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight position={[1, 2, 10]} intensity={100} color="cyan" />
    </>
  );
};

export default HeroLights;
