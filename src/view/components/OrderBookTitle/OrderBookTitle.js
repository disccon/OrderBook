import React from 'react'
import { func, number, string } from 'prop-types'
import { connect } from 'react-redux'
// material
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'
// styled
import styled from 'styled-components'
// actions
import { actions } from '../../../state'

const { changeOrderBinance } = actions


const TextFieldWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`


const useStyles = makeStyles(theme => ({
  native: true,
  root: {
    marginLeft: '100px',
    padding: '20px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: '25px',
    width: 120,
  },
  menu: {
    width: 120,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    marginRight: 'auto',
    fontWeight: 500,
    fontSize: 34,
    color: 'rgb(33, 40, 51)',
    fontFamily: 'DINNext, IBMPlexSans, Arial, PingFangSC-Regular, "Microsoft YaHei", sans-serif !important',
  },
}))

const currenciesArr = [
  {
    value: 'btcusdt',
    label: 'BTC/USDT',
  },
  {
    value: 'ethusdt',
    label: 'ETH/USDT',
  },
  {
    value: 'ltcusdt',
    label: 'LTC/USDT',
  },
]

const depthArr = [
  {
    value: 5,
    label: 5,
  },
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
]

const intervalArr = [
  {
    value: '100ms',
    label: '100 ms',
  },
  {
    value: '1000ms',
    label: '1000 ms',
  },
]


const OrderBookTitle = ({
  depth, currencies, changeOrderBinance, interval,
}) => {
  const classes = useStyles()
  const handleChangeOrder = input => ({ target }) => {
    changeOrderBinance(input, target.value)
  }
  return (
    <TextFieldWrapper>
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
    </TextFieldWrapper>
  )
}


OrderBookTitle.propTypes = {
  depth: number.isRequired,
  currencies: string.isRequired,
  interval: string.isRequired,
  changeOrderBinance: func.isRequired,
}

const mapStateToProps = state => {
  const { depth, currencies, interval } = state.orderReducer.selects
  return {
    depth, currencies, interval,
  }
}

export default connect(
  mapStateToProps,
  { changeOrderBinance },
)(OrderBookTitle)
