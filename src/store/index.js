import {createStore} from "vuex";
import {postModule} from "@/store/postModule";
import {postSingleModule} from "@/store/postSingleModule";
import {pageModule} from "@/store/pageModule";
import {optionsModule} from "@/store/optionsModule";
import {footerMenuModule} from "@/store/footerMenuModule";

export default createStore({
    state: {
      isAuth: false,
      themeUrl: 'https://dev.bahamacoders.com/travelunionwp/wp-content/themes/tuwp'
    },
    modules: {
        post: postModule,
        postData: postSingleModule,
        pageData: pageModule,
        optionsData: optionsModule,
        footerMenuData: footerMenuModule,
    }
})
