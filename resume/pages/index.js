import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav.js";
import Header from "../components/header.js";
import Experience from "../components/experience.js";
import Education from "../components/education.js";
import Skills from "../components/skills.js";
import Interest from "../components/interest.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Theo's resume</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Theo's resume" />
        <meta name="author" content="Theo" />
      </Head>

      <body>
        <div id="layoutDefault">
          <div id="layoutDefault_content">
            <main>
              <Header />
              <Experience />
              <Education />
              <Skills />
              <Interest />
              <Contact />
            </main>
          </div>

          <Footer />
        </div>
        {/* The core Firebase JS SDK is always required and must be listed first  */}
        <script src="/__/firebase/8.1.2/firebase-app.js"></script>

        {/* TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries  */}
        <script src="/__/firebase/8.1.2/firebase-analytics.js"></script>

        {/* Initialize Firebase */}
        <script src="/__/firebase/init.js"></script>
      </body>
    </div>
  );
}

{
  /* <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Header />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div> */
}
