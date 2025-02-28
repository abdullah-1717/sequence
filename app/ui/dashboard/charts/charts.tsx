import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Mon', saleOrders: 700, purchaseOrders: 300 },
//   { name: 'Tue', saleOrders: 1500, purchaseOrders: 400 },
//   { name: 'Wed', saleOrders: 2500, purchaseOrders: 1500 },
//   { name: 'Thu', saleOrders: 900, purchaseOrders: 600 },
//   { name: 'Fri', saleOrders: 1500, purchaseOrders: 400 },
//   { name: 'Sat', saleOrders: 800, purchaseOrders: 300 },
//   { name: 'Sun', saleOrders: 1200, purchaseOrders: 900 },
//   { name: 'Mon', saleOrders: 2000, purchaseOrders: 500 },
// ];

// const CustomTooltip = ({ payload, active }: { payload: any; active: boolean }) => {
//   if (active && payload && payload.length) {
//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleString('en-GB', {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: false,
//     });

//     return (
//       <div style={{ width: "121px", height: "66px", background: '#fff', padding: '8px', borderRadius: '10px', border: '1px solid #E6EFF0', gap: "5px", display: "flex", flexDirection: "column" }}>
//         <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
//           <div style={{ width: "6px", height: "6px", backgroundColor: "#00D47E", borderRadius: "50%" }}></div>
//           <div style={{ height: "14px", fontSize: "12px", fontWeight: 700, color: "#031B1B" }}>{payload[0]?.value}</div>
//         </div>
//         <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
//           <div style={{ width: "6px", height: "6px", backgroundColor: "#FBBC05", borderRadius: "50%" }}></div>
//           <div style={{ height: "14px", fontSize: "12px", fontWeight: 700, color: "#031B1B" }}>{payload[1]?.value}</div>
//         </div>
//         <div style={{ fontSize: '12px', fontWeight: 400, color: '#798888' }}>{formattedDate}</div>
//       </div>
//     );
//   }

//   return null;
// };

const Charts = () => {
  return (
    <div style={{ minWidth: '1173px', width: '100%', height: '365px', gap: '15px', display: 'flex' }}>
      <div style={{ minWidth: '579px', width: '100%', height: '365', border: '1px solid #EFF4F6', borderRadius: '15px', padding: '15px', gap: '15px', backgroundColor: '#FFFFFF' }}>
        <div style={{ width: '100%', height: '41px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ minWidth: "159px", height: '41px', gap: '10px', display: "flex", flexDirection: "column" }}>
            <div style={{ minWidth: "102px", width: "100%", height: '19px', fontSize: '16px', fontWeight: 500, color: '#031B1B' }}>Overall Orders</div>
            <div style={{ minWidth: "159px", width: "100%", height: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ minWidth: "63px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#00D47E", }}></div>
                <div style={{ width: "100%", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Sale Orders</div>
              </div>
              <div style={{ minWidth: "86px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#FBBC05", }}></div>
                <div style={{ width: "75px", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Purchase Orders</div>
              </div>
            </div>
          </div>
          <div style={{ width: '120px', height: '30px', borderRadius: '8px', padding: '2px', backgroundColor: '#F0F5F6', display: 'flex' }}>
            <div style={{ width: '58px', height: '26px', borderRadius: '7px', padding: '6px', fontSize: '12px', fontWeight: 500, color: '#031B1B', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.2)' }}>Weekly</div>
            <div style={{ width: '58px', height: '26px', borderRadius: '7px', padding: '6px', fontSize: '12px', fontWeight: 500, color: '#798888', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Daily</div>
          </div>
        </div>
        <div style={{ minWidth: "549px", width: "100%", height: "252px" }}>
        </div>
      </div>
    </div>
  );
}

export default Charts;
