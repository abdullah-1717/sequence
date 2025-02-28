"use client"
import Image from "next/image";


const Navbar = () => {
    return(
        <div style={{minWidth: "1213px",width: "100%", height: "62.07px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px 15px 20px", borderBottom: "1px solid #E6EFF0", backgroundColor: "#FFFFFF"}}>
            <div style={{height: "32px"}}>
                <div style={{height: "17px", fontSize: "14px", fontWeight: 700, color: "#025964"}}>Hello, Hassan Ali</div>
                <div style={{height: "12px", fontSize: "10px", fontWeight: 500, color: "#798888"}}>Start managing your sale and purchase orders</div>
            </div>
            <div style={{display: "flex", height: "38px", gap: "10px"}}>
                <div style={{display: "flex", width: "179px", height: "38px", border: "1px solid #E8EAEC", borderRadius: "8px", padding: "10px 12px 10px 12px"}}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "18px", gap: "10px"}}>
                        <Image src="/images/search.png" alt="searchIcon" width={18} height={18}/>
                        <input style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 400, outline: "none", lineHeight: "14px", padding: "0px 0px", boxSizing: "border-box",}} type="text" placeholder="Search..." />
                    </div>
                </div>
                <div style={{width: "38px", height: "38px", border: "1px solid #E8EAEC", borderRadius: "8px", padding: "10px", gap: "10px"}}>
                <Image src="/images/bell.png" alt="bellIcon" width={18} height={18}/>
                </div>
                <div style={{width: "131px", height: "38px", border: "1px solid #E5EBEB", borderRadius: "8px", paddingLeft: "5px", paddingRight: "7px", justifyContent: "space-between", display: "flex", alignItems: "center"}}>
                    <div style={{width: "93px", height: "28px", display: "flex", gap: "7px"}}>
                        <Image src="/images/profileIcon.png" alt="profilePic" width={28} height={28}/>
                        <div style={{width: "58px", height: "26px"}}>
                            <div style={{width: "100%", height: "14px", fontSize: "12px", fontWeight: 500, color: "#031B1B"}}>Hassan Ali</div>
                            <div style={{width: "100%", height: "12px", fontSize: "10px", fontWeight: 500, color: "#798888"}}>Super Admin</div>
                        </div>
                    </div>
                    
                    <div><Image src="/images/drawer.png" alt="drawerIcon" width={12} height={12}/></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;