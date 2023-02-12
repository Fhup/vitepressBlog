---
title: "button"
---

# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

```vue
<template>
  <f-button>默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="info">信息按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
</template>
```

:::

## 不同尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<f-button>默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="info">信息按钮</f-button>
<f-button type="warning">警告按钮</f-button>
<f-button type="danger">危险按钮</f-button>
```

:::

## 加载中

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::demo

```vue
<f-button>默认按钮</f-button>
<f-button type="primary">主要按钮</f-button>
<f-button type="success">成功按钮</f-button>
<f-button type="info">信息按钮</f-button>
<f-button type="warning">警告按钮</f-button>
<f-button type="danger">危险按钮</f-button>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |

::: details go element-ui

https://element.eleme.cn/#/zh-CN

:::

## 在线编辑

::: sandbox

```vue /src/App.vue [active]
<template>
  <div>{{ hello }}</div>
</template>

<script setup>
import { ref } from "vue";

const hello = ref("Hello World!");
</script>
```

```js /src/main.js
import App from "./App.vue";
import { createApp } from "vue";

createApp(App).mount("#app");
```

:::

::: sandbox {deps="vue3-toastify: latest, animate.css: ~4.1.1"}

```vue /src/App.vue
<script setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const notify = () => {
  toast.success("Success Notification!", {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};
</script>

<template>
  <div>
    <button @click="notify">Notify !</button>
  </div>
</template>
```

:::
