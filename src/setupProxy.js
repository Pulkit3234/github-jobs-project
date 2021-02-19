const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
    app.use(
        proxy("/positions.json", {
            target : 'https://jobs.github.com',
            secure : false,
            changeOrigin : true
        })

    );
}