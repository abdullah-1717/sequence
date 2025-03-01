"use client";
import Cards from "../ui/dashboard/cards/cards";
import Charts from "../ui/dashboard/charts/charts";
import Table from "../ui/dashboard/tables/tables";
import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";
import Image from "next/image";

const Dashboard = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%",}}>
                <div style={{width: "100%", flex: "1"}}><Sidebar/></div>
                <div style={{width: "100%",}}>
                    <Navbar/>
                    <div style={{ width: "100%", paddingLeft: "20px", paddingTop: "20px", paddingRight: "20px", gap: "15px", display: "flex", flexDirection: "column",}}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "36px"}}>
                            <div style={{height: "26px", maxWidth: "108px", fontSize: "22px", fontWeight: 500, color: "#031B1B", alignItems: "center", justifyContent: "center"}}>Dashboard</div>
                            <div style={{maxWidth: "239", height: "36px", display: "flex", gap: "5px"}}>
                                <div style={{width: "36px", height: "36px", border: "1px solid #EFF4F6", backgroundColor: "#FFFFFF", borderRadius: "8px", padding: "10px"}}>
                                    <Image src="/images/refresh.png" alt="refreshIcon" width={16} height={16}/>
                                </div>
                                <div style={{width: "111px", height: "36px", border: "1px solid #EFF4F6", backgroundColor: "#FFFFFF", borderRadius: "8px", padding: "10px", gap: "10px", display: "flex", alignItems: "center",}}>
                                    <div style={{width: "67px", height: "16px", display: "flex", alignItems: "center", gap: "8px"}}>
                                        <div>
                                            <Image src="/images/calender.png" alt="calenderIcon" width={16} height={16}/>
                                        </div>
                                        <div style={{height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Monthly</div>
                                    </div>
                                    <div>
                                        <Image src="/images/dropdown.png" alt="dropdownIcon" width={16} height={16}/>
                                    </div>
                                </div>
                                <div style={{width: "82px", height: "36px", border: "1px solid #EFF4F6", backgroundColor: "#FFFFFF", borderRadius: "8px", padding: "10px", gap: "10px", display: "flex", alignItems: "center",}}>
                                    <Image src="/images/export.png" alt="exportIcon" width={16} height={16}/>
                                    <div style={{height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Export</div>
                                </div>
                            </div>
                        </div>
                        <div><Cards/></div>
                        <div style={{minWidth: "1173px", width: "100%", height: "365px"}}><Charts/></div>
                        <div style={{minWidth: "1178px", width: "100%", height: "324px",}}><Table/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;