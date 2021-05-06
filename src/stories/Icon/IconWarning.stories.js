import IconWarning from "./IconWarning.vue";

export default {
  title: "Howie/Icon",
  component: IconWarning,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconWarning },
  template: '<icon-warning v-bind="$props" />',
});

export const Warning = Template.bind({});
Warning.args = {
  size: 32,
  mainColor: "#fff",
  borderColor: "#ccc",
  bgColor: "#ccc",
};
