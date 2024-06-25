"use client";
import { settings } from "./settings";
const { twoMinuteHymns } = settings;
const TwoMinuteHymnTestimonies = () => {
  return twoMinuteHymns.length > 0 ? (
    <>
      <p className="block">Hymn Testimonies</p>
      {twoMinuteHymns.map((hymn, index) => (
        <div className="agenda-block" key={index}>
          <div className="title-container">
            <p className="agenda-title">Testimony</p>
            <p className="agenda-content">{hymn.speaker}</p>
          </div>
          <div className="title-container">
            <p className="agenda-title">Hymn</p>
            <p className="agenda-content">{hymn.number}</p>
          </div>
          <div className="title-container hymn">
            {hymn.link ? (
              <a href={hymn.link} target="_blank" rel="noreferrer">
                {hymn.title}
              </a>
            ) : (
              <p className="agenda-content">{hymn.title}</p>
            )}
          </div>
          <hr
            style={{
              width: " 100%",
              color: "#ebeaea",
              borderBottom: "none",
            }}
          />
        </div>
      ))}
    </>
  ) : null;
};

export default TwoMinuteHymnTestimonies;
