import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "@/stitches.config";

type BadgePosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
type BadgeStatus = "online" | "offline";

type AvatarProps = {
  variant?: "circle" | "square";
  size: "md" | "xs" | "sm" | "lg" | "xl" | "2xl";
  badgePosition?: BadgePosition;
  badgeStatus?: BadgeStatus;
  src?: string;
  alt?: string;
} & React.ComponentProps<typeof AvatarPrimitive.Root>;

const AvatarRoot = styled(AvatarPrimitive.Root, {
  width: "40px", // Default width value
  height: "40px",
  // Default height value

  variants: {
    size: {
      xs: {
        width: "24px",
        height: "24px",
        fontSize: "10px",
      },
      sm: {
        width: "32px",
        height: "32px",
        fontSize: "12px",
      },
      md: {
        width: "40px",
        height: "40px",
        fontSize: "14px",
      },
      lg: {
        width: "48px",
        height: "48px",
        fontSize: "16px",
      },
      xl: {
        width: "56px",
        height: "56px",
        fontSize: "16px",
      },
      "2xl": {
        width: "64px",
        height: "64px",
        fontSize: "20px",
      },
    },
    variant: {
      circle: {
        borderRadius: "100%",
      },
      square: {
        borderRadius: "8px",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "circle",
  },
  fontFamily: "Poppins",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  userSelect: "none",
  border: "0.5px solid $border",
  position: "relative",
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  borderRadius: "inherit",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  border: "none",
  color: "black",
  lineHeight: 1,
  fontWeight: 500,
});

const AvatarBadge = styled("div", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "16px",
  height: "16px",
  position: "absolute",
  border: "2px solid $border",
  borderRadius: "100%",
  color: "white",
  fontSize: "10px",
  fontWeight: "bold",

  variants: {
    size: {
      xs: {
        width: "4px",
        height: "4px",
      },
      sm: {
        width: "8px",
        height: "8px",
      },
      md: {
        width: "8px",
        height: "8px",
      },
      lg: {
        width: "12px",
        height: "12px",
      },
      xl: {
        width: "12px",
        height: "12px",
      },
      "2xl": {
        width: "12px",
        height: "12px",
      },
    },
    badgePosition: {
      "top-right": {
        top: "0",
        right: "0",
      },
      "top-left": {
        top: "0",
        left: "0",
      },
      "bottom-right": {
        bottom: "0",
        right: "0",
      },
      "bottom-left": {
        bottom: "0",
        left: "0",
      },
    },
    badgeStatus: {
      online: {
        backgroundColor: "$limegreen",
      },
      offline: {
        backgroundColor: "gray",
      },
    },
  },

  defaultVariants: {
    size: "md",
    badgePosition: "top-right",
    badgeStatus: "online",
  },
});

const Avatar = ({
  badgePosition,
  badgeStatus,
  size,
  alt,
  ...props
}: AvatarProps) => {
  const altInitials = alt
    ?.split(" ")
    .map((name: string) => name[0])
    .join("");
  return (
    <AvatarRoot size={size} {...props} variant={props.variant}>
      {props.src ? (
        <AvatarImage src={props.src} />
      ) : (
        <AvatarFallback>{altInitials}</AvatarFallback>
      )}
      {badgeStatus && (
        <AvatarBadge
          badgeStatus={badgeStatus}
          badgePosition={badgePosition}
          size={size}
        />
      )}
    </AvatarRoot>
  );
};

export { Avatar, AvatarRoot, AvatarBadge, AvatarFallback, AvatarImage };
