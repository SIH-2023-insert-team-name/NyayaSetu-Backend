import grid from 'gridfs-stream';
import mongoose from 'mongoose';
// import multer from 'multer';

const url = 'https://nyayasetu.com';

// Multer setup for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = (request, response) => {
    if (!request.file) 
        return response.status(404).json("File not found");
    
    const writeStream=gridfsBucket.openUploadStream(request.file.originalname)   //
    writeStream.end(request.file.buffer)
    const fileUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(fileUrl);    
}

export const getFile = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });

        if (!file) {
            return response.status(404).json("File not found");
        }

        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

// export const uploadFileMiddleware = upload.single('file');
