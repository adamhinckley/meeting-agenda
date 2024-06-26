// front page
// this app has configuration that will not allow images to be used unless they are from 'churchofjesuschrist.org.
// We can add more domains if it's necessary.
const imageUrl =
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/Trujillo-Peru-Temple-2.jpg";

// agenda
const isTestimonyMeeting = false;
const presiding = "Bishop Rob Dickson";
const conducting = "Brother Rick Jensen";
const musicLeader = "Sister Vanessa Pettus";
const accompanist = "Sister Wendy Infanger";
const openingHymn = "26";
const openingHymnTitle = "Joseph Smith’s First Prayer";
const openingPrayer = "By Invitation";
const sacramentHymn = "180";
const sacramentHymnTitle = "Father in Heaven We Do Believe";
const blockOne = [
  {
    title: "Speaker",
    content: "Youth Testimonies as requested",
  },
];
const intermediateMusic = {
  title: "Special Musical Number",
  performers: ["Peggy Gulli", "Rebekah Bungei", "Wendy Infanger"], // If there are multiple performers, list them here separated by commas.
  songTitle: "How Great Thou Art",
  hymnNumber: "", // This will not show when performers are listed.
};

const blockTwo = [
  {
    title: "Speaker",
    content: "Youth Testimonies as requested",
  },
];
const closingHymn = "78";
const closingHymnTitle = "God of Our Fathers, Whose Almighty Hand";
const closingPrayer = "By Invitation";

// Announcements
const wardAnnouncements = [
  "The Addiction Recovery Program (ARP) contact Jim & April Sturtevant (530) 906-3289.",
  "Empty Nesters Family Home Evenings Mondays at 6:00 PM in R.S. Room. Potluck to follow.",
  "Ward Choir practice rehearsals on the 1st (6-5) & 3rd (6-19) Wednesday of each month at 6:45 PM.",
  "Ward 5th Sunday Potluck after church June 30th. Bring something to share.",
];

const reliefSocietyLessons = [
  {
    link: "",
    text: "July 3 – R.S. Sisters Luncheon 12:00 at the church.",
  },
  {
    link: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/54held?lang=eng",
    text: "June 23 – Elder Held: “Opposition in All Things”",
  },
  {
    link: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/15dushku?lang=eng",
    text: "July 14 - Elder Dushku: “Pillars and Rays”",
  },
];

const priesthoodLessons = [
  {
    link: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/35uchtdorf?lang=eng",
    text: 'June 23 – "A Higher Joy" - Elder Dieter F. Uchtdorf',
  },
  {
    link: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/53stevenson?lang=eng",
    text: 'July 14 – "Bridging the Two Great Commandments" - Elder Gary E. Stevenson',
  },
  {
    link: "",
    text: "July 19 – EQ Presidency Temple Trip to Nashville Temple – Depart Ward building at 8:30 AM. All temple recommend holders welcome.",
  },
];

const sundaySchoolLessons = [
  {
    link: "",
    text: "May 27–June 2: Mosiah 25–28",
  },
  {
    link: "",
    text: "June 3–9: Mosiah 29–Alma 4",
  },
  {
    link: "",
    text: "June 10–16: Alma 5–7",
  },
  {
    link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-book-of-mormon-2024/25?lang=eng",
    text: "June 17–23: Alma 8–12",
  },
  {
    link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-book-of-mormon-2024/26?lang=eng",
    text: "June 24–30: Alma 13–16",
  },
];

const primaryAnnouncements = [
  "Primary Activity Night on the 2nd (7-10) & 4th (6-26) Wednesday at 6:30 PM.",
];

//page three

const buildingCleaningSchedule = [
  "Please sign up for either the even months or the odd months for the year. Then each Saturday the building will be open for cleaning with a list of assignments. Come and select a few assignments put your name next to them. When completed check the box confirming it has been done.",
];

//This one requires back ticks instead of regular quotes because it uses the same quotes in the text.
const familyHistoryCorner = [
  `"For we without [our ancestors] cannot be made perfect; neither can they without us be made perfect" (D&C 128:18). Many of our deceased ancestors are being taught the gospel in the spirit world - they need our help and we need theirs! (theFHguide.com) Have you used Ordinance Ready to find family names for the temple? (Watch the ward Facebook group this week for a video demonstrating how.)`,
];

const wardFocusTempleCorner = [
  "For this year we would like to encourage members to focus on developing Christ like attributes. This month we are focusing on Knowledge.",
  "Knowledge is key in everything we do. From learning to tie or your shoes to  performing a life saving operation you must put forth effort and time in order to gain the knowledge required to perform these skills. Dieter F Uchtdorf said “What we love determines what we seek. What we seek determines what we think and do. What we think and do determines who we are and who we will become.” As we seek to draw closer to the Lord and learn more about him we will be able to gain knowledge of him, his love for us and ultimately become more like him.",
];

export const settings = {
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
  blockOne,
  intermediateMusic,
  blockTwo,
  closingHymn,
  closingHymnTitle,
  closingPrayer,
  wardAnnouncements,
  reliefSocietyLessons,
  priesthoodLessons,
  sundaySchoolLessons,
  primaryAnnouncements,
  buildingCleaningSchedule,
  familyHistoryCorner,
  wardFocusTempleCorner,
  imageUrl,
};
