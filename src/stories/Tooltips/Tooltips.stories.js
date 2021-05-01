import Tooltips from "./Tooltips.vue";

export default {
  title: "Howie/Tooltips",
  component: Tooltips,
  argTypes: {
    location: {
      control: {
        type: "select",
        options: [
          "left",
          "left-top",
          "left-bottom",
          "top",
          "top-left",
          "top-right",
          "right",
          "right-top",
          "right-bottom",
          "bottom",
          "bottom-left",
          "bottom-right",
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tooltips },
  template:
    '<div style="padding:40px;"><tooltips :text="text" :bg-color="bgColor" :text-color="textColor" :location="location" :gap="gap" ><span>{{ displayText }}</span></tooltips></div>',
});

export const Custom = Template.bind({});
Custom.args = {
  text: "解釋",
  displayText: "示範文字",
};
