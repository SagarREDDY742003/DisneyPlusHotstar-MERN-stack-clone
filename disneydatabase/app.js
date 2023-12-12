let express = require('express');
let app = express();
let port = 9121;
let {ObjectId} = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect,getData,postData,deleteData,updateData} = require('./Controller/dbController');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("Hiii From Express")
})

// movies/tv/sports
app.get('/videotype', async(req,res) =>{
    let query = {};
    if(req.query.category_id){
        query = {
            "category_id":Number(req.query.category_id)
        } 
    }
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output)
}
)

// get all movie types
app.get('/movietype', async(req,res) =>{
    let query = {};
    if(req.query.typeid){
        query = {
            "type.cat_id":Number(req.query.typeid)
        } 
    }
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output)
}
)

//details of movies
app.get('/details/:id', async(req,res) => {
    let id = Number(req.params.id);
    let collection = "movies";
    let query = {"id":id}
    let output = await getData(collection,query);
    res.send(output)
})

//crousel details
app.get('/crouseldetails', async(req,res) => {
    let collection = "crousel";
    let query = {}
    let output = await getData(collection,query);
    res.send(output)
})

//get all data
app.get('/data', async(req,res) => {
    let collection = "movies";
    let query = {}
    let output = await getData(collection,query);
    res.send(output)
})
app.get('/data/:name', async(req,res) => {
    let name = (req.params.name);
    let collection = "movies";
    let query = {"name":name}
    let output = await getData(collection,query);
    res.send(output)
})

app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})