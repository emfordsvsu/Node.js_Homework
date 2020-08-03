// Create a 'userInput.js' file

const inquirer = require("inquirer");

// File must use 'fs'.

const fs = require('fs');

// File should require the 'greeting.js' file

const greeting = require("./greeting.js");


// Console.log my greeting.

console.log(greeting);

// Create my server.

const port = "5500";
const hostname = "127.0.0.1";
const server = http.createServer(function(req, res) {})

// Confirming my server.

const serverReady = 
  "Server ready."
  console.log(serverReady);

// Create a function 'userQuestions' to prompt user input

function userQuestions (){}

// Prompt user input. 

inquirer
  .prompt([
    {
      type: "input",
      message: "What's your username?",
      name: "password"
    };
   

// Store the information that the user enters into 'userPassword.txt'file


      fs.writeFile("./userPassword.txt",data.username + " : " + data.password, function(err) {

      fs.appendFile("userPassword.txt",data.username + " : " + data.password, function(err) {

      if (err) {
          return console.log(err);
      }else{
          console.log("Success!");
      }
});