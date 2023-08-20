import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import { styled } from '../stitches.config';

type ProgressProps = {
  size: 'md' | 'lg' | 'xl';
  value: number;
  variant: 'linear' | 'circular';
};

const ProgressBar = ({ size, value, variant }: ProgressProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ProgressRoot size={size} variant={variant}>
      {variant === 'linear' ? (
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      ) : (
        <CircularProgressIndicator />
      )}
    </ProgressRoot>
  );
};

const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$background',
  borderRadius: '99999px',

  variants: {
    size: {
      md: {
        width: 300,
        height: 25,
      },
      lg: {
        width: 400,
        height: 35,
      },
      xl: {
        width: 500,
        height: 45,
      },
    },
    variant: {
      linear: {},
      circular: {},
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'linear',
  },
});

const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$primary',
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

const CircularProgressIndicator = styled(Progress.Indicator, {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  transformOrigin: 'center',
  transform: 'rotate(-90deg)',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export default ProgressBar;
