import axios from "axios";


export const footerMenuModule = {
    state: () => ({
        footerMenuData: [],
        isFooterMenuDataLoading: false,
    }),
    mutations: {
        setFooterMenuData(state, footerMenuData) {
            state.footerMenuData = footerMenuData;
        },
        setFooterMenuDataLoading(state, bool) {
            state.isFooterMenuDataLoading = bool
        }
    },
    actions: {
        async fetchFooterMenuData({state, commit}) {
            try {
                commit('setFooterMenuDataLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/menus/v1/menus/22', {
                    params: {
                        acf_format: 'standard'
                    }
                });
                commit('setFooterMenuData', response.data);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setFooterMenuDataLoading', false);

            }
        },

    },
    namespaced: true
}
