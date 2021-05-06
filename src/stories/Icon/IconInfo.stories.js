import IconInfo from "./IconInfo.vue";

export default {
  title: "Howie/Icon",
  component: IconInfo,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconInfo },
  template: '<icon-info v-bind="$props" />',
});

export const Info = Template.bind({});
Info.args = {
  size: 32,
  mainColor: "#fff",
  borderColor: "#ccc",
  bgColor: "#ccc",
};
