import React, { useRef, useEffect, useState } from 'react';

const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 80,  // Increased from 60
  gap = 80,         // Increased from 60
  hoverSpeed = 0.5,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
  useCustomRender = false,
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrame;
    let lastTime = 0;

    const animate = (time) => {
      if (!containerRef.current) return;

      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered || hoverSpeed > 0) {
        const currentSpeed = isHovered ? speed * hoverSpeed : speed;
        const directionMultiplier = direction === 'left' ? -1 : 1;
        const step = (delta / 1000) * currentSpeed * directionMultiplier;

        setPosition((prev) => {
          const newPos = prev + step;
          const containerWidth = containerRef.current?.offsetWidth || 0;
          const contentWidth = containerRef.current?.scrollWidth || 0;

          // Reset position when the content has scrolled enough
          if (direction === 'left' && newPos <= -contentWidth / 2) {
            return 0;
          } else if (direction === 'right' && newPos >= 0) {
            return -contentWidth / 2;
          }
          return newPos;
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [speed, direction, isHovered, hoverSpeed]);

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="logo-loop-container"
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
    >
      <div
        className="logo-loop-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${gap}px`,
          height: '100%',
          transform: `translateX(${position}px)`,
          transition: isHovered && hoverSpeed === 0 ? 'transform 0.3s ease' : 'none',
          willChange: 'transform',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.title || logo.alt || index}-${index}`}
            className="logo-item"
            style={{
              height: `${logoHeight}px`,
              width: `${logoHeight}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'transform 0.3s ease',
              fontSize: `${logoHeight * 0.6}px`, // Make icons scale with logoHeight
              ...(scaleOnHover && {
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }),
            }}
          >
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: 'inherit',
                }}
                title={logo.title || logo.alt}
              >
                {logo.node || <img src={logo.src} alt={logo.alt || logo.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
              </a>
            ) : (
              <div style={{ fontSize: 'inherit' }}>
                {logo.node || <img src={logo.src} alt={logo.alt || logo.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fade out overlays */}
      {fadeOut && (
        <>
          <div
            className="logo-loop-fade-left"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100px', // Increased from 80px for better fade effect
              height: '100%',
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <div
            className="logo-loop-fade-right"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px', // Increased from 80px for better fade effect
              height: '100%',
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default LogoLoop;