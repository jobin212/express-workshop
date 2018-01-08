var express = require('express')
var app = express()

var jokeHandler = require('./jokeHandler')
var utils= require('./utils')

app.listen(8000, function() {
    console.log('server listening on port: ' + 8000)
})


app.get('/jokes/', function(req, res) {
    console.log('getting joke');
    if(Math.random() > 0.5) {
        res.send(jokeHandler.createKnockKnock());
    }
    else {
        res.send(jokeHandler.createOneLiner());
    }
})


app.get('/jokes/:joketype', function(req, res) {

    var joketype = req.params.joketype;
    console.log(joketype);
    var ret = "";
    if(joketype == ("knockknock")) {
        console.log("creating knock knock joke");
        ret = jokeHandler.createKnockKnock();
    }
    else if(joketype == ("oneliner")) {
        console.log("creating one liner");
        ret = jokeHandler.createOneLiner();
    }
    else {
        //does not handle non-integers
        if(!isNaN(joketype)) {
            for (var i = 0; i < joketype; i++) {
                ret +=  jokeHandler.createOneLiner();
                if (i < joketype - 1) {
                  ret += '\n';
                }
            } 
        }
        else {
            console.log("unable to create joke");
            ret = "invalid joke type :(";
        }
        
    }
    res.send(ret);
})

app.get('/capitalized/jokes', function(req, res) {
    var ret = "";
    console.log('getting capitalized joke');
    if(Math.random() > 0.5) {
        ret = (jokeHandler.createKnockKnock());
    }
    else {
        ret = (jokeHandler.createOneLiner());
    }

    res.send(ret.toUpperCase());
})

app.get('/quotes/jokes', function(req, res) {
    var ret = "";
    console.log('getting quotes joke');
    if(Math.random() > 0.5) {
        ret = (jokeHandler.createKnockKnock());
    }
    else {
        ret = (jokeHandler.createOneLiner());
    }

    res.send("\"" + ret + "\"" );
})


