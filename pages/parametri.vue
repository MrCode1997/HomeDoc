<template>
  <div class="page" id="parametri">
    <PagesTitle />
    <PagesSubTitle subtitle="Quali sono i parametri vitali che vuoi aggiornare?" />
    <HomeDocInput placeholder="Frequenza cardiaca" width="70" />
    <HomeDocInput placeholder="Saturazione sanguigna"  width="70" />
    <HomeDocInput placeholder="Pressione sistolica"  width="70" />
    <HomeDocInput placeholder="Pressione diastolica"  width="70" />
    <div class="button-wrapper">
      <HomeDocButton title="Conferma" @click="showConsiglio = true" />
    </div>
    <div v-if="showConsiglio" id="modal_consiglio">
      <p style="font-size: 18px; font-weight: bold">Ecco il tuo consiglio del momento</p>
      <p>{{ currentConsiglio }}</p>
      <HomeDocButton title="Torna al diario" @click="$router.back()" />
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex';

  import PagesTitle from '../components/PagesComponents/PagesTitle';
  import HomeDocInput from '../components/General/HomeDocInput';
  import HomeDocCheckbox from '../components/General/HomeDocCheckBox/HomeDocCheckbox';
  import HomeDocButton from '../components/General/HomeDocButton';
  import PagesSubTitle from "../components/PagesComponents/PagesSubTitle";

  import Consigli from '~/dataStructures/Consigli';

  export default {
    name: 'PatalogiePages',
    components: {
      PagesSubTitle,
      PagesTitle,
      HomeDocInput,
      HomeDocCheckbox,
      HomeDocButton,
    },
    data() {
      return {
        showConsiglio: false,
        currentConsiglio: Consigli[Math.floor(Math.random() * Consigli.length)],
      }
    },
    computed: {
      ...mapState('user', [
        'name',
        'lastName',
        'age',
        'gender'
      ]),
      ...mapGetters('user', [
        'hasPersonalDataComplete'
      ]),
    },
  }
</script>
<style lang="scss" scoped>
  #parametri {
    padding: 0 30px;
    .button-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 15vh;
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
