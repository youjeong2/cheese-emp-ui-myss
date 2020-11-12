
import { createAction, handleActions } from 'redux-actions';
import { cheeseService } from './cheese.service'
import { alertAction } from '../../../alert.action'
import history from '../../../history'

export const cheeseConstants = {
    CHEESELIST_REQUEST: 'CHEESELIST_GET_REQUEST',
    CHEESELIST_SUCCEESS: 'CHEESELIST_GET_SUCCESS',
    CHEESELIST_FAILURE: 'CHEESELIST_GET_FAILURE'
}

export const getCheeseSuccess = createAction(cheeseConstants,CHEESELIST_SUCCEESS);

// Initial State
const initialState = {
    cheeses: {}
}

// Reducer
const cheeseReducer = handleActions(
    { [cheeseConstants.CHEESELIST_SUCCEESS]: (state, action) => ({ cheeses: action.cheeses}) },
    initialState
)

// Action
export const cheeseActions =  {
    getAll

}

////////////////////// GET /////////////////////

function getAll() {
    return dispatch => {
        dispatch(request());

        cheeseService.getAll()
        .then(
            cheeses => {
                console.log(cheeses)
                dispatch(successs(cheese));
                history.push('api/cheeses')
                dispatch(alertActions.successs('Cheese Registeraion Succeessful'));
            },
            error => {
                distpatch(failure(error.toString()));
                dispatch(alertAction.error(error.toString()));

            }
        );
    };
    
    function request() { return { type: cheeseConstants.CHEESELIST_REQUEST } }
    function successs(cheeses) { return { type: cheeseConstants.CHEESELIST_SUCCEESS, cheeses } }
    function failure(cheeses) { return { type: cheeseConstants.CHEESELIST_FAILURE, error} }
}

export default cheeseReducer