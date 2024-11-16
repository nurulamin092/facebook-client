import { actions } from "../actions";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

const postReducer = (state, action) => {
    switch (action.type) {
        case actions.post.DATA_FETCHING:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case actions.post.DATA_FETCHED: {
            return {
                ...state,
                posts: action.data,
                loading: false,

            }
        }

        case actions.post.DATA_CREATED: {
            return {
                ...state,
                loading: false,
                post: [...state.posts.filter((item) => item.id !== action.data)]
            }
        }

        case actions.post.DATA_EDITED: {
            return {
                ...state,
                loading: false,
                user: action.data
            }
        }

        default:
            return state;
    }
}

export {
    postReducer, initialState
}