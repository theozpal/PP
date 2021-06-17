# Groundswell Assignment Demo

Groundswell Assignemnt Demo is an assignment project given by Groundswell Cloud Solutions.

## The Definition

Create a web page using HTML and Javascript from a front-end (view) perspective. You will use popular JavaScript libraries to implement the logic below. The objective is to design a UI that is intuitive, easy to use and presentable. Feel free to use any tools you desire (Bootstrap, Angular, jQuery, etc) and add any nuance you feel is appropriate in today’s industry.
It is recommended to incorporate common design patterns in your solution. Dynamic reusable designs are key. For reference, review patterns for Web Development and Interaction Design.
The page should allow up to ten letters of the alphabet to be entered into a text input field. Also display a button, named Calculate, which when pushed will perform the following functionality:
Translate each alphabetic character entered as follows – a=1, b=2, c=3, and so on to z=26
Add the numeric values of each translated character together and display the result on the page
Check whether the result is a prime number or not and display some text saying which it is
Example 1:
Input: aaa
Output: 3 which is a prime number
Example 2:
Input: abc
Output: 6 which is a not prime number
Example 3:
Input: azb
Output: 29 which is a prime number
Include any error handling you think may be relevant.

## Installation

The code does not require any installation but you will need some additional libraries to run it as you may see them from dependencies.

### Required frameworks/libraries:
[Nodejs](https://nodejs.org/en/download/) - Can be found at this link, simply download and follow the installation process.

Expressjs - Can be installed with following commands assuming you have installed Node.js

```
npm install express --save
```

Handlebars (hbs) - See the [installation document](https://handlebarsjs.com/installation/)

Nodemon(Optional) - Can be installed with following commands assuming you have installed Node.js. Helps to re-run the code as you save along the files.

```
npm install -g nodemon
```

Jest - Needed to run test file with Jest. See the [installation document](https://jestjs.io/docs/getting-started)

## Usage

You need to run /web-server/src/app.js to run the program on port 3000(could be changed at src/app.js to a different port).

Then head to your development port.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
