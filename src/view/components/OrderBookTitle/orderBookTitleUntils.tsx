import styled from 'styled-components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


export const OrderBookWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`


export const useStylesOrderBookTitle = makeStyles((theme: Theme) =>
  createStyles({
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
  })
)

export const currenciesArr = [
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

export const depthArr = [
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

export const intervalArr = [
  {
    value: '100ms',
    label: '100 ms',
  },
  {
    value: '1000ms',
    label: '1000 ms',
  },
]
