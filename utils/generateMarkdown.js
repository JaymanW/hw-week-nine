// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `MIT`) {
    return `!(https://img.shields.io/badge/License-mit-purple.svg)`;
  } else if (license === `Apache 2.0`) {
    return `!(https://img.shields.io/badge/License-apache2.0-purple.svg)`;
  } else if (license === `GNU GPL 3.0`) {
    return `!(https://img.shields.io/badge/License-gpl3.0-purple.svg)`;
  } else if (license === `Unlicense`) {
    return `!(https://img.shields.io/badge/License-unlicense.0-purple.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return "To learn more about this license, visit (https://choosealicense.com/licenses/mit/)";
  } else if (license === `Apache 2.0`) {
    return "To learn more about this license, visit (https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === `GNU GPL 3.0`) {
    return "To learn more about this license, visit (https://choosealicense.com/licenses/gpl-3.0/)";
  } else if (license === `Unlicense`) {
    return "To learn more about this license, visit (https://choosealicense.com/licenses/unlicense/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `None`) {
    return "";
  } else {
    return `This project is registered under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Project Description

  ${data.desc}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions/Contact](#questions)

  ## Installation

  Run the following command to install all dependancies for this project:

  ~~~
  ${data.installation}
  ~~~

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Testing

  Run the following command to test this project:

  ~~~
  ${data.test}
  ~~~

  ## Questions / Contact

  If you have any questions, comments, or concerns about this project, you can reach me at the following links:
  Email: ${data.email}
  GitHub[${data.githubUser}(https://github.com/${data.githubUser})];
  `;
}

module.exports = generateMarkdown;
