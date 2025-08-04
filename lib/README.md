# Nux UI

**React Native UI CLI** — A command-line tool for quickly copying reusable React Native components directly from a remote repository into your project.

## ✨ Features

- 🔧 Initialize a component folder structure in your React Native project
- 📦 List all available UI components from the remote repository
- 📥 Add specific components or import all at once
- ⚡ Fast and developer-friendly CLI experience

## 📦 Installation

Using **npm**:

```bash
npm install @nuxui/core
```

Or using **yarn**:

```bash
yarn add @nuxui/core
```

## 🚀 Usage

You can run the CLI directly with `npx`:

```bash
npx @nuxui/core <command>
```

### Available Commands

| Command      | Description                                |
| ------------ | ------------------------------------------ |
| `init`       | Initializes the component folder structure |
| `list`       | Lists all available components             |
| `add <name>` | Adds a specific component by name          |
| `add --all`  | Adds all available components              |

## 📁 Example

```bash
npx @nuxui/core init
npx @nuxui/core list
npx @nuxui/core add button
npx @nuxui/core add --all
```
