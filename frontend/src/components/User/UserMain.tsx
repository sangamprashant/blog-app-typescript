import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./user.css"; // Import custom CSS styles
import Profile from "./Profile";
import Toggle from "../Navbar/Toggle";
import { ThemeContext } from "../context/ThemeContext";
import Logout from "./Log/Logout";
import { Tooltip } from "antd";
import Search from "./Search";
import SettingsIcon from "@mui/icons-material/Settings";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import ArticleIcon from "@mui/icons-material/Article";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SellIcon from "@mui/icons-material/Sell";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import HelpIcon from "@mui/icons-material/Help";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import FeedbackIcon from "@mui/icons-material/Feedback";
import OpenArticle from "./Profile/Article/OpenArticle";
import WriteAnArticle from "./Profile/Article/WriteAnArticle";
import Explore from "./Explore";

const UserMain = () => {
  const { appTheme } = React.useContext(ThemeContext);
  const th: boolean = appTheme === "light" ? true : false;
  const navigate = useNavigate();
  const [active, setActive] = React.useState(window.location.pathname);

  React.useEffect(() => {
    setActive(window.location.pathname);
    const activeLink = document.querySelector(
      `.list-group-item[href="${window.location.pathname}"]`
    );
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [window.location.pathname, navigate]);

  const navItems = [
    {
      group: "",
      link: [
        {
          title: "My Account",
          link: "/account",
          icon: <HomeIcon />,
        },
      ],
    },
    {
      group: "Article",
      link: [
        {
          title: "Write an Article",
          link: "/write",
          icon: <CreateIcon />,
        },
        {
          title: "Explore",
          link: "/explore",
          icon: <TravelExploreIcon />,
        },
      ],
    },
    {
      group: "Communication",
      link: [
        {
          title: "Notifications",
          link: "/notifications",
          icon: <NotificationsIcon />,
        },
        {
          title: "Messages",
          link: "/messages",
          icon: <MessageIcon />,
        },
      ],
    },
    {
      group: "Settings",
      link: [
        {
          title: "Settings",
          link: "/settings",
          icon: <SettingsIcon />,
        },
        {
          title: "Help Center",
          link: "/help",
          icon: <HelpIcon />,
        },
      ],
    },
    {
      group: "Management",
      link: [
        {
          title: "Favorites",
          link: "/favorites",
          icon: <FavoriteIcon />,
        },
        {
          title: "Tags",
          link: "/tags",
          icon: <SellIcon />,
        },
        {
          title: "Analytics",
          link: "/analytics",
          icon: <AnalyticsIcon />,
        },
        {
          title: "Subscriptions",
          link: "/subscriptions",
          icon: <SubscriptionsIcon />,
        },
        {
          title: "History",
          link: "/history",
          icon: <HistoryIcon />,
        },
        {
          title: "Feedback",
          link: "/feedback",
          icon: <FeedbackIcon />,
        },
      ],
    },
  ];

  return (
    <section className="user-main">
      <div className="row h-100 m-0 p-0">
        {/* Sidebar */}
        <div className="col-md-3 bg-black text-light h-100 md:d-none">
          <h2 className="py-3 text-center">Dashboard</h2>
          <ul className="list-group list-group-flush h-75 overflow-y-scroll">
            {/* Use custom styling for links */}
            {navItems.map((group, index) => (
              <React.Fragment key={index}>
                {group.group && (
                  <React.Fragment>
                    <hr />
                    <p className="text-white p-0 m-0">{group.group}</p>
                  </React.Fragment>
                )}
                {group.link.map((item, idx) => (
                  <Link
                    to={item.link}
                    key={idx}
                    className={`list-group-item  text-white text-decoration-none bg-dark my-1 rounded-2 py-3 d-flex align-items-center gap-2 border-${
                      active === item.link ? "1" : "0"
                    }`}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            <div className="border-1 my-1 rounded-2 position-absolute bottom-10 d-flex justify-content-between align-items-center gap-3">
              <Toggle />
              <Logout />
              <button className="btn bg-gradient text-white rounded-5">
                <SettingsIcon />
              </button>
            </div>
            {/* Add more sidebar links here */}
          </ul>
        </div>

        {/* Main Content */}
        <div
          className={`col-md-9 h-100 p-3 ${
            th ? "bg-white text-dark" : "bg-dark text-white"
          } `}
        >
          <Search th={th} />
          <hr />
          <div className="main-container-user overflow-y-scroll">
            <Routes>
              <Route path="/account" element={<Profile />} />
              <Route path="/write" element={<WriteAnArticle />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/article/:id" element={<OpenArticle />} />
            </Routes>
          </div>

          {/* Add more main content components here */}
        </div>
      </div>
    </section>
  );
};

export default UserMain;
