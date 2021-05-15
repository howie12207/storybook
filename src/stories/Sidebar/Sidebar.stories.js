import IconMenu from "../Icon/IconMenu.vue";
import Sidebar from "./Sidebar.vue";

export default {
  title: "Howie/Sidebar",
  component: Sidebar,
  argTypes: {
    location: {
      description: "The Sidebar location.",
      control: { type: "select", options: ["left", "right"] },
    },
    width: {
      description: "The Sidebar width.",
    },
    closeBtn: {
      description: "Show close btn or not.",
    },
    closeOut: {
      description: "Define click outside will close Sidebar or not.",
    },
    close: {
      description: "Close events.",
      table: {
        type: {
          summary: "function",
        },
      },
      action: "close",
    },
    default: {
      description: "The content inside Sidebar.",
      table: {
        type: {
          summary: "slot",
        },
      },
    },
  },
};

const TemplateCustom = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Sidebar, IconMenu },
  template: `
    <div>
      <IconMenu v-model="sidebarOpen" />
      <Sidebar v-if="sidebarOpen" v-bind="$props" @close="closeHandle">
        <template></template>
      </Sidebar>
    </div>
    `,
  data() {
    return {
      sidebarOpen: true,
    };
  },
  mounted() {
    this.sidebarOpen = false;
  },
  methods: {
    closeHandle() {
      this.sidebarOpen = false;
    },
  },
});

export const Custom = TemplateCustom.bind({});
Custom.args = {};
