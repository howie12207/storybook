import IconArrow from "./IconArrow.vue";

export default {
  title: "Howie/Icon",
  component: IconArrow,
  argTypes: {
    direction: {
      control: { type: "select", options: ["left", "top", "right", "bottom"] },
    },
  },
};

const TemplateArrow = (args, { argTypes }) => ({
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
