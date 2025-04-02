<p align="center"><img src="public/icon.svg" width="100" height="100"></p>
<h1 align="center">Flow Message</h1>

<div align="center">

[![star](https://img.shields.io/github/stars/ProgramCX/flow_im_app?logo=github&style=round-square)](https://github.com/ProgramCX/flow_im_app/stargazers)
[![license](https://img.shields.io/github/license/ProgramCX/flow_im_app?style=round-square&logo=github)](https://github.com/ProgramCX/flow_im_app/blob/main/LICENSE)
[![Activity](https://img.shields.io/github/last-commit/ProgramCX/flow_im_app?style=round-square&logo=github)](#)
[![Frame](https://img.shields.io/badge/Frame-Vue3.x/Electron-orange.svg?style=round-square&logo=github)](#)

</div>

> 

English | [中文](README-zh.md)

## Introduction

Flow Message is a cross-platform instant messaging software based on Vue3.x and Electron, designed to provide users with a secure, fast, and stable communication environment. It supports multiple platforms including Windows, macOS, and Linux.

## Features

- **Cross-Platform Support**: Enjoy a consistent experience on Windows, macOS, and Linux.
- **Security**: Utilizes advanced encryption technology to protect your chat records and personal information.
- **Fast and Stable**: Built on Electron and Vue3.x, ensuring smooth performance without lags or crashes.
- **Simple and Intuitive Interface**: A clean design that makes it easy to get started.
- **Multiple Chat Functions**: Supports text, images, and voice messages to meet various communication needs.

## Contributing

Contributions in any form—code, documentation, design, etc.—are welcome.

## Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/ProgramCX/flow_im_app.git
```
2. Install dependencies:
```bash
cd flow_im_app
cnpm install    # If you are in mainland China, using cnpm is recommended.
```
3. Start the project:
```bash
npm run dev
```
4. Preview the project in the browser:
```bash
npm run preview
```
5. Build the project:
```bash
npm run build
```
**Note**:  
Due to package download requirements for Electron, users in mainland China might face download issues. Please manually download the corresponding Electron package from the [Electron releases page](https://github.com/electron/electron/releases) and place it in the `electron` folder in the project root. For Windows users, it is recommended to place it in `%LOCALAPPDATA%/electron/Cache` and extract it there.

After building, the installer will be generated in the `release` directory.

## License

Flow Message is released under the [MIT License](LICENSE).

--- 

Thank you for using Flow Message! We look forward to your feedback and suggestions.