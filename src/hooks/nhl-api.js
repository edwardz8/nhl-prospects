import { reactive, watchEffect, onMounted } from 'vue'

export const useProspectApi = () => {
    const state = reactive({
        search: 'Prospect',
        loading: true,
        prospects: []
    })

    watchEffect(() => {
        const PROSPECT_API_URL = `https://statsapi.web.nhl.com/api/v1/draft/prospects`

        fetch(PROSPECT_API_URL)
            .then((res) => res.json())
            .then(data => {
                state.loading = true
                // state.prospects.value = data.Search
                state.prospects.value = data.prospects.splice(0, 10);
                state.loading = false
                console.log({data});
            })
    })

    return state
}