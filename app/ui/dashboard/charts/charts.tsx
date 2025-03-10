"use client"
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


// type Payload<T = string | number | null | undefined> = {
//   value: T;
//   name: string;
// };




const overallOrders = [
  { name: 'Mon', saleOrders: 600, purchaseOrders: 600 },
  { name: 'Tue', saleOrders: 1500, purchaseOrders: 800 },
  { name: 'Wed', saleOrders: 2500, purchaseOrders: 1500 },
  { name: 'Thu', saleOrders: 900, purchaseOrders: 700 },
  { name: 'Fri', saleOrders: 1500, purchaseOrders: 700 },
  { name: 'Sat', saleOrders: 900, purchaseOrders: 800 },
  { name: 'Sun', saleOrders: 1200, purchaseOrders: 900 },
  { name: 'Mon', saleOrders: 2000, purchaseOrders: 700 },
];

const netRevenue = [
  { name: 'Mon', revenue: 90000 },
  { name: 'Tue', revenue: 110000 },
  { name: 'Wed', revenue: 105000 },
  { name: 'Thu', revenue: 180000 },
  { name: 'Fri', revenue: 160000 },
  { name: 'Sat', revenue: 170000 },
  { name: 'Sun', revenue: 200000 },
  { name: 'Mon', revenue: 95000 },
];


// const OverallOrdersTooltip = ({ payload, active }: TooltipProps) => {
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
//         <div style={{ fontSize: '10px', fontWeight: 400, color: '#798888' }}>{formattedDate}</div>
//       </div>
//     );
//   }

//   return null;
// }




// const NetRevenueTooltip = ({ payload, active = false }: TooltipProps) => {
//   if (!active || !payload || payload.length === 0) {
//     return null;
//   }


//   const revenuePayload = payload[0] as Payload<string | number | null | undefined>;

//   const revenue = revenuePayload.value;

//   const currentDate = new Date();
//   const formattedDate = currentDate.toLocaleString('en-GB', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: false,
//   });

//   return (
//     <div
//       style={{
//         width: '121px',
//         height: '50px',
//         background: '#fff',
//         padding: '8px',
//         borderRadius: '10px',
//         border: '1px solid #E6EFF0',
//         gap: '5px',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
//         <div style={{ width: '6px', height: '6px', backgroundColor: '#00D47E', borderRadius: '50%' }}></div>
//         <div style={{ height: '17px', fontSize: '14px', fontWeight: 700, color: '#031B1B' }}>
//           {revenue !== undefined ? `${revenue} PKR` : 'No Data'}
//         </div>
//       </div>
//       <div style={{ fontSize: '10px', fontWeight: 400, color: '#798888' }}>{formattedDate}</div>
//     </div>
//   );
// };




