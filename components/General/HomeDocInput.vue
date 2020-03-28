<template>
  <div class="home-doc-input-wrapper">
    <label>
      {{ placeholder }}
    </label>
    <input :style="{ width: `${width}%` }" type="text" :value="value" @input="emit" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: 'HomeDocInput',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    width: {
      type: String,
    }
  },
  methods: {
    emit(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>
<style lang="scss" scoped>
.home-doc-input-wrapper {
  margin-top: 30px;
  width: 100%;
  input {
    padding: 14px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #AFD8FF;
    outline: none;
    -webkit-appearance: none;
  }
  label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #9A9A9A;
    margin-bottom: 4px;
    margin-left: 18px;
  }
}
</style>
