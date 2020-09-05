<template>
  <div>
    <!-- Linear Gradient text box -->
    <matan-gradient-text class="overlay--gradient">
      <!-- Title -->
      <template v-slot:title>
        <div>{{ $t("landing.works.title") }}</div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div>
          {{ $t("landing.works.intro") }}
        </div>
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
                <div>test FRONT</div>
              </template>

              <!-- Back card -->
              <template v-slot:back>
                <div>test Back</div>
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
            title: "card1"
          },
          {
            title: "card2"
          },
          {
            title: "card3"
          }
        ],
        [
          {
            title: "card4"
          },
          {
            title: "card5"
          },
          {
            title: "card6"
          }
        ]
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/_main.scss";

.overlay {
  // define gradient overlay
  &--gradient {
    // margin-top: 0vh;

    // @include media("<tablet") {
    //   margin-top: 37vh;
    // }

    position: relative;
  }
}

// work flip cards
.matan-flip-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &--lines {
    display: flex;
    flex-direction: row;

    @include media("<tablet") {
      flex-direction: column;
    }
  }

  &--overlay {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 350vh;

    @include media("<tablet") {
      flex-direction: column;
      top: 320rem;
    }
  }

  // card
  &--card {
    margin: 10px;
  }
}
</style>
