import IconChevron from "./IconChevron.vue";

export default {
  title: "Howie/Icon/Chevron",
  component: IconChevron,
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
    lineWidth: {
      description: "The symbol lineWidth.",
    },
    direction: {
      description: "The chevron direction.",
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

const TemplateChevron = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconChevron },
  template: '<icon-chevron v-bind="$props" />',
});

export const Chevron = TemplateChevron.bind({});
Chevron.args = {
  size: 24,
  mainColor: "currentColor",
  direction: "left",
  lineWidth: 2,
};
