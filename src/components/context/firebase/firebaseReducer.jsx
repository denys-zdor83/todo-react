import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../keys"

const handler = {
  [SHOW_LOADER]: state => ({...state, isLoading: true}),
  [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, isLoading: false}),
  [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload]}),
  [REMOVE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(elem => elem.id !== payload)}),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handler[action.type] || handler.DEFAULT
  return handle(state, action)
}