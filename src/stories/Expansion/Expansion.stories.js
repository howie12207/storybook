import Expansion from "./Expansion.vue";

export default {
  title: "Howie/Expansion",
  component: Expansion,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Expansion },
  template: `
  <div>
    <Expansion v-for="(item,index) of  4" v-model="expandActive" :header-color="headerColor" :divider-color="dividerColor" :id="index" :gap="gap" :multi="multi">
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </Expansion>
  </div>
  `,
  data() {
    return {
      expandActive: [],
    };
  },
});

const TemplateFocus = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Expansion },
  template: `
  <div>
    <Expansion v-for="(item,index) of 4" v-model="expandActive" :header-color="headerColor" :divider-color="dividerColor" :id="index" :gap="gap" :multi="multi" >
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </Expansion>
  </div>
  `,
  data() {
    return {
      expandActive: [],
    };
  },
});

const TemplateDivider = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Expansion },
  template: `
  <div>
    <Expansion v-for="(item,index) of 4" v-model="expandActive" :header-color="headerColor" :divider-color="dividerColor" :id="index" :gap="gap" :multi="multi" >
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </Expansion>
  </div>
  `,
  data() {
    return {
      expandActive: [],
    };
  },
});

const TemplateMulti = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Expansion },
  template: `
  <div>
    <Expansion v-for="(item,index) of 4" v-model="expandActive" :header-color="headerColor" :divider-color="dividerColor" :id="index" :gap="gap" :multi="multi" >
      <template #header>Item</template>
      <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.</template>
    </Expansion>
  </div>
  `,
  data() {
    return {
      expandActive: [],
    };
  },
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

export const Multi = TemplateMulti.bind({});
Multi.args = {
  multi: true,
};
