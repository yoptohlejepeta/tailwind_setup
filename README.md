# tailwind_setup

An experiment to create a sample webapp using FastAPI, pnpm and flowbite with tailwind.

This is done independently, but should roughly copy [the official tailwind flask starter repo](https://github.com/themesberg/tailwind-flask-starter) using FastAPI.

## Installation

`curl -fsSL https://get.pnpm.io/install.sh | sh -` and restart vscode to install pnpm.

`pnpm install` to install dependencies.

## Development guide

To update your css bundle, use `pnpm exec tailwindcss -i ./css/main.css -o ./css/output.css --watch`.

To update your js bundle, use `pnpm exec rollup -c`.
