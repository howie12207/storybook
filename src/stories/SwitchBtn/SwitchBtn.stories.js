import SwitchBtn from "./SwitchBtn.vue";

export default {
  title: "Howie/SwitchBtn",
  component: SwitchBtn,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwitchBtn },
  template: '<switch-btn v-bind="$props" />',
});

export const Custom = Template.bind({});
Custom.args = {
  leftLabel: "關",
  rightLabel: "開",
};
