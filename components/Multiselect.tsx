import React, { useState, ReactNode } from "react";
import { Tabs, TabItem, TabsList, TabContent } from "./Tabs";
import { Portal } from "@radix-ui/react-portal";
import {Checkbox} from "./Checkbox"; // Import your Checkbox component here

type MultiSelectProps = {
  children: ReactNode;
};

const MultiSelect: React.FC<MultiSelectProps> = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelected) => [...prevSelected, option]);
    setIsOpen(false);
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item !== option)
    );
  };

  const handleCloseDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="multi-select">
      <button onClick={() => setIsOpen(!isOpen)}>Open Dropdown</button>
      {isOpen && (
        <Portal>
          <div className="dropdown-content">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return (<>
                {/* //   <TabContent value={child.props.value} key={child.props.value}> */}
                    {React.cloneElement(child.props.children, {
                      handleOptionClick,
                    })}
                  {/* </TabContent> */}
                  </>
                );
              }
              return null;
            })}
            <button onClick={handleCloseDropdown}>Done</button>
          </div>
        </Portal>
      )}
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <div key={option} className="selected-option">
            {option}
            <button onClick={() => handleRemoveOption(option)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MultiSelect };
