import React from "react";
import { useGLTF } from "@react-three/drei";

export function Floorplan(props) {
  const { nodes, materials } = useGLTF("/models/new-3737.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-6.311, 0, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-6.311, 0, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.PLATE.geometry}
        material={materials["Material.001"]}
        position={[0, -0.019, 0]}
        scale={[1.055, 1, 0.906]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[-6.311, 0, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[2.382, 0, 2.955]}
        scale={0.012}
      />
      <group
        position={[12.625, 0.454, 0.387]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.576}
      >
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Plane002_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[5.581, 0.75, 5.931]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.435, 0.435, 0.532]}
      >
        <mesh
          geometry={nodes.Plane006_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Plane006_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[3.055, 0.75, 5.931]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.435, 0.435, 0.532]}
      >
        <mesh
          geometry={nodes.Plane007_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Plane007_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[-3.045, 0.75, 0.762]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.51, 0.435, 0.393]}
      >
        <mesh
          geometry={nodes.Plane008_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Plane008_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        geometry={nodes["_3737-Layout"].geometry}
        material={materials["_3737-Layout"]}
        scale={12.863}
      />
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials["Material.006"]}
        position={[2.363, 0.698, 4.138]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.698, 1, 1.147]}
      />
      <mesh
        geometry={nodes.Plane009.geometry}
        material={materials["Material.006"]}
        position={[-5.237, 0.698, 3.467]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.698, 1, 0.731]}
      />
    </group>
  );
}

useGLTF.preload("/models/new-3737.glb");
