import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_WEATHER:
        
        //return the payload in an array
        //concatenate the payload data with the state array
        //and return a new version(non mutated) of state
        return [ action.payload.data, ...state ];
    }
    
    return state;
}