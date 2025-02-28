                // logo 
                // <div style={{padding: "4px", marginRight: "8px", }}>
                //     <div style={{display: "flex", marginBottom: "2px"}}>
                //         <div style={{backgroundColor: "#025964", width: "12px", height: "12px", borderBottomRightRadius: "7px", marginRight: "2px"}}></div>
                //         <div style={{backgroundColor: "#025964", width: "12px", height: "12px", borderBottomLeftRadius: "7px", borderTopRightRadius: "13px"}}></div>
                //     </div>
                //     <div style={{display: "flex"}}>
                //         <div style={{backgroundColor: "#025964", width: "12px", height: "12px", borderBottomLeftRadius: "13px", borderTopRightRadius: "7px", marginRight: "2px"}}></div>
                //         <div style={{backgroundColor: "#025964", width: "12px", height: "12px", borderBottomRightRadius: "13px", borderBottomLeftRadius: "1px"}}></div>
                //     </div>
                // </div>



                // CheckBox
                {/* <input
                type="checkbox"
                id="rememberMe"
                style={{ 
                cursor: "pointer",
                marginRight: 8,
                border: "1px solid #E5EBEB",
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                 }} /> */}

                // icon
                // <Email
                // style={{
                // width: "18px",
                // height: "18px",
                // marginRight: "14px",
                // color: "#025964",
                // }} />
                // <div


                //charts
//                 import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register the necessary chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const data = [
//   { name: "Mon", saleOrders: 500, purchaseOrders: 500 },
//   { name: "Tue", saleOrders: 1500, purchaseOrders: 800 },
//   { name: "Wed", saleOrders: 2500, purchaseOrders: 1500 },
//   { name: "Thu", saleOrders: 900, purchaseOrders: 600 },
//   { name: "Fri", saleOrders: 1500, purchaseOrders: 700 },
//   { name: "Sat", saleOrders: 1200, purchaseOrders: 1000 },
//   { name: "Sun", saleOrders: 1200, purchaseOrders: 900 },
//   { name: "Mon", saleOrders: 2000, purchaseOrders: 500 },
// ];

// const chartData = {
//   labels: data.map((d) => d.name), // X-axis labels
//   datasets: [
//     {
//       label: "Sale Orders",
//       data: data.map((d) => d.saleOrders),
//       color: "#00D47E",
//       backgroudColor:"#00D47E" ,
//       tension: 0.4,
//     },
//     {
//       label: "Purchase Orders",
//       data: data.map((d) => d.purchaseOrders),
//       borderColor: "#FBBC05",
//       tension: 0.4,
//     },
//   ],
// };

// const chartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false, // Show legend labels to differentiate datasets
//     },
//     tooltip: {
//       enabled: true, // Enable tooltips to show details when hovering over points
//     },
//   },
//   scales: {
//     x: {
//       type: "category", // X-axis using category scale
//       grid: {
//         display: false, // Hide grid lines for X-axis
//       },
//       ticks: {
//         font: {
//           size: 10, // Customize font size for X-axis
//           weight: 500, // Customize font weight for X-axis
//         },
//         color: "#798888", // Set color for X-axis ticks
//         padding: 15, // Padding for X-axis ticks (uniform padding)
//       },
//       border: {
//         display: false,
//       },
//     },
//     y: {
//       min: 500, // Directly set the minimum value to 500
//       suggestedMax: 3500, // Suggests 3500 as the maximum value
//       ticks: {
//         stepSize: 500, // Set step size to control the spacing between Y-axis grid lines
//         padding: 15, // Add padding for Y-axis ticks (uniform padding)
//         font: {
//           size: 10, // Customize font size for Y-axis
//           weight: 500, // Customize font weight for Y-axis
//         },
//         color: "#798888", // Set color for Y-axis ticks
//       },
//       grid: {
//         display: true, // Show grid lines for Y-axis
//         lineWidth: 1, // Set the line width of the Y-axis grid lines to 1
//         color: "#E6EFF0", // Set grid line color
//       },
//       border: {
//         display: false,
//       },
//     },
//   },
// };

// const Charts = () => {
//   return (
//     <div style={{ minWidth: "1173px", width: "100%", height: "365px", gap: "15px", display: "flex" }}>
//       <div
//         style={{
//           minWidth: "579px",
//           width: "100%",
//           height: "365px",
//           border: "1px solid #EFF4F6",
//           borderRadius: "15px",
//           gap: "15px",
//           backgroundColor: "#FFFFFF",
//         }}
//       >
//         <div style={{ marginTop: "15px", marginLeft: "15px", marginRight: "15px", width: "100%", height: "41px", display: "flex", justifyContent: "space-between" }}>
//           <div style={{ minWidth: "159px", height: "41px", gap: "10px", display: "flex", flexDirection: "column" }}>
//             <div style={{ minWidth: "102px", width: "100%", height: "19px", fontSize: "16px", fontWeight: 500, color: "#031B1B" }}>
//               Overall Orders
//             </div>
//             <div style={{ minWidth: "159px", width: "100%", height: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
//               <div style={{ minWidth: "63px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
//                 <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#00D47E" }}></div>
//                 <div style={{ width: "75px", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Sale Orders</div>
//               </div>
//               <div style={{ minWidth: "86px", width: "100%", height: "12px", display: "flex", alignItems: "baseline", gap: "5px" }}>
//                 <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#FBBC05" }}></div>
//                 <div style={{ width: "75px", height: "12px", fontSize: "10px", fontWeight: 500, color: "#687676" }}>Purchase Orders</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{ minWidth: "549px", width: "100%", height: "252px" }}>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;
                 