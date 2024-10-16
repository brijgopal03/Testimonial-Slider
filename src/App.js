import React from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
  <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200">
    <div className="text-center">
      <h1 className="text-bold text-4xl">Our Testimonials</h1>
   
    <div className="h-[4px] w-[1/5] mt-1 bg-violet-400"></div>
    <Testimonials reviews = {reviews}/>
    </div>
  </div>
  )
};

export default App;
