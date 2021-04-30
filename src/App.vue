<template>
  <div class="base_slide">
    <button @click="change(now - 1)">Prev</button>
    <button @click="change(now + 1)">Next</button>
    <div class="card_slider">
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
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      displayNum: 5,
      now: 0,
      imgs: [
        { id: 1, src: "https://picsum.photos/500/400?random=1" },
        { id: 2, src: "https://picsum.photos/500/400?random=1" },
        { id: 3, src: "https://picsum.photos/500/400?random=3" },
        { id: 4, src: "https://picsum.photos/500/400?random=4" },
        { id: 5, src: "https://picsum.photos/500/400?random=5" },
      ],
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
      const start = this.now - 4;
      return this.allImages.slice(start).concat(this.allImages.slice(0, start));
    },
  },
  methods: {
    change(index) {
      const limit = this.allImages.length - 1;
      this.now = index < 0 ? limit : index > limit ? 0 : index;
    },
  },
});
</script>

<style lang="scss">
.card_slider {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card_slider_items {
  display: flex;
  width: 100%;
  // margin-left: calc(-1 * 25% * 2.5);
}
.card_slider_item {
  z-index: 1;
  flex: calc(25% - 20px) 0 0;
  margin: 10px;
  background-color: #eee;
}
.card_slider_item:first-child,
.card_slider_item:last-child {
  z-index: -1;
  visibility: hidden;
}
img {
  width: 100%;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
