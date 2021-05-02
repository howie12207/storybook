import BaseSelect from "./BaseSelect.vue";

export default {
  title: "Howie/BaseSelect",
  component: BaseSelect,
  argTypes: {},
};

const TemplateBase = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseSelect },
  template: `
  <div>
      <base-select v-bind="$props" v-model="selected" />
      <base-select v-bind="$props" v-model="selected" /> </div>
   `,
  data() {
    return {
      selected: "",
    };
  },
});

export const Base = TemplateBase.bind({});
Base.args = {
  options: [
    { label: "蘋果", value: "apple" },
    { label: "香蕉", value: "banana" },
    { label: "西瓜", value: "watermelon" },
    { label: "鳳梨", value: "pineapple" },
  ],
};
