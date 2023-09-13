import React, { useState, useRef } from "react";
import { styled } from "@/stitches.config";
import { X, Check } from "@phosphor-icons/react";

const EditableTitleWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const TitleText = styled("h1", {
  fontFamily: "Poppins",
  fontSize: "1.5rem",
  fontWeight: 600,
  margin: 0,
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#007dbc",
    cursor: "pointer",
  },
});

const EditableContainer = styled("div", {
  display: "inline-block",
});

const EditableInput = styled("input", {
  fontFamily: "Poppins",
  fontSize: "1.5rem",
  fontWeight: 600,
  padding: "4px",
  margin: "0",
  border: "2px solid $primary",
  borderRadius: "8px",
  outline: "none",
  "&:focus": {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
});

const ButtonGroup = styled("div", {
  marginTop: "4px",
  padding: "4px",
  width: "96px",
  height: "48px",
  borderRadius: "12px",
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 8px 24px -6px rgba(0, 0, 0, 0.16)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  marginLeft: "auto",
  color: "$secondary-body-text",
});

const CheckWrapper = styled("div", {
  padding: "8px",
  "&:hover": {
    color: "$accent",
    borderRadius: "50%",
    cursor: "pointer",
  },
});

const XWrapper = styled("div", {
  padding: "8px",
  "&:hover": {
    color: "red",
    borderRadius: "50%",
    cursor: "pointer",
  },
});

const sizes = {
  sm: {
    fontSize: "1rem",
  },
  md: {
    fontSize: "1.5rem",
  },
  lg: {
    fontSize: "2rem",
  },
};

const EditableTitle = ({
  initialTitle,
  size = "md",
}: {
  initialTitle: string;
  size?: "sm" | "md" | "lg";
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <EditableTitleWrapper>
      {isEditing ? (
        <EditableContainer>
          <EditableInput
            type="text"
            value={title}
            onChange={handleInputChange}
            autoFocus
            ref={inputRef}
            css={sizes[size]}
          />
          <ButtonGroup>
            <CheckWrapper onClick={handleSaveClick}>
              <Check size={20} />
            </CheckWrapper>
            <XWrapper onClick={handleCancelClick}>
              <X size={20} />
            </XWrapper>
          </ButtonGroup>
        </EditableContainer>
      ) : (
        <>
          <TitleText onClick={handleTitleClick} css={sizes[size]}>
            {title}
          </TitleText>
        </>
      )}
    </EditableTitleWrapper>
  );
};

export { EditableTitle };
