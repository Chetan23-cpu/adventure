import { MdAnalytics,
         MdAttachMoney, 
         MdDashboard, 
         MdHelpCenter, 
         MdOutlineSettings, 
         MdPeople, 
         MdShoppingBag, 
         MdSupervisedUserCircle, 
         MdWork,
         MdLogout} from "react-icons/md";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/admin/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/admin/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/admin/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
        {
            title: "Revenue",
            path: "/admin/dashboard/revenue",
            icon: <MdWork />,
        },
        {
            title: "Report",
            path: "/admin/dashboard/report",
            icon: <MdAnalytics />,
        },
        {
            title: "Teams",
            path: "/admin/dashboard/teams",
            icon: <MdPeople />,
        },
    ]
  },
  {
    title: "User",
    list: [
        {
            title: "Settings",
            path: "/admin/dashboard/settings",
            icon: <MdOutlineSettings />
        },
        {
            title: "Help",
            path: "/admin/dashboard/help",
            icon: <MdHelpCenter />
        },
    ]
  }
];

const Sidebar = () => {
  return <div className={styles.container}>
    <div className={styles.user}>
        <Image className={styles.userImage} src="/assets/img/dashboard/user.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.userTitle}>Administrator</span>
        </div>
    </div>
    <ul className={styles.list}>
        {menuItems.map((cat)=>(
            <li key={cat.title}>
                <span className={styles.cat}>
                    {cat.title}
                </span>
                {cat.list.map((item)=>(
                    <MenuLink item={item} key={item.title}/>
                ))}
                
            </li>
  ))}
    </ul>
    <button className={styles.logout}>
      <MdLogout />
      Logout
    </button>
  </div>;
};

export default Sidebar;
