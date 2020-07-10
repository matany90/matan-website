<template>
  <m-container>
    <!-- Header -->
    <matan-header />

    <!-- Linear Gradient text box -->
    <matan-gradient-text class="overlay--gradient">
      <!-- Title -->
      <template v-slot:title>
        <div>Hi, I'm Matan</div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div>
          Since beginning my journey as a freelance designer nearly 10 years
          ago, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </div>
      </template>
    </matan-gradient-text>

    <!-- Cards -->
    <matan-cards class="overlay--cards" />

    <!-- Technologies -->
    <matan-technologies />
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
    margin-top: 100px;
    width: 90%;
    position: absolute;

    // @include media("<=tablet") {
    //   margin-top: -40%;
    // }
  }
}
</style>
