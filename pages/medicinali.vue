<template>
  <div class="page" id="medicinali">
    <PagesTitle :title="$store.state.user.sintomsHistory.length === 0 ? 'Inserisci dati iniziali' : 'Inserisci medicinali'" />
    <PagesSubTitle subtitle="Stai assumendo una o più tipologie di questi farmaci?" />
    <HomeDocRadio  @select="(emittedMedicinals) => { $store.commit('user/SET_MEDICINALS', emittedMedicinals) }" :selected="medicinals" title="Patologie"  :options="options"/>
    <HomeDocInput placeholder="Altro" :value="other" @input="(emittedOther) => { other = emittedOther }" width="70" />
    <div class="wrapper-button">
      <HomeDocButton title="<" @click="$router.back()" />
      <HomeDocButton title="Fine" @click="$store.state.user.sintomsHistory.length === 0 ? $router.push('end') : showConsiglio = true" />
    </div>
    <div v-if="showConsiglio" id="modal_consiglio">
      <p style="font-size: 18px; font-weight: bold">Ecco il tuo consiglio del momento</p>
      <p>{{ currentConsiglio }}</p>
      <HomeDocButton title="Torna al diario" @click="goToHome()" />
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

  import medicinalsOptions from '~/dataStructures/Medicinals';
  import Consigli from '~/dataStructures/Consigli';

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
        showConsiglio: false,
        currentConsiglio: Consigli[Math.floor(Math.random() * Consigli.length)],
      }
    },
    computed: {
      ...mapState('user', [
        'medicinals'
      ])
    },
    methods: {
      goToHome() {
        this.$store.commit('user/SET_SINTOMS_HISTORY');
        this.$store.commit('user/SET_MEDICINALS_HISTORY');
        localStorage.setItem('user', JSON.stringify(this.$store.state.user));
        this.$router.push('homeClient');
      },
    }
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
    #modal_consiglio {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 30px;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      background-color: rgba(255,255,255, 0.9);
      margin-left: -30px;
      border-radius: 25px;
      p {
        text-align: center;
        margin-bottom: 30px
      }
    }
  }
</style>
