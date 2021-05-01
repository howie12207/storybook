import IconLoading from "./IconLoading.vue";

export default {
  title: "Howie/Icon",
  component: IconLoading,
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
