import React from "react";

import { Command } from "cmdk";
import { styled, keyframes } from "../stitches.config";
// import * as DialogPrimitive from "@radix-ui/react-dialog";
// interface multiselectProps {
//   options: string[];
// }
// { options }: multiselectProps
// const Dialog = DialogPrimitive.Root;

// const DialogPortal = ({
//   className,
//   ...props
// }: DialogPrimitive.DialogPortalProps) => (
//   <DialogPrimitive.Portal className={className} {...props} />
// );
// DialogPortal.displayName = DialogPrimitive.Portal.displayName;

// const DialogOverlay = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Overlay
//     ref={ref}
//     className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
//     {...props}
//   />
// ));
// DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// const DialogContent = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <DialogPortal>
//     <DialogOverlay />
//     <DialogPrimitive.Content
//       ref={ref}
//       className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"
//       {...props}
//     >
//       {children}
//       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
//         <span className="sr-only">Close</span>
//       </DialogPrimitive.Close>
//     </DialogPrimitive.Content>
//   </DialogPortal>
// ));
// DialogContent.displayName = DialogPrimitive.Content.displayName;

// interface CommandDialogProps extends DialogPrimitive.DialogProps {
//   children: React.ReactNode;
// }

// const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
//   return (
//     <Dialog {...props}>
//       <DialogContent className="overflow-hidden p-0 shadow-lg">
//         <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
//           {children}
//         </Command>
//       </DialogContent>
//     </Dialog>
//   );
// };

const Search = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        {/* {options.map((option) => (
            <Command.Item key={option} value={option}>
              {option}
            </Command.Item>
          ))} */}
        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
    // </Command>
    //   <Command.Dialog
    //     open={open}
    //     onOpenChange={setOpen}
    //     label="Global Command Menu"
    //   >
    //     <Command.Input placeholder="Type a command or search..."  />
    //     <Command.List>
    //       <Command.Empty>No results found.</Command.Empty>

    //       <Command.Group heading="Letters">
    //         <Command.Item>Calendar</Command.Item>
    //         <Command.Item>Fruit</Command.Item>
    //         <Command.Item>sky</Command.Item>
    //       </Command.Group>

    //     </Command.List>
    //   </Command.Dialog>
  );
};

export default Search;
