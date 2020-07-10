<template>
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
</template>

<script>
export default {
  // local state
  data() {
    return {
      cards: [
        {
          title: "Front-end Developer",
          icon: "ICON",
          content: "content"
        },
        {
          title: "Back-end Developer",
          icon: "ICON",
          content: "content"
        },
        {
          title: "Cloud Architecture",
          icon: "ICON",
          content: "content"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../style/_main.scss";
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
    font-family: $card-title-font-family;
    font-size: $card-title-font-size;
    color: black;
    font-weight: map-get($font-weights, "bold");
  }

  &--icon {
    margin-bottom: 25px;
  }
}
</style>
