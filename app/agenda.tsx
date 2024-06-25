"use client";
import ClosingHymnAndPrayer from "./closingHymnAndPrayer";
import PreSacramentAgenda from "./preSacramentAgenda";
import { settings } from "./settings";
import StandardSecondHalf from "./standardSecondHalf";
import TwoMinuteHymnTestimonies from "./twoMinuteHymnTestimonies";
const {
  isTestimonyMeeting,
  presiding,
  conducting,
  musicLeader,
  accompanist,
  openingHymn,
  openingHymnTitle,
  openingPrayer,
  sacramentHymn,
  sacramentHymnTitle,
  speakerOne,
  specialMusicalNumber,
  intermediateHymn,
  intermediateHymnTitle,
  speakerTwo,
  closingHymn,
  closingHymnTitle,
  closingPrayer,
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

const Agenda = () => {
  return (
    <div style={{ margin: "0 12px" }}>
      <PreSacramentAgenda />
      <TwoMinuteHymnTestimonies />
      {/* <StandardSecondHalf/> */}
      <ClosingHymnAndPrayer />
    </div>
  );
};

export default Agenda;
