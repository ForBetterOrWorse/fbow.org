<template>
  <div class="container">
    <header>
      <h1>For Better or Worse</h1>
    </header>

    <main>
      <div class="intro">
        <p>
          This page exists because a group of daydreamers came together and decided to create a
          space where they could turn their what-ifs into reality, for better or worse.<br />We're
          just getting started, though, so there isn't much to share.
        </p>
        <p>
          Thank you for stopping by.<br />Be sure to smile before you go back to your day. Or don't.
          Just stay grumpy, we don't really care.
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import './assets/variables.css';

.container {
  height: 100vh;
  position: relative;
  padding: 16px;
}

h1 {
  line-height: 1.5;
  font-size: 18px;
  /* This is temporary, until we have a nav and potentially make this h1 visually hidden */
  position: absolute;
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.intro {
  width: 50%;
  font-size: 24px;
}

p {
  margin-bottom: 16px;
}

/* TODO: Replace the hard-coded number with a variable
   See https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media */
@media (max-width: 480px) {
  .intro {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .intro {
    width: 80%;
  }
}
</style>
