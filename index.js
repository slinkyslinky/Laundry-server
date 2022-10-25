import express from "express";
import cors from "cors"
import fs from "fs"
import tableConfig from "./data/config/tableConfig.js"
import mongoose from "mongoose";
import { Cell } from "./models/Cell.js";
import checkDate from "./utils/checkDate.js";


const PORT = process.env.PORT || 3001

const app = express()

async function start() {
    try {
        await mongoose.connect("mongodb+srv://spbgic:17031703@laundry.wm3pqy8.mongodb.net/?retryWrites=true&w=majority", {

        })
        app.listen(PORT, () => {
            console.log('Server works...');
        })
    } catch (e) {
        console.log(e);
    }
}

start()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    const cells = await Cell.find({})
    console.log(cells);
    res.json(cells)
})


app.post("/data/data", async (req, res) => {
    const cell = new Cell(
        {
            day: req.body.payload.day,
            row: req.body.payload.row,
            col: req.body.payload.col,
            body: req.body.payload.body,
        }
    )
    const check = await Cell.findOne({ day: cell.day, row: cell.row, col: cell.col })
    if (check === null) {
        await cell.save()
        res.json(req.body)
    }
    else res.json({ "error": "not empty" })





})
app.delete("/", async (req, res) => {
    await Cell.deleteMany({})
    res.json({ "body": "All deleted" })
})

app.get('/data/config/tableConfig', (req, res) => {
    res.json(tableConfig)
})

checkDate()