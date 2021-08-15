const express = require("express");
const artiName = require("../models/artiName");
const router =  new express.Router();
router.use(express.json());


router.post("/artiName", async (req, res) => {
    try {
        const user = new artiName(req.body);
        const userData = await user.save();
        res.status(201).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/artiName", async (req, res) => {
    try {
        const studentsData = await artiName.find();
        res.send(studentsData);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/artiName/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await artiName.findById(_id);
        res.send(studentData);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch("/artiName/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await artiName.findByIdAndUpdate(_id ,req.body ,{new :true}) ;
        res.status(404).send(updateStudent);
    } catch (error) {
        res.send(error);
    }
})

router.delete("/artiName/:id",async(req,res)=>{
    try {
        const id = req.params.id ;
        const deleteStudent = await artiName.findByIdAndDelete(id);
        if (!id) {
            return res.status(400).send();
        } 
        res.send("Deleted");
    } catch (error) {
        res.send(error);
    }
})


module.exports=router;