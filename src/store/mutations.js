import { 
	SOME_MUTATION
} from './mutation-types'

//import {
//	setStore,
//	getStore,
//} from '../config/mUtils.js'
export default {
    [ SOME_MUTATION ] (state){
        alert(state.count);
    }
}
