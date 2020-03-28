<template>
  <button @click.prevent="$emit('click')" :class="{ active: active }" class="home-doc-button">
    {{ title || 'test' }}
  </button>
</template>
<script>
export default {
  name: 'HomeDocButton',
  props: {
    title: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    }
  }
};
</script>
<style lang="scss" scoped>
.home-doc-button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(90deg, #FFF, grey);
  color: $main-text-color;
  font-weight: bold;
  box-shadow: 0 5px 12px #5FB3FF52;
  font-size: 16px;
  &.active {
    background: linear-gradient(90deg, #FFF, $blue-main);
  }
}
</style>
