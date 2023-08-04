import React, { ReactNode } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { styled, keyframes } from "../stitches.config";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  //   backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const RadixBannerContent = styled(AlertDialog.Content, {
//   backgroundColor: "white",
//   borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "90vw",
//   maxWidth: "500px",
//   maxHeight: "85vh",
//   padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '16px',
border: '1px solid #ccc',
borderRadius: '8px',
width:"768px"
});

const BannerTitle = styled(AlertDialog.Title, {
  fontFamily: "Poppins",
  fontWeight:"600",
  fontSize:"14px",
  margin: 0,
});

const BannerDescription = styled(AlertDialog.Description, {
  fontFamily: "Poppins",
  fontWeight:"400",
  fontSize:"14px",
  margin: 0,
  color:"$secondary-body-text"
});


const ContentDiv = styled('div',{
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
})

const ActionDiv = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const BannerButtonAction = styled('div',{
    padding: '8px 16px',
    // backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    // cursor: 'pointer',
    marginBottom: '8px',
})

const BannerIconAction = styled('div',{
    fontSize: '24px',
    color: '#007bff',
    cursor: 'pointer',
})



const BannerTrigger = styled(AlertDialog.Trigger);
const Banner = styled(AlertDialog.Root);

interface BannerProps {
  title: string;
  description: string;
  actionType: "button" | "icon";
  action: ReactNode[];
}

function BannerContent({
  title,
  description,
  actionType,
  action,
}: BannerProps) {
    return(
     <AlertDialog.Portal>
        <AlertDialogOverlay/>
    <RadixBannerContent>

      <AlertDialogOverlay/>
    <ContentDiv>
    <BannerTitle>{title}</BannerTitle>
    <BannerDescription>{description}</BannerDescription>
    </ContentDiv>
    <ActionDiv>
    {actionType === 'button' && action.length > 0 ? (
          action.map((action, index) => (
            <BannerButtonAction key={index}>{action}</BannerButtonAction>
          ))
        ) : (
          actionType === 'icon' && <BannerIconAction>{action}</BannerIconAction>
        )}
    </ActionDiv>
  </RadixBannerContent>
  </AlertDialog.Portal>  
    )
}

export { Banner, BannerTrigger, BannerContent };
