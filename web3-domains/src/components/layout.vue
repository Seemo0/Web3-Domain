<script setup>
const TWITTER_HANDLE = "semo_ou7";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
</script>
<template>
  <div className="App">
    <div className="container">
      <div className="header-container">
        <header>
          <div className="left">
            <p className="title">🐱‍👤 Semo's Name Service</p>
            <p className="subtitle">Your immortal API on the blockchain!</p>
          </div>
        </header>
      </div>
      <slot></slot>

      <div className="footer-container">
        <img
          alt="Twitter Logo"
          className="twitter-logo"
          src="/twitter-logo.svg"
        />
        <a
          className="footer-text"
          :href="TWITTER_LINK"
          target="_blank"
          rel="noreferrer"
          >{{ `built with @${TWITTER_HANDLE}` }}</a
        >
      </div>
    </div>
  </div>
</template>