import React, { useRef, useEffect } from "react";

const StarfieldCanvas = ({ speed = 0.15, starCount = 180 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const createStars = () => {
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8 + 0.3,
          alpha: Math.random(),
          alphaSpeed: Math.random() * 0.015 + 0.003,
          direction: Math.random() > 0.5 ? 1 : -1,
          speed: Math.random() * speed + 0.05,
        });
      }
    };

    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Twinkle
        star.alpha += star.alphaSpeed * star.direction;

        if (star.alpha >= 1) {
          star.direction = -1;
        }

        if (star.alpha <= 0.2) {
          star.direction = 1;
        }

        // Float upward
        star.y -= star.speed;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        // Draw star glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255,255,255,0.8)";
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [speed, starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default StarfieldCanvas;
