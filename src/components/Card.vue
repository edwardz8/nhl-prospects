<template>
  <div class="card mx-2 my-2" style="width: 18rem">
    <img :src="matchPlayer(positionName)" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ fullName }}</h5>
      <h5 class="card-title">{{ positionName }}</h5>
      <p class="card-text">{{ amateurTeamName }}</p>
      <p class="card-text">Ranking: {{ finalRank }} - {{ draftYear }}</p>
      <p class="card-text">{{ height }} - {{ weight }} - {{ handiness }}</p>
      <a class="btn btn-primary">Info</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import methods from "../methods";

export default {
  props: {
      fullName: {
          type: String,
          required: true
      },
      positionName: {
          type: String,
          required: true
      },
      amateurTeamName: {
          type: String,
          required: true
      },
      finalRank: {
          type: String,
          required: true
      },
      draftYear: {
          type: String,
          required: true
      },
      height: {
          type: String,
          required: true
      },
      weight: {
          type: String,
          required: true
      },
      handiness: {
          type: String,
          required: true
      },
  },
  setup(props) {
    const prospects = ref([]);

    return {
      prospects
    };
  },
  methods: {
    ...methods,
  },
};
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list {
  max-width: 1640px;
}
</style>
