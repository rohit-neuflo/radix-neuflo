import React from "react";
import { styled } from "../stitches.config";
import { IconProps } from "@phosphor-icons/react";

const HeaderBase = styled("div", {
  fontFamily: "Poppins",
  fontSize:"18px",
  fontWeight:"600",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 24px",
//   height:"64px",
  width: "300px",
  borderBottom: "none",
  flexDirection: "row",
//   border:"1px solid red",
  variants: {
    divider: {
      true: {
        borderBottom: "1px solid $border",
      },
    },
    iconPosition: {
      left: {
        flexDirection: "row",
      },
      right: {
        flexDirection: "row-reverse",
      },
    },
  },
});

const Title = styled("div", {
  fontSize: "1.25rem",
  margin: 0,
});

const IconWrapper = styled("div", {
  display: "flex",
  gap: "8px",
});

type HeaderProps = {
  title?: string;
  iconsLeft?: { Icon: React.ComponentType<IconProps>; onClick?: () => void }[];
  iconsRight?: { Icon: React.ComponentType<IconProps>; onClick?: () => void }[];
  divider?: boolean;
  iconPosition?: "left" | "right";
};

const Header: React.FC<HeaderProps> = ({
  title,
  iconsLeft,
  iconsRight,
  divider,
  iconPosition,
}) => {
  return (
    <HeaderBase divider={divider} iconPosition={iconPosition}>
      {iconsLeft && (
        <IconWrapper>
          {iconsLeft.map((icon, index) => (
            <icon.Icon key={index} size={16} onClick={icon.onClick} />
          ))}
        </IconWrapper>
      )}
      {title && <Title>{title}</Title>}
      {iconsRight && (
        <IconWrapper>
          {iconsRight.map((icon, index) => (
            <icon.Icon key={index} size={16} onClick={icon.onClick} />
          ))}
        </IconWrapper>
      )}
    </HeaderBase>
  );
};

export { Header };
