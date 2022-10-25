import { Schema, model } from "mongoose"


const schema = new Schema({
   day: {
      type: Number
   },
   row: {
      type: Number
   },
   col: {
      type: Number
   },
   body: {
      type: String
   }
})

export const Cell = model("cell", schema)