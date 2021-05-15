import IconMore from "./IconMore.vue";

export default {
  title: "Howie/Icon/More",
  component: IconMore,
  argTypes: {
    size: {
      description: "The dot width & height.",
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

const TemplateMore = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconMore },
  template: '<icon-more v-bind="$props" />',
});

export const More = TemplateMore.bind({});
More.args = {
  size: 10,
  mainColor: "currentColor",
};
