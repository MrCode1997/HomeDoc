<template>
  <div class="page" id="patologie">
    <PagesTitle title="Inserisci dati iniziali" />
    <PagesSubTitle subtitle="Sei per caso affetto da patologie croniche?" />
    <HomeDocRadio  @select="(emittedPatologies) => { $store.commit('user/SET_PATOLOGIES', emittedPatologies) }" :selected="patologies" title="Patologie"  :options="options"/>
    <HomeDocInput placeholder="Altro" width="70" />
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

  import patologiesOptions from '~/dataStructures/Patologies'

  export default {
    name: 'patologiesPage',
    components: {
      HomeDocRadio,
      PagesTitle,
      PagesSubTitle,
      HomeDocInput,
      HomeDocButton,
    },
    data() {
      return {
        options: patologiesOptions,
      }
    },
    computed: {
      ...mapState('user', [
        'patologies'
      ])
    },
    methods: {
      goToNextPage() {
        this.$router.push('sintomi');
      },
    }
  }
</script>
<style lang="scss" scoped>
  #patologie {
    padding: 0 30px;
    .wrapper-button {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
