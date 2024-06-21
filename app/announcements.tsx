"use client";
import { settings } from "./settings";

const {
  wardAnnouncements,
  reliefSocietyLessons,
  priesthoodLessons,
  sundaySchoolLessons,
  primaryAnnouncements,
} = settings;

const Announcements = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Ward Announcements</h2>
      <ul>
        {wardAnnouncements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
      <h2 style={{ textAlign: "center" }}>
        Relief Society Lessons (2nd & 4th) & Announcements
      </h2>
      <ul>
        {reliefSocietyLessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      <h2 style={{ textAlign: "center" }}>
        Priesthood Lessons (2nd & 4th) & Announcements
      </h2>
      <ul>
        {priesthoodLessons.map((lesson, index) => (
          <a href="https://www.churchofjesuschrist.org/study/general-conference/2024/04/31bowen?lang=eng" key={index}>

          <li key={index}>{lesson}</li>
          </a>
        ))}
      </ul>
      <h2 style={{ textAlign: "center" }}>Sunday School Lessons (1st & 3rd)</h2>
      <ul>
        {sundaySchoolLessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      <h2 style={{ textAlign: "center" }}>Primary Announcements</h2>
      <ul>
        {primaryAnnouncements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
    </>
  );
};

export default Announcements;
