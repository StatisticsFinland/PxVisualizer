# PxVisualizer

PxVisualizer is used to draw visualizations of PxGraf visualization API responses. The visualizations can be drawn using the provided react components or by using the core functions to draw the visualizations in any javascript enabled environment. The visualizations are drawn using HighCharts library.

The software is provided as is and Statistics Finland will **not** offer any support for setting up PxVisualizer or solving issues related to it.

**IMPORTANT:** PxVisualizer package uses HighCharts for rendering the visualizations. Please note that commercial use of HighCharts requires a commercial license. Non-commercial use may qualify for a free educational or personal license. Read more about licenses 
in the [HighCharts shop](https://shop.highsoft.com/?utm_source=npmjs&utm_medium=referral&utm_campaign=highchartspage&utm_content=licenseinfo).

## Getting Started
1.  Installation process
    - npm run build to build a working package, or npm run dev if you intend to develop the package using npm link
    - run npm link in the root folder
    - navigate to the project working directory root folder (the place where package.json resides)
    - run npm link pxvisualizer
    - you will have a symlink created for this project package, you can the import the package as usual in the separate project files (e.g. import {MyAwesomeComponent} from 'pxvisualizer')
    - note that npm install in the projects folder will destroy the symlinks, and you will need to link it again
    - symlink will overwrite the package import from node_modules if a released version of the package is available in package.json to make development easy and fun
    - NOT RECOMMENDED FOR DEVELOPMENT PURPOSES, REACT HAS PROBLEMS WITH LINK WHILE TWO DIFFERENT PROJECTS HAVE REACT THAT THEY DEPEND ON
2.  Development process using Storybook
    - run npm install if you have not touched this project at all / in a while
    - run npm run storybook
    - Storybook will start in your localhost:6006
    - If you develop a completely new component or add differing configurations to existing components, make a new story for them, visit ./src/stories/verticalBarChart for reference (or see storybook documentation)
3.	Software dependencies
    - check package.json for dependencies

## Structure
1.  react
    - contains react specific files, mainly components that can be used in a specific react based projects for visualizing pxgraf data. Depends on React and core folder functionality.
2.  core
    - contains specific highcharts draw function wrappers and conversion functions necessary to use pxgraf data and highcharts, and can be used anywhere were javascript is enabled. Depends on HighCharts.
3.  stories
    - contains storybook stories to enable independent development of the library
    - not related to build in any way, all dependencies are dev dependencies

\* Do not mix this structure! It will be easier to split to separate projects if needed if we maintain this kind of structure in the files. Possible to split core as a separate package and make specific libraries (e.g. React component library) depend on the core package.

## Build and Test
- Project is built using microbundle.
- npm run build will build a working library in ./dist folder
- npm run dev will build a working library in ./dist folder in watch mode, meaning when changes occur the package will be rebuilt
- npm run test will run the test cycle (WIP)

## Published NPM module

TBA Once the module has been published to NPM registry.

## Versioning

The next version you want to publish as @latest, should be set with `npm version major|minor|patch`.

Pipeline validates that version you have set is greater than latest already published.

### Versioning in a pipeline explained

```sh
// PR version     0.0.4       - we are here
// d version      0.0.3-d.2
// t version      0.0.3-t.2
// Latest version 0.0.3

// PR version     0.0.4
// d version      0.0.4-d.0   - now we are here
// t version      0.0.3-t.2
// Latest version 0.0.3

// PR version     0.0.4
// d version      0.0.4-d.0
// t version      0.0.4-t.0   - now we are here
// Latest version 0.0.3

// PR version     0.0.4
// d version      0.0.4-d.0
// t version      0.0.4-t.0
// Latest version 0.0.4       - now we are here
```