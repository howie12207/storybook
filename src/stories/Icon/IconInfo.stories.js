import IconInfo from "./IconInfo.vue";

export default {
  title: "Howie/Icon/Info",
  component: IconInfo,
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
