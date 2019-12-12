export interface OrderState {
  loading: null | boolean,
  selects: {
    depth: number,
    currencies: string,
    interval: string,
  },
  bids: Array<Array<string>>,
  asks: Array<Array<string>>,
  snapshotAsks?: Array<string>
  snapshotBids?: Array<string>
  lastUpdateId: number | null
  bufferData: Array<object> | null,
  lastBufferData: Array<string> | null,
}


export const initialOrderState: OrderState = {
  loading: null,
  selects: {
    depth: 10,
    currencies: 'btcusdt',
    interval: '1000ms',
  },
  bids: [],
  asks: [],
  snapshotAsks: [],
  snapshotBids: [],
  lastUpdateId: null,
  bufferData: [],
  lastBufferData: null,
}