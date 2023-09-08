import * as React from "react";
import { styled } from "../stitches.config";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Title, HintText } from "./Input";
import { SelectHTMLAttributes } from "react"; // Import the necessary type
import { Checkbox } from "./Checkbox";
import { Tabs, TabsList, TabItem, TabContent } from "./Tabs";
// export type SelectOption = {
//   label: string;
//   value: string;
// };

export type SelectOption = {
  type?: "checkbox";
  label: string;
  value: string;
};

export type TabOption = {
  tabName: string;
  options: SelectOption[];
};

//   type MultipleSelectProps = {
//     multiple: true
//     value: SelectOption[]
//     onChange: (value: SelectOption[]) => void
//   }

//   type SingleSelectProps = {
//     multiple?: false
//     value?: SelectOption
//     onChange: (value: SelectOption | undefined) => void
//   }

type SelectProps = {
  options?: SelectOption[];
  tabs?: TabOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  title?: string;
  hintText?: string;
  error?: string;
  disabled?: boolean;
};
//   } & (SingleSelectProps | MultipleSelectProps)
const Container = styled("div", {
  // position: "relative",
  minHeight: "1.5rem",
  display: "flex",
  alignItems: "center",
  fontFamily: "Poppins",
  padding: "12px 16px",
  outline: "1px solid $border",
  borderRadius: "8px",
  width: "99%",
  border: "none",
  variants: {
    disabled: {
      true: {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.5",
      },
      false: {},
    },
    inputState: {
      error: {
        outline: "2px solid red",
      },
      normal: {},
    },
    inputSize: {
      md: {
        padding: "8px 16px",
      },
      lg: {
        padding: "12px 16px",
      },
      xl: {
        padding: "16px 16px",
      },
    },
  },
  "&:hover": {
    outline: "2px solid $primary",
  },
  "&:focus": {
    border: "none",
    outline: "2px solid $primary",
  },
  defaultVariants: {
    inputState: "normal",
    inputSize: "md",
  },
});

const Value = styled("span", {
  flexGrow: "1",
});

const Options = styled("div", {
  position: "absolute",
  cursor: "pointer",
  backgroundColor: "$surfaceColor",
  margin: "0",
  padding: "0",
  listStyle: "none",
  maxHeight: "15rem",
  overflowY: "auto",
  width: "100%",
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 8px 24px -6px rgba(0, 0, 0, 0.16)",
  left: "0",
  top: "calc(100% + 0.25rem)",
  zIndex: "100",
  display: "none",
  "&.open": {
    display: "block",
  },
});

const MenuItem = styled("div", {
  "&:hover": { backgroundColor: "$secondary" },
  variants: {
    size: {
      md: {
        padding: "8px",
      },
      lg: {
        padding: "12px",
      },
      xl: {
        padding: "8px 12px",
      },
      "2xl": {
        padding: "12px",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Select({
  options,
  tabs,
  value,
  error,
  onChange,
  title,
  hintText,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const state = error ? "error" : "normal";

  function selectOption(option: SelectOption) {
    onChange(option);
  }

  const dropdownRef = React.useRef(null);
  const dropdownRef2 = React.useRef(null);

  React.useEffect(() => {
    const onClick = (e: any) => {
      if (
        e.target !== dropdownRef.current &&
        e.target !== dropdownRef2.current
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.addEventListener("click", onClick);
    };
  });
  if (options && tabs) {
    throw new Error(
      "You can't pass both 'options' and 'tabs' props at the same time."
    );
  }
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "100%",
      }}
    >
      {title && <Title disabled={disabled ? "true" : "false"}>{title}</Title>}
      <Container
        disabled={disabled ? "true" : "false"}
        ref={dropdownRef}
        onBlur={() => setIsOpen(false)}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        inputState={state}
      >
        <Value ref={dropdownRef2}>{value?.label}</Value>
        <ChevronDownIcon style={{ translate: "0 25%" }} />
        <Options className={isOpen ? "open" : ""}>
          {options
            ? options &&
              options.map((option) => (
                <MenuItem
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(option);
                  }}
                >
                  {option.label}
                </MenuItem>
              ))
            : tabs && (
                <Tabs defaultValue={tabs[0].tabName}>
                  <TabsList>
                    {tabs.map((tab) => (
                      <TabItem value={tab.tabName}>{tab.tabName}</TabItem>
                    ))}
                  </TabsList>
                  {tabs.map((tab) => (
                    <TabContent value={tab.tabName}>
                      {tab.options.map((option) => (
                        <MenuItem>
                          <Checkbox
                            id={option.value}
                            label={option.label}
                            labelSide="left"
                          />
                        </MenuItem>
                      ))}
                    </TabContent>
                  ))}
                </Tabs>
              )}
        </Options>
        {/* <Options className={isOpen ? "open" : ""}>
           { if(options) {
          options.map((option) => {
              return(
                <MenuItem
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                }}
                >
                  {option.label}
                </MenuItem>
              );
              })
           }
            else if(tabs) {
              tabs.map((tab) => {
                return(
                  
                  <MenuItem></MenuItem>
                )
              })}
           
          }
        </Options> */}
      </Container>
      {(hintText || error) && (
        <HintText disabled={disabled ? "true" : "false"} inputState={state}>
          {error ? error : hintText}
        </HintText>
      )}
    </div>
  );
}

export { Select };
