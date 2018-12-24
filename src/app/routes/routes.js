module.exports = (app) => {

    app.get('/', function(req, resp){
        resp.send('Hello World');
    });
    
};

