import { initGlobal } from "./core/global.js"
import  {initPageNavigator} from "./core/pageNavigator.js"
let initialLoad = true;

window.addEventListener('DOMContentLoaded', () => {
    // const isAuth = JSON.parse(localStorage.getItem('auth'))
    // if(!isAuth) {
    //     window.location.href = "/sign-in.html"
    // }
    window.location.href = "#/"
    initGlobal()
    initPageNavigator()
})