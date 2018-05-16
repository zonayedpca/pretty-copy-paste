## Pretty Copy Paste
This tools is built to make your copy paste easier than before. You can copy multiple contents at a time and also you can paste or use them later on

### Setup
- Clone this repository
- Install all the necessary dependencies using `npm install` (It contains some heavy packages, so take you time)
- You are ready for the development

### Development
- You can start development from the `src` directory
- open `index.js` file and It contains everything

### Launching the Project
You can run this project on development mode using the command `electron-forge start` But at first you must require electron-forge to be installed globally. You can follow [their documentation](https://github.com/electron-userland/electron-forge/tree/5.x) or you can just install the package globally
```
npm install -g electron-forge
```
Launch the Project
```
electron-forge start
```

### Packaging your Project
```
electron-forge package
```
If you want to specify platform / arch, use the --platform=<platform> and --arch=<arch> arguments.

### Generating a distributable for the Project
```
electron-forge make
```
This will generate platform specific distributable (installers, distribution packages, etc.) for you. By default, you can only generate distributable for your current platform. If you want to specify platform / arch, use the --platform=<platform> and --arch=<arch> arguments, but please note that some distributable are not available to be built on anything but the platform that is targeted. For example, appx (Windows Store) distributable can only be built on Windows.

### Limitations
As electron requires the whole chrome engine, so all the applications made using it will be larger in size. This simple application will take 50mb+ depending on your system and It is completely okay.

### Contribution
This project is always open to put something on it. Something useful and also legitimate can be added anytime. I will accept all kinds of useful pull request.

### Current Requirements
This project immediately requires some contributions on:
- User Interface as it doesn't have one
- Functionality as it is now very simple, something more interactive will be better

So All the developers, who are willing to contribute something, please focus on these problems first
