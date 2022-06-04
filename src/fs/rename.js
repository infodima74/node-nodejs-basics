import fs from 'fs';
import path from 'path';
const put = path.join('files/wrongFilename.txt');
const putCopy = path.join('files/properFilename.md');
export const rename = async () => {
    fs.access(put, function(error){
        if (error) {
            console.log("FS operation failed");
            fs.access(putCopy, function(data){
                if(data=true){
                console.log("FS operation failed");}
            });
        } else {
            fs.rename(put,putCopy, (err) => {
                if(err) throw err;
                console.log('File renamed successfully!');
            });
        }
    });
};
rename()