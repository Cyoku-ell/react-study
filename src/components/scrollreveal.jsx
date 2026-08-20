import { useEffect, useRef, useState } from "react";
import Zoom from "@mui/material/Zoom";

function ScrollReveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { 
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <Zoom in={visible} timeout={700}>
        <div>{children}</div>
      </Zoom>
    </div>
  );
}

export default ScrollReveal;
