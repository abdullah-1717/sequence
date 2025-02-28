"use client";
import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";

const Receiveable = () => {
    return (
        <div style={{}}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
                <div style={{width: "100%", flex: "1"}}><Sidebar/></div>
                <div style={{width: "100%", }}>
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}

export default Receiveable;