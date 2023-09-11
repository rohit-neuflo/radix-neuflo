import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import { styled } from '../stitches.config';

type ProgressProps = {
  size: '6xs' | '5xs' | '4xs' | '3xs' | '2xs' ;
  value: number;
};

const ProgressBar = ({ size, value }: ProgressProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ProgressRoot size={size} >
    
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
     
    </ProgressRoot>
  );
};

const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$background',
  borderRadius: '99999px',
  width: "214px",
  variants: {
    size: {
      '6xs': {
        height: "2px",
      },
      '5xs': {

        height: "4px",
      },
      '4xs': {

        height: "8px",

      },
      '3xs': {

        height: "12px",

      },
      '2xs': {

        height: "16px",

      },
    }
  },

  defaultVariants: {
    size: '4xs',
  },
});

const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$primary',
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export default ProgressBar;
