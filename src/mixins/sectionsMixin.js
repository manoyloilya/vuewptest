import {mapState} from "vuex";

export default {

    computed: {
        ...mapState({
            pageData: state => state.pageData.pageData
        })
    },
    methods: {
        getField(section) {
            if (this.pageData[0]) {
                return this.pageData[0].acf.blocks[section];
            }
        }
    },
    mounted() {

    }
}
