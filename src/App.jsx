
import React, { useEffect, useRef, useState } from 'react';
import Cv_web from './componentes/Cv_web';

function App() {
  const cvRef = useRef(null);
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 5;
      const rotateX = ((centerY - y) / centerY) * 5;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: 'transform 0.3s ease-out',
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 "ref={containerRef}>
      <div className="bg-white w-full max-w-xl shadow-xl  overflow-hidden" ref={cvRef}
          style={transformStyle}>
        <div className=" p-8 md:p-16 space-y-8" >
          <>
            <Cv_web />
          </>
        </div>
      </div>
    </div >
  );
}

export default App;