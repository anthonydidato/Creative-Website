const mug = `${import.meta.env.BASE_URL}media/android-cafe-mug.png`;

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <a className="brand" href="#" aria-label="Android Cafe Mug home"><span className="brand-icon">a<span>•</span></span> android cafe</a>
        <nav aria-label="Main navigation"><a href="#details">The mug</a><a href="#ritual">Your ritual</a><a className="nav-cta" href="#details">Take a closer look <span>↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="product-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> FOR THE COFFEE-POWERED</p>
            <h1 id="product-title">Android<br />Cafe Mug<span className="green">.</span></h1>
            <p className="hero-tagline">Your daily reboot.</p>
            <p className="intro">A little Android. A lot of you. Bring a bold black mug and a flash of green to your coffee break, desk setup, and next big idea.</p>
            <a className="button" href="#details">Meet your new desk companion <span>↗</span></a>
            <div className="hero-note"><span>01 / EVERYDAY ESSENTIAL</span><span>BIG ANDROID ENERGY</span></div>
          </div>
          <div className="product-stage">
            <div className="stage-top"><span>ANDROID CAFE MUG</span><span>BLACK + GREEN</span></div>
            <img className="hero-mug" src={mug} alt="Black Android Cafe Mug with white Android lettering, a bright green Android logo, and a large handle" fetchPriority="high" />
            <div className="stage-bottom"><span className="round-arrow">↘</span><span>A familiar face.<br /><strong>A fresh start.</strong></span><span className="image-label">YOUR NEXT COFFEE BREAK</span></div>
          </div>
        </section>
        <div className="ticker" aria-label="Coffee. Code. Create. Repeat."><span>COFFEE.</span><i>✳</i><span>CODE.</span><i>✳</i><span>CREATE.</span><i>✳</i><span>REPEAT.</span><i>✳</i></div>
        <section className="details section" id="details" aria-labelledby="details-title">
          <div className="section-heading"><p className="eyebrow">01 / THE DETAILS</p><h2 id="details-title">Good coffee.<br />Great company.</h2><p>For Android fans, creative thinkers, and anyone whose best ideas start with a coffee break.</p></div>
          <div className="benefits">
            <article><span className="feature-number">01</span><h3>Show your Android side.</h3><p>White Android lettering and that unmistakable green mascot put a little of your personality on your desk.</p></article>
            <article><span className="feature-number">02</span><h3>Give your setup a signature.</h3><p>A simple black design with a bright pop of green makes an easy companion for your keyboard, notebook, and daily to-do list.</p></article>
            <article><span className="feature-number">03</span><h3>Make room for a pause.</h3><p>Step away from the screen, pour your favorite drink, and give your next idea a moment to brew.</p></article>
          </div>
        </section>
        <section className="ritual section" id="ritual" aria-labelledby="ritual-title"><div><p className="eyebrow">02 / YOUR DAILY RITUAL</p><h2 id="ritual-title">Less scroll.<br />More sip<span className="green">.</span></h2></div><div className="ritual-copy"><span className="asterisk" aria-hidden="true">✳</span><p>Before the first line of code.<br />Between the big ideas.<br />After you hit send.</p><p className="muted">The Android Cafe Mug brings a familiar face to the small moments that make your day yours.</p><a className="text-link" href="#product-title">Find your daily reboot <span>↗</span></a></div></section>
        <section className="closing"><p className="eyebrow">YOUR DESK. YOUR DRINK. YOUR ANDROID.</p><h2>Start with a sip.</h2><a className="button dark-button" href="#product-title">Explore the Android Cafe Mug <span>↑</span></a></section>
      </main>
      <footer><a className="footer-brand" href="#">android cafe<span className="green">.</span></a><p>Android Cafe Mug · Product concept</p><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
