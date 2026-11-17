// src/ThreeDGallery.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import './ThreeDGallery.css';

const ImageBox = ({ texturePath, position }) => {
  const texture = useTexture(texturePath);
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const ThreeDGallery = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    // Add more image paths as needed
  ];

  return (
    <div className="gallery-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        {images.map((img, index) => (
          <ImageBox
            key={index}
            texturePath={img}
            position={[index * 3 - (images.length - 1) * 1.5, 0, 0]}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeDGallery;
