import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subttile) => (
    <div className="widgest__article">
      <div className="widgest__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgest__articleRight">
        <h4>{heading}</h4>
        <p>{subttile}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("COVID-19 Vaccine Found", "Top news- 5214 readers")}
      {newsArticle("COVID-19 Updates for INDIA", "Top news- 5214 readers")}
      {newsArticle("Lack of OXYGEN in Hospitals", "Top news- 145 readers")}
      {newsArticle("Bit Coin Breaks", "Crypto fans- 145 readers")}
    </div>
  );
}

export default Widgets;
