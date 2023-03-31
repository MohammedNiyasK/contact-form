import express from "express";
import { collections } from "../services/database.services.mjs";
import { ObjectId } from "mongodb";

 const router = express.Router()

router.get("/", async (req,res) => {
    try {
       const user = (await collections.contact.find({}).toArray());

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.post("/", async (req,res) => {
    try {
        const newUser = req.body ;
        console.log(newUser)
        const result = await collections.contact.insertOne(newUser);

        result
            ? res.status(201).send(`Successfully created `)
            : res.status(500).send("Failed to create a new user.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

export default router;