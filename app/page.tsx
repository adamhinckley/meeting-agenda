"use client";
import styles from "./page.module.css";
import { settings } from "./settings";

export default function Home() {

  const {
    isTestimonyMeeting,
    presiding,
    conducting,
    musicLeader,
    accompanist,
    openingHymn,
    openingPrayer,
    sacramentHymn,
    speakerOne,
    specialMusicalNumber,
    intermediateHymn,
    speakerTwo,
    closingHymn,
    closingPrayer,
    date,
  } = settings;

  return (
    <main className={styles.main}>
      <h1 className="heading">Florence Ward Sacrament Meeting</h1>
      <p className="date">{date}</p>
      <div className="leader-container">
        <div>
          <h2>Presiding</h2>
          <h2>Conducting</h2>
          <h2>Music Leader</h2>
          <h2>Accompanist</h2>
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
        <div className="title-container">
          <p className="agenda-title">Opening Hymn</p>
          <p className="agenda-content">{openingHymn}</p>
        </div>
        <div className="title-container">
          <p className="agenda-title">Opening Prayer</p>
          <p className="agenda-content">{openingPrayer}</p>
        </div>
      </div>
      <p className="block">Stake and Ward Business</p>
      <div className="agenda-block">
        <div className="title-container">
          <p className="agenda-title">Sacrament Hymn</p>
          <p className="agenda-content">{sacramentHymn}</p>
        </div>
      </div>
      <p className="block">Sacrament Administered by the Aaronic Priesthood</p>
      {isTestimonyMeeting ? (
        <>
          <p className="block">Baring of Testimonies</p>
        </>
      ) : (
        <>
          <div className="agenda-block">
            <div className="title-container">
              <p className="agenda-title">Speaker</p>
              <p className="agenda-content">{speakerOne}</p>
            </div>
          </div>
          <div className="agenda-block">
            {specialMusicalNumber && (
              <div className="title-container">
                <p className="agenda-title">Special Musical Number</p>
                <p className="agenda-content">{specialMusicalNumber}</p>
              </div>
            )}
            {intermediateHymn && (
              <div className="title-container">
                <p className="agenda-title">Intermediate Hymn</p>
                <p className="agenda-content">{intermediateHymn}</p>
              </div>
            )}
            <div className="title-container">
              <p className="agenda-title">Speaker</p>
              <p className="agenda-content">{speakerTwo}</p>
            </div>
            <div className="title-container">
              <p className="agenda-title">Closing Hymn</p>
              <p className="agenda-content">{closingHymn}</p>
            </div>
            <div className="title-container">
              <p className="agenda-title">Closing Prayer</p>
              <p className="agenda-content">{closingPrayer}</p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
