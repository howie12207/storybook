import CountTo from "./CountTo.vue";

export default {
  title: "Howie/CountTo",
  component: CountTo,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CountTo },
  template: `<count-to :start-val="startVal" :end-val="endVal" :duration="duration" :autoplay="autoplay" :decimals="decimals" :decimal="decimal"
     :separator="separator" :prefix="prefix" :suffix="suffix" :use-easing="useEasing" />`,
});

export const Custom = Template.bind({});
Custom.args = {
  endVal: 77347,
};

export const Fix = Template.bind({});
Fix.args = {
  endVal: 77347,
  prefix: "NT$ ",
  suffix: " 元",
};

export const Decimals = Template.bind({});
Decimals.args = {
  endVal: 30.67,
  decimals: 2,
};
