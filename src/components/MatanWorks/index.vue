<template>
  <div class="overlay--gradient">
    <!-- Linear Gradient text box -->
    <matan-gradient-text>
      <!-- Title -->
      <template v-slot:title>
        <div>{{ $t("landing.works.title") }}</div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div
          v-html="$t('landing.works.intro')"
          class="overlay--gradient--text"
        />
      </template>
    </matan-gradient-text>

    <!-- Work Flip cards -->
    <div class="matan-flip-cards">
      <div class="matan-flip-cards--overlay">
        <div
          v-for="(cardLine, j) in worksCards"
          :key="j"
          class="matan-flip-cards--lines"
        >
          <div v-for="(card, i) in cardLine" :key="i">
            <!-- Render Each Card -->
            <m-flip-card class="matan-flip-cards--card">
              <!-- Front card -->
              <template v-slot:front>
                <div
                  :class="
                    `matan-flip-cards--card--front-${card.name}-background`
                  "
                >
                  <m-icon
                    v-if="card.icon"
                    :name="card.icon"
                    style="width: 80px; margin-right: 3px;"
                  />
                  <div
                    :class="`matan-flip-cards--card--front-${card.name}-title`"
                  >
                    {{ $t(`landing.works.cards.${card.name}.front.title`) }}
                  </div>
                </div>
              </template>

              <!-- Back card -->
              <template v-slot:back>
                <div class="matan-flip-cards--card--back--background">
                  <div class="matan-flip-cards--card--back--title">
                    {{ $t(`landing.works.cards.${card.name}.back.title`) }}
                  </div>

                  <!-- Back Buttons -->
                  <div class="matan-flip-cards--card--back-buttons">
                    <m-button
                      @click="onSourceClick(card.back.source)"
                      class="matan-flip-cards--card--back-buttons--button"
                    >
                      <m-icon
                        name="sourcecode"
                        style="width: 20px; margin-right: 10px; margin-top: 4px;"
                      />
                      <div>{{ $t("buttons.sourceCode") }}</div>
                    </m-button>
                    <m-button
                      v-if="card.back.website"
                      @click="onWebsiteClick(card.back.website)"
                      class="matan-flip-cards--card--back-buttons--button"
                    >
                      <m-icon
                        name="website"
                        style="width: 20px; margin-right: 10px"
                      />
                      <div>{{ $t("buttons.website") }}</div>
                    </m-button>
                  </div>
                </div>
              </template>
            </m-flip-card>
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
      worksCards: [
        [
          {
            name: "chat",
            back: {
              source: "https://github.com/matany90/Chat-App",
              website: "https://chat-app-client-matan.herokuapp.com/"
            }
          },
          {
            name: "tvshows",
            back: {
              source: "https://github.com/matany90/Tv-Shows"
            }
          },
          {
            name: "mylocations",
            icon: "mylocations",
            back: {
              source: "https://github.com/matany90/My-Locations",
              website: "https://my-locations-app-matan-client.herokuapp.com/"
            }
          }
        ],
        [
          {
            name: "usermanagement",
            icon: "usermanagement.png",
            back: {
              source: "https://github.com/matany90/User-management",
              website: "https://rele-ai-project-matan.herokuapp.com/"
            }
          },
          {
            name: "simplestarter",
            back: {
              source: "https://github.com/matany90/RESTful-gRPC-simple-starters"
            }
          },
          {
            name: "matanwebsite",
            icon: "matan-image.png",
            back: {
              source: "https://github.com/matany90/matan-website",
              website: "https://matanyechiel.com"
            }
          }
        ]
      ]
    }
  },

  // methods
  methods: {
    /**
     * On source click
     */
    onSourceClick(sourceLink) {
      window.open(sourceLink, "_blank")
    },

    /**
     * On website click
     */
    onWebsiteClick(websiteLink) {
      window.open(websiteLink, "_blank")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/_main.scss";

.overlay {
  // define gradient overlay
  &--gradient {
    position: relative;

    &--text {
      @include media(">=tablet") {
        margin-left: 5vh;
        margin-right: 5vh;
      }
    }
  }
}

// work flip cards
.matan-flip-cards {
  width: 100%;
  position: absolute;
  top: 70%;
  // top: 360vh;

  &--lines {
    display: flex;
    flex-direction: row;

    @include media("<tablet") {
      flex-direction: column;
    }
  }

  &--overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // cards heigth medium screen
    @media screen and (min-height: 900px) {
      top: 360vh;
    }

    // card height large screen
    @media screen and (min-height: 1000px) {
      top: 340vh;
    }

    // card heigth mobile
    @include media("<tablet") {
      flex-direction: column;
      top: 327rem;
    }
  }

  // card
  &--card {
    margin: 10px;

    // back card
    &--back--background {
      background: map-deep-get($matan-colors, "tertiary");
      @include flipcard-back-background;
    }

    &--back--title {
      font-family: $card-title-font-family;
      font-weight: $card-title-font-weight;
      font-size: 20px;
      margin-left: 40px;
      margin-right: 40px;
      color: white;
    }

    // front cards
    // Matan's Website
    &--front-matanwebsite-background {
      background: linear-gradient(
        to bottom left,
        map-deep-get($matan-colors, "primary"),
        map-deep-get($matan-colors, "secondary")
      );
      @include flipcard-front-background;
      flex-direction: column;
    }

    &--front-matanwebsite-title {
      font-family: "Josefin Sans", sans-serif;
      font-size: 25px;
      color: white;
      margin-top: 10px;
    }

    // Bet Masters
    &--front-simplestarter-background {
      background-image: url("../../assets/images/simplestarter.png");
      @include flipcard-front-background;
    }

    &--back-simplestarter-background {
      background: map-deep-get($matan-colors, "tertiary");
      @include flipcard-back-background;
    }

    &--back-simplestarter-title {
      font-family: $card-title-font-family;
      font-size: 25px;
      margin-left: 40px;
      margin-right: 40px;
      color: white;
    }

    // User management
    &--front-usermanagement-background {
      background: linear-gradient(to bottom right, #4db6ac, #00897b);
      @include flipcard-front-background;
    }

    &--front-usermanagement-title {
      font-family: "Alfa Slab One", cursive;
      font-size: 25px;
      color: white;
    }

    // My locations
    &--front-mylocations-background {
      background-image: url("../../assets/images/mylocations-background.jpg");
      @include flipcard-front-background;
    }

    &--front-mylocations-title {
      font-family: "Rubik", sans-serif;
      font-size: 35px;
      text-shadow: 1px 1px map-deep-get($matan-colors, "grey", "purple");
      color: white;
    }

    // Tv Shows
    &--front-tvshows-background {
      background-image: url("../../assets/images/tvshows-background.jpg");
      border: 2px solid map-deep-get($matan-colors, "primary");
      @include flipcard-front-background;
    }

    &--front-tvshows-title {
      font-family: "Fugaz One", cursive;
      font-size: 35px;
      text-shadow: 2px 2px map-deep-get($matan-colors, "grey", "purple");
      color: map-deep-get($matan-colors, "primary");
    }

    // Chat app
    &--front-chat-background {
      background-image: url("../../assets/images/chat-app-background.jpg");
      @include flipcard-front-background;
    }

    &--front-chat-title {
      font-family: $card-title-font-family;
      font-size: 28px;
      margin-left: 145px;
      text-shadow: 2px 2px map-deep-get($matan-colors, "grey", "purple");
      color: white;
    }

    // buttons back card
    &--back-buttons {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      &--button {
        border-radius: 30px;
        width: 180px;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
