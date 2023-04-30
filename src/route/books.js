const {Router} = require("express");

const router = Router();

let allBooks = [
    {
        Name:'Games',
        quantity:2,
    },
    {
        Name:'Games2',
        quantity:3,
    }
]
router.get('/',(request,response) =>{
    response.send(allBooks)
});

router.get("/:name",(req,res)=>{
    let {name} = req.params;
    const item = allBooks.find((book)=> book.Name === name)
    res.send(item);
});

router.post('/',(req,res) =>{
    console.log(req.body);
    res.sendStatus(201)
});

module.exports = router