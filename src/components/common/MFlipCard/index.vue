<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front"></slot>
      </div>
      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../style/_main.scss";

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 350px;
  height: 250px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  @include transition(transform 0.8s);
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

// container flip card style
@mixin base-flip-card-container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;

  // design
  background: white;
  border-radius: $card-border-radius;
  // border: 1px solid map-deep-get($matan-colors, "grey", "light");

  @include shadow(2px 2px 6px 2px rgba(0, 0, 0, 0.1));
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  // match size to the aviliable space
  @include base-flip-card-container;
}

/* Style the back side */
.flip-card-back {
  @include base-flip-card-container;
  transform: rotateY(180deg);
}
</style>
