// ** MUI Imports

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import

// ** Demo Components Imports
import { useRef, useState } from 'react'

const WayBills = () => {
    const [data, setData] = useState([1, 2, 3]);
    useState(() => {
        if (typeof window !== "undefined") {
            const dataSrc = localStorage.getItem('WAYBILLS_PRINTING');
            if (dataSrc) {
                setData(JSON.parse(dataSrc));
            }
            localStorage.removeItem('WAYBILLS_PRINTING');
        }
    });

    return (
        <>
            {
                data.map((item, i) =>
                (
                    <>
                        <table className="pagebreak" cellSpacing={0} style={{ borderCollapse: 'collapse', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                            <tbody>
                                <tr style={{ height: '35pt' }}>
                                    <td className='logo'>

                                        <table border="0"  cellSpacing={0} cellPadding={0} >
                                            <tbody>
                                                <tr>
                                                    <td><img width="116" height="36" src="https://i.ibb.co/rZgqkww/theo10vn.png" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p></p>
                                    </td>
                                    <td className='logo-right'>
                                    </td>
                                </tr>
                                <tr style={{ height: '132pt' }}>
                                    <td className='infor-bill' colSpan={2}>
                                        <div>
                                            <div style={{ width: '77%', float: 'left' }} >
                                                <p className="s1 date">
                                                    Date
                                                    :
                                                    <span className="s2">{item.SLOT}</span>
                                                </p>
                                                <p className="s1 slot">
                                                    Slot
                                                    :
                                                    <span className="s2">{item.DATE}</span>
                                                </p>
                                                <p className='p-null'><br /></p>
                                                <p className="s1 ship-to">Ship To:</p>
                                                <p className="s2 ship-to1">
                                                    {item.SHIPTO_1}
                                                </p>
                                            </div>
                                            <div className='qa-code'>
                                                <img width="80" height="80"
                                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=THEO1-0001" />
                                            </div>
                                            <p className="s2 ship-to23">
                                                {item.SHIPTO_2}
                                                {item.SHIPTO_3}</p>

                                        </div>

                                    </td>
                                </tr>
                                <tr style={{ height: '76pt' }}>
                                    <td className='td-remark'
                                        colSpan={2}>
                                        <p className="s1 delivery-reamrk">Delivery
                                            Remarks:  {item.DELIVERY_REMARKS}</p>
                                    </td>
                                </tr>
                                <tr style={{ height: '60pt' }}>
                                    <td className='td-sender'
                                         colSpan={2}>
                                        <p className="s1 sender">Sender:
                                            {item.SENDER}
                                        </p>
                                        <p className="s2 gray">Gray</p>
                                        <p className="s2 order-no">
                                            Order No: {item.ORDER_NO}</p>
                                    </td>
                                </tr>
                                <tr style={{ height: '101pt' }}>
                                    <td className='td-package' colSpan={2}>
                                        <p className='p1'><br /></p>
                                        <p className='p2'><span>
                                        </span></p>
                                        <table className='table-package' border="0" cellPadding={0} cellSpacing={0} >
                                            <tbody>
                                                <tr>
                                                    <td><img width="187" height="69"
                                                        src="https://barcode.tec-it.com/barcode.ashx?data=THEO1-0001&code=Code128&dmsize=Default" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p></p>
                                        <p className="s1 package-no">
                                            Package No: {item.PACKAGE_NO}</p>
                                        <p className="s3 package-size">Package
                                            Size (CM): Line x Date x Pie <span className="s4">{item.PACKAGE_SAZE}</span></p>
                                        <p className="s3 package-title-date">Weight:
                                            TitleKg <span className="s5">{item.WEIGHT_TITLE_DATE}</span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <style global jsx>{`
.navbar-content-container, .MuiPaper-root, .footer-content-container, .MuiSvgIcon-root{
    display: none !important;
}

.MuiDrawer-root{
    width: 0 !important;
    display: none;
}

body{
    background: white !important;
}

@media print {
    body * {
        /* width: 288pt;
        height: 432pt;
        max-width: 288pt;
        max-height: 432pt; */
    }
    .pagebreak {
        clear: both;
        page-break-after: always;
    }
}

* {
    margin: 0;
    padding: 0;
    text-indent: 0;
}

.s1 {
    color: black;
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 10pt;
}

.s2 {
    color: black;
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 10pt;
}

.s3 {
    color: black;
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 8pt;
}

.s4 {
    color: black;
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 10pt;
    vertical-align: 2pt;
}

.s5 {
    color: black;
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    font-size: 8pt;
    vertical-align: 1pt;
}

table,
tbody {
    vertical-align: top;
    overflow: visible;
}

.logo{
    width:98pt;border-top-style:solid;border-top-width:2pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style: none;
}

.infor-bill{
    width:281pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt
}

.date{
    padding-top: 4pt;padding-left: 3pt;text-indent: 0pt;text-align: left;
}

.slot{
    padding-top: 2pt;padding-left: 3pt;text-indent: 0pt;text-align: left;
}

.ship-to{
    padding-left: 4pt;text-indent: 0pt;text-align: left;
}

.ship-to1{
    padding-top: 3pt;padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;
}

.ship-to23{
    padding-left: 5pt;padding-right: 140pt;text-indent: 0pt;text-align: left;
}

.qa-code{
    width: 80px; height: 80px; float: left; margin: unset; padding-top: 5pt;
}

.td-remark{
    width:281pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt
}

.delivery-reamrk{
    padding-top: 2pt;padding-left: 3pt;text-indent: 0pt;text-align: left;
}

.td-sender{
    width:281pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt
}

.sender{
    padding-top: 2pt;padding-left: 4pt;text-indent: 0pt;text-align: left;
}

.gray{
    padding-top: 3pt;padding-left: 4pt;text-indent: 0pt;text-align: left;
}

.order-no{
    padding-top: 1pt;padding-left: 5pt;padding-right: 179pt;text-indent: -1pt;line-height: 13pt;text-align: left;
}

.td-package{
    width:281pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:2pt;border-right-style:solid;border-right-width:2pt
}

.p1{
    text-indent: 0pt;text-align: left;
}

.p2{
    padding-left: 64pt;text-indent: 0pt;text-align: left;
}

.table-package{
    display:flex;justify-content: center;
}

.package-no{
    padding-top: 3pt;padding-left: 4pt;text-indent: 0pt;line-height: 11pt;text-align: left;
}

.package-size{
    padding-left: 3pt;text-indent: 0pt;line-height: 12pt;text-align: left;
}

.package-title-date{
    padding-left: 3pt;text-indent: 0pt;line-height: 10pt;text-align: left;
}

.p-null{
    text-indent: 0pt;text-align: left;
}

.logo-right{
    padding: 3pt;text-align: right;border-top-style:solid;border-top-width:2pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:2pt
}
    `}</style>
                    </>
                )
                )
            }

        </>


    )
}

export default WayBills
