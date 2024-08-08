import { useEffect, useState } from "react";
import "./ScreenResize.css";
export const ScreenResize = () => {
  const [screenResolution, setScreenResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setScreenResolution({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container">
      <span>{screenResolution.height}</span>
      <span>x</span>
      <span>{screenResolution.width}</span>
    </div>
  );
};
