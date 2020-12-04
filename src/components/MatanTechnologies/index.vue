<template>
  <div class="matan-technologies">
    <!-- Title -->
    <div class="matan-technologies--title">
      {{ $t("landing.technologies.title") }}
    </div>

    <!-- Icons -->
    <div class="matan-technologies--container">
      <div
        v-for="(techLine, j) in technologies"
        class="matan-technologies--container--icons"
        :key="j"
      >
        <div v-for="(tech, i) in techLine" :key="i">
          <!-- Icon container -->
          <div class="matan-technologies--container--icons--icon-container">
            <!-- Icon -->
            <m-icon
              :name="tech"
              @mouseover="activeTooltip(tech)"
              @mouseleave="resetTooltip"
              class="matan-technologies--container--icons--icon"
            />
            <!-- Tooltip -->
            <div class="matan-technologies--container--icons--tooltip">
              <transition name="fade">
                <div v-if="toolTip === tech">
                  <span
                    class="tooltiptext"
                    v-html="$t(`landing.technologies.tooltip.${getTech(tech)}`)"
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>
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
        ["react", "vue", "nodejs", "python", "javascript", "golang.png"],
        ["kubernetes", "docker", "firestore", "google-cloud", "mongodb", "grpc"]
      ],

      // is tool tipe visible
      toolTip: ""
    }
  },

  // methods
  methods: {
    /**
     * Activate tooltip
     */
    activeTooltip(tech) {
      this.toolTip = tech
    },

    /**
     * Reset tooltip
     */
    resetTooltip() {
      this.toolTip = ""
    },

    /**
     * Returns the tech without suffix
     */
    getTech(tech) {
      return tech.split(".")[0]
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
  margin-top: 55rem;
  margin-bottom: 10rem;

  @include media(">phone", "<desktop") {
    margin-top: 50vh;
  }

  @include media("<tablet") {
    margin-top: 120rem;
    margin-bottom: 0vh;
  }

  &--title {
    font-family: $section-title-font-family;
    font-size: $section-title-font-size;
    font-weight: $section-title-font-weight;
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
      }

      &--tooltip {
        height: 40px;
        margin-bottom: 30px;
      }

      &--icon-container {
        position: relative;
        margin: 20px;
      }
    }
  }

  .tooltiptext {
    width: 150px;
    font-family: $card-title-font-family;
    font-size: 20px;
    background: map-deep-get($matan-colors, "tertiary");
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    /* Position the tooltip text - see examples below! */
    position: absolute;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
