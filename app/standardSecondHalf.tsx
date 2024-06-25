"use client";
import { settings } from "./settings";
import "./globals.css";

const {
  speakerOne,
  speakerTwo,
  specialMusicalNumber,
  intermediateHymn,
  intermediateHymnTitle,
  isTestimonyMeeting,
} = settings;

const StandardSecondHalf = () => {
  return (
    <>
      {isTestimonyMeeting ? (
        <p className="block">Bearing of Testimonies</p>
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
              <>
                <div className="title-container no-margin">
                  <p className="agenda-title">Intermediate Hymn</p>
                  <p className="agenda-content">{intermediateHymn}</p>
                </div>
                <div className="title-container hymn">
                  <div />
                  <p className="agenda-content">{intermediateHymnTitle}</p>
                </div>
              </>
            )}
            <div className="title-container">
              <p className="agenda-title">Speaker</p>
              <p className="agenda-content">{speakerTwo}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StandardSecondHalf;
