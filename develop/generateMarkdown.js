// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }

    if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }

    if (license === "GPLv2") {
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    }

    if (license === "GPLv3") {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }

    if (license === 'none') {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license === 'MIT') {

        return'Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)'
      }

      if (license === 'Apache') {
    
        return'Licensed under the [Apache License](https://choosealicense.com/licenses/apache-2.0/)'
      }

      if (license === 'GPLv2') {
    
        return'Licensed under the [GPLv2 License](https://choosealicense.com/licenses/gpl-2.0/)'
      }

      if (license === 'GPLv3') {

          return'Licensed under the [GPLv3 License] (https://choosealicense.com/licenses/gpl-3.0/)'
      }
      
      
      if (license === 'none') {
        
        return ''
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT' || license === "Apache" || license === "GPLv2" || license === "GPLv3") {
        return '## License:'
    } else {
        return ""
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


  ## Table of Contents:
  1. [Title] (#title)
  2. [Description] (#description)
  3. [Installation] (#install)
  4. [Link] (#link)
  5. [Github] (#github)
  6. [E-mail] (#Email)
  7. [Instructions] (#instructions)
  8. [License] (#license)
  9. [Contribution] (#contribute)
  10. [Collaborators] (#collaborators)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Link
  ${data.link}

  ## Github
  ${data.github}

  ## E-mail
  ${data.email}

  ## Instructions
  ${data.instructions}

  ## Contribution
  ${data.constribute}

  ## Collaborators
  ${data.collaborators}`
}

module.exports = generateMarkdown;