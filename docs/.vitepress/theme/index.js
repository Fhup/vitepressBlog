import DefaultTheme from "vitepress/theme";
// 主题样式
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";
import myCpn from "../../../package/components";
import "./styles/vars.css";
import "../../../package/components/button/index.css";
// 代码编辑(只能编辑)
import { vuePlugin } from "vitepress-demo-editor";
import "vitepress-demo-editor/dist/style.css";

// 代码编辑(可以运行)
import { Sandbox } from "vitepress-plugin-sandpack";
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components

    // 代码编辑
    // ctx.app.use(vuePlugin, {
    //   defaultDirection: "row", // 默认显示方向
    //   ms: 30, // 编辑器防抖时间
    //   handleError(errs) {}, // 错误信息
    //   onMonacoCreated(monaco) {}, // monaco 创建成功时触发
    // });
    // 自己的全局button
    ctx.app.use(myCpn);
    // 代码折叠
    ctx.app.component("Demo", Demo);
    ctx.app.component("DemoBlock", DemoBlock);

    ctx.app.component("Sandbox", Sandbox);
  },
};
