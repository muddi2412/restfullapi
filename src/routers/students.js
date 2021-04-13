const express = require('express');
const router = new express.Router();
const Student = require('../models/students');


// create a new students

// router.post("/students",(req,res)=>{
//     // console.log(req.body);
//     // const user = new Student(req.body);

//     // user.save().then(()=>{
//     //     res.status(201).send(user);
//     // }).catch((e)=>{
//     //     res.status(400).send(e);
//     // })  
//     // Above is promise method
// })

router.post("/students",async(req,res)=>{
    try{
    const user = new Student(req.body);
    const createUser =  await user.save();
    res.status(201).send(createUser);
    }catch(e){ res.status(400).send(e);}
})

router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    }catch(e){res.status(400).send(e)}
})

// indivial student data 
router.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.status(200).send(studentData)
        }
    }catch(e){res.status(500).send(e)}
})

// Update the student by id 
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudentData = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(!updateStudentData){
            return res.status(404).send();
        }else{
            res.status(200).send(updateStudentData)
        }
    }catch(e){res.status(500).send(e)}
})

// delete student Data 

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }else{
            res.status(200).send(deleteStudent);
        }
    }catch(e){res.status(500).send(e)}
})

module.exports = router;