<template>
  <div class="container-fluid">
    <div class="row mb-2 g-3">
      <h4 class="text-center">Hockey Prospect Finder</h4>
    </div>
    <div class="search">
      <div class="container-fluid row mb-3 g-3">
        <div class="col-10">
          <input
            type="text"
            class="form-control"
            placeholder="Prospect Search"
            v-model="searchQuery"
          />
        </div>
        <div class="col-2">
          <button type="submit" value="SEARCH" class="btn btn-dark">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import { useProspectApi } from "../hooks/nhl-api";

export default {
  props: ['search'],
  setup(props, {emit }) {
    const state = useProspectApi()
    const searchQuery = ref("");

    return {
      state,
      searchQuery
    };
  },
};
</script>
