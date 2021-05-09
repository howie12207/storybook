import Marquee from "./Marquee.vue";

export default {
  title: "Howie/Marquee",
  component: Marquee,
  argTypes: {
    content: {
      description: "Provide marquee list.",
    },
    duration: {
      description: "One round time. Priority higher than step.",
      table: {
        type: {
          detail: "second",
        },
      },
    },
    step: {
      description: "One round time. Priority lower than duration.",
      table: {
        type: {
          detail: "px",
        },
      },
    },
    color: {
      description: "The text color.",
    },
    stop: {
      description: "Hover whether stop or not.",
    },
  },
};

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Marquee },
  template: '<marquee v-bind="$props" />',
});

export const Step = TemplateCustom.bind({});
Step.args = {
  content: [
    "測試內容第一行",
    "go go go go go go go go go go go ",
    "測試內容第三",
  ],
  step: 100,
};

export const Duration = TemplateCustom.bind({});
Duration.args = {
  content: [
    "測試內容第一行",
    "go go go go go go go go go go go ",
    "測試內容第三",
  ],
  duration: 20,
};
