<template>
  <div class="matan-gradient">
    <!-- Title  -->
    <div class="matan-gradient--title">
      <slot name="title"></slot>
    </div>

    <!-- Body -->
    <div class="matan-gradient--body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../style/_main.scss";

.matan-gradient {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 75vh;
  color: white;
  background: linear-gradient(
    to bottom right,
    map-deep-get($matan-colors, "primary"),
    map-deep-get($matan-colors, "secondary")
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);

  &--title {
    font-family: $section-title-font-family;
    font-size: $section-title-font-size;
    margin-bottom: 15px;
    margin-top: 170px;
    @include media("<tablet") {
      margin-top: 50px;
    }
  }

  &--body {
    font-family: $root-font-family;
    font-size: $root-font-size;
    width: 70%;
    @include media("<tablet") {
      width: 90%;
    }
  }
}
</style>
