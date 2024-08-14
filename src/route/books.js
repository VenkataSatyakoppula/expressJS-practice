const {Router} = require("express");

const {query,validationResult,body, matchedData,checkSchema} = require("express-validator");
const UserValidationSchema = require("../utils/validation");
const router = Router();
let allBooks = [
    {
        id:1,
        Name:'Great Book',
        displayName:'great-book',
        quantity:2,
    },
    {
        id:2,
        Name:'Comedy genre',
        displayName:'comedy-genre',
        quantity:3,
    }
];

function getMax(arr, prop) {
    var max;
    for (var i=0 ; i<arr.length ; i++) {
        if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max.id;
};

router.get('/',
    query('filter')
    .isString()
    .notEmpty().withMessage("Must not be Empty")
    .isLength({min:3 , max:10}).withMessage('Must be 3-10 characters')
    ,(request,response) =>{
    const result = validationResult(request);
    response.cookie("hello","cookie-1",{maxAge:10000 , signed: true})
    const {query:{filter,value},}= request;
    if(filter && value)
        return response.send(
            allBooks.filter((book) => book[filter].toLowerCase().includes(value.toLowerCase()))
        );
    return response.send(allBooks);
});

router.post('/'
    ,checkSchema(UserValidationSchema)
    ,(req,res) =>{
    const result = validationResult(req);
    if (!result.isEmpty()){
        return res.status(400).send({errors: result.array()});
    }
    const data = matchedData(req);
    let next_id = getMax(allBooks,"id")
    allBooks.push({id:next_id+1,...data})
    res.sendStatus(201);
});

router.get("/:Bookid",(req,res)=>{
    let {Bookid} = req.params;
    Bookid = parseInt(Bookid);
    console.log(req.signedCookies)
    if (isNaN(Bookid)){
        return res.status(400).send({msg:"Bad request"});
    }
    const book = allBooks.find((bk)=> bk.id === Bookid);
    if (!book){
        return res.status(404).send({msg:"Book not Found"});
    }
    res.send(book)
});

module.exports = router;