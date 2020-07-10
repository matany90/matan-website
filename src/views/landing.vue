<template>
  <m-container>
    <!-- Header -->
    <matan-header />

    <!-- Cards container -->
    <div class="container">
      <div class="cards">
        <m-card v-for="(card, i) in cards" :key="i" class="cards--card">
          <!-- Icon -->
          <div class="icon cards--icon">{{ card.icon }}</div>

          <!-- title -->
          <div class="title cards--title">{{ card.title }}</div>

          <!-- body -->
          <div>{{ card.content }}</div>
        </m-card>
      </div>
    </div>
  </m-container>
</template>

<script>
export default {
  // local state
  data() {
    return {
      cards: [
        {
          title: "First title",
          icon: "ICON",
          content: "content"
        },
        {
          title: "Second title",
          icon: "ICON",
          content: "content"
        },
        {
          title: "Third title",
          icon: "ICON",
          content: "content"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../style/_main.scss";
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
}

.cards {
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;

  @include media("<=tablet") {
    flex-direction: column;
  }

  &--card {
    margin: 5px;
  }

  &--title {
    margin-bottom: 25px;
    font-family: $title-font-family;
    font-size: $title-card--font-size;
    color: map-deep-get($matan-colors, "primary");
    font-weight: map-get($font-weights, "bold");
  }

  &--icon {
    margin-bottom: 25px;
  }
}
</style>
