import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SplitText from "./TextAnimations/SplitText/SplitText";
import Aurora from "./Backgrounds/Aurora/Aurora";
import HowItWorks from "./HowItWorks";
import ScrollVelocity from "./TextAnimations/ScrollVelocity/ScrollVelocity";
import Particles from "./Backgrounds/Particles/Particles";

function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <div className="min-h-screen  bg-black relative overflow-hidden">
        <Aurora
          colorStops={["#0066FF", "#4DA6FF", "#66B2FF"]} // More blue-focused gradient like the reference
          blend={0.8}
          amplitude={0.8}
          speed={0.4}
        />
        <div style={{ width: "100%", height: "600px", position: "fixed" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen px-4 mt-[-200px]">
          <SplitText
            text="Caption Generator"
            className="text-[4.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 
                      text-center text-white tracking-tight leading-none"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          {/* Subtitle text similar to the reference */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-6 max-w-xl text-center opacity-80">
            Generate engaging captions for your content with AI.
          </p>

          {/* Button container similar to reference */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 text-gray-300 hover:text-white transition-colors">
              how to use?
            </button>
            <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all flex items-center gap-2">
              get started
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        <HowItWorks />
      </div>
    </>
  );
}

export default App;
