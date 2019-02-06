# 🔥🔥 REACT - REACT UI 🔥🔥 Starter Kit + Useful Links

A React boilerplate with and based on:
  - React-scripts
  - Styled components
  - React-router
  - Lerna config
  - Storybook
  - Babel + Webpack custom config
  - ESLINT + airbnb rules
  - React Bootstrap (you may prefer reactstrap, it's more or less the same)
  - Customize-cra
  - React-app-rewired
  - Ant design
  
  ... and more and more
  
  Long story short, a powerful and scalable set of plugins ready-to-use that will allow you to start a project from scratch with everything you may need ( well... 😇).
  
  Lerna is already set up to manage, build and run the storybook/UI Library pack along with the app package.
  You have just to create the UI component inside the ui-pkg and then include it in the app-pgk like this:

  ```tsx
// in app-pgk containers/components  
import { MyUIComponent } from 'ui-pkg';
```
   
   It contains also different ways to handle styling in react, like   
   - `CSS-in-JS` --> `Styled Components`
   - `CSS modules`
   - native inline `style={{}}` 
   
In the next future i'll provide the same boilerplate with Redux Thunk and Saga as well, as of now there is only the middleware wrapping the App but not the actions/sagas/reducers templates 

## The steps you need to follow to install and run the project:

- from the root, run `npm install`
- from the root, run `npm run bootstrap-hoist`
- from the root, run `npm run ui-pkg-build`
- and then, to start the app-pkg run the command `npm run app-pkg-start`
- to see storybook, run the command `npm run ui-pkg-storybook-start`

## Utils

### Basic

https://reactjs.org/docs/getting-started.html

https://reactjs.org/docs/thinking-in-react.html

https://facebook.github.io/create-react-app/docs/getting-started

https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

https://www.styled-components.com/docs/basics

https://www.styled-components.com/docs/advanced

https://reacttraining.com/react-router/web/example/basic

https://storybook.js.org/basics/introduction/

https://reactjs.org/docs/components-and-props.html

https://reactjs.org/docs/state-and-lifecycle.html

https://reactjs.org/docs/introducing-jsx.html

https://jsx.github.io/

http://es6-features.org/

https://cssinjs.org/?v=v10.0.0-alpha.8

https://glenmaddern.com/articles/css-modules

### Advanced

https://redux.js.org/

https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

https://babeljs.io/

https://webpack.js.org/

https://github.com/lerna/lerna

https://facebook.github.io/immutable-js/

https://eslint.org/ + AirBnB rules + Custom rules

https://www.npmjs.com/package/prop-types

https://reactjs.org/docs/typechecking-with-proptypes.html

https://reactjs.org/docs/higher-order-components.html

https://reactjs.org/docs/react-api.html

https://github.com/arackaf/customize-cra

https://github.com/timarney/react-app-rewired


### Tools


https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

https://chrome.google.com/webstore/detail/react-sight/aalppolilappfakpmdfdkpppdnhpgifn

JSX/REACT/REDUX/SCSS/STYLED-COMPONENTS/GIT webstorm/vscode plugins


### Extras

https://reactjs.org/community/starter-kits.html

https://ant.design/docs/react/introduce

https://material-ui.com/

https://github.com/gatsbyjs/gatsby

https://nextjs.org/

