import IconCheck from "./IconCheck.vue";

export default {
  title: "Howie/Icon",
  component: IconCheck,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconCheck },
  template: '<icon-check v-bind="$props" />',
});

export const Check = Template.bind({});
Check.args = {
  size: 44,
  mainColor: "green",
};
