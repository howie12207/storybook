import CountTo from "./CountTo.vue";

export default {
  title: "Howie/CountTo",
  component: CountTo,
  argTypes: {
    endVal: {
      description: "Set end value.",
    },
    startVal: {
      description: "Set start value.",
    },
    duration: {
      description: "Set start to end time.",
      table: {
        type: {
          detail: "milliseconds",
        },
      },
    },
    decimals: {
      description: "Number of decimal places.",
    },
    separator: {
      description: "The symbol between thousand.",
    },
    prefix: {
      description: "Set prefix.",
    },
    suffix: {
      description: "Set suffix.",
    },
    autoplay: {
      description: "Define status whether autoplay or not.",
    },
    useEasing: {
      description: "Use ease effect or not.",
    },
    decimal: {
      description: "The symbol of decimal.",
    },
  },
};

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CountTo },
  template: `<count-to :start-val="startVal" :end-val="endVal" :duration="duration" :autoplay="autoplay" :decimals="decimals" :decimal="decimal"
     :separator="separator" :prefix="prefix" :suffix="suffix" :use-easing="useEasing" />`,
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  endVal: 77347,
};

export const Fix = TemplateCustom.bind({});
Fix.args = {
  endVal: 77347,
  prefix: "NT$ ",
  suffix: " 元",
};

export const Decimals = TemplateCustom.bind({});
Decimals.args = {
  endVal: 30.67,
  decimals: 2,
};
