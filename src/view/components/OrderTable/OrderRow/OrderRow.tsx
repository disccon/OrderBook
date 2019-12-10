import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'

interface ComponentProps {
  rowArr: any
}

type AllProps = ComponentProps

const OrderRow: React.FC<AllProps>  = ({
                    rowArr,
                  }) => (
  <TableRow>
    {rowArr.map((item: number, key: number) => (
      <TableCell key={key}>
        {item}
      </TableCell>
    ))}
  </TableRow>
)



export default OrderRow
