// front page
// this app has configuration that will not allow images to be used unless they are from 'churchofjesuschrist.org.
// We can add more domains if it's necessary.
const imageUrl = 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/Trujillo-Peru-Temple-2.jpg'

// agenda
const isTestimonyMeeting = false;
const date = "June 16, 2024";
const presiding = "Bishop Rob Dickson";
const conducting = "Brother Rick Jensen";
const musicLeader = "Sister Vanessa Pettus";
const accompanist = "Sister Wendy Infanger";
const openingHymn = "70";
const openingHymnTitle = "Sing Praise to Him";
const openingPrayer = "By Invitation";
const sacramentHymn = "There is a Green Hill Far Away #194";
const speakerOne = "Youth Testimonies as requested";
const specialMusicalNumber = "Ward Choir ~ Search Ponder and Pray";
const intermediateHymn = "";
const speakerTwo = "Youth Testimonies as requested";
const closingHymn = "As I Search the Holy Scriptures #277";
const closingPrayer = "By Invitation";

// Announcements
const wardAnnouncements = [
  'The Addiction Recovery Program (ARP) meets every Tuesday at 7:00 PM. Jim & April Sturtevant (530) 906-3289.',
  'Empty Nesters Family Home Evenings Mondays at 6:00 PM in R.S. Room. Potluck to follow.',
  'Ward Choir practice rehearsals on the 1st (6-5) & 3rd (6-19) Wednesday of each month at 6:45 PM.',
  'Ward Ice Cream Social June 20th at 6:00 PM at the church.'
]

const reliefSocietyLessons = [
  {
    link: '',
    text: 'June 5 – R.S. Sisters Luncheon 12:00 at the church.'
  },
  {
    link: '',
    text: 'June 9 – Elder Gong: “All Things for Our Good”'
  },
  {
    link: 'https://www.churchofjesuschrist.org/study/general-conference/2024/04/54held?lang=eng',
    text: 'June 23 – Elder Held: “Opposition in All Things”'
  }
]

const priesthoodLessons = [
  {
    link: '',
    text: 'June 9 – Miracles, Angels, and Priesthood Power - Elder Shayne M. Bowen'
  },
  {
    link: '',
    text: 'June 14 – EQ Presidency Temple Trip to Nashville Temple – Depart Ward building at 8:30 AM. All temple recommend holders welcome.'
  },
  {
    link: 'https://www.churchofjesuschrist.org/study/general-conference/2024/04/35uchtdorf?lang=eng',
    text: 'June 23 – A Higher Joy - Elder Dieter F. Uchtdorf'
  }
]

const sundaySchoolLessons = [
  {
    link: '',
    text: 'May 27–June 2: Mosiah 25–28'
  },
  {
    link: '',
    text: 'June 3–9: Mosiah 29–Alma 4'
  },
  {
    link: '',
    text: 'June 10–16: Alma 5–7'
  },
  {
    link: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-book-of-mormon-2024/25?lang=eng',
    text: 'June 17–23: Alma 8–12'
  },
  {
    link: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-book-of-mormon-2024/26?lang=eng',
    text: 'June 24–30: Alma 13–16'
  }
]

const primaryAnnouncements = [
  'Primary Activity Night on the 2nd (6-12) & 4th (6-26) Wednesday at 6:30 PM.',
]

//page three

const buildingCleaningSchedule = [
  'Please sign up for either the even months or the odd months for the year. Then each Saturday the building will be open for cleaning with a list of assignments. Come and select a few assignments put your name next to them. When completed check the box confirming it has been done.'
]

//This one requires back ticks instead of regular quotes because it uses the same quotes in the text.
const familyHistoryCorner = [
  `From Come, Follow Me :When we face setbacks and disappointments as we serve in the Lord's kingdom, we can remember how God supported and led Alma, and … trust that God will support and lead us too. In what ways can you increase your efforts to share your family's history? Sharing your family history may require persistence, patience, and creativity. … Remember, however, everyone has an innate desire to know where they come from. (theFHguide.com)`
]

const wardFocusTempleCorner = [
  'For this year we would like to encourage members to focus on developing Christ like attributes. This month we are focusing on Knowledge.',
  'Knowledge is key in everything we do. From learning to tie or your shoes to  performing a life saving operation you must put forth effort and time in order to gain the knowledge required to perform these skills. Dieter F Uchtdorf said “What we love determines what we seek. What we seek determines what we think and do. What we think and do determines who we are and who we will become.” As we seek to draw closer to the Lord and learn more about him we will be able to gain knowledge of him, his love for us and ultimately become more like him.'
]


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
  speakerOne,
  specialMusicalNumber,
  intermediateHymn,
  speakerTwo,
  closingHymn,
  closingPrayer,
  date,
  wardAnnouncements,
  reliefSocietyLessons,
  priesthoodLessons,
  sundaySchoolLessons,
  primaryAnnouncements,
  buildingCleaningSchedule,
  familyHistoryCorner,
  wardFocusTempleCorner,
  imageUrl
};
