<template>
  <p class="pages-subtitle" >
    {{ subtitle }}
  </p>
</template>
<script>
export default {
  name: 'PagesSubTitle',
  props: {
    subtitle: {
      type: String,
    }
  },
}
</script>
<style lang="scss" scoped>
  p {
    padding-top: 60px;
    font-size: 18px;;
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
</style>
