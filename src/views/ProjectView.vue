<template>
  <div class="project">
    <div class="neon">&lt;Project/&gt;</div>

    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>

    <div style="padding-bottom: 50px"></div>
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
