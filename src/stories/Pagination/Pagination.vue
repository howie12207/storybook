<template>
  <div :style="style" :class="['pagination', { background: bg }]">
    <span v-if="layout.includes('total')" class="total">共 {{ total }} 條</span>
    <select
      v-if="layout.includes('size')"
      class="select_size"
      v-model="selectSize"
      @change="changeSize(selectSize)"
    >
      <option v-for="(size, i) in sizeOptions" :key="i" :value="size">
        {{ size }}條 / 頁
      </option>
    </select>
    <ul v-if="layout.includes('pager')" class="pager" @click="onPagerClick">
      <li
        :class="['prev_btn', { disabled: disabledPrev }]"
        @click="prevNextHandler(-1)"
      >
        <span class="prev_btn chevron_icon"></span>
      </li>
      <li
        :class="{ active: currentPage === 1, disabled }"
        v-if="pageCount > 0"
        class="number"
      >
        1
      </li>
      <li class="more quickprev" :class="[{ disabled }]" v-if="showPrevMore">
        <span class="more more_icon"></span>
      </li>
      <li
        v-for="pager in pagers"
        :key="pager"
        :class="{ active: currentPage === pager, disabled }"
        class="number"
      >
        {{ pager }}
      </li>
      <li class="more quicknext" :class="[{ disabled }]" v-if="showNextMore">
        <span class="more more_icon"></span>
      </li>
      <li
        :class="{ active: currentPage === pageCount, disabled }"
        class="number"
        v-if="pageCount > 1"
      >
        {{ pageCount }}
      </li>
      <li
        :class="['next_btn', { disabled: disabledNext }]"
        @click="prevNextHandler(1)"
      >
        <span class="next_btn chevron_icon right"></span>
      </li>
    </ul>
    <span v-if="layout.includes('jumper')" class="jumper"
      >前往<input
        v-model.lazy.number="inputPage"
        class="input"
        type="number"
        min="1"
      />頁</span
    >
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    sizeOptions: {
      type: Array,
      default: () => [10, 30, 50, 100],
    },
    layout: {
      type: Array,
      default: () => ["pager"],
    },
    mainColor: {
      type: String,
      default: "#10b981",
    },
    bg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPrevMore: false,
      showNextMore: false,
      selectSize: 10,
      pagerCount: 7,
      currentPage: 1,
      size: 10,
    };
  },
  computed: {
    // 共幾頁
    pageCount() {
      return Math.ceil(this.total / this.selectSize);
    },
    // 要顯示哪幾頁
    pagers() {
      const pagerCount = this.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(this.currentPage);
      const pageCount = Number(this.pageCount);
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
        }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    },
    disabledPrev() {
      return this.currentPage === 1;
    },
    disabledNext() {
      return this.currentPage === this.pageCount;
    },
    // 輸入jumper
    inputPage: {
      get() {
        return this.currentPage;
      },
      set(value) {
        if (
          Number(value) > 0 &&
          value !== this.currentPage &&
          value <= this.pageCount
        ) {
          this.currentPage = value;
          this.$emit("changePage", value);
        }
      },
    },
    style() {
      return `
                --mainColor: ${this.mainColor};
            `;
    },
  },
  methods: {
    // 一頁顯示數量變更
    changeSize(size) {
      this.currentPage = 1;
      this.$emit("changeSize", size);
    },
    // 點頁數
    onPagerClick(event) {
      let target = event.target;
      if (
        target.tagName === "UL" ||
        this.disabled ||
        target.className.includes("prev_btn") ||
        target.className.includes("next_btn")
      ) {
        return;
      }
      let newPage = Number(event.target.textContent);
      const pageCount = this.pageCount;
      const currentPage = this.currentPage;
      const pagerCountOffset = this.pagerCount - 2;
      if (target.className.includes("more")) {
        if (
          target.className.includes("quickprev") ||
          target.parentNode.className.includes("quickprev")
        ) {
          newPage = currentPage - pagerCountOffset;
        } else if (
          target.className.includes("quicknext") ||
          target.parentNode.className.includes("quicknext")
        ) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        this.currentPage = newPage;
        this.$emit("changePage", newPage);
      }
    },
    // 點上下頁
    prevNextHandler(direction) {
      if (direction > 0 && this.currentPage < this.pageCount) {
        this.$emit("changePage", ++this.currentPage);
      } else if (direction < 0 && this.currentPage !== 1) {
        this.$emit("changePage", --this.currentPage);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.pagination {
  display: flex;
  justify-content: center;
  .total {
    line-height: 28px;
    margin-right: 16px;
    font-size: 14px;
  }
  .select_size {
    border: 1px solid #d1d5db;
    outline: none;
    padding: 0 16px 0 8px;
    margin-right: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  .pager {
    display: inline-block;
    list-style: none;
    user-select: none;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      text-align: center;
      margin: 0 4px;
      padding: 0 4px;
      font-size: 14px;
      font-weight: 600;
      min-width: 32px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        opacity: 0.7;
      }
    }
    .number {
      &.active {
        color: var(--mainColor);
        cursor: default;
      }
    }
    .more_icon {
      --moreSize: 4px;
      --moreMargin: 8px;
      --morePosition: -6px;
      min-width: initial;
      padding: 0;
      display: inline-block;
      position: relative;
      top: -2px;
      margin: 0 var(--moreMargin);
      &,
      &:after,
      &:before {
        box-sizing: border-box;
        width: var(--moreSize);
        height: var(--moreSize);
        background: var(--mainColor);
        border-radius: 50%;
      }
      &:after,
      &:before {
        content: "";
        position: absolute;
        top: 0;
      }
      &:after {
        left: var(--morePosition);
      }
      &:before {
        right: var(--morePosition);
      }
    }
    .chevron_icon {
      box-sizing: border-box;
      position: relative;
      display: inline_block;
      width: 22px;
      height: 22px;
      border: 2px solid transparent;
      border-radius: 50%;
      &:after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid;
        border-left: 2px solid;
        transform: rotate(45deg);
        left: -2px;
        top: 4px;
      }
      &.right:after {
        left: -6px;
        transform: rotate(225deg);
      }
    }
    .disabled {
      cursor: not-allowed;
    }
  }
  &.background .pager li {
    border-radius: 3px;
    background-color: #e5e7eb;
    &.active {
      background-color: var(--mainColor);
      color: #fff;
    }
  }
  .jumper {
    font-size: 14px;
    margin: 0 16px;
    line-height: 28px;
    .input {
      border: 1px solid #d1d5db;
      border-radius: 4px;
      margin: 0 8px;
      height: 28px;
      width: 40px;
      outline: none;
      text-align: center;
      padding: 0 8px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
}
</style>
