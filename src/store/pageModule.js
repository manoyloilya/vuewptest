import axios from "axios";


export const pageModule = {
    state: () => ({
        pageData: [],
        teamData: [],
        roadData: [],
        pageSlug: null,
        isPageDataLoading: false,
        isTeamDataLoading: false,
        isRoadDataLoading: false,
    }),
    mutations: {
        setPageData(state, pageData) {
            state.pageData = pageData;
        },
        setTeamData(state, teamData) {
            state.teamData = teamData;
        },
        setRoadData(state, roadData) {
            state.roadData = roadData;
        },
        setPageSlug(state, pageSlug) {
            state.pageSlug = pageSlug;
        },
        setPageDataLoading(state, bool) {
            state.isPageDataLoading = bool
        },
        setTeamDataLoading(state, bool) {
            state.isTeamDataLoading = bool
        },
        setRoadDataLoading(state, bool) {
            state.isRoadDataLoading = bool
        },
    },
    actions: {
        async fetchPageData({state, commit}) {
            try {
                commit('setPageDataLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/wp/v2/pages', {
                    params: {
                        slug: state.pageSlug,
                        acf_format: 'standard'
                    }
                });
                commit('setPageData', response.data);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setPageDataLoading', false);

            }
        },

        async fetchTeamData({state, commit}) {
            try {
                commit('setTeamDataLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/wp/v2/team?_embed', {
                    params: {

                    }
                });
                commit('setTeamData', response.data);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setTeamDataLoading', false);

            }
        },

        async fetchRoadData({state, commit}) {
            try {
                commit('setRoadDataLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/wp/v2/roadmap?_embed', {
                    params: {

                    }
                });
                commit('setRoadData', response.data);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setRoadDataLoading', false);

            }
        }
    },
    namespaced: true
}
