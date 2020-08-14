<template>
  <div class="m-loading"></div>
</template>

<style lang="scss" scoped>
@import "../../../style/_main.scss";

.m-loading {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.m-loading:after {
  content: " ";
  display: block;
  width: 22px;
  height: 22px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 50%;
  border: 3px solid map-deep-get($matan-colors, "secondary");
  border-color: map-deep-get($matan-colors, "secondary") transparent
    map-deep-get($matan-colors, "secondary") transparent;
  animation: m-loading 1.2s linear infinite;
}
@keyframes m-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
