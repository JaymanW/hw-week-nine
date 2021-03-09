// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
