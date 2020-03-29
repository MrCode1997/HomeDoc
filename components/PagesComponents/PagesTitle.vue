<template>
  <p class="pages-title">
    {{ title }}
  </p>
</template>
<script>
export default {
  name: 'PagesTitle',
  props: {
    title: {
      type: String,
    }
  }
}
</script>
<style lang="scss" scoped>
.pages-title {
  font-size: 16px;
  padding-top: 50px;
  font-weight: bold;
  text-align: center;
  width: 100%;
}
</style>
