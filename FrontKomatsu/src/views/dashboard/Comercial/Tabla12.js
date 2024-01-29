import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CommentSection = () => {
  const [positiveComments, setPositiveComments] = useState([]);
  const [negativeComments, setNegativeComments] = useState([]);
  const [otherComments, setOtherComments] = useState([]);

  const [newPositiveComment, setNewPositiveComment] = useState('');
  const [newNegativeComment, setNewNegativeComment] = useState('');
  const [newOtherComment, setNewOtherComment] = useState('');

  const handleAddPositiveComment = () => {
    if (newPositiveComment.trim() !== '') {
      setPositiveComments([...positiveComments, newPositiveComment]);
      setNewPositiveComment('');
    }
  };

  const handleAddNegativeComment = () => {
    if (newNegativeComment.trim() !== '') {
      setNegativeComments([...negativeComments, newNegativeComment]);
      setNewNegativeComment('');
    }
  };

  const handleAddOtherComment = () => {
    if (newOtherComment.trim() !== '') {
      setOtherComments([...otherComments, newOtherComment]);
      setNewOtherComment('');
    }
  };

  const allComments = [
    ...positiveComments.map((comment, index) => ({ id: `positive${index + 1}`, comentario: comment, type: 'Positivo' })),
    ...negativeComments.map((comment, index) => ({ id: `negative${index + 1}`, comentario: comment, type: 'Negativo' })),
    ...otherComments.map((comment, index) => ({ id: `other${index + 1}`, comentario: comment, type: 'Otros' })),
  ];

  const columns = [{ field: 'comentario', headerName: 'Comentario', flex: 1 }];

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
      <Button
        variant="contained"
        style={{ backgroundColor: '#2c85de', marginTop: 8 }}
        onClick={handleAddComment}
      >
        Guardar
      </Button>
    </Paper>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16 }}>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 16, boxShadow: 'none' }}>
        <DataGrid rows={allComments} columns={columns} pageSize={5} />
      </Paper>

      {renderCommentSection('Aspectos Positivos', newPositiveComment, setNewPositiveComment, handleAddPositiveComment)}
      {renderCommentSection('Aspectos Negativos', newNegativeComment, setNewNegativeComment, handleAddNegativeComment)}
      {renderCommentSection('Otros Comentarios', newOtherComment, setNewOtherComment, handleAddOtherComment)}
    </div>
  );
};

export default CommentSection;
