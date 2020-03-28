<template>
  <div @click="$emit('select', item)" :class="{ active: this.selected.filter(currentValue => currentValue.value === item.value).length > 0 }" class="home-doc-checkbox-option">
    {{ item.label }}
  </div>
</template>
<script>
export default {
  name: 'HomeDocCheckRadioOptions',
  props: {
    item: {
      type: Object,
    },
    selected: {
      type: Array,
    }
  }
}
</script>
<style lang="scss" scoped>
  .home-doc-checkbox-option {
    padding: 10px 25px;
    border-radius: 25px;
    border: 2px solid #A0A0A0;
    color: #A0A0A0;
    background-color: white;
    font-size: 16px;
    display: inline-block;
    margin: 4px 10px 8px 0;
    box-shadow: none;
    &.active {
      border: 2px solid #5FB3FF;
      color: $main-text-color;
      box-shadow: 0 3px 6px #5FB3FF33;
    }
  }
</style>
