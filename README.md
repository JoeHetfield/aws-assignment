# Joe's AWS Assignment

Hi, My name is ZhouDing (周鼎).

This is my aws-assignment for aws technical interview. Appreciate this opportunity provided, and I'll be greate honnored if I had chance to work in AWS.

## Getting Start

- Install: `npm install`

- Try the demo locally: `npm start dev`

- Run E2E test: `npm test`

**Works with Node.js 10+**.

### Try the Demos Locally

Start the server with `npm run dev`, then head to `http://localhost:8080` to see it in action.

### Browser Compatibility

All morden browser should be fine. Lastest Chrome is recommended.

## About This Project

- Left side menu navigation is implemented.
- The workflow of "Add Device Type" is implemented.
- E2E Test is considered and implemented.

[Here](https://github.com/chenglou/react-motion/blob/9cb90eca20ecf56e77feb816d101a4a9110c7d70/src/Types.js)'s the well-annotated public [Flow type](http://flowtype.org) definition file (you don't have to use Flow with React-motion, but the types help document the API below).

P.S. using TypeScript? [Here](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-motion/index.d.ts) are the React-motion TypeScript definitions!

---

### Tech Stack

- FrontEnd Framework: React 16.12
- UI Framework: Material-UI 4.8
- State Management: React-redux 7.1
- Route Management: React-router 5
- i18n: react-intl 1.2
- Form Handler: formik 2
- Data visualize: HighCharts
- ES6 Transpiler: Babel 7.7
- Builder & Bundler: Webpack 4
- Testing Framework: Jest 24.9
- E2E Test Tool: Puppeteer 2
- Code Linter: ESLint 6

### Project Architecture

- `app`: The folder where all the App program reside. Splited as these sub directories below:

  - `actions`: All actions that interact with backend are located here, App-wide actions (e.g. expand or collapse the side navigation menu) also included.

  - `assets`: Static resources are located here, such as images, favicon, font etc.

  - `compnents`: Common UI Components which used in this App globally.

  - `config`: Global configurations affect that affect App behavior, such as backend url, app store url, brand name etc.

  - `hooks`: Customized common React hooks are placed here, extract from App logic.

  - `i18n`: React-intl build target folder, generate final language bundle. Not used in coding.

  - `message`: Message definitions, splited by business module accordingly. Used by React-intl as language bundle sources.

  - `pages`




- `templates`
- `tests`
- `tools`
- `.bablerc`
- `.editorconfig`
- `.eslintignore`
- `.eslintrc.js`
- `.gitignore`
- `package.json`
- `README.md`
- `webpack.config.babel.js`
- `webpack.parts.js`

##### - spring: (val: number, config?: SpringHelperConfig) => OpaqueConfig
Used in conjunction with the components below. Specifies the how to animate to the destination value, e.g. `spring(10, {stiffness: 120, damping: 17})` means "animate to value 10, with a spring of stiffness 120 and damping 17".

- `val`: the value.
- `config`: optional, for further adjustments. Possible fields:
  - `stiffness`: optional, defaults to `170`.
  - `damping`: optional, defaults to `26`.
  - `precision`: optional, defaults to `0.01`. Specifies both the rounding of the interpolated value and the speed (internal).

  It's normal not to feel how stiffness and damping affect your spring; use [Spring Parameters Chooser](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser) to get a feeling. **Usually**, you'd just use the list of tasteful stiffness/damping presets below.

##### - Presets for `{stiffness, damping}`
Commonly used spring configurations used like so: `spring(10, presets.wobbly)` or `spring(20, {...presets.gentle, precision: 0.1})`. [See here](https://github.com/chenglou/react-motion/blob/9cb90eca20ecf56e77feb816d101a4a9110c7d70/src/presets.js).
