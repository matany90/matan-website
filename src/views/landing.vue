<template>
  <m-container>
    <!-- Loading spinner -->
    <div v-if="isLogoLoading" class="loading-spinner">
      <div class="loading-spinner--container">
        <img class="loading-spinner--img" src="@/assets/icons/rings.svg" />
        <div class="loading-spinner--text">{{ $t("landing.loading") }}</div>
      </div>
    </div>
    <div v-show="!isLogoLoading">
      <!-- Header -->
      <matan-header @on-menu-press="toggleMenu" />
      <transition name="expand">
        <m-menu v-if="isMenuOpen" @on-menu-press="toggleMenu" />
      </transition>

      <!-- Intro -->
      <matan-intro @on-image-loaded="onImageLoaded" />

      <!-- Linear Gradient text box -->
      <div class="overlay--gradient">
        <matan-gradient-text>
          <!-- Title -->
          <template v-slot:title>
            <div>{{ $t("landing.cards.title") }}</div>
          </template>

          <!-- Body -->
          <template v-slot:body>
            <div
              class="overlay--gradient--text"
              v-html="$t('landing.cards.intro')"
            />
          </template>
        </matan-gradient-text>

        <!-- Cards -->
        <matan-cards class="overlay--cards" />
      </div>

      <!-- Technologies -->
      <matan-technologies />

      <!-- Recent work -->
      <matan-works
        :loadedImages="worksImagesLoaded"
        @on-image-loaded="onWorkImageLoaded"
      />

      <!-- Recommnedations -->
      <matan-recommendation class="matan-recommendation" />

      <!-- Footer -->
      <matan-footer />
    </div>
  </m-container>
</template>

<script>
// timeout interval
const TIMEOUT_INTERVAL = 1500

// number of works cards
const WORK_CARDS = 6

export default {
  // local state
  data() {
    return {
      // is menu open (mobile only)
      isMenuOpen: false,

      // is loading spinner active
      isLogoLoading: true,

      // is work cards loading
      isWorkCardsLoaded: true,

      // works images loading
      worksImagesLoaded: []
    }
  },

  // computed propeties
  computed: {
    isLoading() {
      return this.isLogoLoading || this.isWorkCardsLoaded
    }
  },

  // methods
  methods: {
    /**
     * Toggle is menu
     */
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    /**
     * On image loaded
     */
    onImageLoaded() {
      // set loading spinner for 1.5 secs
      setTimeout(() => {
        this.isLogoLoading = false
      }, TIMEOUT_INTERVAL)
    },

    /**
     * On work card image loaded
     */
    onWorkImageLoaded(isLoaded) {
      this.worksImagesLoaded.push(isLoaded)

      if (this.worksImagesLoaded.length === WORK_CARDS) {
        this.isWorkCardsLoaded = false
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_main.scss";
// loading spinner
.loading-spinner {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &--img {
    width: 40vh;
    height: 40vh;
  }

  &--container {
    text-align: center;
    flex-direction: column;
    font-size: $section-title-font-size;
    color: map-deep-get($matan-colors, "grey", "middle");
    margin-bottom: 10vh;
  }

  &--text {
    margin-left: 10vh;
    margin-right: 10vh;
  }
}

.overlay {
  // define gradient overlay
  &--gradient {
    position: relative;
  }

  // define cards overlay
  &--cards {
    width: 90%;
    position: absolute;
    top: 75%;
  }
}

/* always present */
.expand-transition {
  transition: all 0.3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.matan-recommendation {
  margin-top: 33rem;

  @include media("<tablet") {
    margin-top: 93rem;
  }
}
</style>
