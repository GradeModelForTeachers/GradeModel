# GradeModel

[![CircleCI](https://circleci.com/gh/GradeModelForTeachers/GradeModel.svg?style=shield)](https://circleci.com/gh/GradeModelForTeachers/GradeModel)

## About The Project

GradeModel is an open source tool designed to make grading easier for writing teachers. Our mission is not to replace the teacher, but to make grading faster. We believe that with the aid of natural language processing, teachers can provide faster feedback, that at the same time, is still effective and personalized for all students.

## Project Set Up
Required dependencies:  
node  
nvm  
yarn
  
```
nvm use
yarn install
```

## How To Run The Application
 - ``yarn start`` inside the GradeModel folder
 - The project will be running at: http://localhost:8080/

## How To Test The Application
- ``yarn test`` inside the GradeModel folder

## How To Run ESLint
- ``yarn lint`` inside the GradeModel folder

## CI/CD
- We are using the free version of [CircleCI](https://circleci.com/gh/GradeModelForTeachers/) for our pipelines
  - Use the GradeModel credentials to login and see the jobs running
- Changes can be made to the CircleCI configuration [here](./.circleci/config.yml)

## Testing Frameworks
- Jest
- React Testing Library