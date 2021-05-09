import IconLoading from "./IconLoading.vue";

export default {
  title: "Howie/Icon/Loading",
  component: IconLoading,
  argTypes: {
    size: {
      description: "The icon width & height.",
      table: {
        type: {
          detail: "px",
        },
      },
    },
    mainColor: {
      description: "The symbol color.",
    },
  },
};

const TemplateX = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconLoading },
  template: '<icon-loading v-bind="$props" />',
});

export const Loading = TemplateX.bind({});
Loading.args = {
  size: 80,
  mainColor: "#f00",
};
