"use client";
import Agenda from "./agenda";
import Announcements from "./announcements";
import FrontPage from "./frontPage";
import styles from "./page.module.css";
import PageThree from "./pageThree";

export default function Home() {
  return (
    <main className={styles.main}>
      <FrontPage />
      <Agenda />
      <hr />
      <Announcements />
      <hr />
      <PageThree />
    </main>
  );
}
