<template>
  <div class="matan-footer">
    <div class="matan-footer--img">
      <img
        class="matan-footer--logo"
        src="../../assets/images/container-logo.png"
      />
    </div>
    <!-- Linear Gradient text box -->
    <matan-gradient-text class="matan-footer--gradient">
      <!-- Title -->
      <template v-slot:title>
        <div class="matan-footer--icon">
          <!-- Icon -->
          <m-icon name="logo1.png" class="matan-footer--icon--img" />
        </div>

        <!-- Title  -->
        <div class="matan-footer--title">
          Living, learning, & leveling up one day at a time.
        </div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div class="matan-footer--buttons">
          <m-icon
            v-for="(buttonIcon, i) in buttonIcons"
            :key="i"
            :name="buttonIcon.name"
            type="button"
            class="matan-footer--buttons--icon"
            @click="onClickIcon(buttonIcon)"
          />
        </div>
        <!-- Made by -->
        <div class="matan-footer--made-by">
          Made by Matan Yechiel © 2020
        </div>
      </template>
    </matan-gradient-text>
  </div>
</template>

<script>
export default {
  // local state
  data() {
    // button icons
    return {
      buttonIcons: [
        {
          name: "facebook",
          link: "https://www.facebook.com/matan.yechiel"
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/matan-yechiel-62117818b/"
        },
        {
          name: "cv"
        },
        {
          name: "github",
          link: "https://github.com/matany90"
        },
        {
          name: "mail",
          link: "mailto:matany90@gmail.com"
        }
      ]
    }
  },

  // methods
  methods: {
    // redirect to url on click
    onClickIcon(buttonIcon) {
      window.location.href = buttonIcon.link
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/_main.scss";

.matan-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50vh;

  &--icon {
    display: flex;
    justify-content: center;
    align-items: center;

    &--img {
      width: 50px;
      height: 60px;
      filter: brightness(0) invert(1);
    }
  }

  &--title {
    font-family: $root-font-family;
    margin-top: 5vh;
    margin-left: 20%;
    margin-right: 20%;
  }

  @include media("<tablet") {
    margin-top: 200vh;
  }

  &--img {
    margin-bottom: -87px;

    @include media("<tablet") {
      margin-bottom: -50px;
    }
  }

  &--logo {
    width: 120vh;

    @include media("<tablet") {
      width: 80vh;
    }
  }

  &--gradient {
    clip-path: none;
    -webkit-clip-path: none;
  }

  &--buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    &--icon {
      margin-top: 5vh;
      margin-right: 8px;
      margin-left: 8px;
    }
  }

  &--made-by {
    margin-top: 8vh;
    font-size: $made-by-font-size;
  }
}
</style>
