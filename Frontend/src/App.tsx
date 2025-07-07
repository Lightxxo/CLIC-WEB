import React from "react";
import Iridescence from "./blocks/Backgrounds/Iridescence/Iridescence";
export default function App() {
  return (
    <>
      {/* Fixed full-screen shader background */}
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
        className="fixed top-0 left-0 w-screen h-screen -z-10"
      />

      {/* Tall scrollable content to produce vertical scrolling */}
      <div className="h-[5000px] text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Scroll down to see shader react to scroll position!
        </h1>
      </div>
    </>
  );
}
