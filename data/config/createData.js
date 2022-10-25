import tableConfig from "./tableConfig.js";
import fs from 'fs'

const initTableData = tableConfig.days.map((day) => [...tableConfig.rows.map((row) => [...tableConfig.columns.map((col) => '')])])

if (!fs.existsSync('data/data.json')) {
   fs.writeFileSync("data/data.json", JSON.stringify(initTableData))
}


export default initTableData