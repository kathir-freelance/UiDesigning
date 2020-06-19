Fast, unopinionated, minimalist web framework for Node.js

Event Driven Programming is a computer programming paradigm in which control flow of the program is determined by the occurrence of events. These events are monitored by code known as an event listener that, if it detects that its assigned event has occurred, runs an event “handler”, typically a callback function or method. This handler deals with the event by responding to it with program code.

Step 1: Go to terminal & create a folder called express-rest

	mkdir express-rest
	cd express-rest
	npm init /npm inigt -y
	Install express - npm i express
Step 2:
	create a server.js file and put below snippet

		const express = require('express');
		var app = express();
		app.get('/', (req, res) => {
		    res.send('Hello Express');
		});
	
		app.listen(process.env.PORT || 3000);


step 3:
	To run the application install nodemon & type the following in terminal:

	npm install -g nodemon
	
	nodemon server.js(file name is optional)

Step 4: type in  browser : http://localhost:3000/
	
What is middleware?

functions that are invoked by the Express.js routing layer before your final request handler is, and thus sits in the middle between a raw request and the final intended route. 

step 5: create a folder called Public and add an html file inside

	mkdir public
	cd public
	echo >index.html
	
	public folder generally has html files (static resources)

step 6: open server.js file , add middleware code

	to add we use a method - app.use()

add  below code ->

	app.use(express.static(__dirname + '/public'));

step 7: nodemon server.js, then open browser ,localhost:3000/index.html


use handlebars for dynamic templating, example in given below link

http://tryhandlebarsjs.com/

real time usage of node:
https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js

https://expressjs.com/en/advanced/best-practice-performance.html

features :

follows mvc arch
Express provides two templating engines namely, Jade(pug) and EJS
help-s to connect with db
defines error handling middleware


Routing Methods
Routing is the process of determining a specific behavior of the application. 
It basically defines how an application should respond to a client request to a particular route, path or URI along with a particular HTTP Request method.

Each route can contain more than one handler functions, which will be executed when the specific route is browsed by the user.

		app.METHOD(PATH, HANDLER)

method is get,put,all,post
hander is callback function

https://medium.com/@etiennerouzeaud/how-create-an-api-restfull-in-express-node-js-without-database-b030c687e2ea

CRUD in json:

Step 1:
============
mkdir crud-in-json
cd crud-in-json
npm init
(npm init -y is for non-interactive mode)

check packages.json is created

npm i express --save

Step 2:
============
create server.js file:

const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))

Step 3:
============
then in cmd prompt give => node index.js

Now open browser, and navigate to localhost:3000/hello

retrieve a person record:
==========================
create a json file with name person.json or array in same code 

const persons = {
  '1001': {
    id:1001
    firstName: 'Steve',
    lastName: 'B',
    department: 'Admin'      
  },
  '1002': {
    id:1002
    firstName: 'Jane',
    lastName: 'S',
    department: 'Marketing'      
  },
  '1003': {
    id:1003
    firstName: 'Kathy',
    lastName: 'J',
    department: 'Sales'      
  },
  '1004': {
    id:1004
    firstName: 'Alex',
    lastName: 'S',
    department: 'Admin'
  }
}

add below code in server.js

app.get('/person/:id', (req, res) => {
  console.log(req.params.id)
  res.sendStatus(200)
})
modify above code to use res.json() - to return json object for given id
and also if record not found return no info found -404

app.get('/person/:id', (req, res) => {
  const person = persons[req.params.id]

  if (!person) {
    return res.sendStatus(404)
  }
  res.json(person)
})


goto browser and type
http://localhost:3000/person/1001

Adding record:

add below method, for storing info

app.use(express.json()); //used for converting data into json

app.post('/person', (req, res) => {
  const { firstName, lastName, department } = req.body
  persons[id] = { id,firstName, lastName, department }
  res.sendStatus(200)
}

By default, our Express application won’t parse this JSON object, so we need to enable some middleware to enable it.

use -> app.use(res.json());


Testing:

mkdir myapp && cd myapp
npm init

provide the below input

name: hello-world
entry point: app.js
test command: ./node_modules/.bin/mocha 
//We shall use this framework to test the application

npm install express --save


create and place the below content int app.js

//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})


run app.js---> node app.js

Configuring unit tests with Mocha and Chai:

npm install mocha chai --save-dev
npm install request --save-dev
//using request obj in test cases oin test file

mkdir test
cd test
echo >testfile.js

inside the file type below codes:
var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8081' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

modify above code to :
var expect  = require('chai').expect;
var request = require('request');

    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8080/' , function(error, response, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });


then finally give npm test






