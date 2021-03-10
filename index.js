const express = require('express')
const app = express()
const port = 8100
const fs = require("fs")
const logFileLocation = "./logFolder/679c4dc2ec97de1e51f419c24f42a7dfbd7973560f09f256311ace337a2ae6a4/679c4dc2ec97de1e51f419c24f42a7dfbd7973560f09f256311ace337a2ae6a4-json.log"


app.get('/all', async (req, res) => {
    const log = await readLogFile();

    res.setHeader('Content-Type', 'application/json');
    res.end(log);
})

app.get('/', async (req, res) => {
    const log = await readLogFile();
    const charToShow = 10000;
    const startIndex = log.length <= charToShow ? 0: log.length - charToShow;
    const logToShow = log.substring(startIndex, log.length);
    res.setHeader('Content-Type', 'application/json');
    res.end(logToShow);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


async function readLogFile(){
    const log = await fs.promises.readFile(logFileLocation, 'utf8');
    return log;
}
