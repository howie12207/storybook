import IconChevron from "./IconChevron.vue";

export default {
  title: "Howie/Icon",
  component: IconChevron,
  argTypes: {
    direction: {
      control: { type: "select", options: ["left", "top", "right", "bottom"] },
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
