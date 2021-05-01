import Breadcrumbs from "./Breadcrumbs.vue";

export default {
  title: "Howie/Breadcrumbs",
  component: Breadcrumbs,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumbs },
  template: '<breadcrumbs v-bind="$props" />',
});

export const Custom = Template.bind({});
Custom.args = {
  mainColor: "rgb(37, 99, 235)",
  secColor: "rgb(156, 163, 175)",
  divider: "/",
  list: [
    { name: "首頁", path: "/" },
    { name: "分類", path: "/" },
    { name: "麵包屑", path: "/" },
    { name: "樣式", path: "/" },
  ],
};
