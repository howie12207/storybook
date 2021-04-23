import IconMore from "./IconMore.vue";

export default {
  title: "Howie/Icon",
  component: IconMore,
};

const TemplateMore = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconMore },
  template: '<icon-more v-bind="$props" />',
});

export const More = TemplateMore.bind({});
More.args = {
  size: 10,
  mainColor: "currentColor",
};
