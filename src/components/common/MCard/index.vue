<template>
  <div class="m-card">
    <!-- Icon -->
    <div class="m-card--icon">
      <slot name="icon"></slot>
    </div>
    <!-- title -->
    <div class="m-card--title">
      <slot name="title"></slot>
    </div>

    <!-- body -->
    <div class="m-card--body">
      <slot></slot>
    </div>

    <!-- actions -->
    <div class="m-card--actions">
      <slot name="actions-left"></slot>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../style/_main.scss";

.m-card {
  // match size to the aviliable space
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;

  // design
  background: white;
  border-radius: $card-border-radius;
  border: 1px solid map-deep-get($matan-colors, "grey", "light");
  overflow: hidden; /* Hide scrollbars */

  @include shadow(2px 2px 6px 2px rgba(0, 0, 0, 0.1));

  // title class
  &--title {
    padding: 0.5em 1em;
    text-transform: capitalize;
    font-weight: map-get($font-weights, "bold");
  }

  // body class
  &--body {
    flex: 1 1 auto;
    padding: 0 1em;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 5px; /* Increase/decrease this value for cross-browser compatibility */
    padding-left: 5px;
    box-sizing: content-box; /* So the width will be 100% + 17px */
  }

  // actions class
  &--actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em 1em;

    // adapt the button to actions
    .m-button {
      width: auto;
      // min-width: 10em;
      padding: 0 0.5em;
      margin-left: 0.5em;
    }
  }
}
</style>
