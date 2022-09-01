import React from "react";
import "./Styles/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  
  )
    
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "ProffessorLOGAN is Awesome Developer",
        "Top news - 2289 readers"
      )}
      {newsArticle(
        "Chainshawman releasing on 2022",
        "Top news - 1856 readers"
      )}
      {newsArticle(
        "Bitcoin is Awesome",
        "Top news - 2936 readers"
      )}
      {newsArticle(
        "virat kohli man of the match",
        "Top news - 3866 readers"
      )}
      {newsArticle(
        "narendra modi conqurer the world",
        "Top news - 5674 readers"
      )}
      {newsArticle(
        "Corona virus is deadly",
        "Top news - 5363 readers"
      )}
      {newsArticle(
        "salman khan hit run case online ",
        "Top news - 7483 readers"
      )}
      {newsArticle(
        "Iron man is love 3000",
        "Top news - 3644 readers"
      )}
      {newsArticle(
        "Aliens coming to earth 2090",
        "Top news - 2341 readers"
      )}
      {newsArticle(
        "Justin Bieber mary haley ",
        "Top news - 7438 readers"
      )}
      {newsArticle(
        "carry minaty enggaged with zoya",
        "Top news - 908 readers"
      )}
      {newsArticle(
        "web developer job opportunity",
        "Top news - 1123 readers"
      )}
    </div>
  );
}

export default Widgets;
