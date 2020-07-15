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
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining.
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
