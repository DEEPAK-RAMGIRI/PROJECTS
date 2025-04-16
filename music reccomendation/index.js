
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async(req,res) => {
    res.render("index.ejs");
})


app.post('/post-secret', async (req, res) => {

    try{
        const search = req.body["recommend-me"];
        console.log(search);
        const music = {
            name: 'Chill Vibes Playlist',
            image: 'https://th.bing.com/th/id/OIP.BcS6kuJE8bgzYeJ0uE2-nAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
          };
        res.render("index.ejs",{music});
    }catch(error){
        console.log("eror")
        res.status(500);
    }
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`I'am Listening from port: ${port}`)
});


  