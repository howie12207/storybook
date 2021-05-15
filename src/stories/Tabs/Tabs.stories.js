import Tabs from "./Tabs.vue";

export default {
  title: "Howie/Tabs",
  component: Tabs,
  argTypes: {
    tabs: {
      description: "The list of tabs.",
      table: {
        type: {
          detail: `label & value are required.
1. label for tab text.
2. value for tab value. 
          `,
        },
      },
    },
    mainColor: {
      description: "The main color.",
    },
    width: {
      description: "Setting each tab fixed width.",
    },
    tabHandle: {
      description: "Tab click events.",
      table: {
        type: {
          summary: "function",
        },
      },
      action: "tabHandle",
    },
  },
};

const TemplateCustom = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs },
  template: '<Tabs v-bind="$props" @tabHandle="tabHandle" />',
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  tabs: [
    { label: "最新", value: "new" },
    { label: "熱門文章", value: "hot" },
    { label: "最受歡迎的文章", value: "popular" },
    { label: "精選文章", value: "good" },
  ],
};

export const FixedWidth = TemplateCustom.bind({});
FixedWidth.args = {
  tabs: [
    { label: "最新", value: "new" },
    { label: "熱門文章", value: "hot" },
    { label: "最受歡迎的文章", value: "popular" },
    { label: "精選文章", value: "good" },
  ],
  width: "120px",
};
