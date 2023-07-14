function logTime(req, res, next) {
    // console.log(req)

    let date = new Date();
    req.datePosted = date.toLocaleDateString(); // creating a string for our local date.

    console.log('Request datePosted key: ', req.datePosted);
    next();
}

// function x(req, res, next) {

// }

module.exports = {
    logTime: logTime,
    // x: "data"
}