// import { ACTIONS } from '../actions/actions'
import {author} from '../../helper/testData';


const initialState = {
    ...author
}

export const authorReducer = (author=initialState, action) => {
    switch (action.type) {
        default: return author;
    }
}