"use client";

import Image from "next/image";

const Cards = () => {
    return(
        <div style={{width: "100%", display: "flex", alignItems: "center", gap: "15px"}}>
            <div style={{minWidth: "282px", width: "100%", height: "89px", border: "1px solid #EFF4F6", borderRadius: "15px", padding: "15px", gap: "12px", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"}}>
                <div style={{minWidth: "252px", width: "100%", height: "28px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{minWidth: "115px", width: "100%", height: "28px", gap: "12px", display: "flex", alignItems: "center"}}>
                        <div style={{width: "28px", height: "28px", borderRadius: "5px", padding: "6px", backgroundColor: "#E6FBF3"}}>
                            <Image src="/images/totalRevenue.png" alt="totalRevenueIcon" width={16} height={16}/>
                        </div>
                        <div style={{fontSize: "12px", fontWeight: 500, color: "#798888"}}>Total Revenue</div>
                    </div>
                    <Image src="/images/exclamatory.png" alt="exclamatoryIcon" width={14} height={14}/>
                </div>
                <div style={{height: "19px", fontWeight: 500, fontSize: "16px", color: "#031B1B"}}>Rs. 21,445,761</div>
            </div>
            <div style={{minWidth: "282px", width: "100%", height: "89px", border: "1px solid #EFF4F6", borderRadius: "15px", padding: "15px", gap: "12px", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"}}>
                <div style={{minWidth: "252px", width: "100%", height: "28px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{minWidth: "115px", width: "100%", height: "28px", gap: "12px", display: "flex", alignItems: "center"}}>
                        <div style={{width: "28px", height: "28px", borderRadius: "5px", padding: "6px", backgroundColor: "#E6FBF3"}}>
                            <Image src="/images/totalSale.png" alt="totalSaleIcon" width={16} height={16}/>
                        </div>
                        <div style={{fontSize: "12px", fontWeight: 500, color: "#798888"}}>Total Sale Orders</div>
                    </div>
                    <Image src="/images/exclamatory.png" alt="exclamatoryIcon" width={14} height={14}/>
                </div>
                <div style={{height: "19px", fontWeight: 500, fontSize: "16px", color: "#031B1B"}}>21,654,667</div>
            </div>
            <div style={{minWidth: "282px", width: "100%", height: "89px", border: "1px solid #EFF4F6", borderRadius: "15px", padding: "15px", gap: "12px", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"}}>
                <div style={{minWidth: "252px", width: "100%", height: "28px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{minWidth: "115px", width: "100%", height: "28px", gap: "12px", display: "flex", alignItems: "center"}}>
                        <div style={{width: "28px", height: "28px", borderRadius: "5px", padding: "6px", backgroundColor: "#E6FBF3"}}>
                            <Image src="/images/totalPurchase.png" alt="totalPurchaseIcon" width={16} height={16}/>
                        </div>
                        <div style={{fontSize: "12px", fontWeight: 500, color: "#798888"}}>Total Purchase Orders</div>
                    </div>
                    <Image src="/images/exclamatory.png" alt="exclamatoryIcon" width={14} height={14}/>
                </div>
                <div style={{height: "19px", fontWeight: 500, fontSize: "16px", color: "#031B1B"}}>2,323,767</div>
            </div>
            <div style={{minWidth: "282px", width: "100%", height: "89px", border: "1px solid #EFF4F6", borderRadius: "15px", padding: "15px", gap: "12px", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"}}>
                <div style={{minWidth: "252px", width: "100%", height: "28px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{minWidth: "115px", width: "100%", height: "28px", gap: "12px", display: "flex", alignItems: "center"}}>
                        <div style={{width: "28px", height: "28px", borderRadius: "5px", padding: "6px", backgroundColor: "#E6FBF3"}}>
                            <Image src="/images/averageSale.png" alt="averageSaleIcon" width={16} height={16}/>
                        </div>
                        <div style={{fontSize: "12px", fontWeight: 500, color: "#798888"}}>Average Sales</div>
                    </div>
                    <Image src="/images/exclamatory.png" alt="exclamatoryIcon" width={14} height={14}/>
                </div>
                <div style={{height: "19px", fontWeight: 500, fontSize: "16px", color: "#031B1B"}}>71,435</div>
            </div>
        </div>
    );
}

export default Cards;