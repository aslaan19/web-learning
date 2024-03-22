// Formlist.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Formlist({ additem }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    if (!text.trim()) return; // Ignore empty submissions
    additem(text);
    setText(''); // Clear the input after submission
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Task
      </Button>
    </Box>
  );
}
