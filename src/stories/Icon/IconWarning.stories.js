import IconWarning from "./IconWarning.vue";

export default {
  title: "Howie/Icon/Warning",
  component: IconWarning,
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
  },
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
