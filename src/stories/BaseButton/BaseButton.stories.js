import BaseButton from "./BaseButton.vue";

export default {
  title: "Howie/Button/Base",
  component: BaseButton,
  argTypes: {
    label: {
      description: "Show text on button.",
    },
    mainColor: {
      description:
        "The border color and text color in normal, or background color when hover.",
    },
    disabledColor: {
      description: "The border color and text color when disabled.",
    },
    disabled: {
      description: "Define status whether disalbed or not.",
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

const TemplateBase = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<base-button v-bind="$props" @click="click" />',
});

export const Base = TemplateBase.bind({});
Base.args = {
  label: "Base",
};
