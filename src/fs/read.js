import fs from 'fs';
export const read = async () => {

            const readableStream = fs.createReadStream('fileToRead.txt');
    
            readableStream.on('error', function (error) {
                console.log("FS operation failed");
            })
            readableStream.on('data', (chunk) => {
                console.log(chunk.toString());
            })
};
    
    
read();