const Charts = () => {
   const [overallWeek, setOverallWeek] = useState(true);
   const [revenueWeek, setRevenueWeek] = useState(true);
   const [overallDisabled, setOverallDisabled] = useState(false); 
   const [revenueDisabled, setRevenueDisabled] = useState(false); 

   const isOverallWeek = () => {
      setOverallWeek(!overallWeek); 
      setOverallDisabled(!overallDisabled);
   }
   const isRevenueWeek = () => {
    setRevenueWeek(!revenueWeek); 
    setRevenueDisabled(!revenueDisabled);
 }

  const formatYAxis = (value: number) => {
    return `${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div style={{ minWidth: '1173px', width: '100%', height: '365px', gap: '15px', display: 'flex' , alignItems: "center" }}>
      {/* Overall Orders Chart */}
      <div style={{ minWidth: '579px', width: '100%', height: '365px', border: '1px solid #EFF4F6', borderRadius: '15px', padding: '15px', gap: '15px', backgroundColor: '#FFFFFF' }}>
        <div style={{ width: '100%', height: '41px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ minWidth: "159px", height: '41px', gap: '10px', display: "flex", flexDirection: "column" }}>
            <div style={{ minWidth: "102px", width: "100%", height: '19px', fontSize: '16px', fontWeight: 500, color: '#031B1B' }}>Overall Orders</div>
            <div style={{ minWidth: "159px", width: "100%", height: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ minWidth: "63px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#00D47E", }}></div>
                <div style={{ width: "52px", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Sale Orders</div>
              </div>
              <div style={{ minWidth: "86px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#FBBC05", }}></div>
                <div style={{ width: "75px", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Purchase Orders</div>
              </div>
            </div>
          </div>
          <div style={{ width: '120px', height: '30px', borderRadius: '8px', padding: '2px', backgroundColor: '#F0F5F6', display: 'flex' }}>
            <div style={{ width: '58px', height: '26px', borderRadius: '7px', padding: '6px', fontSize: '12px', fontWeight: 500, color: overallWeek ? '#031B1B' : "#798888", backgroundColor: overallWeek ? '#FFFFFF' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: overallWeek ? '0px 1px 1px 0px rgba(0, 0, 0, 0.2)' : "none", textTransform: "capitalize",cursor: !overallDisabled ? 'not-allowed' : 'pointer', pointerEvents: !overallDisabled ? 'none' : 'auto', }} onClick={isOverallWeek} >Weekly</div>
            <div style={{ width: '58px', height: '26px', borderRadius: '7px', padding: '0px', fontSize: '12px', fontWeight: 500, color: overallWeek ? '#798888' : '#031B1B', backgroundColor: overallWeek ? "transparent" : "#FFFFFF", display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: overallWeek ? "none" : '0px 1px 1px 0px rgba(0, 0, 0, 0.2)', textTransform: "capitalize", cursor: overallDisabled ? 'not-allowed' : 'pointer', pointerEvents: overallDisabled ? 'none' : 'auto' }} onClick={isOverallWeek} >Daily</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%" style={{ paddingBottom: "22px", paddingTop: "5px", paddingLeft: "0px" }}>
  <AreaChart data={overallOrders}>
    <defs>
      <linearGradient id="saleOrdersGradient" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D47E" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#00D47E" stopOpacity={0.0} />
      </linearGradient>
      <linearGradient id="purchaseOrdersGradient" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBC05" stopOpacity={0.8} />
        <stop offset="100%" stopColor="#FBBC05" stopOpacity={0.1} />
      </linearGradient>
    </defs>
    <CartesianGrid horizontal={true} vertical={false} stroke="#E6EFF0" />
    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 500, fill: '#798888' }} style={{ marginLeft: '0' }} />
    <YAxis axisLine={false} tickLine={false} domain={[0, 3500]} ticks={[0, 500, 1000, 1500, 2000, 2500, 3000, 3500]} tick={{ fontSize: 10, fontWeight: 500, fill: '#798888' }} />
    <Area dataKey="saleOrders" stackId="1" stroke="#00D47E" fill="url(#saleOrdersGradient)" strokeWidth={2} />
    <Area dataKey="purchaseOrders" stackId="2" stroke="#FBBC05" fill="url(#purchaseOrdersGradient)" strokeWidth={2} />
    <Tooltip />
  </AreaChart>
</ResponsiveContainer>


      </div>

      {/* Net Revenue Chart */}
      <div style={{ minWidth: '579px', width: '100%', height: '365px', border: '1px solid #EFF4F6', borderRadius: '15px', padding: '15px', gap: '15px', backgroundColor: '#FFFFFF' }}>
        <div style={{ minWidth: "549px", width: '100%', height: '41px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ minWidth: "159px", height: '41px', gap: '10px', display: "flex", flexDirection: "column" }}>
            <div style={{ minWidth: "90px", width: "100%", height: '19px', fontSize: '16px', fontWeight: 500, color: '#031B1B' }}>Net Revenue</div>
            <div style={{ minWidth: "159px", width: "100%", height: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ minWidth: "52px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#00D47E", }}></div>
                <div style={{ width: "100%", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Revenue</div>
              </div>
            </div>
          </div>
          <div style={{ width: '120px', height: '30px', borderRadius: '8px', padding: '2px', backgroundColor: '#F0F5F6', display: 'flex' }}>
            <div style={{ width: '58px', height: '26px', borderRadius: '7px', padding: '6px', fontSize: '12px', fontWeight: 500, color: revenueWeek ? '#031B1B' : "#798888", backgroundColor: revenueWeek ? '#FFFFFF' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: revenueWeek ? '0px 1px 1px 0px rgba(0, 0, 0, 0.2)' : "none", textTransform: "capitalize",cursor: !revenueDisabled ? 'not-allowed' : 'pointer', pointerEvents: !revenueDisabled ? 'none' : 'auto', }} onClick={isRevenueWeek} >Weekly</div>
            <div style={{ width: '58px', height: '26px', borderRadius: '7px', padding: '0px', fontSize: '12px', fontWeight: 500, color: revenueWeek ? '#798888' : '#031B1B', backgroundColor: revenueWeek ? "transparent" : "#FFFFFF", display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: revenueWeek ? "none" : '0px 1px 1px 0px rgba(0, 0, 0, 0.2)', textTransform: "capitalize", cursor: revenueDisabled ? 'not-allowed' : 'pointer', pointerEvents: revenueDisabled ? 'none' : 'auto' }} onClick={isRevenueWeek} >Daily</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%" style={{paddingBottom: "22px", paddingTop: "5px"}}>
          <AreaChart data={netRevenue}>
            <defs>
              <linearGradient id="revenueGradient" x1="100%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D47E" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#00D47E" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal={true} vertical={false} stroke="#E6EFF0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 500, fill: '#798888'}} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={formatYAxis} domain={[90000, 260000]} ticks={[90000, 130000, 160000, 190000, 230000, 260000]} tick={{ fontSize: 10, fontWeight: 500, fill: '#798888' }} />
            <Tooltip/>
            <Area dataKey="revenue" stroke="#00D47E" fill="url(#revenueGradient)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
