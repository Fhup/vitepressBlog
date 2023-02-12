---
title: "指南"
---

# {{  ':tada:' + ' FhUI 是什么?'  }}

一个 Mini 版的组件库，基于 Vite 栈。为需要学习前端工程化的同学搭建的组件库搭建教学模型。

## Features

- ⚡️ Vue 3, Vite 4, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
npm i FhUI
```

## Quick Start

```js
import Vue from "vue";
import FhUI from "zs-design";

const App = {
  template: `
                <MyButton/>
            `,
};

createApp(App).use(FhUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.
