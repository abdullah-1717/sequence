"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const Tables = () => {
    const [purchaseOrder, setPurchaseOrder] = useState(true);

    const isPurchaseOrder = () => {
        setPurchaseOrder(!purchaseOrder);
    }

    return (
        <div style={{ minWidth: '1178px', width: '100%', height: '324px', gap: '15px', display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
            <div style={{ minWidth: "797px", width: "65%", height: "100%", gap: "15px" }}>
                <div style={{ width: "100%", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "241px", height: "22px", fontSize: "18px", fontWeight: 500, color: "#031B1B" }}>Latest Sale & Purchase Orders</div>
                    <div style={{ width: '239px', height: '32px', borderRadius: '8px', padding: '2px', backgroundColor: "#0259640f", display: 'flex' }}>
                        <Button 
                            style={{ 
                                width: '117.5px', 
                                height: '28px', 
                                borderRadius: '7px', 
                                padding: '6px', 
                                fontSize: '12px', 
                                fontWeight: 500, 
                                color: purchaseOrder ? '#031B1B' : "#798888", 
                                backgroundColor: purchaseOrder ? '#FFFFFF' : 'transparent', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                boxShadow: purchaseOrder ? '0px 1px 1px 0px rgba(0, 0, 0, 0.2)' : "none", 
                                textTransform: "capitalize" 
                            }} 
                            onClick={isPurchaseOrder}
                            disabled={purchaseOrder}  // Disable button when it's active
                        >
                            Purchase Orders
                        </Button>
                        <Button 
                            style={{ 
                                width: '117.5px', 
                                height: '28px', 
                                borderRadius: '7px', 
                                padding: '6px', 
                                fontSize: '12px', 
                                fontWeight: 500, 
                                color: purchaseOrder ? '#798888' : '#031B1B', 
                                backgroundColor: purchaseOrder ? "transparent" : "#FFFFFF",  // Inactive button has transparent background
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                boxShadow: purchaseOrder ? "none" : '0px 1px 1px 0px rgba(0, 0, 0, 0.2)', 
                                textTransform: "capitalize" 
                            }} 
                            onClick={isPurchaseOrder}
                            disabled={!purchaseOrder}  // Disable button when it's inactive
                        >
                            Sale Orders
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{ minWidth: "366px", width: "35%", height: "100%", backgroundColor: "#E6EFF0" }}>b</div> {/* Background Color of Parent */}
        </div>
    );
}

export default Tables;
