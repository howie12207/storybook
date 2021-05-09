import IconAdd from "./IconAdd.vue";

export default {
  title: "Howie/Icon/Add",
  component: IconAdd,
  argTypes: {
    size: {
      description: "The icon width & height.",
      table: {
        type: {
          detail: "px",
        },
      },
    },
    mainColor: {
      description: "The symbol color.",
    },
    borderColor: {
      description: "The border color.",
    },
    bgColor: {
      description: "The background color.",
    },
  },
};

const TemplateAdd = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconAdd },
  template: '<icon-add v-bind="$props" />',
});

export const Add = TemplateAdd.bind({});
Add.args = {
  size: 24,
  mainColor: "currentColor",
};
