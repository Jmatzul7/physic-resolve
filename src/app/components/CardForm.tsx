'use client'
import { useState } from 'react';
import { RingLoader } from 'react-spinners';
import axios from 'axios';

interface CardFormProps{
  handleResolvedResponse:any;
  handleLoading:any;
}

function CardForm({handleResolvedResponse, handleLoading}:CardFormProps){
  var url = "https://physic-resolved-b91b38c93cba.herokuapp.com"
  var url1 = "http://localhost:5000"
  const [file, setFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para mostrar errores
  const [loading, setLoading] = useState(false); // Estado de carga
  const [serverResponse, setServerResponse] = useState<string | null>(null); // Estado para almacenar la respuesta del servidor
  const [serverErrorResponse, setServerErrorResponse] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please select an image...');
      return;
    }

    setErrorMessage(null); // Limpiar mensajes de error anteriores
    setLoading(true); // Indicar la carga

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(`${url}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Server response:', response.data);

    if (response.data.status === 400) {
      console.log(response.data.error);
      setServerErrorResponse(response.data.error);
    } else if (response.data.status === 200) {
      if (response.data.extracted_text) {
        setServerResponse(response.data.extracted_text);
      } else {
        console.log('No text found in the image');
      }
    } else {
      console.log('Unexpected server response');
      setServerErrorResponse(response.data.error)
    }

    } catch (error:any) {
      console.log('Server responser:',error.message );
      console.error('Error to sent the image:' + error.message);
    }finally{
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // Mostrar vista previa de la imagen seleccionada
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleResponse = async () => {
    if (serverResponse && file) {
    handleResolvedResponse(null)
    handleLoading(true);
      try {
        // Enviar editedResponse a la otra API
        const formData = new FormData();
        formData.append('image', file); // Agrega la imagen al FormData
        formData.append('serverResponse', serverResponse); 
        console.log('Sending edited response:', serverResponse);

        const response = await axios.post(`${url}/resolve`,  formData,{
          headers: {
          'Content-Type': 'multipart/form-data'
          }
         } 
        );

        console.log('Server response:', response.data);
        handleResolvedResponse(response.data.resolved);
      } catch (error:any) {
        console.error('Error al enviar la respuesta editada:', error.message);
      }finally{
        handleLoading(false);
      }
    } else {
      console.log('No edited response to send');
    }

    
  };

  return (
    <div className="Flex mx-2">
      <div className="bg-gradient-to-r mt-4 bg-blue-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-white font-semibold mb-4">Upload an Image</h1>
        </div>
        <div className="bg-slate-800 shadow-md rounded-md px-8 mt-4 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="shadow appearance-none text-white border rounded w-full py-2 px-3 mb-2" 
            accept="image/*"
            onChange={handleFileChange}
           
          />
          <br />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mb-4 rounded-lg"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 pb-2 py-2 rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
          <br />
        </form>
        {loading && (
          <div className="flex justify-center items-center h-32">
            
            <RingLoader color="#36D7B7" />

            <p className="text-gray-500 ml-2">   Please wait, loading content</p>
          </div>
        )}
        {errorMessage && <p className=" bg-slate-200 m-2 p-2 text-red-600 text-lg rounded-md">{errorMessage}</p>}
        {serverErrorResponse && <p className=" bg-slate-200 m-2 p-2 text-red-600 text-lg rounded-md">{serverErrorResponse}</p>}

        {/* Mostrar la respuesta del servidor si está disponible */}
        {serverResponse && (
        <div>
          <br />
          <textarea
            value={serverResponse} // Mostrar editedResponse si está disponible, de lo contrario, mostrar serverResponse
            onChange={(e) => setServerResponse(e.target.value)}
            className="shadow appearance-none text-black border rounded w-full py-2 px-3 mb-2"
            rows={5} // ajusta esto según sea necesario
          />
          <br />
          <button
            onClick={handleResponse}
            className="bg-blue-500 text-white px-4 pb-2 py-2 rounded-md hover:bg-blue-600"
          >
            Resolve Problem
          </button>
        </div>
          
        )}
      </div>
    </div>
  );
};

export default CardForm;
