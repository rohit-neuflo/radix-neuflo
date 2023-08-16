import { styled } from "../stitches.config";
import { Textlabel } from "./Textlabel";

export const MenuItem = styled("div", {

  width: "100%",
  display: "flex",
  gap: "8px",
  variants:{
    size:{
      md:{
        height:"24px",
        padding:"8px"
      },
      lg:{
        height:"48px",
        padding:"12px"
      },
      xl:{
        height:"56px",
        padding:"8px 12px"
      },
      '2xl':{
        height:"64px",
        padding:"12px"
      }
    },
    variant:{
        default:{

        },
        ghost:{

        }
    }
  },
  [`& > ${Textlabel}`]: {
    flexGrow: 1,
  },
  defaultVariants:{
    size:"md",
    variant:"default"
  }
});
