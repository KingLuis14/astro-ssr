import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const __dirname = path.resolve();

const inputDir = path.join(__dirname, 'public/originals'); // Ruta a las imágenes originales
const outputDir = path.join(__dirname, 'public/img'); // Ruta donde se guardarán las imágenes generadas y originales

// Crear el directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Función para generar imágenes y moverlas a la carpeta img
async function generateAndMoveImages() {
    try {
        const files = await fs.promises.readdir(inputDir);

        for (const file of files) {
            const inputPath = path.join(inputDir, file);
            const outputPlaceholderPath = path.join(outputDir, `placeholder_${file}`);
            const outputOriginalPath = path.join(outputDir, file);

            try {
                // Verificar si es un archivo (no directorio)
                const stat = await fs.promises.stat(inputPath);
                if (stat.isFile()) {
                    // Generar imagen borrosa
                    await sharp(inputPath)
                        .resize(20) // Redimensionar a un tamaño pequeño
                        .blur(3) // Aplicar desenfoque
                        .toFile(outputPlaceholderPath);

                    console.log(`Placeholder generado para ${file}`);

                    // Copiar la imagen original a public/img
                    await fs.promises.copyFile(inputPath, outputOriginalPath);
                    console.log(`Imagen original copiada a public/img: ${file}`);

                    // Eliminar la imagen original de public/originals
                    
                }
            } catch (err) {
                console.error(`Error al procesar ${file}:`, err);
            }
        }

        console.log('Proceso completado.');
    } catch (err) {
        console.error('Error al procesar las imágenes:', err);
    }
}

// Llamar a la función para generar y mover imágenes
generateAndMoveImages();
