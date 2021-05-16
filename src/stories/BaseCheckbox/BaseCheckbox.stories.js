import BaseCheckbox from "./BaseCheckbox.vue";

export default {
  title: "Howie/BaseCheckbox",
  component: BaseCheckbox,
  argTypes: {
    options: {
      description: "Provide options to select.",
      table: {
        type: {
          detail: "label & value are required.",
        },
      },
    },
    value: {
      description: "Use v-model to define value.",
      table: {
        category: "Not operate manually",
      },
    },
    input: {
      description: "The checkbox input event.",
      action: "input",
    },
  },
};

const TemplateCustom = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseCheckbox },
  template: `
      <base-checkbox v-bind="$props" @input="input" />
   `,
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  options: [
    { label: "蘋果", value: "apple" },
    { label: "香蕉", value: "banana" },
    { label: "西瓜", value: "watermelon" },
    { label: "鳳梨", value: "pineapple" },
  ],
};
