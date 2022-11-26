const express = require('express');
const Room = require('../models/room');
const router = new express.Router();

router.get('/booked-rooms', async (req, res) => {

    // const room1 = new Room({number: '101', type: 'Deluxe', beds: '2'});
    // await room1.save();
    // const room2 = new Room({number: '202', type: 'Single', beds: '1'});
    // await room2.save();
    // console.log(room1);
    // console.log(room2);
    // const rooms = await Room.find({}).sort({'number' : 1});
    // res.send(rooms);

    try{
        const rooms = await Room.where({'status': 'booked'}).sort({'number' : 1});
        res.status(200).send(rooms);
        console.log("success");
    }catch(error) {
        res.status(500).send(error);
        console.log("failure");
    }
})

router.get('/vacant-rooms', async (req, res) => {

    console.log("in here");

    try{
        console.log("in here");
        const rooms = await Room.where({'status': 'vacant'}).sort({'number' : 1});
        res.status(200).send(rooms);
        console.log("success");
    }catch(error) {
        res.status(500).send(error);
        console.log("failure");
    }
})

router.post('/vacant-rooms', async (req, res) => {

    const room = new Room(req.body);

    try {
        await room.save();
        res.status(201).send(room);
    }
    catch(error) {
        res.status(500).send(error);
    }
})

router.patch('/vacant-rooms', async (req, res) => {
    
    const id = await Room.findById(req.body._id);
    console.log(req.body);
    console.log(id);
    
    if(!id) {
        
        console.log("Helllloooo");
        return res.status(404).send("ID Not Found");
    }

    try {

        console.log("try");

        const bookedOrNot = await Room.findByIdAndUpdate(req.body._id, {

            status: "booked"
        });

        res.send(bookedOrNot);
    }
    catch(error) {

        res.status(500).send(error);
        console.log(error);

    }
})

module.exports = router;