import { createAction, handleActions } from 'redux-actions';
import { reviewService } from './review.service'
import { alertActions } from '../alert.action'

// Action Types
import history from '../history'

export const reviewConstants = {
    REVIEW_REQUEST: 'REVIEW_GET_REQUEST',
    REVIEW_SUCCESS: 'REVIEW_GET_SUCCESS',
    REVIEW_FAILURE: 'REVIEW_GET_FAILURE',
}

export const getReviewSuccess = createAction(reviewConstants.REVIEW_SUCCESS);

// Initial State
const initialState = {
    review: {} 
}

// Reducer
const reviewReducer = handleActions(
    { [reviewConstants.REVIEW_SUCCESS]: (state, action) => ({ review: action.review }) },
    initialState
  )

  //Action
  export const reviewActions = {
    getAll

  }

  function getAll() {
        return dispatch => {
            dispatchEvent(request())

            reviewService.getAll()
            .then(
                review => {
                    dispatch(success(review))
                    history.push('/review')
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
        }

        function request() { return { type: reviewConstants.REVIEW_REQUEST } }
        function success(review) { return { type: reviewConstants.REVIEW_SUCCESS } }
        function failure(review) { return { type: reviewConstants.REVIEW_FAILURE } }
    }

    export default reviewReducer