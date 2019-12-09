import { END, eventChannel } from 'redux-saga'


export const createSocketChannel = socket => (
  eventChannel(emit => {
    socket.onmessage = event => {
      emit(JSON.parse(event.data))
    }

    socket.onclose = () => {
      emit(END)
    }

    const unsubscribe = () => {
      socket.onmessage = null
    }

    return unsubscribe
  })
)
