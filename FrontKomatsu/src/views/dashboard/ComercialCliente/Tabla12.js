import React, { useState } from 'react';

const CommentSection = () => {
  // Estado para almacenar los comentarios
  const [comments, setComments] = useState([]);
  
  // Estado para el nuevo comentario
  const [newComment, setNewComment] = useState('');

  // Función para manejar la adición de un nuevo comentario
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      {/* Sección 1: Mostrar comentarios existentes */}
      <div>
        <h5> </h5>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>

      {/* Sección 2: Agregar un nuevo comentario */}
      <div>
        <h7>Aspectos Positivos</h7>
        <textarea
          rows="2"
          cols="150"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        
      </div>

      {/* Sección 2: Agregar un nuevo comentario */}
      <div>
        <h7>Aspectos Negativos</h7>
        <textarea
          rows="2"
          cols="150"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        
      </div>

      {/* Sección 2: Agregar un nuevo comentario */}
      <div>
        <h7>Otros Comentarios</h7>
        <textarea
          rows="2"
          cols="150"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Guardar</button>
      </div>

      {/* Sección 3: Lógica principal de la aplicación */}
      {/* Puedes agregar más lógica según sea necesario */}
      <div>
        {/* Otras funcionalidades o lógica aquí */}
      </div>
    </div>
  );
};

export default CommentSection;
