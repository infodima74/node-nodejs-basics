import fs from 'fs';
import path from 'path';
const put = path.join('files');
const putCopy = path.join('files_copy');

export const copy = async () => {
   
    fs.access(putCopy, function(error){
        if (error) {
            fs.mkdir(putCopy, {recursive: true}, (error) => {
                if (error) {
                  return console.error(error.message);
                } else {
                  fs.readdir(put, {withFileTypes: true}, function (error, dates) {
                    if (error) {
                      return console.log('FS operation failed');
                    }
                    dates.forEach((data) => {
                      if (data.isFile()) {
                        fs.copyFile(path.join(put, data.name), path.join(putCopy, data.name), (error) => {
                          if (error) {
            
                            return console.error(error.message);
                          }
                        });
                      }
                    });
                  });
                }
              })
        } else {
            console.log('FS operation failed');
        }
    });

};
copy();