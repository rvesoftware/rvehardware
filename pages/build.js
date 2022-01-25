import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Layout from '../components/Layout';
import Computer from '../components/Computer'

export default function Build() {
  return (
  <Layout>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} autoRotate={true} />  
          <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />          
          <Suspense fallback={null}>
            <Computer />
          </Suspense>
        </Canvas>

  </Layout>
  );
}
