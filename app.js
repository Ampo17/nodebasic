import express from "express";

const app = express();
app.use(express.json());

const users = ["Jani", "Anna","Bob","Cedrik"];

app.get("/users", (req,res)=>{
    res.status(200).json(users)
})

app.get("/users/:id", (req,res)=>{
    const id= req.params.id;
    res.status(200).json(users[id])
})

app.post("/users", (req,res)=>{
    const name = req.body.name;
    users.push(name);
    res.status(200).json(name);
})

app.put("/users/:id", (req,res)=>{
    const id= req.params.id;
    const name = req.body.name;
    users[id]=name
    res.status(200).json(name);
})

app.delete("/users/:id", (req,res)=>{
    const id = req.params.id;
    users.splice(id,1);
    res.status(200).json({message:"Sikeres törlés"})
})

app.listen(3000, ()=> {
    console.log("Müködik")
})