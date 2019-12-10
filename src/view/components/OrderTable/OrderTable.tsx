import React from 'react'
// material
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography,
} from '@material-ui/core'
// components
import OrderRow from './OrderRow/OrderRow'


const StyledTableCell = withStyles(() => ({
  head: {
    color: 'rgb(132, 142, 156)',
    borderBottom: 'none',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell)

const useStyles = makeStyles({
  root: {
    width: '48%',
  },
  title: {
    marginTop: 18,
    marginLeft: 18,
    fontSize: 18,
    color: 'rgb(33, 40, 51)',
    fontFamily: 'DINNext, IBMPlexSans, Arial, PingFangSC-Regular, "Microsoft YaHei", sans-serif !important',
  },
  cellPrice: {
    width: 150,
  },
  cellAmount: {
    width: 150,
  },
})


interface ComponentProps {
  title: string
  orderArr: any
}

type AllProps = ComponentProps


const OrderTable: React.FC<AllProps>  = ({ title, orderArr }) => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.root}>
        <Typography variant='h4' className={classes.title}>
          {title}
        </Typography>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Price(USDT)</StyledTableCell>
              <StyledTableCell>Amount(BTC)</StyledTableCell>
              <StyledTableCell>Total(USDT)</StyledTableCell>
              <StyledTableCell>Sum(USDT)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderArr.length && orderArr.map((item: any, key: number) => (
              <OrderRow
                key={key + 1}
                rowArr={item}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}


export default OrderTable
