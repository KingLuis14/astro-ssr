import sizeOf from 'image-size';
import path from 'path';

const __dirname = path.resolve();

export function getImageDimensions(imagePath) {
    return sizeOf(path.join(__dirname + '/public/', imagePath));
}