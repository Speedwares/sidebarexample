import React from "react";
import { 
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarSubMenu,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBBadge,
  CDBIcon } from "cdbreact";

export const SideBar = () => {
    return (
      <div classname="r-w">
        <div className="blockcode text-center">
          <div className="header">Sidebar</div>
          <div className="description">Sidebar With Submenu <a href="https://devwares.com/product/contrast-pro" target="_blank" rel="noreferrer" className="text-white"><CDBBadge size="large" style={{ backgroundColor: "#9871ff" }}>Pro Component</CDBBadge></a></div>
          <div className="example" style={{flexDirection:"column", minWidth:"350px"}}>
            <div
              className={`app`}
              style={{ display: "flex", height: "100%" }}
            >
              <CDBSidebar
                textColor="#fff"
                backgroundColor="#000"
              >
                <CDBSidebarHeader>
                  <i className="fa fa-bars fa-4x"></i>
                  Contrast Pro
                </CDBSidebarHeader>

                <CDBSidebarContent>
                  <CDBSidebarMenu>
                    <CDBSidebarMenuItem
                      suffix={
                        <CDBBadge color="danger" size="small" borderType="pill">
                          new
                        </CDBBadge>
                      }
                    >
                      <i className="fa fa-th-large"></i>
                      Dashboard
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem
                      suffix={
                        <CDBBadge color="danger" size="small" borderType="pill">
                          new
                        </CDBBadge>
                      }
                    >
                      <i className="fa fa-sticky-notes"></i>
                      Components
                    </CDBSidebarMenuItem>
                  </CDBSidebarMenu>
                  <CDBSidebarMenu>
                    <CDBSidebarSubMenu title="Sidemenu" icon="th">
                      <CDBSidebarMenuItem> submenu 1</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem> submenu 2</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem> submenu 3</CDBSidebarMenuItem>
                    </CDBSidebarSubMenu>
                    <CDBSidebarSubMenu
                      title="Sidemenu 2"
                      icon="book"
                      suffix={
                        <CDBBadge color="danger" size="small" borderType="pill">
                          new
                        </CDBBadge>
                      }
                    >
                      <CDBSidebarMenuItem>submenu 1</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem>submenu 2</CDBSidebarMenuItem>
                      <CDBSidebarMenuItem>submenu 3</CDBSidebarMenuItem>
                    </CDBSidebarSubMenu>
                    <CDBSidebarSubMenu title="MultiLevel with Icon" icon="table">
                      <CDBSidebarMenuItem>submenu 1 </CDBSidebarMenuItem>
                      <CDBSidebarMenuItem>submenu 2 </CDBSidebarMenuItem>
                      <CDBSidebarSubMenu title="submenu 3">
                        <CDBSidebarMenuItem>submenu 3.1 </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>submenu 3.2 </CDBSidebarMenuItem>
                        <CDBSidebarSubMenu title="subnt">
                          <CDBSidebarMenuItem>submenu 3.3.1 </CDBSidebarMenuItem>
                          <CDBSidebarMenuItem>submenu 3.3.2 </CDBSidebarMenuItem>
                          <CDBSidebarMenuItem>submenu 3.3.3 </CDBSidebarMenuItem>
                        </CDBSidebarSubMenu>
                      </CDBSidebarSubMenu>
                    </CDBSidebarSubMenu>
                  </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: "center" }}>
                  <div
                    className="sidebar-btn-wrapper"
                    style={{
                      padding: "20px 5px"
                    }}
                  >
                    Sidebar Footer
                  </div>
                </CDBSidebarFooter>
              </CDBSidebar>
            </div>
          </div>
        </div>
      </div>
    );
};
