# Joe's AWS Assignment

Hi, My name is ZhouDing (周鼎).

This is my aws-assignment for aws technical interview. Appreciate this opportunity provided, and I'll be greate honnored if I had chance to work in AWS.

## Getting Start

- Install: `npm install`

- Start DevServer for local demo: `npm start dev`

- Run E2E test: `npm test`

**Works with Node.js 10+**.

### Try the Demos Locally

Start the server with `npm run dev`, then head to `http://localhost:8080` to see it in action.

### Browser Compatibility

All morden browsers should be fine. Lastest Chrome is recommended.

## About This Project

- Left side menu navigation is implemented.
- The workflow of "Add Device Type" is implemented.
- E2E Test is considered and implemented.
- Multilingual: English & Chinese version.
- Responsive Mobile Version (only design concept, no bussines funtion implemented)

This App is trying to reproduce the aws iot-simulator console as faithful as possible. I worked on it quite a while, hope it could help to demostrate my skills and the understanding about front-end engineering comprehensively. Because I couldn't do it with full-time manner, so some details and subtles had to be ommited. but it's still my best shot within designated time window.

For better frontend engineering, few backend apis are mocked in the webpack devSever, that's why you need keep the devServer up while you browse this App. Besides, the "Device Type" data was stored in the devServer's memory, so your input could be persistent while you switch between different functionality, but they will be vanished after the devServer reboot.

When you run the E2E tests, a puppeteer controlled Chromium will start, simulate the interaction between the user and the App; that's because I think it's better way to understand my idea about the test, and I didn't tuning the test for headless browser, so please keep it as it is when you try out the E2E tests.

The default language of this App is English, you switch to Chinese with the button on the upper right coner. And this App can be viewed on mobile phone, but just a App skeleton, no busines function avaliable. (Try it out, I think it's looking good.)

I have few ideas about better UX/UE and UI logic, let's talk about it during the interview!
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

  - `actions`: All actions (may or may not relate to redux) that interact with backend are located here, App-wide actions (e.g. expand or collapse the side navigation menu) also included.

  - `assets`: Static resources are located here, such as images, favicon, font etc.

  - `compnents`: Common UI Components which used in this App globally.

  - `config`: Global configurations that affect App behavior, such as backend url, app store url, brand name etc.

  - `hooks`: Customized common React hooks are placed here, extract from App logic.

  - `i18n`: React-intl build target folder, generate final language bundles. Not used in coding.

  - `message`: Message definitions, splited by business module accordingly. Used by React-intl as language bundles sources.

  - `pages`: Main body of the App, splited as Desktop and Mobile for the flexibility of customizing the appearance for different divices.

  - `reducer`: Redux reducers are located here. Calculate App-wide state.

  - `theme`: Material-UI theme definiton, splited as Desktop and Mobile, for the subtle difference between device.

  - `utils`: Common functions, helper, formatter... etc.

  - `index.jsx`: Start point of App & Webpack entrance.

- `templates`: The App SPA host HTML file, will servered as static resource by web server.

- `tests`: E2E Tests are recorded here.

- `tools`: Tools for build.

- `.bablerc`: Babel configuration file.

- `.editorconfig`: Editor configuration file.

- `.eslintignore`: Eslint ignore descriptor.

- `.eslintrc.js`: Esslint configuration file.

- `.gitignore`: Git ignore descriptor.

- `package.json`: What you think of it, refer here for more info about libs that been used.

- `README.md`: What you reading now ;)

- `webpack.config.babel.js`: Webpack configuation file, modulized and managed with `webpack.part.js`.

- `webpack.parts.js`: Webpack configuation file, splited by loaders / plugins which been used.

### Thanks for your review, hope you like it and give me a high score! I love AWS and REALLY REALLY want get the position!
