import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from "../stitches.config";

export const AvatarRoot = styled(AvatarPrimitive.Root, {
    variants: {
        sizes: {
            xs:{
                width: "24px",
                height: "24px",
            },
            sm:{
                width: "32px",
                height: "32px",
            },
            md:{
                height: "40px",
                width: "40px",
            },
            lg:{
                height: "48px",
                width: "48px",
            },
            xl:{
                height: "56px",
                width: "56px",
            },
            '2xl':{
                height: "64px",
                width: "64px",
            },
        }
    },
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: '100%',
    backgroundColor:'black',
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
    color: 'white',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
  });

 