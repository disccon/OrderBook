export interface OrderInterface {
  isLoading: null,
  selects: {
    depth: number,
    currencies: string,
    interval: string,
  },
  bids: any,
  asks: any,
}


export const initialOrderState: OrderInterface = {
  isLoading: null,
  selects: {
    depth: 10,
    currencies: 'btcusdt',
    interval: '1000ms',
  },
  bids: [],
  asks: [],
}