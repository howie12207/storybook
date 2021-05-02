import ExpansionItem from "./ExpansionItem.vue";

export default {
  title: "Howie/Expansion",
  component: ExpansionItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExpansionItem },
  template: `
  <div>
    <ExpansionItem v-for="item of 4" :header-color="headerColor" :divider-color="dividerColor" :gap="gap" >
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </ExpansionItem>
  </div>
  `,
});

const TemplateFocus = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExpansionItem },
  template: `
  <div>
    <ExpansionItem v-for="item of 4" :header-color="headerColor" :divider-color="dividerColor" :gap="gap" >
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </ExpansionItem>
  </div>
  `,
});

const TemplateDivider = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExpansionItem },
  template: `
  <div>
    <ExpansionItem v-for="item of 4" :header-color="headerColor" :divider-color="dividerColor" :gap="gap" >
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </ExpansionItem>
  </div>
  `,
});

export const Custom = Template.bind({});
Custom.args = {};

export const Focus = TemplateFocus.bind({});
Focus.args = {
  headerColor: "#ddd",
  gap: 8,
};

export const Divider = TemplateDivider.bind({});
Divider.args = {
  dividerColor: "#ddd",
  gap: 8,
};
