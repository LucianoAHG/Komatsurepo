import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextareaAutosize,
  Button,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const sampleTableData = [
    { id: '18965378-0', name: 'John Doe', age: '4000000', Aprobado: 'Aprobado '},
    
    // Add more rows as needed
  ];

  return (
    <Box
      bgcolor="white"
      border="5px solid white"
      borderRadius="8px"
      padding="16px"
      boxShadow="0 6px 8px rgba(0, 0, 0, 0.1)"
    >
      <Typography variant="h8" gutterBottom>
        Comentario del Giro
      </Typography>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index}>{comment}</ListItem>
        ))}
      </List>
      <TableContainer component={Paper} style={{ marginTop: '16px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rut</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Aprobado o Rechazado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleTableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          rowsMin={4}
          placeholder="Añade un comentario..."
          value={newComment}
          onChange={handleInputChange}
          style={{ width: '100%', marginBottom: '8px', marginTop: '16px' }}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Publicar comentario
        </Button>
      </form>
    </Box>
  );
};

export default CommentBox;
