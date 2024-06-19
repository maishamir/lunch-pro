import express from "express";
import cors from "cors"
import fs from "fs"
const app = express();
const port = 8080;


app.use(express.json());
app.use(cors());

// function for reading data from data file
function readRestFile() {
    const restFile = fs.readFileSync('./data/restaurants.json');
    const restData = JSON.parse(restFile)
    return restData;
}

// endpoint to get all restaurants
app.get('/api/restaurants', (req, res) => {
    const rest = readRestFile();
    const strippedData = rest.map((rest) => {
        return {
            id: rest.id,
            name: rest.name,
            cuisine: rest.cuisine,
            slug: rest.slug
        }
    })
    res.json(strippedData)
})

// endpoint to get a specific restaurant
app.get('/api/restaurants/:id', (req, res) => {
    const restId = parseInt(req.params.id)
    const rest = readRestFile();
    const foundRestaurant = rest.find(rest => rest.id === restId )
    res.json(foundRestaurant)
})

// endpoint to get all restaurants of a specific cuisine
app.get('/api/cuisine/:slug', (req, res) => {
    const slug = req.params.slug
    const rest = readRestFile();
    const allRest = rest.filter(rest => rest.slug === slug);
    res.json(allRest)
})

app.listen(port, () => {
    console.log('Server started on port ' + port)
})