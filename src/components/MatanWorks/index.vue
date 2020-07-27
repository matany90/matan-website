<template>
  <div>
    <!-- Linear Gradient text box -->
    <matan-gradient-text class="overlay--gradient">
      <!-- Title -->
      <template v-slot:title>
        <div>Take a look at my latest projects</div>
      </template>

      <!-- Body -->
      <template v-slot:body>
        <div>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining.
        </div>
      </template>
    </matan-gradient-text>

    <!-- Work Flip cards -->
    <div class="matan-flip-cards">
      <div v-for="(card, i) in worksCards" :key="i">
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
</template>

<script>
export default {
  // local state
  data() {
    return {
      worksCards: [
        {
          title: "card1"
        },
        {
          title: "card2"
        },
        {
          title: "card3"
        }
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
    margin-top: 150px;
    position: relative;
  }

  // define cards overlay
  &--cards {
    width: 90%;
    position: absolute;
    top: 80%;

    @include media("<=tablet") {
      top: 90%;
    }
  }
}

// work flip cards
.matan-flip-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  // card
  &--card {
    margin: 10px;
  }
}
</style>
