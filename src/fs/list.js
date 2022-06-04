import fs from 'fs';
import path from 'path';
const put = path.join('files');

export const list = async () => {
    fs.readdir(put, function(err, items) {
        console.log(items);
    if (err){
        console.log('FS operation failed');
    }
      
    });
};
list()