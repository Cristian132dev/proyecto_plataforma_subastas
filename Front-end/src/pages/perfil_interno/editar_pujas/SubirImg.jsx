import axios from "axios";
function SubirImg() {
   const image = { name: null, blob: null }; // usa useState para capturar los datos
   const { file: inputFile, send: btnSend } = document.forms[0]; // capturar las referencias de los botones y el input file

   const getRandom = () => Math.floor(Math.random() * 1001);
   const imageTypes = ["png", "jpg", "jpeg"].map(type => "image/" + type);

   const generateFileId = ({ size, lastModified }) => { // genera un nombre unico al archivo, recibe como parametro el evente File que sucede cuando se sube un archivo atraves del input file
      const items = [size, lastModified, Date.now(), getRandom()].map(data => data.toString(36));
      items.push(crypto.randomUUID());
      return items.join("").replaceAll("-", "");
   };

   const toggleBtn = event => { // para habilitar o desabilitar el boton que envia la solicitud de subir la imagen a imgBB
      const file = event.target.files[0];
      console.log(file);
      btnSend.disabled = file === undefined;
      if (btnSend.disabled) return;
      btnSend.disabled = !imageTypes.includes(file.type);
      if (btnSend.disabled) return;
      image.blob = file;
      btnSend.disabled = false;
      image.name = generateFileId(file);
   };

   const prepareImage = ({ name, blob }) => { // prepara el contenido de la solicitud, en este caso es formData pues enviaremos un objeto de tipo File. al igual que JSON, formData es otra estructura empleada para enviar datos en el content
      try {
         const formData = new FormData();
         formData.append("name", name);
         formData.append("image", blob);
         return formData;
      } catch (error) {
         throw error;
      }
   };

   const uploadImageToImgbb = async ({ url, key }) => { // este metodo es el que envia la solicitud y por ende sube la imagen, headers es la cabecera del contenido y en este caso es multipart/form-data
      try {
         const URL = `${url}?key=${key}`; // url de la API y se envia como valor atraves de la url la llave maestra podriamos decir, bajo la clave de key y su valor es un string similar a un token
         const formData = prepareImage(image);
         const config = { headers: { Accept: "application/json", "content-type": "multipart/form-data" } };
         return await axios.post(URL, formData, config); // mandamos la solicitud atraves de post ya que vamos de cierto modo a insertar una imagen en nuestra cuenta imgBB
      } catch (error) {
         throw error;
      }
   };

   const sendImage = async () => {
      try {
         const imgbb = {
            url: "https://api.imgbb.com/1/upload", // url brindada por la API de imgBB
            key: "21613c981f1d4f08f68a0a6ea4bfc7aa" // api key generada para el usuario de la cuenta
         };
         const response = await uploadImageToImgbb(imgbb);
         console.log(response); // respuesta de la solicitud
         console.log(response.data.data.url); // accesso a la URL de la imagen que se subio al servidor
         alert("Imagen subida al servidor: " + response.data.data.url) // notificación
         

      } catch (error) {
         console.log(error);
      }
   };

   inputFile.addEventListener("change", toggleBtn);
   btnSend.addEventListener("click", sendImage);

   return (
      <div></div>
   )
}

export default SubirImg;