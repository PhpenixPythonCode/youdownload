const express = require('express')
const cors = require("cors")
const ytdl = require("ytdl-core")
const app = express()

app.use(cors())

app.listen(4000, () => {
    console.log("Server is listening at port 4000")
})
try{
    app.get('/download', (req,res) => {
        var URL = req.query.URL
        var videoTitle = req.query.Title
        res.header('Content-Disposition', `attachment; filename="${videoTitle}.mp4`)

        ytdl(URL, {
            format: 'mp4'
        }).pipe(res)
    })
}catch(err){
    console.log(err)
}
