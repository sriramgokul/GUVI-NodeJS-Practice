import express from "express";

const app = express();

// Middle Wares

app.use(express.json())

//Listening to the server

app.listen(9000, ()=>console.log("Server has Started in LocalHost:9000"));

// Get Info

app.get("/home",(req,res)=>{
    res.send({name:"SRIRAM GOKUL"})
})

let resturants = [
    {
        id:"1",
        name: "KFC",
        special: "Crispy Chicken",
    },
    {
        id:"2",
        name: "A2B",
        special: "Sweets",
    }
]

app.get("/res",(req,res)=>{
    res.send(resturants);
})


// Post Info

app.post("/add/res",(req,res)=>{
    const newRestuarnts = {...req.body, id: (resturants.length + 1).toString()};
    resturants = [...resturants,newRestuarnts];
    res.send(resturants);
})

// Put request

app.put("/edit/res/:id",(req,res)=>{
    const {id} = req.params;
    const findRes = resturants.find((res)=>res.id === id);
    findRes.special = req.body.special;
    res.send(resturants);
})

// Delete request

app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params;
    const newSet = resturants.filter((res)=>res.id != id);
    resturants = [...newSet];
    res.send("Successfully Deleted");
})