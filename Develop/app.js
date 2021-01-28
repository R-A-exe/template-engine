const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


var list = Array();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function collectData() {
    while (true) {

        var employee = null;

        var result = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please enter name of employee.',
                validate: async (input)=>{
                    return !/[^a-zA-Z]/g.test(input)? true : "Please ensure the name only contains letters.";
                }
            },

            {
                name: 'id',
                type: 'input',
                message: 'Please enter ID of employee.',
                validate: async (input)=>{
                    return !/[^0-9]/g.test(input) ? true : "Please ensure the name only contains numbers.";
                }
            },

            {
                name: 'email',
                type: 'input',
                message: 'Please enter email of employee.',
                validate: async (input)=>{
                    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g.test(input) ? true : "Please enter a valid email address.";
                }
            },

            {
                name: 'role',
                type: 'list',
                choices: ['Manager', 'Engineer', 'Intern'],
                message: 'Please enter role of employee.'
            },
        ]);


        switch (result.role) {

            case 'Manager':
                var office = await inquirer.prompt([
                    {
                        name: 'office',
                        type: 'input',
                        message: 'Please enter office number.'
                    }
                ]);
                employee = new Manager(result.name, result.id, result.email, office.office);
                break;

            case 'Engineer':
                var github = await inquirer.prompt([
                    {
                        name: 'github',
                        type: 'input',
                        message: 'Please enter github account.'
                    }
                ]);

                employee = new Engineer(result.name, result.id, result.email, github.github);
                break;

            case 'Intern':
                var school = await inquirer.prompt([
                    {
                        name: 'school',
                        type: 'input',
                        message: 'Please enter school name.'
                    }
                ]);

                employee = new Intern(result.name, result.id, result.email, school.school);
                break;
        }

        list.push(employee);

        var another = await inquirer.prompt([
            {
                name: 'another',
                type: 'confirm',
                message: 'Would you like to add another employee?'
            }
        ]);

        if (!another.another) {
            break;
        }

    }
}

function outputDirectory(){
    try{
    fs.accessSync(OUTPUT_DIR, fs.constants.F_OK);
    }catch(err){
        err.code === 'ENOENT'? fs.mkdirSync(OUTPUT_DIR) : null;
    }
}


(async function () {
    await collectData();
    outputDirectory();
    fs.writeFile(outputPath, render(list), err => {
        if (err) console.log(`Something went wrong: ${err}`);
      });
})();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
