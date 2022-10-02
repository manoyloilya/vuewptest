import axios from "axios";


export const postModule = {
    state: () => ({
        posts: [],
        categories: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        categorySlug: null,
        categoryId: null,
        limit: 9,
        totalPages: 0,
        // totalCategories: 0,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'},
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.rendered.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = Math.ceil(page);
        },
        setLimit(state, limit) {
            state.limit = Math.ceil(limit);
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setTotalCategories(state, categories) {
            state.categories = categories
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setCategorySlug(state, categorySlug) {
            state.categorySlug = categorySlug
        },
        setCategoryId(state, categoryId) {
            state.categoryId = categoryId
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/wp/v2/posts?_embed', {
                    params: {
                        page: state.page,
                        per_page: state.limit,
                        categories: state.categoryId
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-wp-totalpages'] ));
                commit('setPosts', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async fetchCategories({state, commit}) {
            try {
                const response = await axios.get('https://dev.bahamacoders.com/travelunionwp/wp-json/wp/v2/categories', {
                    params: {
                        // page: state.page,
                    }
                });
                commit('setCategories', response.data);
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}
