import Marquee from "./Marquee.vue";

export default {
  title: "Howie/Marquee",
  component: Marquee,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Marquee },
  template: '<marquee v-bind="$props" />',
});

export const Step = Template.bind({});
Step.args = {
  content: [
    "測試內容第一行",
    "go go go go go go go go go go go ",
    "測試內容第三",
  ],
  step: 100,
};

export const Duration = Template.bind({});
Duration.args = {
  content: [
    "測試內容第一行",
    "go go go go go go go go go go go ",
    "測試內容第三",
  ],
  duration: 20,
};
