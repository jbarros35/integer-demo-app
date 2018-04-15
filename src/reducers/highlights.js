import Store from '../store/highlights';

export const initialState = Store;

export default function highlightsReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'HIGHLIGHTS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'HIGHLIGHTS_REPLACE': {
      let highlights = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        highlights = action.data.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          image: item.image,
          author: item.author,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        highlights,
      };
    }
    default:
      return state;
  }
}
