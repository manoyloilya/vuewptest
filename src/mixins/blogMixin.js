import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
    methods: {

        changePage(pageNumber, id, slug) {
            this.setPage(pageNumber);
            if (id === undefined) {
                this.setCategoryId(undefined);
                this.setCategorySlug(undefined);
                this.$router.push('/blog/page/' + pageNumber);
            } else {
                this.setCategoryId(id);
                this.setCategorySlug(slug);
                this.$router.push('/blog/category/' + slug + '/page/' + pageNumber );
            }
            this.fetchPosts();
            this.scrollToTop();
        },

        ...mapMutations({
            setPage: 'post/setPage',
            setLimit: 'post/setLimit',
            setCategoryId: 'post/setCategoryId',
            setCategorySlug: 'post/setCategorySlug',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts',
            fetchCategories: 'post/fetchCategories'
        }),

        scrollToTop() {
            window.scrollTo(0,0);
        }
    },

    computed: {
        ...mapState({
            posts: state => state.post.posts,
            categories: state => state.post.categories,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
            categoryId: state => state.post.categoryId,
            categorySlug: state => state.post.categorySlug
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },
}
