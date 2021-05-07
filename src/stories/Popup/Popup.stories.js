import Popup from "./Popup.vue";
import BaseButton from "../BaseButton/BaseButton.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Howie/Popup",
  component: Popup,
  argTypes: {
    close: { action: "close" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popup, BaseButton },
  template: `
    <div>
      <base-button text="開啟" @click.native="popup('open')"></base-button>
      <popup v-if="popupOpen === 'open'" v-bind="$props" @close="closeHandle">
        <template>test123</template>
      </popup>
    </div>
    `,
  data() {
    return {
      popupOpen: "open",
    };
  },
  mounted() {
    this.popupOpen = "";
    console.log(argTypes);
  },
  methods: {
    popup(target) {
      this.popupOpen = target;
    },
    closeHandle() {
      this.popupOpen = "";
      action("close");
    },
  },
});

const TemplateNotCloseOutside = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popup, BaseButton },
  template: `
    <div>
      <base-button text="開啟 (點擊外面不會關閉)" @click.native="popup('open')"></base-button>
      <popup v-if="popupOpen === 'open'" v-bind="$props" @close="closeHandle">
        <template>test123</template>
      </popup>
    </div>
    `,
  data() {
    return {
      popupOpen: "open",
    };
  },
  mounted() {
    this.popupOpen = "";
    console.log(argTypes);
  },
  methods: {
    popup(target) {
      this.popupOpen = target;
    },
    closeHandle() {
      this.popupOpen = "";
      action("close");
    },
  },
});

export const Custom = Template.bind({});
Custom.args = {};

export const NotCloseOutside = TemplateNotCloseOutside.bind({});
NotCloseOutside.args = {
  closeOut: false,
};
