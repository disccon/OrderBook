import { configureStore, history } from './_store'
import actions from './actions'

const store = configureStore

export {
  store,
  actions,
  history,
}
