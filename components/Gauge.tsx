import React from 'react';
import { styled, keyframes } from '../stitches.config';

// Keyframes for fadeIn animation
const fadeInKeyframes = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

// Styled components
const GaugeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

const Svg = styled('svg', {
  fill: 'none',
  shapeRendering: 'geometricPrecision',
  strokeWidth: '12',
  transform: 'rotate(-90deg)',
});

const CircleBackground = styled('circle', {
  stroke: 'currentColor',
  fill: 'transparent',
});

const CircleFill = styled('circle', {
  shapeRendering: 'geometricPrecision',
  strokeLinecap: 'round',
  transition: 'stroke-dasharray 1s ease 0s, stroke 1s ease 0s',
});

const ValueText = styled('p', {
  color: 'gray',
  variants: {
    size: {
      small: {
        fontSize: '0.75rem',
      },
      medium: {
        fontSize: '1.5rem',
      },
      large: {
        fontSize: '3rem',
      },
    },
  },
});

const GaugeValue = styled('div', {
  display: 'flex',
  opacity: '0',
  animation: `${fadeInKeyframes} 0.5s forwards`,
});

// Gauge component
interface GaugeProps {
  value: number;
  size: 'small' | 'medium' | 'large';
  showValue: boolean;
}

const Gauge: React.FC<GaugeProps> = ({ value, size, showValue }) => {
  const circumference = 332;
  const valueInCircumference = (value / 100) * circumference;
  const strokeDasharray = `${circumference} ${circumference}`;
  const initialOffset = circumference;
  const strokeDashoffset = initialOffset - valueInCircumference;

  return (
    <GaugeContainer>
      <Svg
        height={size === 'small' ? 36 : size === 'medium' ? 72 : 144}
        width={size === 'small' ? 36 : size === 'medium' ? 72 : 144}
        viewBox="0 0 120 120"
      >
        <CircleBackground
          r="53"
          cx="60"
          cy="60"
          strokeWidth="12"
        />
        <CircleFill
          r="53"
          cx="60"
          cy="60"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={initialOffset}
          style={{
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </Svg>
      {showValue && (
        <GaugeValue>
          <ValueText size={size}>{value}</ValueText>
        </GaugeValue>
      )}
    </GaugeContainer>
  );
};

export default Gauge;
