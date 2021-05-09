import Pagination from "./Pagination.vue";

export default {
  title: "Howie/Pagination",
  component: Pagination,
  argTypes: {
    total: {
      description: "Data total amount.",
    },
    mainColor: {
      description: "The main color.",
    },
    bg: {
      description: "Define whether using background color or not.",
    },
    layout: {
      description: "Define the pagination layout.",
      table: {
        type: {
          detail: "total, size, pager, jumper",
        },
      },
    },
    sizeOptions: {
      description: "Define size options to select.",
    },
    disabled: {
      description: "Define status whether disabled or not.",
    },
    changePage: {
      description: "Change page event.",
      table: {
        type: {
          summary: "function",
        },
      },
      action: "changePage",
    },
    changeSize: {
      description: "Change size event.",
      table: {
        type: {
          summary: "function",
        },
      },
      action: "changeSize",
    },
  },
};

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template:
    '<pagination v-bind="$props" @changeSize="changeSize" @changePage="changePage" />',
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  total: 100,
  layout: ["total", "size", "pager", "jumper"],
  mainColor: "#60A5FA",
  bg: true,
};

export const Size = TemplateCustom.bind({});
Size.args = {
  total: 100,
  layout: ["size", "pager"],
  mainColor: "#DC2626",
};

export const Pager = TemplateCustom.bind({});
Pager.args = {
  total: 100,
  layout: ["pager"],
};
