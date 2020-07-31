<template>
  <div class="matan-technologies">
    <!-- Title -->
    <div class="matan-technologies--title">
      I have experience with a variety of technologies:
    </div>

    <!-- Icons -->
    <div class="matan-technologies--container">
      <div
        v-for="(techLine, j) in technologies"
        class="matan-technologies--container--icons"
        :key="j"
      >
        <m-icon
          v-for="(tech, i) in techLine"
          :key="i"
          :name="tech"
          class="matan-technologies--container--icons--icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // local state
  data() {
    return {
      technologies: [
        ["react", "vue", "nodejs", "python"],
        ["kubernetes", "docker", "firestore", "google-cloud"]
      ]
    }
  }
}
</script>
<style lang="scss">
@import "../../style/_main.scss";

.matan-technologies {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  margin-top: 60vh;

  @include media(">phone", "<desktop") {
    margin-top: 50vh;
  }

  @include media("<tablet") {
    margin-top: 265vh;
  }

  &--title {
    font-family: $section-title-font-family;
    font-size: $section-title-font-size;
    color: black;
    margin-left: 5%;
    margin-right: 5%;
  }

  &--container {
    display: flex;
    flex-direction: column;
    @include media("<=tablet") {
      flex-direction: row;
    }
    &--icons {
      display: flex;
      flex-direction: row;
      @include media("<=tablet") {
        flex-direction: column;
      }
      margin-top: 50px;

      &--icon {
        width: 150px;
        height: 70px;
        margin: 20px;
      }
    }
  }
}
</style>
