<template>
  <div class="home">
    <div class="splash">
      <img class="splash-image" src="../assets/splash.jpg">
      <div class="helloworld"> hello world!</div>
    </div>
    <div class="banner">
      <span> <a href="https://i.pinimg.com/originals/a4/09/d0/a409d0b146eeacaca184ad3e5ad879ad.jpg" target="_blank" style="text-decoration:none; color: black; font-family: Arial, Helvetica, sans-serif;" >&lt; “Give people wonderful tools, and they'll do wonderful things” /&gt;</a></span>
    </div>
    <h1 class="text-main">Always believe that something wonderful is about to happen.</h1>
    <h2 class="text-main-sub" style="margin: 5% 20%; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-size: vw100;">
      This is my personal motto. When we encouter any obstacles, we should keep calm and carry on. It might be easy to say than done, but we still should keep this faith. At last, hope peace always be with us. One World, One Family. 和平永存，天下一家。
    </h2>
    <div class="card-main"> <img src="../assets/pic1.jpg" style="height: 100%; width: 100%; border-radius: 40px; object-fit:cover;"> </div>
    <div class="card-line2">
      <div class="card-line2-left" style="margin-right: 5px"><img src="../assets/pic3.jpg"></div>
      <div class="card-line2-right" style="margin-left: 5px"><img src="../assets/pic2.jpg"></div>
    </div>

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
