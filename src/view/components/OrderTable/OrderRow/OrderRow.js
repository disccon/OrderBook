import React from 'react'
import { array } from 'prop-types'
import { TableCell, TableRow } from '@material-ui/core'


const OrderRow = ({
  rowArr,
}) => (
  <TableRow>
    {rowArr.map((item, key) => (
      <TableCell key={key}>
        {item}
      </TableCell>
    ))}
  </TableRow>
)


OrderRow.propTypes = {
  rowArr: array.isRequired,
}

export default OrderRow
