import sizeOf from 'image-size';
import path from 'path';

const __dirname = path.resolve();

// Función para obtener las dimensiones de la imagen
export function getImageDimensions(imagePath) {
    return sizeOf(path.join(__dirname + '/public/', imagePath));
}