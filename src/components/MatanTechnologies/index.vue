<template>
  <div class="matan-technologies">
    <div class="matan-technologies--title">
      I have experience with a variety of technologies
    </div>
  </div>
</template>

<style lang="scss">
@import "../../style/_main.scss";

.matan-technologies {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: red;
  height: 40vh;
  margin-top: 55vh;

  // @include media("<=tablet") {
  //   height: 90vh;
  // }

  &--title {
    font-family: $section-title-font-family;
    font-size: $section-title-font-size;
    color: black;
  }
}
</style>
