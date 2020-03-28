<template>
  <div class="page" id="sintomi">
    <PagesTitle title="Diagnosi Iniziale" />
    <PagesSubTitle subtitle="Quali sono i sintomi che avverti in questo momento?" />
    <HomeDocRadio  @select="(emittedSintoms) => { $store.commit('user/SET_SINTOMS_LIST', emittedSintoms) }" :selected="sintoms.list" title="Sintomi"  :options="options"/>
    <HomeDocInput placeholder="Temperatura" :value="sintoms.temp" @input="(emittedTemp) => { $store.commit('user/SET_SINTOMS_TEMP', emittedTemp) }" width="70" />
    <div class="wrapper-button">
      <HomeDocButton title="<" @click="$router.back()" />
      <HomeDocButton title="Avanti >" @click="goToNextPage" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import HomeDocRadio from '../components/General/HomeDocRadio/HomeDocRadio';
import PagesTitle from '../components/PagesComponents/PagesTitle';
import PagesSubTitle from '../components/PagesComponents/PagesSubTitle';
import HomeDocInput from '../components/General/HomeDocInput';
import HomeDocButton from '../components/General/HomeDocButton';

import sintomsOptions from '~/dataStructures/Sintoms'

export default {
  name: 'sintomsPage',
  components: {
    HomeDocRadio,
    PagesTitle,
    PagesSubTitle,
    HomeDocInput,
    HomeDocButton,
  },
  data() {
    return {
      options: sintomsOptions,
    }
  },
  computed: {
    ...mapState('user', [
      'sintoms'
    ])
  },
  methods: {
    goToNextPage() {
      this.$router.push('medicinali')
    },
  }
}
</script>
<style lang="scss" scoped>
#sintomi {
  padding: 0 30px 30px 30px;
  overflow-y: auto;
  .wrapper-button {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
