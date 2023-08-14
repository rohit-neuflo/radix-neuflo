import React, { useState } from 'react';
import { styled } from '../stitches.config';
import { Eraser } from '@phosphor-icons/react';
import { Input } from './Input';
import {Button} from './Button'
const EditableTitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const TitleText = styled('h1', {
  fontFamily:"Poppins",  
  fontSize: '1.5rem',
  fontWeight: 600,
  marginRight: '8px',
});



const EditableTitle = ({ initialTitle }:{initialTitle:string}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can implement the save logic here, e.g., update the title in a database
  };

  return (
    <EditableTitleWrapper>
      {isEditing ? (
        <Input type="text" value={title} onChange={handleTitleChange} />
      ) : (
        <TitleText>{title}</TitleText>
      )}
      <Button onClick={handleEditClick} variant="stroke"> 
        <Eraser/>
        </Button>
      {isEditing && (
        <Button onClick={handleSaveClick}>Save</Button>
      )}
    </EditableTitleWrapper>
  );
};

export default EditableTitle;
