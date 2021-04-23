import ShineButton from "./ShineButton.vue";

export default {
  title: "Howie/Button",
  component: ShineButton,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShineButton },
  template: '<shine-button v-bind="$props" />',
});

export const Shine = Template.bind({});
Shine.args = {
  text: "Shine",
  defaultColor: "#b0b0b0",
};
