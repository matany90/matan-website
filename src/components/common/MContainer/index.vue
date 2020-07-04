<template>
  <div class="m-container">
    <div class="m-container--inside">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../style/_main.scss";

.m-container {
  display: flex;
  justify-content: center;
  flex: 1;

  &--inside {
    width: $inside-container-width;
  }
}
</style>
