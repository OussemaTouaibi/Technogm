import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
function SocialMedia() {
  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link>
        <FacebookRoundedIcon color="secondary" />
      </Link>
      <Link>
        <TwitterIcon color="secondary" />
      </Link>
      <Link>
        <InstagramIcon color="secondary" />
      </Link>
      <Link>
        <LinkedInIcon color="secondary" />
      </Link>
    </div>
  );
}

export default SocialMedia;
