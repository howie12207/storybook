import IconX from "./IconX.vue";

export default {
  title: "Howie/Icon/X",
  component: IconX,
  argTypes: {
    size: {
      description: "The icon width & height.",
      table: {
        type: {
          detail: "px",
        },
      },
    },
    mainColor: {
      description: "The symbol color.",
    },
    borderColor: {
      description: "The border color.",
    },
    bgColor: {
      description: "The background color.",
    },
    pointer: {
      description: "Define whether hover effect or not.",
    },
  },
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
