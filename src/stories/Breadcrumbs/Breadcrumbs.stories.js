import Breadcrumbs from "./Breadcrumbs.vue";

export default {
  title: "Howie/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    list: {
      description: "The path list.",
      table: {
        type: {
          detail: `label & path are required.
          `,
        },
      },
    },
    mainColor: {
      description: "The nav color.",
    },
    secColor: {
      description: "The last path color.",
    },
    divider: {
      description: "The divider content between path.",
    },
  },
};

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumbs },
  template: '<breadcrumbs v-bind="$props" />',
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  mainColor: "rgb(37, 99, 235)",
  secColor: "rgb(156, 163, 175)",
  divider: "/",
  list: [
    { label: "首頁", path: "/" },
    { label: "分類", path: "/" },
    { label: "麵包屑", path: "/" },
    { label: "樣式", path: "/" },
  ],
};
