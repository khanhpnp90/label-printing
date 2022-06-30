// ** MUI Imports

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import

// ** Demo Components Imports
import { Card, CardContent, CardHeader } from '@mui/material'
import readXlsxFile from 'read-excel-file'
import { useRef, useState } from 'react'

const Dashboard = () => {
  const inputEl = useRef(null);

  useState(() => {

  }, [])

  const onDowload=()=>{
    window.open("./reports/way-bills");

  }

  return (
    <>
      <Card>
        <CardHeader title='Headings' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <input ref={inputEl} type="file" id="input" onChange={(e) => {
            readXlsxFile(e.target.files[0]).then((rows) => {
              // `rows` is an array of rows
              // each row being an array of cells.
              console.log('file', rows);

            })
            console.log('onChange', e.target.files[0]);
          }} />
          <button onClick={onDowload}>download</button>
        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard
