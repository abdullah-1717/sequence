"use client";
import React, { useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Image from "next/image";

const Tables = () => {
    const [purchaseOrder, setPurchaseOrder] = useState(true);
    const rows = [
        {
            vendor: "ABC Supplies",
            product: "Rice",
            purchaseDate: "20 Jan, 2025",
            deliveryDate: "22 Jan, 2025",
            quantity: "100 kg",
            rate: 300,
            amount: 300 * 100,
        },
        {
            vendor: "LMN Traders",
            product: "Sugar",
            purchaseDate: "30 Jan, 2025",
            deliveryDate: "1 Feb, 2025",
            quantity: "50 kg",
            rate: 150,
            amount: 150 * 50
        },
        {
            vendor: "GHI Imports",
            product: "Coffee Beans",
            purchaseDate: "10 Feb, 2025",
            deliveryDate: "12 Feb, 2025",
            quantity: "5 kg",
            rate: 500,
            amount: 500 * 5
        },
        {
            vendor: "XYZ Foods",
            product: "Flour",
            purchaseDate: "25 Mar, 2025",
            deliveryDate: "27 Mar, 2025",
            quantity: "20 kg",
            rate: 100,
            amount: 100 * 20
        },
    ];

    const isPurchaseOrder = () => {
        setPurchaseOrder(!purchaseOrder);
    }

    return (
        <div style={{ minWidth: '1178px', width: '100%', height: '324px', gap: '15px', display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px",}}>
            <div style={{ minWidth: "797px", width: "65%", height: "324px", gap: "10px", display: "flex", flexDirection: "column"}}>
                <div style={{ width: "100%", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "241px", height: "22px", fontSize: "18px", fontWeight: 500, color: "#031B1B" }}>Latest Sale & Purchase Orders</div>
                    <div style={{ width: '239px', height: '32px', borderRadius: '8px', padding: '2px', backgroundColor: "#0259640f", display: 'flex' }}>
                        <Button style={{ width: '117.5px', height: '28px', borderRadius: '7px', padding: '6px', fontSize: '12px', fontWeight: 500, color: purchaseOrder ? '#031B1B' : "#798888", backgroundColor: purchaseOrder ? '#FFFFFF' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: purchaseOrder ? '0px 1px 1px 0px rgba(0, 0, 0, 0.2)' : "none", textTransform: "capitalize" }} 
                            onClick={isPurchaseOrder}
                            disabled={purchaseOrder} >
                            Purchase Orders
                        </Button>
                        <Button style={{ width: '117.5px', height: '28px', borderRadius: '7px', padding: '6px', fontSize: '12px', fontWeight: 500, color: purchaseOrder ? '#798888' : '#031B1B', backgroundColor: purchaseOrder ? "transparent" : "#FFFFFF", display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: purchaseOrder ? "none" : '0px 1px 1px 0px rgba(0, 0, 0, 0.2)', textTransform: "capitalize" }} 
                            onClick={isPurchaseOrder}
                            disabled={!purchaseOrder}>
                            Sale Orders
                        </Button>
                    </div>
                </div>
                <TableContainer component={Paper} style={{minWidth: "797px", width: "100%", minHeight: "282px", border: "1px solid #EFF4F6", borderRadius: "15px", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.2)", overflow: "hidden"}}>
                    <Table aria-label="purchase order table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "114px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888", }}>Vendor/Supplier</TableCell>
                                <TableCell style={{ width: "122px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888", }}>Product</TableCell>
                                <TableCell style={{ width: "133px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888", whiteSpace: "nowrap", }}>Date of Purchase</TableCell>
                                <TableCell style={{ width: "126px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888", whiteSpace: "nowrap", }}>Date of Delivery</TableCell>
                                <TableCell style={{ width: "86px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888",  }}>Quantity</TableCell>
                                <TableCell style={{ width: "99px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888", whiteSpace: "nowrap",}}>Rate (PKR)</TableCell>
                                <TableCell style={{ width: "117px", height: "42px", borderBottom: "1px solid #EFF4F6", padding: "10px 15px", fontSize: "12px", fontWeight: 500, color: "#798888", whiteSpace: "nowrap",}}>Amount (PKR)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{ width: "114px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15px", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.vendor}</TableCell>
                                    <TableCell style={{ width: "122px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15px", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.product}</TableCell>
                                    <TableCell style={{ width: "133px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15px", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.purchaseDate}</TableCell>
                                    <TableCell style={{ width: "126px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15px", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.deliveryDate}</TableCell>
                                    <TableCell style={{ width: "86px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15px", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.quantity}</TableCell>
                                    <TableCell style={{ width: "99px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15x", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.rate}</TableCell>
                                    <TableCell style={{ width: "117px", height: "60px", borderBottom: "1px solid #EFF4F6", padding: "15px", fontSize: "14px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap",}}>{row.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ minWidth: "366px", width: "35%", height: "324px", gap: "10px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{width: "100%", height: "32px", fontSize: "18px", fontWeight: 500, color: "#031B1B", display: "flex", alignItems: "center"}}>Requests</div>
                <div style={{width: "100%", height: "282px", border: "1px solid #EFF4F6", borderRadius: "15px", backgroundColor: "#FFFFFF", boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.2)",}}>
                    <div style={{width: "100%", height: "56.4", borderBottom: "1px solid #EFF4F6", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px 15px 15px"}}>
                        <div style={{width: "100%", height: "30px", marginRight: "5px", display: "flex", flexDirection: "column", gap: "4px"}}>
                            <div style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Sale Order request created by Bilal Khan</div>
                            <div style={{width: "100%", height: "12px", fontSize: "10px", fontWeight: 400, color: "#798888"}}>20 Jan, 2025 15:31</div>
                        </div>
                        <Button style={{minWidth: "59px", height: "26px", border: "1px solid #EFF4F6", borderRadius: "8px", padding: "7px", gap: "4px"}}>
                            <Image src="/images/detail.png" alt="detailIcon" width={12} height={12}/>
                            <div style={{fontSize: "10px", fontWeight: 400,textTransform: "capitalize" , color: "#031B1B"}}>details</div>
                        </Button>
                    </div>
                    <div style={{width: "100%", height: "56.4", borderBottom: "1px solid #EFF4F6", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px 15px 15px"}}>
                        <div style={{width: "100%", height: "30px", marginRight: "5px", display: "flex", flexDirection: "column", gap: "4px"}}>
                            <div style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Purchase Order request created by Fahad Iqbal</div>
                            <div style={{width: "100%", height: "12px", fontSize: "10px", fontWeight: 400, color: "#798888"}}>20 Jan, 2025 13:33</div>
                        </div>
                        <Button style={{minWidth: "59px", height: "26px", border: "1px solid #EFF4F6", borderRadius: "8px", padding: "7px", gap: "4px"}}>
                            <Image src="/images/detail.png" alt="detailIcon" width={12} height={12}/>
                            <div style={{fontSize: "10px", fontWeight: 400,textTransform: "capitalize" , color: "#031B1B"}}>details</div>
                        </Button>
                    </div>
                    <div style={{width: "100%", height: "56.4", borderBottom: "1px solid #EFF4F6", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px 15px 15px"}}>
                        <div style={{width: "100%", height: "30px", marginRight: "5px", display: "flex", flexDirection: "column", gap: "4px"}}>
                            <div style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Sale Order request created by Usman Farooq</div>
                            <div style={{width: "100%", height: "12px", fontSize: "10px", fontWeight: 400, color: "#798888"}}>16 Jan, 2025 12:43</div>
                        </div>
                        <Button style={{minWidth: "59px", height: "26px", border: "1px solid #EFF4F6", borderRadius: "8px", padding: "7px", gap: "4px"}}>
                            <Image src="/images/detail.png" alt="detailIcon" width={12} height={12}/>
                            <div style={{fontSize: "10px", fontWeight: 400,textTransform: "capitalize" , color: "#031B1B"}}>details</div>
                        </Button>
                    </div>
                    <div style={{width: "100%", height: "56.4", borderBottom: "1px solid #EFF4F6", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px 15px 15px"}}>
                        <div style={{width: "100%", height: "30px", marginRight: "5px", display: "flex", flexDirection: "column", gap: "4px"}}>
                            <div style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Purchase Order request created by Bilal Khan</div>
                            <div style={{width: "100%", height: "12px", fontSize: "10px", fontWeight: 400, color: "#798888"}}>16 Jan, 2025 09:38</div>
                        </div>
                        <Button style={{minWidth: "59px", height: "26px", border: "1px solid #EFF4F6", borderRadius: "8px", padding: "7px", gap: "4px"}}>
                            <Image src="/images/detail.png" alt="detailIcon" width={12} height={12}/>
                            <div style={{fontSize: "10px", fontWeight: 400,textTransform: "capitalize" , color: "#031B1B"}}>details</div>
                        </Button>
                    </div>
                    <div style={{width: "100%", height: "56.4", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px 15px 15px"}}>
                        <div style={{width: "100%", height: "30px", marginRight: "5px", display: "flex", flexDirection: "column", gap: "4px"}}>
                            <div style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Purchase Order request created by Awais Javed</div>
                            <div style={{width: "100%", height: "12px", fontSize: "10px", fontWeight: 400, color: "#798888"}}>15 Jan, 2025 07:49</div>
                        </div>
                        <Button style={{minWidth: "59px", height: "26px", border: "1px solid #EFF4F6", borderRadius: "8px", padding: "7px", gap: "4px"}}>
                            <Image src="/images/detail.png" alt="detailIcon" width={12} height={12}/>
                            <div style={{fontSize: "10px", fontWeight: 400,textTransform: "capitalize" , color: "#031B1B"}}>details</div>
                        </Button>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Tables;
