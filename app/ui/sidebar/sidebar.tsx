"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  {
    title: "General",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "dashboard.png",
        activeIcon: "activeDashboard.png",
      },
      {
        title: "Sale Orders",
        path: "/saleOrders",
        icon: "saleOrder.png",
        activeIcon: "activeSaleOrder.png",
      },
      {
        title: "Purchase Orders",
        path: "/purchaseOrders",
        icon: "purchaseOrder.png",
        activeIcon: "activePurchaseOrder.png",
      },
      {
        title: "Customers",
        path: "/customers",
        icon: "customers.png",
        activeIcon: "activeCustomers.png",
      },
      {
        title: "Vendors",
        path: "/vendors",
        icon: "vendor.png",
        activeIcon: "activeVendor.png",
      },
      {
        title: "Sub Admins",
        path: "/subAdmins",
        icon: "subAdmins.png",
        activeIcon: "activeSubAdmins.png",
      },
    ],
  },
  {
    title: "Tools",
    list: [
      {
        title: "Products",
        path: "/products",
        icon: "products.png",
        activeIcon: "activeProducts.png",
      },
      {
        title: "Billing/Invoice",
        path: "/billingInvoice",
        icon: "billingInvoice.png",
        activeIcon: "activeBillingInvoice.png",
      },
      {
        title: "Reports",
        path: "/reports",
        icon: "reports.png",
        activeIcon: "activeSaleOrder.png",
      },
      {
        title: "Receiveable",
        path: "/receiveable",
        icon: "receiveable.png",
        activeIcon: "activereceiveable.png",
      },
      {
        title: "Payable",
        path: "/payable",
        icon: "payable.png",
        activeIcon: "activePayable.png",
      },
    ],
  },
  {
    title: "Support",
    list: [
      {
        title: "Settings",
        path: "/settings",
        icon: "settings.png",
        activeIcon: "activeSaleOrder.png",
      },
      {
        title: "Security",
        path: "/security",
        icon: "security.png",
        activeIcon: "activeSaleOrder.png",
      },
      {
        title: "Help",
        path: "/help",
        icon: "help.png",
        activeIcon: "activeSaleOrder.png",
      },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        minHeight: "978px",
        height: "100vh",
        justifyContent: "space-between",
        width: "227px",
        borderRight: "1px solid #E6EFF0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        height="61px"
        width="227px"
        paddingBottom="18px"
        paddingTop="18px"
        paddingRight="28px"
        paddingLeft="28px"
      >
        <div style={{ marginRight: "8px", width: "135px", height: "26.07px" }}>
          <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
        </div>
      </Box>
      <div style={{ flexGrow: 1 }}>
        {menuItems.map((menu, index) => (
          <div key={index}>
            <div
              style={{
                borderTop: "1px solid #E6EFF0",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "13px",
                gap: "10px",
              }}
            >
              <Typography
                style={{
                  paddingTop: "20px",
                  paddingBottom: "13px",
                  paddingLeft: "18px",
                  paddingRight: "18px",
                  height: "14px",
                  fontSize: "12px",
                  fontWeight: 500,
                  background: "transparent",
                  color: "#798888",
                }}
              >
                {menu.title}
              </Typography>
            </div>
            <div
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "5px",
              }}
            >
              {menu.list.map((item, idx) => {
                const isActive = currentPath === item.path;
                return (
                  <Button
                    key={idx}
                    sx={{
                      color: isActive ? "#ffffff" : "#031B1B",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                      backgroundColor: isActive ? "#025964" : "#ffffff",
                      fontWeight: 500,
                      fontSize: "12px",
                      width: "100%",
                      height: "38px",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      justifyContent: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      "&:hover": {
                        backgroundColor: "#025964",
                        color: "white",
                        "& img": {
                          content: `url(/images/${item.activeIcon})`,
                        },
                      },
                    }}
                    onClick={() => router.push(item.path)}
                  >
                    <Image
                      src={`/images/${isActive ? item.activeIcon : item.icon}`}
                      alt={item.title}
                      width={18}
                      height={18}
                    />
                    {item.title}
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
