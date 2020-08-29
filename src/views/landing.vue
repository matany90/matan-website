<template>
  <m-container>
    <!-- Header -->
    <matan-header @on-menu-press="toggleMenu" />
    <m-menu v-if="isMenuOpen" @on-menu-press="toggleMenu" />

    <!-- Intro -->
    <matan-intro />

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
  </m-container>
</template>

<script>
export default {
  // local state
  data() {
    return {
      isMenuOpen: false
    }
  },

  // methods
  methods: {
    /**
     * Toggle is menu
     */
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
<style lang="scss">
@import "@/style/_main.scss";

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
