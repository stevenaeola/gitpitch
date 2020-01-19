
# COMP1101 Programming Summative Assessment 1


## Term 1 Programming Exercise Outline

- Submission by 14:00 Thursday 16/1/2020
- Return by 13/2/2020
- Contributes 35% of module marks
- Includes peer review feedback which you will be allocated
- Peer reviews need to be submitted by 14:00 3/2/2020
- Quality of your peer reviews contribute 5% to your module mark


## Subject-specific Knowledge

- Interaction between JavaScript progams and the Document Object Model (DOM)
- Using control statements to loop and make decisions.
- An understanding of the nature of imperative programming in the object-oriented style.
- A knowledge and understanding of good programming practice (for example, reuse, documentation and style)


## Key Skills

- an ability to recognise and apply the principles of abstraction and modelling


## Tasks

- Choose a visualization from [https://github.com/d3/d3/wiki/Gallery](https://github.com/d3/d3/wiki/Gallery)
- Adapt it into a reusable component using JavaScript classes
    - Appropriate constructor
    - Get and set methods for properties
- Choose a (new) dataset to work with 
- Build an example vizualisation using your new class and your dataset
- Write documentation of your code using [JSDoc](https://devdocs.io/jsdoc/)


### Datasets

Possibilities include
* [Registry of Open Data on AWS](https://registry.opendata.aws/)
* [Google Dataset Search](https://toolbox.google.com/datasetsearch)
* [Microsoft Research Open Data](https://msropendata.com/)
* [Awesome public datasets](https://github.com/awesomedata/awesome-public-datasets)
* [UK data service](https://www.ukdataservice.ac.uk/)

Inspiration from <https://www.informationisbeautifulawards.com/>

## Submission

- Submit via duo
   1. a .zip file containing your code and documentation
   2. a .zip file containing the original code you based your work on


## Marking Criteria

Weighted equally

- Usability and clarity of documentation (peer assessed)
- Clarity of code (peer assessed)
- Development of original (tutor assessed)
- Quality of example and code (tutor assessed)


## Usability and clarity of documentation

- All methods and parameters documented (including constructor) for users
- Documentation provides enough detail to use the code without reading it


## Clarity of code

- Code is clear to understand for maintainers
- Appropriate parameterisation including defaults
- Appropriate use of class(es) and no global variables


## Development of original

- Original code to be submitted as well as final version
- Work done in refactoring code 
- Work done in interpreting dataset
- Source of initial code and data acknowledged (including licence)


## Quality of example and code

- HTML page is valid
- Visualization is appropriate for data
- Appropriate on-page controls/interactivity
- Code quality: ESLint


## Quality: ESLint rules

Use this .eslintrc.js
```json
module.exports = {
    "extends": "standard",
    "rules": {
      "semi": [2, "always"],
      "indent": "off"
    }
};
```


## Peer Review Marking

5 marks are awarded for peer assessment

* 2 marks for completion of four peer reviews
* 3 marks for the accuracy of the reviews
* Accuracy is based on agreement with peers
* Accuracy marks deducted for being over-harsh and over-generous
* The average student tends to get about 65%
* 65% is on the good/very good boundary of the [marking conventions](https://www.dur.ac.uk/resources/university.calendar/volumeii/2019.2020/coreregsug.pdf) p15
