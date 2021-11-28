<template>
  <div class="container-fluid list">
    <Search />

    <p class="text-center" v-if="state.loading">Loading Prospects...</p>

    <div class="grid">
      <card
        v-for="p of prospects"
        :key="p.id"
        :fullName="p.fullName"
        :amateurTeamName="p.amateurTeam.name"
        :positionName="p.primaryPosition.name"
        :finalRank="p.ranks.finalRank"
        :draftYear="p.ranks.draftYear"
        :height="p.height"
        :weight="p.weight"
        :handiness="p.shootsCatches"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import methods from "../methods";
import Search from "../components/Search.vue";
import Card from "../components/Card.vue";
import { useProspectApi } from "../hooks/nhl-api";

export default {
  components: { Search, Card },
  setup() {
    const prospects = ref([]);
    const state = useProspectApi();
    const searchQuery = ref("");

    const searchedProspects = computed(() => {
      return state.prospects.filter((p) => {
        return p.fullName.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1;
      });
    });

    function fetchData() {
      return fetch("https://statsapi.web.nhl.com/api/v1/draft/prospects")
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          state.loading = true;
          prospects.value = data.prospects.splice(0, 10);
          state.loading = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      prospects,
      state,
      searchQuery,
      searchedProspects,
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
