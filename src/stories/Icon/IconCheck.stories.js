import IconCheck from "./IconCheck.vue";

export default {
  title: "Howie/Icon/Check",
  component: IconCheck,
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
  components: { IconCheck },
  template: '<icon-check v-bind="$props" />',
});

export const Check = Template.bind({});
Check.args = {
  size: 44,
  mainColor: "green",
};
