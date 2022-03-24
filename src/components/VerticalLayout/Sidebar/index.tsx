import { StyledSidebarMenu } from "@aureskonnect/react-ui";

import "./index.css";

export default function Sidebar() {
  return (
    <div className="container__clz">
      <StyledSidebarMenu
        brand="Kiosk"
        menuItems={[
          {
            link: "#",
            menuItem: "Dashboard",
            subMenu: [
              {
                link: "/#",
                menuItem: "Turnover",
              },
              {
                link: "/#",
                menuItem: "Tickets",
              },
            ],
          },
          {
            link: "#",
            menuItem: "Statistics",
            subMenu: [
              {
                link: "#",
                menuItem: "Employees",
                subMenu: [
                  {
                    link: "/#",
                    menuItem: "Delivery man ",
                  },
                  {
                    link: "/#",
                    menuItem: "cashier ",
                  },
                ],
              },
              {
                link: "/#",
                menuItem: "Support modes",
              },
            ],
          },
          {
            link: "#",
            menuItem: "Settings",
          },
        ]}
      ></StyledSidebarMenu>
    </div>
  );
}
