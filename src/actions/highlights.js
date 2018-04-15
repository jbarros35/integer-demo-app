import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get Highlights
  */
 export function getHighlights() {
    if (Firebase === null) return () => new Promise(resolve => resolve());
  
    return dispatch => new Promise(resolve => FirebaseRef.child('highlights')
      .on('value', (snapshot) => {
        const highlights = snapshot.val() || {};
  
        return resolve(dispatch({
          type: 'HIGHLIGHTS_REPLACE',
          data: highlights,
        }));
      })).catch(e => console.log(e));
  }

  /**
  * Set an Error Message
  */
export function setError(message) {
    return dispatch => new Promise(resolve => resolve(dispatch({
      type: 'HIGHLIGHTS_ERROR',
      data: message,
    })));
  }