import qr from "qr-image";
import fs from "fs";
import inquirer from 'inquirer';

inquirer
  .prompt([
  { 
   message :"ENTER THE URL CORRECTLY: ",
   name : "URL",
},
  ])
  .then((answers) => {
    console.log(answers);
    const url =answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr-image.png'));
   //to write in text in a FILE
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });