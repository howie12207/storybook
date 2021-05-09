import Tooltips from "./Tooltips.vue";

export default {
  title: "Howie/Tooltips",
  component: Tooltips,
  argTypes: {
    label: {
      description: "The tooltips text.",
    },
    textColor: {
      description: "The text color.",
    },
    bgColor: {
      description: "The background color.",
    },
    gap: {
      description: "The gap between text to tooltips.",
      table: {
        type: {
          detail: "px",
        },
      },
    },
    location: {
      description: "The tooltips location.",
      table: {
        type: {
          detail: `1. left
2. left-top
3. left-bottom
4. top
5. top-left
6. top-right
7. right
8. right-top
9. right-bottom
10. bottom
11. bottom-left
12. bottom-right
          `,
        },
      },
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

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tooltips },
  template:
    '<div style="padding:40px;"><tooltips :label="label" :bg-color="bgColor" :text-color="textColor" :location="location" :gap="gap" ><span>{{ displayText }}</span></tooltips></div>',
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
  label: "解釋",
  displayText: "示範文字",
};
