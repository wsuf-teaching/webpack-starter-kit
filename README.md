# Webpack starterkit

This is the repository for the webpack starter kit that contains an example starter project that you can use to ease up development.
It has all the necessary packages to run a live server, automatic compilation of resources including css and js with webpack as well as linter (static code analysis tool) to help you write better code with consistent formatting.

# Usage

Clone this repo (or download and extract it), `cd` into the folder then do `npm install` inside the project folder.

- Use `npm run dev` to work in dev mode. It will run a live development environment that automatically picks up changes done to CSS, JS or HTML.
- Production build can be done with `npm run build`

# Linter setup on vscode

The kit includes ESLint. It analyzes your JavaScript code to identify and report patterns that might be problematic or do not adhere to coding standards.It helps catch common programming errors, stylistic issues, and potential bugs early in the development process.

## js linting

1. Make sure eslint extension for vscode is <b>NOT</b> installed: [link to the extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Run `npm run eslint` to test the linter. The extension should forward the errors/warnings to your editor. If it does not say anything, it means your code is already adequately formatted. :)

3. If we also want it to fix formatting mistakes, run `.\node_modules\.bin\eslint src --fix` (with "/" separators instead of "\" in linux or mac systems) instead.


## Code formatting

1. Install the Prettier extension: [link to the extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


[link to the extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Configure vscode to use prettier as the default formatter:

```
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

The default key bind should be `CTRL+K CTRL+F` (press the two key-combos after each other) for selection and `SHIFT+CTRL+I` (or `SHIFT+ALT+F` in windows) for the whole current document.

Look up your shortcut in the "File" > "Preferences" > "Keyboard shortcuts" menu, then search for "format".

![formatter](https://i.imgur.com/Uu77zK5.png)

For all three extensions, don't forget to check the extensions homepage for more configuration options.


## css/scss linting

1. Install the stylelint extension: [link to the extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

2. Make sure to disable the built in css/sass validator in VSCode in order to avoid duplicate error reports in vscode ( `cmd+shift+p` on mac `ctrl+shift+p` on pc, and then type: settings json and choose "Preferences: Open (User) Settings (JSON) ") :

```
"scss.validate": false,
"css.validate": false,
```
3. Run `npm run stylelint` to test the linter. The extension should forward the errors/warnings to your editor.
