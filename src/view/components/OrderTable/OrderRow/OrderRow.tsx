import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'

interface ComponentProps {
  rowArr: Array<string>
}

type AllProps = ComponentProps


const OrderRow: React.FC<AllProps>  = ({
                    rowArr,
                  }) => (
  <TableRow>
    {rowArr.map((item: string, key: number) => (
      <TableCell key={key}>
        {item}
      </TableCell>
    ))}
  </TableRow>
)


export default OrderRow
