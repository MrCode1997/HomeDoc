<template>
  <div class="home-doc-checkbox">
    <label>
      {{ title }}
    </label>
    <HomeDocCheckRadioOption
      v-for="option in options"
      :selected="selected"
      :key="option.value"
      :item="option"
      @select="onSelect"
    />
  </div>
</template>
<script>
import HomeDocCheckRadioOption from './HomeDocCheckRadioOption';
export default {
  name: 'HomeDocRadioBox',
  components: {
    HomeDocCheckRadioOption,
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
      type: Array,
    }
  },
  methods: {
    onSelect(item) {
      const check = this.selected.filter(currentValue => currentValue.value === item.value);
      if ( check.length > 0 ) {
        const idx = this.selected.findIndex(current => current.value === item.value);
        let payloadToEmit = [ ...this.selected ];
        payloadToEmit.splice(idx, 1);
        this.emitEvent(payloadToEmit);
      } else {
        let payloadToEmit = [ ...this.selected ];
        payloadToEmit.push(item);
        this.emitEvent(payloadToEmit);
      }
    },
    emitEvent(payload) {
      this.$emit('select', payload);
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
