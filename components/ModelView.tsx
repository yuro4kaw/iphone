import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import { StaticImageData } from "next/image";
import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  Suspense,
} from "react";
import { Group, Object3DEventMap } from "three";
import Lights from "./Lights";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loading from "./Loading";

type Props = {
  index: number;
  groupRef: MutableRefObject<Group<Object3DEventMap>>;
  gsapType: string;
  controlRef: any;
  setRotationState: Dispatch<SetStateAction<number>>;
  item: Item;
  size: string;
};

type Item = { title: string; color: string[]; img: StaticImageData };

const ModelView: FC<Props> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={1} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        enableRotate
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
           <Loading />
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
