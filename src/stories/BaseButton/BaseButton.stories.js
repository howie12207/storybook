import BaseButton from "./BaseButton.vue";

export default {
  title: "Howie/Button",
  component: BaseButton,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<base-button v-bind="$props" />',
});

export const Base = Template.bind({});
Base.args = {
  text: "Base",
};
