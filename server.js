const express = require("express")
const path = require("path")
const app = express()
app.use("/public", express.static("public"))
app.listen(3000, (err) =>{
    if (err) {
        console.log(err.cause)
    }
    console.log("Server is running")
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

