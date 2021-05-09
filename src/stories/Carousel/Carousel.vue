<template>
  <div
    :style="style"
    class="card_slider"
    @mouseenter="mouseenterHandle"
    @mouseleave="mouseleaveHandle"
  >
    <transition-group class="card_slider_items" name="flip-list">
      <div
        class="card_slider_item"
        v-for="item in showImages"
        :key="item.id"
        :data-id="item.id"
      >
        <img :src="item.src" />
      </div>
    </transition-group>
    <transition name="move-left">
      <div
        v-if="mouseenter"
        :class="['icon_chevron', 'left']"
        @click="change(now - 1)"
      ></div>
    </transition>
    <transition name="move-right">
      <div
        v-if="mouseenter"
        :class="['icon_chevron', 'right']"
        @click="change(now + 1)"
      ></div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Carousel",
  props: {
    displayNum: {
      type: Number,
      default: 5,
    },
    imgs: {
      type: Array,
      default: () => [],
      required: true,
    },
    auto: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      now: 0,
      timer: null,
      mouseenter: false,
    };
  },
  computed: {
    // 複製圖片 滿足數量大於等於顯示數量 + 前後各多兩張 (不與下面合併是因為這個基本上只計算一次，而下面會一直重新計算)
    allImages() {
      const ary = [];
      const total = this.imgs.length;
      let count;
      if (total > 0) {
        while (ary.length < this.displayNum + 4) {
          count = Math.floor(ary.length / total);
          for (let i = 0; i < total; i++) {
            ary.push({
              id: count + "-" + this.imgs[i].id,
              src: this.imgs[i].src,
            });
          }
        }
      }
      return ary;
    },
    // 把最後面四張放到最前面
    showImages() {
      const start = this.now - Math.ceil((this.displayNum + 3) / 2);
      return this.allImages.slice(start).concat(this.allImages.slice(0, start));
    },
    style() {
      return {
        "--imageWidth": `${
          100 / (this.displayNum - 1) !== Infinity
            ? 100 / (this.displayNum - 1)
            : 100
        }%`,
        "--imageWidth2": `${
          100 / (this.displayNum - 1) !== Infinity
            ? 100 / (this.displayNum - 1)
            : 80
        }%`,
      };
    },
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    change(index) {
      const limit = this.allImages.length - 1;
      this.now = index < 0 ? limit : index > limit ? 0 : index;
    },
    autoPlay() {
      if (this.auto > 0)
        this.timer = setInterval(() => {
          this.change(this.now + 1);
        }, this.auto);
    },
    mouseenterHandle() {
      this.mouseenter = true;
      clearInterval(this.timer);
    },
    mouseleaveHandle() {
      this.mouseenter = false;
      this.autoPlay();
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
});
</script>

<style scoped>
.card_slider {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.card_slider_items {
  display: flex;
  width: 100%;
  margin-left: calc(-1 * var(--imageWidth2) * 2.5);
}
.card_slider_item {
  z-index: 1;
  flex: calc(var(--imageWidth) - 16px) 0 0;
  margin: 8px;
  background-color: #eee;
}
.card_slider_item:first-child,
.card_slider_item:last-child {
  z-index: -1;
  visibility: hidden;
}
.card_slider_item img {
  width: 100%;
}

.flip-list-move {
  transition: transform 0.5s;
}

.card_slider .icon_chevron {
  --chevronColor: currentColor;
  --chevronSize: 24px;
  --chevronLineWidth: 3px;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  position: absolute;
  z-index: 1;
  width: var(--chevronSize);
  height: var(--chevronSize);
  background-color: #ccc;
  opacity: 0.7;
  border-radius: 50%;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.4s;
}
.card_slider .icon_chevron:hover {
  opacity: 1;
}
.card_slider .icon_chevron:after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  border: solid var(--chevronColor);
  border-width: 0 var(--chevronLineWidth) var(--chevronLineWidth) 0;
  border-bottom-right-radius: 2px;
  padding: calc(calc(var(--chevronSize) - var(--chevronLineWidth)) / 3);
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%) rotate(135deg);
}

.card_slider .icon_chevron.right {
  left: initial;
  right: 16px;
}
.card_slider .icon_chevron.right:after {
  transform: translate(-75%, -50%) rotate(-45deg);
}

.move-left-enter-active {
  animation: move-left 0.5s ease forwards;
}
.move-left-leave-active {
  animation: move-left 0.5s ease forwards reverse;
}

@keyframes move-left {
  0% {
    transform: translate(-100%, -50%);
  }
  100% {
    transform: translate(0, -50%);
  }
}
.move-right-enter-active {
  animation: move-right 0.5s ease forwards;
}
.move-right-leave-active {
  animation: move-right 0.5s ease forwards reverse;
}

@keyframes move-right {
  0% {
    transform: translate(100%, -50%);
  }
  100% {
    transform: translate(0, -50%);
  }
}
</style>
