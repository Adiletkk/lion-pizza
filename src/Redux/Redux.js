import { combineReducers, configureStore} from '@reduxjs/toolkit'
import { authSlisereducer } from './Slises/AuthSlise'
import { mainSlisereducer  } from './Slises/MainSlise'


// console.log(mainSlise)

const reducers = combineReducers({
    main: mainSlisereducer,
    auth: authSlisereducer
});


export const redux = configureStore({
    reducer: reducers
})