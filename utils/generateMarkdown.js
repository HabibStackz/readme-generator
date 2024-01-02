// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.projectSummary}

  ## Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Author](#author)



## Dependencies
${data.dependencies}


## Installation
\`\`\`bash 
${data.installation} 
\`\`\`


## Usage
${data.usage}


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change or email me at ${data.email}.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [${data.license}]

## Contact

For questions or feedback, you can contact me at ${data.email} or visit my GitHub profile at [${data.githubUserName}](https://github.com/${data.githubUserName}).

## Author
${data.author}

`;
}

module.exports = generateMarkdown;
