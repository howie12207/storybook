import IconX from "./IconX.vue";

export default {
  title: "Howie/Icon",
  component: IconX,
};

const TemplateX = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconX },
  template: '<icon-x v-bind="$props" />',
});

export const X = TemplateX.bind({});
X.args = {
  size: 24,
  mainColor: "currentColor",
};
