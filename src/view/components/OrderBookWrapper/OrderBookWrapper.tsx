import React from 'react'
import { connect } from 'react-redux'
// styled
import styled from 'styled-components'
// components
import OrderTable from '../OrderTable/OrderTable'
import { AppState } from '../../../state/reducers'

const OrderTableWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

interface PropsFromState {
  bids: any,
  asks: any,
}

type AllProps = PropsFromState

const OrderBookWrapper: React.FC<AllProps> = ({ bids, asks }) => (
  <OrderTableWrapper>
    <OrderTable title='Buy Order' orderArr={bids} />
    <OrderTable title='Sell Order' orderArr={asks} />
  </OrderTableWrapper>
)


const mapStateToProps = ({ orderReducer}: AppState) => {
  const { bids, asks } = orderReducer
  return {
    bids, asks,
  }
}

export default connect(
  mapStateToProps,
)(OrderBookWrapper)
