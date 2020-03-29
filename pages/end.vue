<template>
  <div class="page" id="end">
    <PagesTitle title="Il primo passo è fatto!" />
    <PagesSubTitle subtitle="Ti invitiamo ad inserire ogni giorno i dati relativi al tuo stato di salute, attraverso l’apposita sezione che troverai all’interno dell’app, in modo da poter avere un quadro clinico sempre aggiornato." />
    <div class="image" />
    <PagesSubTitle subtitle="Puoi inviare in qualsiasi momento al tuo medico i dati inseriti, in modo da poter ottenere una diagnosi rapida certificata." />
    <div class="wrapper-button">
      <HomeDocButton @click="goToHome" title="Vai alla home ->" />
    </div>
  </div>
</template>
<script>
import PagesTitle from '../components/PagesComponents/PagesTitle';
import PagesSubTitle from '../components/PagesComponents/PagesSubTitle';
import HomeDocButton from '../components/General/HomeDocButton';
export default {
  name: 'End',
  components: {
    PagesTitle,
    PagesSubTitle,
    HomeDocButton,
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
#end{
  overflow-y: scroll;
  padding: 0 20px 30px 20px;
}
p {
  text-align: center;
}
.image {
  background: url("/HomeDoc/endMainImage.png") center;
  background-size: 250px;
  background-repeat: no-repeat;
  width: 100%;
  height: 220px;
  margin: 20px auto 0 auto;
}
.wrapper-button {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px
}
</style>
