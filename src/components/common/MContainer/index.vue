<template>
  <div class="m-container">
    <slot />
  </div>
</template>

<style lang="scss">
@import "../../../style/_main.scss";

.m-container {
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
}
</style>
