import React from 'react'
import { connect } from 'react-redux'
import { TextField, Typography } from '@material-ui/core'
// actions
import { actions } from '../../../state'
// untils
import { AppState } from '../../../state/reducers'
import { depthArr, useStylesOrderBookTitle, OrderBookWrapper, currenciesArr, intervalArr } from './orderBookTitleUntils'
const { changeOrderBinance } = actions

interface PropsFromState {
  depth: number
  currencies: string,
  interval: string,
}

interface PropsFromDispatch {
  changeOrderBinance: typeof changeOrderBinance
}

type AllProps = PropsFromState & PropsFromDispatch

const OrderBookTitle: React.FC<AllProps> = ({
                                              depth, currencies, interval, changeOrderBinance
                                            }) => {
  const classes = useStylesOrderBookTitle()
  const handleChangeOrder = (input: string) => (event: React.ChangeEvent<HTMLInputElement> ): void => {
    changeOrderBinance(input, event.target.value)
  }
  return (
    <OrderBookWrapper>
      <Typography className={classes.title} variant='h2'>
        Order Book
      </Typography>
      <TextField
        select
        label='Depth'
        className={classes.textField}
        value={depth}
        onChange={handleChangeOrder('depth')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
      >
        {depthArr.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        select
        label='Сurrency'
        className={classes.textField}
        value={currencies}
        onChange={handleChangeOrder('currencies')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
      >
        {currenciesArr.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        select
        label='Interval'
        className={classes.textField}
        value={interval}
        onChange={handleChangeOrder('interval')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
      >
        {intervalArr.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </OrderBookWrapper>
  )
}


const mapStateToProps = ({orderReducer}: AppState) => {
  const { depth, currencies, interval } = orderReducer.selects
  return {
    depth, currencies, interval,
  }
}

export default connect(
  mapStateToProps,
  {changeOrderBinance},
)(OrderBookTitle)


