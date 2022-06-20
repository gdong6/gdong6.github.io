<template>
  <div class="thought">
    <div class="splash-thought">
      <h1>Thought</h1>
      <img src="../assets/light-bulb.svg" >
    </div>

  </div>
  <BottomBar></BottomBar>
</template>

<script>
import BottomBar from '@/components/bottom-bar.vue'
export default {
  props: ['IsEnglish'],
  components: { BottomBar }
}
</script>
