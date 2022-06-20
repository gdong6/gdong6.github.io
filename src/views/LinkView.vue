<template>
  <div class="link">
    <div class="splash-link">
      <h1>Links ></h1>
    </div>
    <div class="link-card">
      <h2>
        <a href="https://cnsawatcher.com" target="_blank"> CNSA Watcher</a>
      </h2>
      <h2>
        An amazing fan-run website that aims to provide a comprehensive and up-to-date view of the latest launches and missions of the China National Space Administration (CNSA)
      </h2>
    </div>
    <div class="link-card">
      <h2>
        <a href="https://www.macrumors.com" target="_blank"> MacRumors</a>
      </h2>
      <h2>
        The best website for Apple fans. Gathering all the latest news about apple's unveiled devices.
      </h2>
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
