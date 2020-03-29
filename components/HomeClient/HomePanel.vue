<template>
  <div @click="$emit('click')" :class="{ blue: blue }" class="home-client-panel">
    <p class="home-client-panel-title">
      {{ title }}
    </p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'HomeClientPanel',
  props: {
    title: {
      type: String,
    },
    blue: {
      type: Boolean,
    }
  }
};
</script>
<style lang="scss" scoped>
.home-client-panel {
  box-shadow: 0 4px 14px #0A0E381A;
  padding: 15px;
  border-radius: 12px;
  margin-top: 20px;
  min-height: 130px;
  &.blue {
    background-color: #5FB3FF;
  }
  .home-client-panel-title {
    text-align: center;
    font-weight: bold;
  }
}
</style>
