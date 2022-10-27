const express = require("express");
const dotenv = require("dotenv");
const data = require("./data/notes");

const app = express();
app.get('/', (req,res) => {
    res.send("api called");
})
app.get('/api/notes', (req,res) => {
    res.json(data);
})
app.get('/api/notes/:id', (req,res) => {
    const note = data.find(note => note._id === req.params.id);
    res.send(note);
})

dotenv.config();
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`app started listening to port ${PORT}`));