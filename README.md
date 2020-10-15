# Stimulus Textarea Autogrow

[![](https://img.shields.io/npm/dt/stimulus-textarea-autogrow.svg)](https://www.npmjs.com/package/stimulus-textarea-autogrow)
[![](https://img.shields.io/npm/v/stimulus-textarea-autogrow.svg)](https://www.npmjs.com/package/stimulus-textarea-autogrow)
[![](https://github.com/stimulus-components/stimulus-textarea-autogrow/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-textarea-autogrow)
[![](https://github.com/stimulus-components/stimulus-textarea-autogrow/workflows/Test/badge.svg)](https://github.com/stimulus-components/stimulus-textarea-autogrow)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-textarea-autogrow.svg)](https://github.com/stimulus-components/stimulus-textarea-autogrow)
[![Netlify Status](https://api.netlify.com/api/v1/badges/073b5fee-358d-4dbf-b807-52034690f8ef/deploy-status)](https://stimulus-textarea-autogrow.netlify.com)

## Getting started

A Stimulus controller to asynchronously load HTML from an url.

## Installation

```bash
$ yarn add stimulus-textarea-autogrow
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import TextareaAutogrow from "stimulus-textarea-autogrow"

const application = Application.start()
application.register("textarea-autogrow", TextareaAutogrow)
```

## Usage

In your view:
```html
<textarea data-controller="textarea-autogrow">
Very long text here.
</textarea>

<textarea
  data-controller="textarea-autogrow"
  data-textarea-autogrow-resize-debounce-delay="500"
>
Very long text here.
</textarea>
```

## Configuration

The height is calculated on window resize to match the content height.

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-textarea-autogrow-resize-debounce-delay` | `100` | Delay before autogrow on resize in milliseconds (0 to disable). | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.

```js
import TextareaAutogrow from "stimulus-textarea-autogrow"

export default class extends TextareaAutogrow {
  connect() {
    super.connect()
    console.log("Do what you cant here.")
  }
}
```

These controllers will automatically have access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
