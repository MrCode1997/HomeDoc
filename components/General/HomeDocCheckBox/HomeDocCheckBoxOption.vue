<template>
  <div @click="$emit('select', value)" :class="{ active: selected === value }" class="home-doc-checkbox-option">
    {{ label }}
  </div>
</template>
<script>
export default {
  name: 'HomeDocCheckBoxOptions',
  props: {
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    selected: {
      type: String,
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
    margin: 4px 10px 4px 0;
    box-shadow: none;
    &.active {
      border: 2px solid #5FB3FF;
      color: $main-text-color;
      box-shadow: 0 3px 6px #5FB3FF33;
    }
  }
</style>
