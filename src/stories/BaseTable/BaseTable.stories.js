import BaseTable from "./BaseTable.vue";
import BaseButton from "../BaseButton/BaseButton.vue";

export default {
  title: "Howie/BaseTable",
  component: BaseTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTable },
  template: `<base-table v-bind="$props" />`,
});

const TemplateSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTable, BaseButton },
  template: `<div>
    <base-table v-bind="$props">
      <template #operation="thisData">
        <BaseButton text="刪除" />
      </template>
    </base-table>
  </div>`,
});

export const Custom = Template.bind({});
Custom.args = {
  listTitles: [
    { key: "日期", value: "date" },
    { key: "標題", value: "title" },
    { key: "內容", value: "content" },
    { key: "留言數", value: "comment" },
  ],
  listData: [
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
  ],
};

export const FixedHead = Template.bind({});
FixedHead.args = {
  listTitles: [
    { key: "日期", value: "date" },
    { key: "標題", value: "title" },
    { key: "內容", value: "content" },
    { key: "留言數", value: "comment" },
  ],
  listData: [
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
  ],
  fixedHead: "300px",
};

export const Format = Template.bind({});
Format.args = {
  listTitles: [
    { key: "日期", value: "date", type: "date" },
    { key: "標題", value: "title" },
    { key: "內容", value: "content" },
    { key: "留言數", value: "comment", type: "thousand" },
  ],
  listData: [
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
  ],
};

export const LimitWidth = Template.bind({});
LimitWidth.args = {
  listTitles: [
    { key: "日期", value: "date", width: "120px" },
    { key: "標題", value: "title" },
    { key: "內容", value: "content" },
    { key: "留言數", value: "comment" },
  ],
  listData: [
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
  ],
};

export const Slot = TemplateSlot.bind({});
Slot.args = {
  listTitles: [
    { key: "日期", value: "date", width: "120px" },
    { key: "標題", value: "title" },
    { key: "內容", value: "content" },
    { key: "留言數", value: "comment" },
    { key: "操作", type: "slot", name: "operation" },
  ],
  listData: [
    {
      title: "StoryBook",
      content: "StoryBook的展示",
      date: "2020-07-07 07:07:07",
      comment: 7000,
    },
    {
      title: "Tailwind",
      content: "Tailwind的展示",
      date: "2020-07-17 17:17:17",
      comment: 7777,
    },
    {
      title: "Vue",
      content: "Vue的展示",
      date: "2020-08-08 08:08:08",
      comment: 6,
    },
    {
      title: "Nuxt",
      content: "Nuxt的展示",
      date: "2020-09-09 09:09:09",
      comment: 200,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  listTitles: [
    { key: "日期", value: "date" },
    { key: "標題", value: "title" },
    { key: "內容", value: "content" },
    { key: "留言數", value: "comment" },
  ],
  listData: [],
};
