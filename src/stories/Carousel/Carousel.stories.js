import Carousel from "./Carousel.vue";

export default {
  title: "Howie/Carousel",
  component: Carousel,
  argTypes: {
    displayNum: {
      description: "Define how many picture show.",
    },
    imgs: {
      description: "Provide image list",
      table: {
        type: {
          detail: `id & src are required.
1. id is the unqiue index.
2. src is the image source.
          `,
        },
      },
    },
    auto: {
      description: "Set auto running time.",
      table: {
        type: {
          detail: "millisecond",
        },
      },
    },
  },
};

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Carousel },
  template: '<carousel v-bind="$props" />',
});

const TemplateAuto = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Carousel },
  template: '<carousel v-bind="$props" />',
});

export const Custom = TemplateCustom.bind({});
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
