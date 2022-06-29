import multer, { MulterError } from "multer";
import { extname, resolve }  from 'path';

const aleatorio = () => Math.floor(Math.random() * 1000 + 10000);

export default {
    fileFilter: (req, file, cb) =>{
        if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg')
            return cb(new MulterError('Somente imagem com extensão PNG e JPEG'));
        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname,'..','..','uploads'));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        },
    }),
};