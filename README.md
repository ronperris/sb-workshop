# Security Code Review Workshop

## Preinstall

- `git` command-line tools.
- `node` runtime, I recommend installing 12.16.0 via [nvm](https://github.com/nvm-sh/nvm)
- `eslint` using `npm install -g eslint`
- [Visual Studio Code](https://code.visualstudio.com/)
- [code](https://code.visualstudio.com/docs/setup/mac) command in your path.
- `code --install-extension dbaeumer.vscode-eslint`

## Why are we looking?

- DOM based Cross-site Scripting

## What are we looking at?

- autolinker@3.11.1

  <details>
    <summary>Hint</summary>
      Run the demo page locally. https://www.npmjs.com/package/autolinker#running-the-live-example-page-locally

      In the input box, try a cross-site scripting payload.

  </details>

- bootbox@5.4.0

    <details>
      <summary>Hint</summary>
        Load the library on a page.
        Try a cross-site scripting payload in bootbox.alert(). 
    </details>

- react-autolinker-wrapper@1.20

    <details>
      <summary>Hint</summary>
      https://github.com/gvas/react-autolinker-wrapper/blob/master/src/AutolinkerWrapper.js#L31
    </details>

- auth0-lock@11.20.4

  <details>
    <summary>Hint</summary>
    https://github.com/auth0/lock/security/advisories/GHSA-w2pf-g6r8-pg22
  </details>

## How are we looking?

1. Review the module documentation.
2. Review the module source.
3. Risk assess the module.
4. Install a linter that might help.
5. Find vulnerabilities.

## What next?

1. Make a proof-of-concept project to demonstrate the vulnerability.
2. Try to patch the library.
