import { useEffect, useState } from "react"

export const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX : 0,
    clientY : 0,
  })

  const updatePosition = (event: MouseEvent) => {
    setTimeout(() => {
      const { clientX, clientY } = event;
      setPosition({
        clientX,
        clientY,
      });
    }, 100);
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position
}

