import React, { useCallback } from 'react';
 // Puedes cambiar este icono según tus preferencias
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf, .doc, .docx', // Tipos de archivo permitidos
    multiple: false, // Permitir solo un archivo a la vez
  });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Arrastra y suelta un archivo aquí o haz clic para seleccionar uno</p>
      <FiFile size={40} style={{ color: '#007bff' }} />
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #007bff',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUpload;
