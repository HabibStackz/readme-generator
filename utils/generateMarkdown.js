// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.projectSummary}

  ## Table of Contents

- [Description](#description)
- [Table Of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Dependencies](#dependencies)
- [Tests](tests)
- [Questions](questions)
- [Author](#author)


## Description
${data.projectDescription}


${data.features}

## Installation
\`\`\`bash 
${data.installation} 
\`\`\`


## Usage
\`\`\`bash
${data.usage}
\`\`\`



## License

This project is licensed under the [${data.license}]


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change or email me at ${data.email}.

Please make sure to update tests as appropriate.


## Dependencies

"npm i" should be used to install all dependencies. Dependencies for this project are:


${data.dependencies}


## Questions

For questions or feedback, you can contact me at ${data.email} or visit my GitHub profile at [${data.githubUserName}](https://github.com/${data.githubUserName}).


## Tests
\`\`\`bash 
${data.tests} 
\`\`\`



## Author
${data.author}

`;
}

module.exports = generateMarkdown;
