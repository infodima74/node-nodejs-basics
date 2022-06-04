import fs from 'fs';

const create = async () => {
  
  fs.writeFile('files/fresh.txt', 'I am fresh and young',(err)=>{
    fs.access('files/fresh.txt', function(err){
      if (err = true) {
        console.log("FS operation failed");
         } 
  });
 })
};
create();

