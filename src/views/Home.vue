<template>
  <div class="container-fluid list">
    <div class="row mb-2 g-3">
      <h4 class="text-center">Hockey Prospect Finder</h4>
    </div>
    <div class="search">
      <div class="container-fluid row mb-3 g-3">
        <div class="col-10">
          <input
            type="text"
            class="form-control"
            placeholder="NHL Team Search"
          />
        </div>
        <div class="col-2">
          <button type="submit" value="SEARCH" class="btn btn-dark">Search</button>
        </div>
      </div>
    </div>

    <p class="text-center" v-if="loading">Loading Prospects...</p>

  <div class="grid">
    <div v-for="p of prospects" :key="p.id">
      <div class="card mx-2 my-2" style="width: 18rem">
        <img :src="matchPlayer(p.primaryPosition.name)" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ p.fullName }}</h5>
          <h5 class="card-title">{{ p.primaryPosition.name }}</h5>
          <p class="card-text">{{ p.amateurTeam.name }}</p>
          <p class="card-text">Ranking: {{ p.ranks.finalRank }} - {{ p.ranks.draftYear }}</p>
          <p class="card-text">{{ p.height }} - {{ p.weight }} - {{ p.shootsCatches }}</p>
          <a class="btn btn-primary">Info</a>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import methods from '../methods'
export default {
  setup() {
    const loading = ref(true);
    const prospects = ref(null);

    function fetchData() {
      loading.value = true;
      return fetch("https://statsapi.web.nhl.com/api/v1/draft/prospects")
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          prospects.value = data.prospects.splice(0, 10);
        })
        .then(() => {
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      prospects,
      loading
    };
  },
  methods: {
    ...methods
  }
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
