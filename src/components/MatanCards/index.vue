<template>
  <!-- Cards container -->
  <div class="container">
    <div class="cards">
      <m-card v-for="(card, i) in cards" :key="i" class="cards--card">
        <!-- Icon -->
        <div class="icon cards--icon-container">
          <m-icon :name="card.icon" class="cards--icon-container--icon" />
        </div>

        <!-- title -->
        <div class="title cards--title">{{ card.title }}</div>

        <!-- body -->
        <div class="cards--body">{{ card.content }}</div>
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
          icon: "code",
          content:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          title: "Back-end Developer",
          icon: "server",
          content:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          title: "Cloud Architecture",
          icon: "cloud",
          content:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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

  &--body {
    font-size: $card-content-font-size;
  }

  &--icon-container {
    margin-top: 50px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    &--icon {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
