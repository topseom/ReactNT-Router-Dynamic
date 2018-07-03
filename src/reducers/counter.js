import { INCREASE,DECREASE } from '../actions/counter';

const defaultState = {
    counter:0
}
export const reducerCouter = (state=defaultState,action)=>{
    switch(action.type){
        case INCREASE:
            return{ counter:state.counter + 1 };
        case DECREASE:
            return{ counter:state.counter - 1 };
        default:
            return state;
    }
}