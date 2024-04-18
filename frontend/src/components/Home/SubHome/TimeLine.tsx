import React from "react";
import SubTimeLine from "./SubTimeLine";
import { styled } from "@mui/system";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { ThemeContext } from "../../context/ThemeContext";

const TimeLine = () => {
  const theme = React.useContext(ThemeContext);

  const style = {
    fill: theme.appTheme === "light" ? "#198754" : "dark",
    fontSize: "70px",
  };

  const StyledShieldIcon = styled(ShieldOutlinedIcon)(style);
  const PersonOutlineIcon = styled(PersonOutlineOutlinedIcon)(style);
  const EditNoteIcon = styled(EditNoteOutlinedIcon)(style);

  return (
    <div className="container">
      <div className="row">
        <SubTimeLine
          isDark={theme.appTheme === "light"}
          count={12}
          title="Secure"
          icon={StyledShieldIcon}
        />
        <SubTimeLine
          isDark={theme.appTheme === "light"}
          count={12}
          title="Person"
          icon={PersonOutlineIcon}
        />
        <SubTimeLine
          isDark={theme.appTheme === "light"}
          count={12}
          title="Blogs"
          icon={EditNoteIcon}
        />
      </div>
    </div>
  );
};

export default TimeLine;
