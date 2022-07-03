// ** MUI Imports

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import

// ** Demo Components Imports
import { Card, CardContent, CardHeader } from '@mui/material'
import readXlsxFile from 'read-excel-file'
import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Close from 'mdi-material-ui/Close'
import WayBillsDataTable from './way-bills/components/way-bill-datatable'
import moment from 'moment';
import Delete from 'mdi-material-ui/Delete'


const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const Dashboard = () => {
  const inputEl = useRef(null);
  const [openAlert, setOpenAlert] = useState(false)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [data, setData] = useState([])
  const [isSuccessUpload, setSuccessUpload] = useState(true)
  const [fileName, setFileName] = useState(null);

  const onChange = (e) => {
    readXlsxFile(e.target.files[0]).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      console.log('file', rows);
      try {
        if (rows && rows.length > 0) {
          rows.splice(0, 1);
          setFileName(e.target.files[0].name)
          setData(createData(rows));
        }
      } catch (error) {
        console.log('Error when Import', error);
        setOpenAlert(true)
      } finally {
        e.target.value = ''
      }
    })
  }


  const onPrint = () => {
    localStorage.setItem('WAYBILLS_PRINTING', JSON.stringify(data));
    window.open("./reports/way-bills");

  }

  const createData = (rows) => {
    return rows.map(t => {
      return {
        DATE: t[0] ? moment(t[10]).format("MMM Do YY") : '',
        SLOT: t[1],
        SHIPTO_1: t[2],
        SHIPTO_2: t[3],
        SHIPTO_3: t[4],
        DELIVERY_REMARKS: t[5],
        SENDER: t[6],
        ORDER_NO: t[7],
        PACKAGE_NO: t[8],
        PACKAGE_SIZE: t[9],
        WEIGHT_TITLE_DATE: t[10] ? moment(t[10]).format("MMM Do YY") : '',
      }
    })
  }

  const deleteFile = () => {
    setFileName(null);
    setData([]);
  }

  return (
    <>
      <Card>
        <CardHeader title='Print the labels' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <CardContent>
            <form>
              <Grid container spacing={7}>
                <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <ImgStyled src={imgSrc} alt='Profile Pic' /> */}
                    <Box>
                      <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                        Upload data file
                        <input
                          hidden
                          type='file'
                          onChange={onChange}
                          // accept='image/png, image/jpeg'
                          accept='xls, .xlsx'
                          id='account-settings-upload-image'
                        />
                      </ButtonStyled>
                      <ResetButtonStyled color='error' variant='outlined' onClick={onPrint}>
                        Print labels
                      </ResetButtonStyled>
                      {fileName && (


                        <div>
                          <Typography variant='body2' sx={{ marginTop: '20px', float: 'left' }}>
                            {fileName}
                          </Typography>
                          <Delete onClick={deleteFile} style={{ marginTop: '15px', marginLeft: 50, cursor: 'pointer' }} />
                        </div>

                      )}
                      <Typography variant='body2' sx={{ marginTop: 3, color: '#ff8080' }}>
                        Allowed xls, .xlsx. Max size of 800K.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>



                {openAlert ? (
                  <Grid item xs={12} sx={{ mb: 3 }}>
                    <Alert
                      severity='warning'
                      sx={{ '& a': { fontWeight: 400 } }}
                      action={
                        <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                          <Close fontSize='inherit' />
                        </IconButton>
                      }
                    >
                      <AlertTitle>Something in your file is not correact.</AlertTitle>
                      <Link href='/' onClick={e => e.preventDefault()}>
                        Try to upload
                      </Link>
                    </Alert>
                  </Grid>
                ) : null}

                {
                  data.length > 0 ? (
                    <Grid item xs={12}>
                      <Card>
                        <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
                        <WayBillsDataTable data={data} />
                      </Card>
                    </Grid>
                  ) : null
                }

              </Grid>
            </form>
          </CardContent>


        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard
