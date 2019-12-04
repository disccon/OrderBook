import { eventChannel } from 'redux-saga'
import _ from 'lodash/core'


export function initWebsocket({ url }) {
  return eventChannel(emitter => {
    const ws = new WebSocket(url)
    let prevData = {}
    ws.onmessage = e => {
      try {
        const data = JSON.parse(e.data)
        if (!_.isEqual(data.bids, prevData.bids) && !_.isEqual(data.asks, prevData.asks)) {
          emitter({ type: 'FETCH_ORDER__SUCCESS', data, close: () => ws.close() })
          prevData = { ...data }
        } else {
          emitter({ type: 'FETCH_ORDER__NOT_CHANGED', close: () => ws.close() })
          prevData = { ...data }
        }
      } catch (error) {
        emitter({ type: 'FETCH_ORDER__FAILURE', error })
        ws.close()
      }
    }
    ws.onerror = error => {
      emitter({ type: 'FETCH_ORDER__FAILURE', error })
    }
    return () => {
      ws.close()
    }
  })
}
