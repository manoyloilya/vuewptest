import axios from "axios";


export const optionsModule = {
    state: () => ({
        optionsData: [],
        isOptionsDataLoading: false,
    }),
    mutations: {
        setOptionsData(state, optionsData) {
            state.optionsData = optionsData;
        },
        setOptionsDataLoading(state, bool) {
            state.isOptionsDataLoading = bool
        }
    },
    actions: {
        async fetchOptionsData({state, commit}) {
            try {
                commit('setOptionsDataLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/acf/v3/options/options', {
                    params: {
                        acf_format: 'standard'
                    }
                });
                commit('setOptionsData', response.data);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setOptionsDataLoading', false);

            }
        },

    },
    namespaced: true
}
