import ShineButton from "./ShineButton.vue";

export default {
  title: "Howie/Button/Shine",
  component: ShineButton,
  argTypes: {
    label: {
      description: "Show text on button.",
    },
    mainColor: {
      description: "The border color and text color in normal.",
    },
    hoverColor: {
      description: "The border color and text color when hover.",
    },
    click: {
      description: "The element's click event.",
      action: "click",
      table: {
        type: {
          summary: "function",
        },
      },
    },
  },
};

const TemplateShine = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShineButton },
  template: '<shine-button v-bind="$props" @click="click" />',
});

export const Shine = TemplateShine.bind({});
Shine.args = {
  label: "Shine",
  mainColor: "#b0b0b0",
};
