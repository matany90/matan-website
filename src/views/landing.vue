<template>
  <m-container>
    <div v-if="isLoading" class="loading-spinner">
      <div class="loading-spinner--container">
        <img class="loading-spinner--img" src="@/assets/icons/rings.svg" />
        <div>{{ $t("landing.loading") }}</div>
      </div>
    </div>
    <div v-show="!isLoading">
      <!-- Header -->
      <matan-header @on-menu-press="toggleMenu" />
      <m-menu v-if="isMenuOpen" @on-menu-press="toggleMenu" />

      <!-- Intro -->
      <matan-intro @on-image-loaded="onImageLoaded" />

      <!-- Linear Gradient text box -->
      <matan-gradient-text class="overlay--gradient">
        <!-- Title -->
        <template v-slot:title>
          <div>{{ $t("landing.cards.title") }}</div>
        </template>

        <!-- Body -->
        <template v-slot:body>
          <div>
            {{ $t("landing.cards.intro") }}
          </div>
        </template>
      </matan-gradient-text>

      <!-- Cards -->
      <matan-cards class="overlay--cards" />

      <!-- Technologies -->
      <matan-technologies />

      <!-- Recent work -->
      <matan-works />

      <!-- Recommnedations -->
      <!-- <matan-recommendation /> -->

      <!-- Footer -->
      <matan-footer />
    </div>
  </m-container>
</template>

<script>
// timeout interval
const TIMEOUT_INTERVAL = 1500

export default {
  // local state
  data() {
    return {
      isMenuOpen: false,
      isLoading: true
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
        this.isLoading = false
      }, TIMEOUT_INTERVAL)
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
    top: 130vh;

    @include media("<=tablet") {
      top: 185vh;
    }
  }
}
</style>
