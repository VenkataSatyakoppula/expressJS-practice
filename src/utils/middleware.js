const loggingMiddleware = (request,response,next)=>{
    console.log(`${request.method} - ${request.url}`);
    next();
}

module.exports = loggingMiddleware