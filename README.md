# pwa-autoclicker

PWA Autoclicker is an example of progressive web application with Lit. 
The app consists in an easy game based in clicks and bonus clicks according to your performance with the mouse.
The app is generated from PWABuilder pwa-starter boilerplate project and modified in order to defined pages and components.

App featurings:

- Has a Service Worker system using [Workbox](https://developers.google.com/web/tools/workbox/)
- Scores close to 100 on Lighthouse out of the box 
- Has everything needed to be installable in the browser
- Is ready to be package for the app stores using [PWABuilder](https://www.pwabuilder.com)
- Could use Azure Statics Web Apps Cli to emulate prod locally and deploy your app easily to Azure.
- It is already deployed to Github Pages in the following URL: ([Github Pages/](https://juanceth.github.io/pwa-autoclicker/))


## To use the app locally

Once you are placed in the repo folder, you can execute the following commands:

- npm install: This command will install the dependencies and prepare the packages for the app.
- npm run start: This command will run the app in your browser using localhost.
- npm run test: This command will run the unit tests of the application.
- npm run build: This command will build the project and generate the dist folder with all the files for production mode.
- npm run deploy: This command will guide you through the deploy process with Azure Static Web Apps.


## Others

- The app have 2 pages: home and game page, as the main views/routes of the app. 
- The app have reusable lit components like: pwa-button, pwa-header or pwa-input.
- Unit Tests of the app are configured with Jest. By the moment it is not possible to use the utilities provided by the @open-wc/testing
  library as there are several compatibility problems between libraries using javascript and typescript that have not yet been resolved.
