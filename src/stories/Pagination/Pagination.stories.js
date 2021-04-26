import Pagination from "./Pagination.vue";
// import { action } from "@storybook/addon-actions";

export default {
  title: "Howie/Pagination",
  component: Pagination,
  argTypes: {
    changePage: { action: "changePage" },
    changeSize: { action: "changeSize" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template:
    '<pagination v-bind="$props" @changeSize="changeSize" @changePage="changePage" />',
  // props: {
  //   size: {
  //     type: Number,
  //     default: 10,
  //   },
  //   currentPage: {
  //     type: Number,
  //     default: 1,
  //   },
  //   total: {
  //     type: Number,
  //     default: 0,
  //   },
  //   changePage: {
  //     type: Function,
  //     default: () => {
  //       console.log("123");
  //     },
  //   },
  //   changeSize: {
  //     type: Function,
  //     default: () => {},
  //   },
  // },
  // methods: {
  //   changePage: action("changePage"),
  //   changeSize: action("changeSize"),
  // },
  // },
  // computed: {
  //   test() {
  //     const { currentPage, ...all } = this.$props;
  //     return all;
  //   },
  // },
});

export const All = Template.bind({});
All.args = {
  total: 100,
  layout: ["total", "size", "pager", "jumper"],
  mainColor: "#60A5FA",
  bg: true,
};

export const Size = Template.bind({});
Size.args = {
  total: 100,
  layout: ["size", "pager"],
  mainColor: "#DC2626",
};

export const Pager = Template.bind({});
Pager.args = {
  total: 100,
  layout: ["pager"],
};
