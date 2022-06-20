<template>
  <header class="top-bar" >
    <!-- 移动版本 -->
    <ul :class="expand? 'top-bar-mobile active' : 'top-bar-mobile'">
      <li>
         <div class="menu-icon-container">
           <div class="menu-icon" @click="expand = !expand">
            <span class="line-1"></span>
            <span class="line-2"></span>
           </div>
         </div>
      </li>
      <li>
        <div class="logo-container">
          <!--   -->
          <span style="display:inline-block; font-size:22px; color: black; font-family: 'Poppins',sans-serif; font-weight: 700; margin-left: 0; padding-left: 0;"> GX Web</span>
        </div>
      </li>
      <li style="padding-right:20px">
        <button @click="toggleLikeButton" :class="likeButtonSelected?'like-button-true':'like-button-false'">Like</button>
      </li>
    </ul>
    <!-- 桌面版本 -->
    <div :class="searchButtonClicked?'top-bar-container hide':'top-bar-container'">
      <div class="left-section">
        <div>
          <img class="logo" src="../src/assets/logo.png">
        </div>
        <router-link to="/" class="top-bar-link">
          <div style="display:inline-block; font-size:22px; color: black; font-family: 'Poppins',sans-serif; font-weight: 700; margin-left: 0; padding-left: 0;"> GX Web</div>
        </router-link>
      </div>
      <div :class="expand? 'center-section expand':'center-section'">
        <div>
          <router-link to="/" class="top-bar-link">
            <span>Home</span>
          </router-link>
        </div>
        <div>
          <router-link to="/project" class="top-bar-link">
            <span>Project</span>
          </router-link>
        </div>
        <div>
          <router-link to="/thought" class="top-bar-link">
            <span>Thought</span>
          </router-link>
        </div>
        <div>
          <router-link to="/link" class="top-bar-link">
            <span>Link</span>
          </router-link>
        </div>
        <img src="./assets/search-icon.svg" class="top-bar-link" @click="opensearch" style="height: 17px;">
      </div>
      <div class="right-section">
          <button @click="toggleLikeButton" :class="likeButtonSelected?'like-button-true':'like-button-false'">Like</button>
      </div>
    </div>
  </header>

  <!-- 搜索栏及屏幕适配 -->
  <div :class="searchButtonClicked? 'search-container ': 'search-container hide'">
    <div class="link-search"></div>
    <div class="search-bar">
        <form action="">
          <input type="text" placeholder="Search in GX Web">
        </form>
    </div>
    <div class="link-close" @click="closesearch"></div>

    <div class="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <a href="#">Visiting GX Website FAQ</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="/project">My Projects</a>
        </li>
        <li>
          <a href="/thought">My daydream thoughts</a>
        </li>
        <li>
          <a href="/link">Links to other sites</a>
        </li>
      </ul>
    </div>
  </div>

  <div :class="searchButtonClicked? 'overlay show': 'overlay'" @click="closesearch"></div>
  <router-view :IsEnglish="IsEnglish"/>
</template>

<script>

export default {
  data () {
    return {
      IsEnglish: true,
      likeButtonSelected: false,
      dismissSecs: 5,
      dismissCountDown: 0,
      searchButtonClicked: false,
      windowWidth: window.innerWidth,
      mobileVerison: false,
      expand: false
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    toggleLikeButton () {
      this.likeButtonSelected = !this.likeButtonSelected
      console.log('clicked')
    },
    opensearch () {
      this.searchButtonClicked = true
    },
    closesearch () {
      this.searchButtonClicked = false
    },
    handleResize () {
      if (window.innerWidth < 768) {
        this.mobileVerison = true
        console.log('active')
      } else {
        this.mobileVerison = false
        console.log('de active')
      }
    }
  }
}
</script>

<style>

</style>
