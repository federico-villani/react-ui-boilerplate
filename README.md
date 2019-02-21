# 🔥🔥 REACT - REACT UI 🔥🔥 Starter Kit + Useful Links

A React boilerplate with and based on:
  - React-scripts
  - Styled-components
  - React-router
  - Lerna config
  - Storybook
  - Babel + Webpack custom config
  - ESLINT + airbnb rules
  - React Bootstrap (you may prefer Reactstrap, it's more or less the same)
  - Customize-CRA
  - React-app-rewired
  - Ant design
  
  ... and more and more
  
  Long story short, a powerful and scalable set of plugins ready-to-use that will allow you to easily start a new project from scratch with everything you may need ( well... 😇).
  
  Lerna is already set up to manage, build and run the storybook/UI Library pack along with the app package. Hot reload included! 
  You have just to create the UI component inside the ui-pkg and then include it in the app-pgk like this:

  ```tsx
// in app-pgk containers/components  
import { MyUIComponent } from 'ui-pkg';
```
   
   It also contains different ways to handle the styling in react, like:
   - `CSS-in-JS` --> `Styled Components`
   - `CSS modules`
   - native inline `style={{}}` 

## The steps you need to follow to install and run the project:

- from the root, run `npm install`
- from the root, run `npm run bootstrap-hoist`
- from the root, run `npm run ui-pkg-build`
- and then, to start the app-pkg run the command `npm run app-pkg-start`
- to see storybook, run the command `npm run ui-pkg-storybook-start`

## Utils

### Basic
- <details><summary>React</summary>

  - [Getting started](https://reactjs.org/docs/getting-started.html)

  - [Hello World](https://reactjs.org/docs/hello-world.html)

  - [Compontents and props](https://reactjs.org/docs/components-and-props.html)

  - [State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

  - [Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

  - [Thinking in react](https://reactjs.org/docs/thinking-in-react.html)

  - [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

  - [Create React App v2 release note](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)
  </details>

- <details><summary>Styled Components</summary>

  - [Basic](https://www.styled-components.com/docs/basics)

  - [Advanced](https://www.styled-components.com/docs/advanced)
  </details>

- [React Router](https://reacttraining.com/react-router/web/example/basic)

- <details><summary>JSX</summary>

  - [JSX](https://jsx.github.io/)

  - [JSX in react](https://reactjs.org/docs/introducing-jsx.html)
  </details>

- [Storybook](https://storybook.js.org/basics/introduction/)

- [es6](http://es6-features.org/)

- [css-in-js](https://cssinjs.org)

- [css-modules](https://glenmaddern.com/articles/css-modules)



### Advanced

- [Redux](https://redux.js.org/)

- [Redux Saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)

- [Babel](https://babeljs.io/)

- [Webpack](https://webpack.js.org/)

- [Lerna](https://github.com/lerna/lerna)

- [Immutable.js](https://facebook.github.io/immutable-js/)

- [ESLINT](https://eslint.org/) + AirBnB rules + Custom rules

- [Prop Types](https://www.npmjs.com/package/prop-types)

- [Prop Types in React](https://reactjs.org/docs/typechecking-with-proptypes.html
)

- [React - High Order Components](https://reactjs.org/docs/higher-order-components.html)

- [React - API](https://reactjs.org/docs/react-api.html)

- [Customize CRA](https://github.com/arackaf/customize-cra)

- [React App Rewired](https://github.com/timarney/react-app-rewired)

- [NextJS - Server Side Rendering](https://nextjs.org/)

- [React - Typescript cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet?fbclid=IwAR1OHnqDaghBIfRTwd9X3n574vLkXKCT5qijXL53B_cNT43JX953DMmeA2Y)

### Dev Tools

- [Chrome - React](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

- [Chrome - React Sight](https://chrome.google.com/webstore/detail/react-sight/aalppolilappfakpmdfdkpppdnhpgifn)

- [Chrome - Redux](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

- JSX/REACT/REDUX/SCSS/STYLED-COMPONENTS/GIT webstorm/vscode plugins


### Extras

 - [React - Starter kits](https://reactjs.org/community/starter-kits.html)

- <details><summary>UI Component Libraries</summary>

  - [Ant Design](https://ant.design/docs/react/introduce)

  - [Material UI](https://material-ui.com/)

  - [Reactstrap - Bootstrap v4 for React](https://reactstrap.github.io/)
  
  </details>


- [Gatsby - Site generator](https://github.com/gatsbyjs/gatsby)

- [Grommet](https://github.com/grommet/grommet)


## What's next?
   
In the next future i'll provide the same boilerplate with separate branches including Redux Thunk and Saga config as well. It will be up to you to know which one would fit better for your own need. 
As of now in master branch there is only the middleware wrapping the App but not the actions/sagas/reducers templates 

## Contributing

If you think i missed something ( surely i did 😬 ) feel free to create an issue or a PR
