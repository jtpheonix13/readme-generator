// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
      case "Apache 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "Unilicense":
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        break;
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case "Boost Software License":
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        break;
      case "IBM Public License":
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        break;
      case "none":
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache 2.0":
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "Unilicense":
      return `http://unlicense.org/`;
      break;
      case "MIT":
        return `https://opensource.org/licenses/MIT`;
        break;
      case "Boost Software License":
        return `https://www.boost.org/LICENSE_1_0.txt`;
        break;
      case "IBM Public License":
        return `https://opensource.org/licenses/IPL-1.0`;
        break;
      case "none":
        return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License \nThis app was made using a ${license} license. 
    \n[link to license](${renderLicenseLink(licensec)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
