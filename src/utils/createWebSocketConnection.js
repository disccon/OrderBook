import ReconnectingWebSocket from 'reconnecting-websocket'

export const createWebSocketConnection = ({ url }) => (
  new Promise((resolve, reject) => {
    const socket = new ReconnectingWebSocket(url)

    socket.onopen = () => {
      resolve(socket)
    }

    socket.onerror = evt => {
      reject(evt)
    }
  })
)
