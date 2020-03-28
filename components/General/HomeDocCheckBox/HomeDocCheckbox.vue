<template>
  <div class="home-doc-checkbox">
    <label>
      {{ title }}
    </label>
    <HomeDocCheckBoxOption
      v-for="option in options"
      :selected="selected"
      :key="option.value"
      :label="option.label"
      :value="option.value"
      @select="(select) => { $emit('select', select) }"
    />
  </div>
</template>
<script>
import HomeDocCheckBoxOption from './HomeDocCheckBoxOption';
export default {
  name: 'HomeDocCheckBox',
  components: {
    HomeDocCheckBoxOption,
  },
  props: {
    title: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
    }
  }
}
</script>
<style lang="scss" scoped>
.home-doc-checkbox{
  margin-top: 30px;
  label {
    display: block;
    font-weight: bold;
    color: #9A9A9A;
    margin-left: 18px;
  }
}
</style>
