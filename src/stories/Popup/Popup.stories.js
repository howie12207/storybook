import Popup from "./Popup.vue";
import BaseButton from "../BaseButton/BaseButton.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Howie/Popup",
  component: Popup,
  argTypes: {
    closePopup: { action: "closePopup" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popup, BaseButton },
  template: `
    <div>
      <base-button text="開啟" @click.native="popup('open')"></base-button>
      <popup v-if="popupOpen === 'open'" v-bind="$props" @closePopup="close">
        <template #content>test123</template>
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
  },
  methods: {
    popup(target) {
      this.popupOpen = target;
    },
    close() {
      this.popupOpen = "";
      action("closePopup");
    },
  },
});

export const Custom = Template.bind({});
Custom.args = {};
