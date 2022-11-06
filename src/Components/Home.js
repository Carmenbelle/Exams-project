import React from "react";
import HomeStyle from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaAirbnb } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Helmet>
        ‍<title>Pets - Products</title>‍
        <meta
          name="description"
          content="It is a simple voting platform, it has a unique user experience and a good user interface as well. link:https://carmenbelle.netlify.app/"
        />
        <meta name="voting-platform" content="summary_large_image" />
        <meta name="voting:platform" content="@user" />
        <meta name="voting:creator" content="@user" />
        <meta name="vote:title" content="votingsite - Products" />
        <meta
          name="Online-voting platform:description"
          content="Best Products for your voting platform."
        />
        <meta name="oline-voting platform" content="voting platform" />
        <meta property="og:title" content="election" />
        <meta property="og:description" content="Best Products for your voting platform" />
        <meta property="og:url" content="https://carmenbelle.netlify.app/" />
        <meta property="og:voting-App" content="voting platform - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="A simple voting platform, it has a unique user experience and a good user interface as well" />
        <meta property="voting:app_id" content="ID_APP_VOTE" />
      </Helmet>
      <FaAirbnb style={{ width: "20%", height: "30px", color: "grey" }} />
      <section className={HomeStyle.body}>
        <section className={HomeStyle.container}>
          <h1>Welcome to your Online voting platform</h1>

          <button className={HomeStyle.btn}>
            <NavLink to="/users">Start</NavLink>
          </button>
        </section>
      </section>
    </>
  );
};

export default Home;
