import Tabs from "./Tabs.vue";

export default {
  title: "Howie/Tabs",
  component: Tabs,
  argTypes: {
    tabHandle: { action: "tabHandle" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs },
  template: '<Tabs v-bind="$props" @tabHandle="tabHandle" />',
});

export const Base = Template.bind({});
Base.args = {
  tabs: [
    { label: "最新", value: "new" },
    { label: "熱門文章", value: "hot" },
    { label: "最受歡迎的文章", value: "popular" },
    { label: "精選文章", value: "good" },
  ],
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  tabs: [
    { label: "最新", value: "new" },
    { label: "熱門文章", value: "hot" },
    { label: "最受歡迎的文章", value: "popular" },
    { label: "精選文章", value: "good" },
  ],
  width: "120px",
};
