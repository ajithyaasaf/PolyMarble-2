import { useRef, useEffect, useState } from "react";

interface MarbleViewerProps {
  color: number;
  selectedTexture: string | null;
  marbleType: string;
}

export default function MarbleViewer({ color, selectedTexture, marbleType }: MarbleViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawSphere = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.7;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient for 3D effect
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      );

      // Convert hex color to RGB
      const hexColor = `#${color.toString(16).padStart(6, '0')}`;
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);

      gradient.addColorStop(0, `rgba(${r + 50}, ${g + 50}, ${b + 50}, 1)`);
      gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 1)`);
      gradient.addColorStop(1, `rgba(${Math.max(0, r - 50)}, ${Math.max(0, g - 50)}, ${Math.max(0, b - 50)}, 1)`);

      // Draw sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add marble texture lines
      ctx.strokeStyle = `rgba(${255 - r}, ${255 - g}, ${255 - b}, 0.3)`;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const offsetX = (rotation.x * 0.1 + i * 0.5) * 50;
        const offsetY = (rotation.y * 0.1 + i * 0.3) * 30;
        
        ctx.moveTo(centerX - radius + offsetX, centerY - radius / 2 + offsetY);
        ctx.bezierCurveTo(
          centerX - radius / 2 + offsetX,
          centerY + offsetY,
          centerX + radius / 2 + offsetX,
          centerY + offsetY,
          centerX + radius + offsetX,
          centerY + radius / 2 + offsetY
        );
        ctx.stroke();
      }

      // Add highlight
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.3, centerY - radius * 0.3, radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, 0.6)`;
      ctx.fill();
    };

    drawSphere();
  }, [color, rotation]);

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation(prev => ({ ...prev, y: prev.y + 0.5 }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePosition.x;
    const deltaY = e.clientY - lastMousePosition.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-light-silver/30 rounded-xl">
        <div className="w-8 h-8 border-4 border-brand-teal/30 border-t-metallic-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ background: "transparent" }}
      />
    </div>
  );
}
