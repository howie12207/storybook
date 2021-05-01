import IconMenu from "./IconMenu.vue";

export default {
  title: "Howie/Icon",
  component: IconMenu,
  argTypes: {
    menuHandle: { action: "menuHandle" },
  },
};

const TemplateX = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconMenu },
  template: '<icon-menu v-bind="$props" @menuHandle="menuHandle" />',
});

export const Menu = TemplateX.bind({});
Menu.args = {
  size: 32,
  mainColor: "#3b82f6",
};
