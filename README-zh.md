<p align="center"><img src="public/icon.svg" width="100" height="100"></p>
<h1 align="center">Flow Message</h1>

<div align="center">

[![star](https://img.shields.io/github/stars/ProgramCX/flow_im_app?logo=github&style=round-square)](https://github.com/ProgramCX/flow_im_app/stargazers)
[![license](https://img.shields.io/github/license/ProgramCX/flow_im_app?style=round-square&logo=github)](https://github.com/ProgramCX/flow_im_app/blob/main/LICENSE)
[![Activity](https://img.shields.io/github/last-commit/ProgramCX/flow_im_app?style=round-square&logo=github)](#)
[![Frame](https://img.shields.io/badge/Frame-Vue3.x/Electron-orange.svg?style=round-square&logo=github)](#)

</div>

> 

[English](README.md) | 中文

## 介绍
Flow Message 是一个基于 Vue3.x 和 Electron 的跨平台即时通讯软件，旨在为用户提供一个安全、快速、稳定的聊天环境。Flow Message 支持多种平台，包括 Windows、macOS 和 Linux。

## 功能
- **跨平台支持**：Flow Message 支持 Windows、macOS 和 Linux 等多个操作系统，确保用户在不同设备上都能享受一致的使用体验。

- **安全性**：Flow Message 采用先进的加密技术，确保用户的聊天记录和个人信息安全无忧。

- **快速稳定**：Flow Message 基于 Electron 和 Vue3.x 构建，具有良好的性能和稳定性，确保用户在使用过程中不会遇到卡顿或崩溃的问题。

- **简洁易用的界面**：Flow Message 采用简洁明了的设计风格，用户可以轻松上手，无需复杂的学习过程。

- **多种聊天功能**：Flow Message 支持文本、图片、语音等多种聊天方式，满足用户的不同需求。

## 贡献

欢迎任何形式的贡献，包括但不限于代码、文档、设计等。

## 安装步骤
 1. 克隆项目
```bash
git clone https://github.com/ProgramCX/flow_im_app.git
```
2. 安装依赖
```bash
cd flow_im_app

cnpm install    #如果你在中国大陆地区，建议使用cnpm安装依赖
```

3. 启动项目
```bash
npm run dev
```
4. 浏览器预览项目
```bash
npm run preview
```

5. 打包项目
```bash
npm run build
```

**注意**: 
由于打包需要下载electron的安装包，在中国大陆地区可能无法下载，可以自行到[electron release 页面](https://github.com/electron/electron/releases)下载和控制台打印输出链接信息中对应版本的安装包，放到项目根目录下的`electron`文件夹中。Windows 用户建议放在 %LOCALAPPDATA%/electron/Cache 目录下，并且解压到该目录下。

6. 打包完成后，安装包会在 `release` 目录下生成。

## 协议

Flow Message 使用 [MIT License](LICENSE) 协议.

---

感谢您使用 Flow Message，我们期待您的反馈和建议！