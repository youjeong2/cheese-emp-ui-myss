
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
    cheese: {}
}

// Reducer
const cheeseReducer = handleActions(
    { [cheeseConstants.CHEESELIST_SUCCEESS]: (state, action) => ({ cheese: action.cheese}) },
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
            cheese => {
                dispatch(successs(cheese));
                history.push('/cheese')

                dispatch(alertActions.successs('Cheese Registeraion Succeessful'));
            },
            error => {
                distpatch(failure(error.toString()));
                dispatch(alertAction.error(error.toString()));

            }
        );
    };
    
    function request() { return { type: cheeseConstants.CHEESELIST_REQUEST } }
    function successs(cheese) { return { type: cheeseConstants.CHEESELIST_SUCCEESS, cheese } }
    function failure(cheese) { return { type: cheeseConstants.CHEESELIST_FAILURE, error} }
}

export default cheeseReducer