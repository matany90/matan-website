<template>
  <m-container>
    <!-- Header -->
    <matan-header />

    <!-- Intro -->
    <matan-intro />

    <!-- Linear Gradient text box -->
    <matan-gradient-text class="overlay--gradient">
      <!-- Title -->
      <template v-slot:title>
        <div>Hi, I'm Matan</div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining.
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
