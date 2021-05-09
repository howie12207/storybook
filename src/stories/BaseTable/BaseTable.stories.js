import BaseTable from "./BaseTable.vue";
import BaseButton from "../BaseButton/BaseButton.vue";

export default {
  title: "Howie/BaseTable",
  component: BaseTable,
  argTypes: {
    listTitles: {
      description: "Provide table head.",
      table: {
        type: {
          detail: `label & key are required.
1. label for table head.
2. key correspond to list data.
3. type to format value.
(1) thousand
(2) date
(3) time
(4) slot
          `,
        },
      },
    },
    listData: {
      description: "Provide list data.",
    },
    fixedHead: {
      description: "Fixed head and set table height.",
    },
    default: {
      description: "Custom content.",
      table: {
        type: {
          summary: "slot:[key]",
          detail: "<template #key='thisData'>{{thisData}}</template>",
        },
      },
    },
  },
};

const TemplateCustom = (args, { argTypes }) => ({
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
        <BaseButton label="刪除" />
      </template>
    </base-table>
  </div>`,
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  listTitles: [
    { label: "日期", key: "date" },
    { label: "標題", key: "title" },
    { label: "內容", key: "content" },
    { label: "留言數", key: "comment" },
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

export const FixedHead = TemplateCustom.bind({});
FixedHead.args = {
  listTitles: [
    { label: "日期", key: "date" },
    { label: "標題", key: "title" },
    { label: "內容", key: "content" },
    { label: "留言數", key: "comment" },
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

export const Format = TemplateCustom.bind({});
Format.args = {
  listTitles: [
    { label: "日期", key: "date", type: "date" },
    { label: "標題", key: "title" },
    { label: "內容", key: "content" },
    { label: "留言數", key: "comment", type: "thousand" },
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

export const LimitWidth = TemplateCustom.bind({});
LimitWidth.args = {
  listTitles: [
    { label: "日期", key: "date", width: "120px" },
    { label: "標題", key: "title" },
    { label: "內容", key: "content" },
    { label: "留言數", key: "comment" },
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
    { label: "日期", key: "date", width: "120px" },
    { label: "標題", key: "title" },
    { label: "內容", key: "content" },
    { label: "留言數", key: "comment" },
    { label: "操作", key: "operation", type: "slot" },
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

export const Empty = TemplateCustom.bind({});
Empty.args = {
  listTitles: [
    { label: "日期", key: "date" },
    { label: "標題", key: "title" },
    { label: "內容", key: "content" },
    { label: "留言數", key: "comment" },
  ],
  listData: [],
};
