import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBBadge
} from "cdbreact";

function App() {
  return (
    <div className="r-w">
      <div className="blockcode text-center">
        <div className="header">Sidebar</div>
          <div
            className={`app`}
            style={{ display: "flex", height: "100%" }}
          >
            <CDBSidebar
              textColor="#fff"
              backgroundColor="#000"
            >
              <CDBSidebarHeader>
                <i className="fa fa-bars fa-1x"></i>
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
                    <i className="fa fa-book"></i>
                    Components
                    </CDBSidebarMenuItem>
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
  );
};

export default App