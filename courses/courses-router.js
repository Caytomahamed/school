const express = require("express")
const model = require("./courses-model")

const router = express.Router()

router.get("/", async (req,res) => {
    try {
        const users = await model.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
