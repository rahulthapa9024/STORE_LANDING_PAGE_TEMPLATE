const ShimmerSpinner = ({
    size = 'md',
    color = 'black', // Changed default to black for white background
    center = true,
    className = '',
    imageScale = 2.5
  }) => {
    const baseSize = {
      sm: 32,
      md: 48,
      lg: 64,
      xl: 80
    };
  
    // Color palette for White & Black theme
    const colorClasses = {
      black: 'border-black border-t-transparent',
      zinc: 'border-zinc-300 border-t-transparent',
      white: 'border-white border-t-zinc-200',
      gradient: 'border-transparent border-t-transparent animate-gradient-spin'
    };
  
    const svgFillColors = {
      black: '#000000',
      zinc: '#71717a',
      white: '#ffffff',
      gradient: '#000000'
    };
  
    // Updated gradient for grayscale shimmer (darker for white background)
    const gradientStyle = color === 'gradient' ? {
      background: 'conic-gradient(transparent, #000000, #71717a, transparent)',
      WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 6px), #fff 0)'
    } : {};
  
    const spinnerSize = baseSize[size] * imageScale;
    const borderWidth = Math.max(3, imageScale * 2);
  
    // Default to black for better visibility on white background
    const svgFillColor = svgFillColors[color] || svgFillColors.black;
  
    return (
      <div className={`${center ? 'min-h-screen flex items-center justify-center bg-white' : ''} ${className}`}>
        <div className="relative">
          {/* Circular spinning ring */}
          <div
            className={`rounded-full animate-spin ${colorClasses[color] || colorClasses.black}`}
            style={{
              ...gradientStyle,
              width: `${spinnerSize}px`,
              height: `${spinnerSize}px`,
              borderWidth: `${borderWidth}px`
            }}
          >
            {color === 'gradient' && (
              <style jsx>{`
                @keyframes gradient-spin {
                  to { transform: rotate(1turn); }
                }
                .animate-gradient-spin {
                  animation: gradient-spin 1s linear infinite;
                }
              `}</style>
            )}
          </div>
  
          {/* Dumbbell SVG centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width={120}
              height={60}
              viewBox="0 0 120 60"
              className="opacity-100"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="120" height="60" fill="transparent" />
              <rect x="16" y="20" width="2" height="20" rx="1" fill={svgFillColor} />
              <rect x="20" y="18" width="4" height="24" rx="1" fill={svgFillColor} />
              <rect x="26" y="15" width="6" height="30" rx="2" fill={svgFillColor} />
              <rect x="34" y="12" width="8" height="36" rx="2" fill={svgFillColor} />
              <rect x="44" y="25" width="32" height="10" rx="2" fill={svgFillColor} />
              <rect x="78" y="12" width="8" height="36" rx="2" fill={svgFillColor} />
              <rect x="88" y="15" width="6" height="30" rx="2" fill={svgFillColor} />
              <rect x="96" y="18" width="4" height="24" rx="1" fill={svgFillColor} />
              <rect x="102" y="20" width="2" height="20" rx="1" fill={svgFillColor} />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShimmerSpinner;