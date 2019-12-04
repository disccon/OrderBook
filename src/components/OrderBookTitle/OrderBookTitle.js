import React from 'react'
import { func, number, string } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography } from '@material-ui/core'
// classNames
import classNames from 'classnames/bind'
// scss
import { connect } from 'react-redux'
import styles from './OrderBookTitle.module.scss'
import { changeOrderBinance } from '../../store/modules/order'

const cx = classNames.bind(styles)


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
  },
  title: {
    marginRight: 'auto',
    fontWeight: 500,
    fontSize: 34,
    color: 'rgb(33, 40, 51)',
    fontFamily: 'DINNext, IBMPlexSans, Arial, PingFangSC-Regular, "Microsoft YaHei", sans-serif !important',
  },
}))

const currencies = [
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
    label: '100ms',
  },
  {
    value: '1000ms',
    label: '1000ms',
  },
]


const OrderBookTitle = ({
  depth, group, changeOrderBinance, interval,
}) => {
  const classes = useStyles()
  const handleChangeOrder = input => ({ target }) => {
    changeOrderBinance(input, target.value)
  }
  return (
    <div className={cx('textFieldWrapper')}>
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
        label='Group'
        className={classes.textField}
        value={group}
        onChange={handleChangeOrder('group')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
      >
        {currencies.map(option => (
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
    </div>
  )
}


OrderBookTitle.propTypes = {
  depth: number.isRequired,
  group: string.isRequired,
  interval: string.isRequired,
  changeOrderBinance: func.isRequired,
}

const mapStateToProps = state => {
  const { depth, group, interval } = state.orderReducer
  return {
    depth, group, interval,
  }
}

export default connect(
  mapStateToProps,
  { changeOrderBinance },
)(OrderBookTitle)
