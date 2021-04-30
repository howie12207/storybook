import CardSlider from "./CardSlider.vue";

export default {
  title: "Howie/CardSlider",
  component: CardSlider,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardSlider },
  template: '<card-slider :display-num="displayNum" :imgs="imgs" />',
});

const TemplateAuto = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardSlider },
  template: '<card-slider v-bind="$props" />',
});

export const Custom = Template.bind({});
Custom.args = {
  displayNum: 5,
  imgs: [
    { id: 1, src: "https://picsum.photos/500/400?random=1" },
    { id: 2, src: "https://picsum.photos/500/400?random=2" },
    { id: 3, src: "https://picsum.photos/500/400?random=3" },
    { id: 4, src: "https://picsum.photos/500/400?random=4" },
    { id: 5, src: "https://picsum.photos/500/400?random=5" },
  ],
};

export const AutoPlay = TemplateAuto.bind({});
AutoPlay.args = {
  auto: 2000,
  displayNum: 4,
  imgs: [
    { id: 1, src: "https://picsum.photos/500/400?random=1" },
    { id: 2, src: "https://picsum.photos/500/400?random=2" },
    { id: 3, src: "https://picsum.photos/500/400?random=3" },
    { id: 4, src: "https://picsum.photos/500/400?random=4" },
    { id: 5, src: "https://picsum.photos/500/400?random=5" },
  ],
};
