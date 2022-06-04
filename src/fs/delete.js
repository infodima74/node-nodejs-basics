import fs from 'fs';

export const remove = async () => {
    fs.access('files/fileToRemove.txt', function(error){
        if (error) {
            console.log('FS operation failed');
        } else {
            fs.unlink('files/fileToRemove.txt', (err) => {
                if(err) throw err;
                console.log('File deleted successfully!');
            });
        }
    })
  };

remove();