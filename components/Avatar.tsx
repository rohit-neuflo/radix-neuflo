import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from "../stitches.config";

type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
type BadgeStatus = 'online' | 'offline';

type AvatarProps = {
  sizes: "md" | "xs" | "sm" | "lg" | "xl" | "2xl";
  badgePosition?: BadgePosition;
  badgeStatus?: BadgeStatus;
  src?: string;
  alt?: string;
} & React.ComponentProps<typeof AvatarPrimitive.Root>;

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  width: '40px', // Default width value
  height: '40px', // Default height value

  variants: {
    sizes: {
      xs: {
        width: '24px',
        height: '24px',
      },
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '40px',
        height: '40px',
      },
      lg: {
        width: '48px',
        height: '48px',
      },
      xl: {
        width: '56px',
        height: '56px',
      },
      '2xl': {
        width: '64px',
        height: '64px',
      },
    },
    badgePosition: {
      'top-right': {
        top: '0',
        right: '0',
      },
      'top-left': {
        top: '0',
        left: '0',
      },
      'bottom-right': {
        bottom: '0',
        right: '0',
      },
      'bottom-left': {
        bottom: '0',
        left: '0',
      },
    },
    badgeStatus: {
      online: {
        backgroundColor: 'green',
      },
      offline: {
        backgroundColor: 'gray',
      },
    },
  },

  defaultVariants: {
    sizes: 'md',
  },
  fontFamily: 'Poppins',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  userSelect: 'none',
  borderRadius: '100%',
  backgroundColor: 'black',
  position: 'relative',
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'black',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const AvatarBadge = styled('div', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  position: 'absolute',
  borderRadius: '100%',
  color: 'white',
  fontSize: '10px',
  fontWeight: 'bold',

  variants: {
    sizes: {
      xs: {
        width: '8px',
        height: '8px',
      },
      sm: {
        width: '12px',
        height: '12px',
      },
      md: {
        width: '16px',
        height: '16px',
      },
      lg: {
        width: '17px',
        height: '17px',
      },
      xl: {
        width: '19px',
        height: '19px',
      },
      '2xl': {
        width: '16px',
        height: '16px',
      },
    },
    badgePosition: {
      'top-right': {
        top: '0',
        right: '0',
      },
      'top-left': {
        top: '0',
        left: '0',
      },
      'bottom-right': {
        bottom: '0',
        right: '0',
      },
      'bottom-left': {
        bottom: '0',
        left: '0',
      },
    },
    badgeStatus: {
      online: {
        backgroundColor: 'green',
      },
      offline: {
        backgroundColor: 'gray',
      },
    },
  },

  defaultVariants: {
    sizes: 'md',
    badgePosition: 'top-right',
    badgeStatus: 'online',
  },
});

export const Avatar = ({ badgePosition, badgeStatus, sizes, ...props }: AvatarProps) => {
  return (
    <AvatarRoot sizes={sizes} {...props}>
      {props.src ? <AvatarImage src={props.src} /> : <AvatarFallback>{props.alt}</AvatarFallback>}
      {badgeStatus && (
        <AvatarBadge badgeStatus={badgeStatus} badgePosition={badgePosition} sizes={sizes} />
      )}
    </AvatarRoot>
  );
};
