import IconAdd from "./IconAdd.vue";

export default {
  title: "Howie/Icon",
  component: IconAdd,
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
