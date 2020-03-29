<template>
  <p class="home-title">
    <img src="/icon.png" />
  </p>
</template>
<script>
export default {
  name: 'HomeTitle',
}
</script>
<style lang="scss" scoped>
 .home-title {
   color: $blue-main;
   font-size: 32px;
   font-weight: bold;
   img {
     width: 200px;
   }
 }
</style>
