import IconArrow from "./IconArrow.vue";

export default {
  title: "Howie/Icon/Arrow",
  component: IconArrow,
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
    direction: {
      description: "The arrow direction.",
      control: { type: "select", options: ["left", "top", "right", "bottom"] },
      table: {
        type: {
          detail: "left, top, right, bottom",
        },
      },
    },
    pointer: {
      description: "Define whether hover effect or not.",
    },
  },
};

const TemplateArrow = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconArrow },
  template: '<icon-arrow v-bind="$props" />',
});

export const Arrow = TemplateArrow.bind({});
Arrow.args = {
  size: 24,
  mainColor: "currentColor",
  direction: "left",
};
