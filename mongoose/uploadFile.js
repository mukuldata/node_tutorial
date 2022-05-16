// File upload :not working
const express = require("express");
const multer = require("multer");

const app = express();

// File upload:
// uploads is a folder in which file is uploaded:
const upload = multer({
    storage: multer.diskStorage({
        destination:function(req, file ,cb) {
            cb(null,"uploads")
        },
        filename: function(req, file, cb)
         {
            cb(null,file.fieldname + "-" + Date.now()+".jpg")
         }
    })
}).single("user_file")

//upload is a middleware:
app.post("/upload",upload,(req, resp) => {
    resp.send("File uploaded");
})

app.listen(4002);