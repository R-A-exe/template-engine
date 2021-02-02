# Template Engine   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Link to demo: https://drive.google.com/file/d/1ADjSNv3s4oQPuaCfSgu-_2i4bYCRxrh2/view?usp=sharing

The purpose of this CLI is to provide a quick and easy way for creating a team info webpage. In order to use the application, run the app.js file and answer the prompts. The application loops through a list of questions about an employee (name, email, role, office number/github account/school) and popluates an html file based on the answers provided. The file is created in the 'output' folder within the directory.




## Table of content

### [Installation](##-Installation)

### [Usage](##-Usage)

### [License](##-License)




## Installation

In order to install the app, download the repo and run npm i. No further installation is required.




## Usage

After installation, run 
``` 
node app.js
```
The application will prompt you to complete the following fields:

- Name of employee (must be a string);
- ID of employee (must be a numeric value);
- Role of employee (choose from list);
- Based on role:
	- Manager: office number;
	- Engineer: github account;
	- Intern: school.

You will then be asked if you would like to add another employee (y/n) which would either loop back to the first question, or generate the html file.

If the 'output/' directory exists, the file will be generated within, otherwise, and 'output/' directory is created first.




## License

This project is covered under the following license: The MIT License. For more information, please visit [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)







