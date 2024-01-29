import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
const CommentSection = () => {
  const [positiveComments, setPositiveComments] = useState([]);

  const [newPositiveComment, setNewPositiveComment] = useState('');

  const handleAddPositiveComment = () => {
    if (newPositiveComment.trim() !== '') {
      setPositiveComments([...positiveComments, newPositiveComment]);
      setNewPositiveComment('');
    }
  };

  const renderCommentSection = (title, comment, setComment, handleAddComment) => (
    <Paper style={{ width: '100%', padding: 16, marginBottom: 16, boxShadow: 'none' }}>
      <Typography variant="h6">{title}</Typography>
      <TextField
        multiline
        rows={2}
        fullWidth
        margin="normal"
        variant="outlined"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="contained" style={{ backgroundColor: '#2c85de', marginTop: 8 }} onClick={handleAddComment}>
        Guardar
      </Button>
    </Paper>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16 }}>
      {renderCommentSection('', newPositiveComment, setNewPositiveComment, handleAddPositiveComment)}
    </div>
  );
};

export default CommentSection;
