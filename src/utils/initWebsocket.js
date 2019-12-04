import { eventChannel } from 'redux-saga'


export function initWebsocket({ url }) {
  return eventChannel(emitter => {
    const ws = new WebSocket(url)
    ws.onmessage = e => {
      try {
        const data = JSON.parse(e.data)
        emitter({ type: 'FETCH_ORDER__SUCCESS', data, close: () => ws.close() })
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
