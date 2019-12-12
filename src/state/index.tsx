// import { configureStore, history } from './_store'
import { configureStore, history } from './_store/configureStore.dev'
import actions from './actions'

const store = configureStore


export {
  store,
  actions,
  history,
}
