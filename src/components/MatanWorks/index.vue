<template>
  <!-- Linear Gradient text box -->
  <matan-gradient-text class="overlay--gradient">
    <!-- Title -->
    <template v-slot:title>
      <div>Take a look at my latest projects</div>
    </template>

    <!-- Body -->
    <template v-slot:body>
      <div>
        Since beginning my journey as a freelance designer nearly 10 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </div>
    </template>
  </matan-gradient-text>
</template>

<style lang="scss" scoped>
@import "@/style/_main.scss";

.overlay {
  // define gradient overlay
  &--gradient {
    margin-top: 150px;
    position: relative;
  }

  // define cards overlay
  &--cards {
    width: 90%;
    position: absolute;
    top: 80%;

    @include media("<=tablet") {
      top: 90%;
    }
  }
}
</style>
