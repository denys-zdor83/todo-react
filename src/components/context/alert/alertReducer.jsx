import { HIDE_ALERT, SHOW_ALERT } from "../keys"

const handler = {
  [SHOW_ALERT]: (state, {payload}) => ({...payload, vizible: true}),
  [HIDE_ALERT]: state => ({...state, vizible: false}),
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handle = handler[action.type] || handler.DEFAULT
  return handle(state, action)
}