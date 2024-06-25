"use client";
import { settings } from "./settings";

const {
  presiding,
  conducting,
  musicLeader,
  accompanist,
  openingHymn,
  openingHymnTitle,
  openingPrayer,
  sacramentHymn,
  sacramentHymnTitle,
} = settings;

const currentDate = (() => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
})();

const PreSacramentAgenda = () => {
  return (
    <>
      <h1 className="heading">Florence Ward Sacrament Meeting</h1>
      <p className="date">{currentDate}</p>
      <div className="leader-container">
        <div>
          <h2>Presiding</h2>
          <h2>Conducting</h2>
          <h2>Chorister</h2>
          <h2>Organist</h2>
        </div>
        <div className="names">
          <h2>{presiding}</h2>
          <h2>{conducting}</h2>
          <h2>{musicLeader}</h2>
          <h2>{accompanist}</h2>
        </div>
      </div>
      <p className="block">Ward Announcements</p>
      <div className="agenda-block">
        <div className="title-container no-margin">
          <p className="agenda-title">Opening Hymn</p>
          <p className="agenda-content">{openingHymn}</p>
        </div>
        <div className="title-container  hymn">
          <p className="agenda-content title">{openingHymnTitle}</p>
        </div>
        <div className="title-container">
          <p className="agenda-title">Opening Prayer</p>
          <p className="agenda-content">{openingPrayer}</p>
        </div>
      </div>
      <p className="block">Stake and Ward Business</p>
      <div className="agenda-block">
        <div className="title-container">
          <p className="agenda-title no-margin">Sacrament Hymn</p>
          <p className="agenda-content ">{sacramentHymn}</p>
        </div>
        <div className="title-container hymn">
          <p className="agenda-content">{sacramentHymnTitle}</p>
        </div>
      </div>
      <p className="block">Sacrament Administered by the Aaronic Priesthood</p>
    </>
  );
};

export default PreSacramentAgenda;
