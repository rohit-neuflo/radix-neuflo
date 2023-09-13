import * as React from "react";
import { styled } from "@/stitches.config";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Title, HintText } from "../Input"; // Import the necessary type
import { Checkbox } from "../Checkbox";
import { Label } from "../Label";
import { Tabs, TabsList, TabItem, TabContent } from "../Tabs";
import { SearchBar } from "../SearchBar";

export type SelectOption = {
  type?: "checkbox";
  label: string;
  value: string;
};

export type TabOption = {
  multiple?: true;
  tabName: string;
  options: SelectOption[];
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  searchable?: boolean;
  options?: SelectOption[];
  tabs?: TabOption[];
  size?: "md" | "lg" | "xl";
  title?: string;
  hintText?: string;
  error?: string;
  disabled?: boolean;
} & (SingleSelectProps | MultipleSelectProps);

const Container = styled("div", {
  // position: "relative",
  minHeight: "1.5rem",
  display: "flex",
  alignItems: "center",
  fontFamily: "Poppins",
  outline: "1px solid $border",
  borderRadius: "8px",
  height: "40px",
  width: "100%",
  border: "none",
  boxSizing: " border-box",
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
  display: "flex",
  gap: "4px",
  [`& ${Label}`]: {
    backgroundColor: "$primary",
  },
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
  [`&.selected`]: {
    backgroundColor: "$secondary",
    "&:hover": {
      backgroundColor: "$primary-light",
      color: "$primary-button-text-forced-white",
    },
  },
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
  multiple,
  searchable,
  options,
  tabs,
  size = "md",
  value,
  error,
  onChange,
  title,
  hintText,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  // const dropdownRef = React.useRef(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const dropdownRef2 = React.useRef<HTMLDivElement | null>(null);
  const searchRef = React.useRef<HTMLInputElement | null>(null);

  const state = error ? "error" : "normal";

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options?.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
    );
  };

  React.useEffect(() => {
    const onClick = (e: any) => {
      if (e.target === searchRef.current) {
        setIsOpen(true);
      } else if (
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

  React.useEffect(() => {
    const handler = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e: any) => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setSearchValue("");
    // if (isOpen && searchRef.current) {
    //     searchRef.current.focus();
    // }
  }, [isOpen]);

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
          handleInputClick(e);
        }}
        inputState={state}
        inputSize={size}
      >
        <Value ref={dropdownRef2}>
          {multiple
            ? value.map((v) => (
                <Label key={v.value}>
                  {v.label}
                  <span
                    style={{ paddingLeft: "4px" }}
                    onClick={(e) => {
                      // e.stopPropagation();
                      selectOption(v);
                    }}
                  >
                    &times;
                  </span>
                </Label>
              ))
            : value?.label}
        </Value>
        <ChevronDownIcon />
        <Options className={isOpen ? "open" : ""}>
          {options ? (
            <>
              {searchable && (
                <SearchBar
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    // e.stopPropagation();
                  }}
                  style={{ marginLeft: "0.5rem", width: "99%" }}
                  ref={searchRef}
                />
              )}
              {getOptions()?.map((option: SelectOption) => (
                <MenuItem
                  size={size}
                  key={option.value}
                  onClick={(e) => {
                    selectOption(option);
                  }}
                  className={isOptionSelected(option) ? "selected" : ""}
                >
                  {option.label}
                </MenuItem>
              ))}
            </>
          ) : (
            tabs && (
              <Tabs defaultValue={tabs[0].tabName}>
                <TabsList>
                  {tabs.map((tab) => (
                    <TabItem key={tab.tabName} value={tab.tabName}>
                      {tab.tabName}
                    </TabItem>
                  ))}
                </TabsList>
                {tabs.map((tab) => (
                  <TabContent key={tab.tabName} value={tab.tabName}>
                    {tab.options.map((option) => (
                      <MenuItem key={option.value}>
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
            )
          )}
        </Options>
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
