<template>
  <div
    :style="style"
    :class="[
      'expansion',
      { expand: active },
      { headerColor },
      { dividerColor },
    ]"
  >
    <div class="expansion_header" @click="expandHandle(id, multi)">
      <slot name="header"></slot><IconChevron direction="bottom" />
    </div>
    <ExpandTransition>
      <div
        v-show="active"
        class="expansion_content"
        :style="{
          padding: '16px 24px',
          paddingTop: this.headerColor || this.dividerColor ? '16px' : '0px',
        }"
      >
        <slot name="content"></slot>
      </div>
    </ExpandTransition>
  </div>
</template>

<script>
import Vue from "vue";
import IconChevron from "./IconChevron";
import ExpandTransition from "./ExpandTransition.js";

export default Vue.extend({
  name: "ExpansionItem",
  components: { IconChevron, ExpandTransition },
  props: {
    headerColor: {
      type: String,
      default: "",
    },
    gap: {
      type: Number,
      default: 0,
    },
    dividerColor: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: true,
    },
    multi: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    style() {
      return {
        "--expansionItemGap": `${this.gap}px`,
        "--expansionItemHeaderBg": this.headerColor,
        "--expansionItemDividerColor": this.dividerColor,
      };
    },
    active() {
      return this.syncValue.includes(this.id);
    },
    syncValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    expandHandle(id, multi) {
      const index = this.syncValue.findIndex((item) => item === id);
      if (!multi) {
        this.syncValue = index === -1 ? [id] : [];
      } else {
        index === -1
          ? this.syncValue.push(id)
          : this.syncValue.splice(index, 1);
      }
    },
  },
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.expansion {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.expansion.expand {
  margin: var(--expansionItemGap) 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.expansion.expand:first-child {
  margin: 0 0 var(--expansionItemGap) 0;
}
.expansion.expand:last-child {
  margin: var(--expansionItemGap) 0 0 0;
}

.expansion .expansion_header {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.expansion.expand.headerColor .expansion_header {
  background: var(--expansionItemHeaderBg);
}

.expansion .expansion_header .icon_chevron {
  margin-left: auto;
  transition: 0.3s;
}
.expansion.expand .expansion_header .icon_chevron {
  transform: rotate(-180deg);
}

.expansion.expand.dividerColor .expansion_content {
  border-top: 1px solid var(--expansionItemDividerColor);
}
</style>
