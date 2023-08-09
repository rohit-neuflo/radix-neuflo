// "use client";
// import React from "react";
// import { Banner, BannerTrigger, BannerContent ,BannerCancel} from "@/components/Banner";
// import {
//   Modal,
//   ModalTrigger,
//   ModalContainer,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
// } from "../../components/Modal";
// import { Button } from "@/components/Button";
// import { EyeClosed } from "@phosphor-icons/react";
// import {
//   Snackbar,
//   SnackbarProvider,
//   SnackbarAction,
// } from "@/components/Snackbar";
// import { Tabs, TabsList, TabItem, TabContent } from "../../components/Tabs";

// function Demo() {
//   const action = [
//     <BannerCancel asChild>
//       <Button size="sm" variant="ghost">
//         Discard
//       </Button>
//     </BannerCancel>,
//     <Button size="sm" variant="secondary">
//       Confirm
//     </Button>,
//   ];
//   const [open1, setOpen1] = React.useState(false);
//   return (
//     <div>
//       <Tabs defaultValue="1">
//         <TabsList>
//           <TabItem value="1">$link</TabItem>
//           <TabItem value="2">$link</TabItem>
//         </TabsList>
//         <TabContent value="1">content 1</TabContent>
//         <TabContent value="2">content 2</TabContent>
//       </Tabs>
      

//       <Banner>
//         <BannerTrigger asChild>
//           <Button>Banner</Button>
//         </BannerTrigger>
//         <BannerContent
//           title="Merged Pull Request"
//           description="Pull request #9999 merged after a successful build"
//           actionType="button"
//           action={action}
//         />
//       </Banner>
//       <Modal>
//         <ModalTrigger asChild>
//           <Button>open modal</Button>
//         </ModalTrigger>
//         <ModalContainer>
//           <ModalHeader title="Title" />
//           <ModalContent>
//             <form
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "0.5rem",
//                 justifyContent: "center",
//               }}
//             >
//               <input />
//               <input type="number" />
//             </form>
//           </ModalContent>
//           <ModalFooter>
//             <Button variant="ghost" size="md">
//               Label
//             </Button>
//           </ModalFooter>
//         </ModalContainer>
//       </Modal>
//       <SnackbarProvider swipeDirection="left">
//         <Button onClick={() => setOpen1(!open1)}>Snackbar1</Button>
//         <Snackbar
//           description="Something went wrong!"
//           open={open1}
//           onOpenChange={setOpen1}
//         >
//           <SnackbarAction asChild altText="button">
//             <Button>Button</Button>
//           </SnackbarAction>
//         </Snackbar>
//       </SnackbarProvider>


//     </div>
//   );
// }

// export default Demo;
'use client'
import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';

const SliderDemo = () => (
  <form>
    <SliderRoot defaultValue={[50]} max={2} step={1}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </SliderRoot>
  </form>
);

const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,
  height: 20,
});

const SliderTrack = styled(Slider.Track, {
  backgroundColor: blackA.blackA10,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: 3,
});

const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '9999px',
  height: '100%',
});

const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { outline: 'none', boxShadow: `0 0 0 5px ${blackA.blackA8}` },
});

export default SliderDemo;