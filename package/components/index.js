import button from "./button/index.vue";
// 插件的方式去注册
export default {
  install(app) {
    app.component(button.name, button);
  },
};
