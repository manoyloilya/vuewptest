import axios from "axios";


export const postSingleModule = {
    state: () => ({
        postData: [],
        postSlug: null,
        isPostDataLoading: false,
    }),
    getters: {
        getPostData(state) {
            return [...state.postData][0]
        },
    },
    mutations: {
        setPostData(state, postData) {
            state.postData = postData;
        },
        setPostSlug(state, postSlug) {
            state.postSlug = postSlug;
        },

        setPostDataLoading(state, bool) {
            state.isPostDataLoading = bool
        },
    },
    actions: {
        async fetchPostData({state, commit}) {
            try {

                // commit('setPostData', []);
                commit('setPostDataLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/wp/v2/posts?_embed', {
                    params: {
                        slug: state.postSlug,
                    }
                });
                commit('setPostData', response.data);
            } catch (e) {
                console.log(e)
            } finally {
                commit('setPostDataLoading', false);
            }
        }
    },
    namespaced: true
}
