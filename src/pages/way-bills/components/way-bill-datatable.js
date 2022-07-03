// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import moment from 'moment';

const columns = [
  { id: 'DATE', label: 'Date', minWidth: 170 },
  { id: 'SLOT', label: 'Slot', minWidth: 100 },
  {
    id: 'SHIPTO_1',
    label: 'SHIPTO_1',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'SHIPTO_2',
    label: 'SHIPTO_2',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'SHIPTO_3',
    label: 'SHIPTO_3',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'DELIVERY_REMARKS',
    label: 'DELIVERY_REMARKS',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'SENDER',
    label: 'SENDER',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'ORDER_NO',
    label: 'ORDER_NO',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'PACKAGE_NO',
    label: 'PACKAGE_NO',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'PACKAGE_SIZE',
    label: 'PACKAGE_SIZE',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'WEIGHT_TITLE_DATE',
    label: 'WEIGHT_TITLE_DATE',
    minWidth: 170,
    align: 'right',
  },
]

const WayBillsDataTable = (props) => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [data, setData] = useState(props.data)

  useEffect(() => {
    //const dataSource = createData();
    setData(props.data)
    //console.log('dataSrc', dataSource)
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                  {columns.map(column => {
                    const value = row[column.id]
                    // console.log('value',value)
                    // const value = data[index]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                        {value.toString()}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default WayBillsDataTable
