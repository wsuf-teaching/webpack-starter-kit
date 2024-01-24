# Webpack starterkit

# Usage

clone this repo, `cd` into the folder then do `npm install` inside the project folder.

- use `npm run dev` to work in dev mode
- production build can be done with `npm run build`

# Linter setup on vscode

## js linting

1. Make sure eslint extension for vscode is not installed.

[link to the extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. run `npm run eslint` to test the linter. The extension should forward the errors/warnings to your editor.

## css/scss linting

1. install stylelint extension

[link to the extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

2. Make sure to disable the built in css/sass validator in VSCode in order to avoid duplicate error reports in vscode ( `cmd+shift+p` on mac `ctrl+shift+p` on pc, and then type: settings json and choose "Preferences: Open Settings (JSON) ") :

```
"scss.validate": false,
"css.validate": false,
```
3. Run `npm run stylelint` to test the linter. The extension should forward the errors/warnings to your editor.

## Code formatting

1. Install Prettier extension

[link to the extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. configure vscode to use prettier as the default formatter

```
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

For all three extensions, don't forget to check the extensions homepage for more configuration options.
