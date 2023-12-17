

const r= require("./routes/r")
const express = require("express");
const PORT=3000
app.use(express.json())

app.use("/r",r)
app.use(cookie())

//app.use((req, res)=>{
    
//     res.send("404")
// })
// app.use("/",require('./routes/root'))
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})
app.listen(PORT, () => {

    console.log("app ruuning",PORT);
});  
