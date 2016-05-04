## JS Boilerplate

- [Webpack](https://webpack.github.io/) (Module Bundler)
- [Babel](https://babeljs.io/) (ES6/7+ Transpilation)
- [React](https://facebook.github.io/react/) (View Components)
- [Redux](http://redux.js.org/) (State Management)
- [React-Helmet](https://github.com/nfl/react-helmet) (\<head\> Management)
- [Karma](https://karma-runner.github.io/) (Test Runner)
- [Mocha](https://mochajs.org/) (Test Framework)
- [Chai](http://chaijs.com/) (Test Assertions)
- [Sinon](http://sinonjs.org/) (Test Spies/Stubs)
- [ESLint](http://eslint.org/) (JS Linting)
- [SASS](http://sass-lang.com/) (CSS Preprocessor)

#### Getting Started

Install [NodeJS](https://nodejs.org/en/download/)

> (Optional) Install [Chrome React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

> (Optional) Install [Chrome Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

```bash
git clone git@github.com:thearrow/js-boilerplate.git {project-name}
cd {project-name}
rm -rf .git
npm i
npm start
```
> Edit to fit your needs


#### Testing
```bash
cd {project-name}
npm run test
```


#### Deployment

```bash
cd {project-name}
npm run build
```
> Look in `deploy/`
