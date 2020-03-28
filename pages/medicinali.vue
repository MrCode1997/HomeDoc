<template>
  <div class="page" id="medicinali">
    <PagesTitle title="Diagnosi Iniziale" />
    <PagesSubTitle subtitle="Stai assumendo una o più tipologie di questi farmaci?" />
    <HomeDocRadio  @select="(emittedMedicinals) => { $store.commit('user/SET_MEDICINALS', emittedMedicinals) }" :selected="medicinals" title="Patologie"  :options="options"/>
    <HomeDocInput placeholder="Altro" :value="other" @input="(emittedOther) => { other = emittedOther }" width="70" />
    <div class="wrapper-button">
      <HomeDocButton title="<" @click="$router.back()" />
      <HomeDocButton title="Fine" @click="goToNextPage" />
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

  import medicinalsOptions from '~/dataStructures/Medicinals'

  export default {
    name: 'medicinalsPage',
    components: {
      HomeDocRadio,
      PagesTitle,
      PagesSubTitle,
      HomeDocInput,
      HomeDocButton,
    },
    data() {
      return {
        options: medicinalsOptions,
      }
    },
    computed: {
      ...mapState('user', [
        'medicinals'
      ])
    },
  }
</script>
<style lang="scss" scoped>
  #medicinali {
    padding: 0 30px;
    .wrapper-button {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
