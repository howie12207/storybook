import Message from "./message.js";
import BaseButton from "../BaseButton/BaseButton.vue";

export default {
  title: "Howie/Message",
  component: Message,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: `
  <div>
    <BaseButton text="成功" @click.native="openSuccess" />
    <BaseButton text="失敗" main-color="#EF4444" @click.native="openError" />
    <BaseButton text="警告" main-color="#F59E0B" @click.native="openWarning" />
    <BaseButton text="資訊" main-color="#6B7280" @click.native="openInfo" />
  </div>
  `,
  methods: {
    openSuccess() {
      Message({ message: "成功!!!" });
    },
    openError() {
      Message({ type: "error", message: "失敗!!!" });
    },
    openWarning() {
      Message({ type: "warning", message: "警告!!!" });
    },
    openInfo() {
      Message({ type: "info", message: "資訊!!!" });
    },
  },
});
const TemplateNoCloseBtn = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: `
  <div>
    <BaseButton text="成功" @click.native="openSuccess" />
    <BaseButton text="失敗" main-color="#EF4444" @click.native="openError" />
    <BaseButton text="警告" main-color="#F59E0B" @click.native="openWarning" />
    <BaseButton text="資訊" main-color="#6B7280" @click.native="openInfo" />
  </div>
  `,
  methods: {
    openSuccess() {
      Message({ message: "成功!!!", showClose: false });
    },
    openError() {
      Message({ type: "error", message: "失敗!!!", showClose: false });
    },
    openWarning() {
      Message({ type: "warning", message: "警告!!!", showClose: false });
    },
    openInfo() {
      Message({ type: "info", message: "資訊!!!", showClose: false });
    },
  },
});

export const Custom = Template.bind({});
Custom.args = {};

export const NoCloseBtn = TemplateNoCloseBtn.bind({});
NoCloseBtn.args = {};
