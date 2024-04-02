import * as Tesseract from 'tesseract.js';

export async function POST(request: any) {
    try {
        const data = await request.formData();
        const image = data.get('image');

        if (!image) {
            return new Response("No Image Provided", { status: 400 });
        }
        // Lee la imagen utilizando Tesseract.js
         Tesseract.recognize(
            image,
            'eng',
            { logger: m => console.log(m) },       
        ).then(({data:{text}})=>{
            console.log(text)
        })
        .catch(error => {
            console.error('Error al procesar la imagen con Tesseract.js:', error);
        });

        // Extrae el texto reconocido
        //const recognizedText = result.data.text;

        return new Response("recognizedText", { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response("Error Processing Request", { status: 500 });
    }
}

///////////////////////Google Cloud Vision API: