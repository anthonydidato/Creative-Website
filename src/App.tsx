import {useState} from 'react';
const foods = [
  {name:'Plain yogurt',temperature:'37°F',note:'Check the package date',detail:'Keep the package date and opening date visible when planning your next breakfast.'},
  {name:'Leafy greens',temperature:'38°F',note:'Plan your next meal',detail:'Bring the produce drawer into your meal planning so groceries are easier to remember.'},
  {name:'Yesterday’s dinner',temperature:'37°F',note:'Review preparation date',detail:'Record when a meal was prepared and review that date before deciding what to eat next.'},
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [planned, setPlanned] = useState<number[]>([]);
  const food = foods[selected];
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <a className="brand" href="#" aria-label="FreshKeep home"><span className="brand-icon">f<span>•</span></span> freshkeep</a>
        <nav aria-label="Main navigation"><a href="#details">The concept</a><a href="#demo">Try the display</a><a className="nav-cta" href="#details">Take a closer look <span>↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="product-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ANTHONY DIDATO’S MARKETING VENTURE</p>
            <h1 id="product-title">FreshKeep<br />Smart Fridge<span className="green">.</span></h1>
            <p className="hero-tagline">Know your food. Waste less.</p>
            <p className="intro">A smart refrigerator concept that puts food temperatures, freshness reminders, and preservation guidance in one clear view. Designed to help you make more of the groceries you bring home.</p>
            <a className="button" href="#details">Explore the concept <span>↗</span></a>
            <div className="hero-note"><span>SMART REFRIGERATOR CONCEPT</span><span>WORKING BRAND NAME</span></div>
          </div>
          <div className="product-stage">
            <div className="stage-top"><span>FRESHKEEP SMART FRIDGE</span><span>CONCEPT PREVIEW</span></div>
            <div className="fridge-art" role="img" aria-label="Concept illustration of a FreshKeep refrigerator with a food information screen"><div className="fridge-door"><div className="fridge-screen"><small>FRESHKEEP / CONCEPT</small><strong>Food in focus.</strong><p>Temperature<br />Freshness reminders<br />Storage guidance</p><span>● PROPOSED DISPLAY</span></div><div className="fridge-food" aria-hidden="true">🥬 🍋 🥛</div></div><div className="fridge-drawer">F R E S H K E E P</div></div>
            <div className="stage-bottom"><span className="round-arrow">↘</span><span>A clearer picture.<br /><strong>A more thoughtful kitchen.</strong></span><span className="image-label">PROPOSED DESIGN</span></div>
          </div>
        </section>
        <div className="ticker" aria-label="Track. Plan. Preserve."><span>TRACK.</span><i>✳</i><span>PLAN.</span><i>✳</i><span>PRESERVE.</span><i>✳</i><span>ENJOY.</span><i>✳</i></div>
        <section className="details section" id="details" aria-labelledby="details-title">
          <div className="section-heading"><p className="eyebrow">01 / THE DETAILS</p><h2 id="details-title">Your groceries.<br />In clearer view.</h2><p>For homeowners who value their food, enjoy healthy eating, and want a dependable, easy-to-use fridge. Our initial market focus is the Eastern United States.</p></div>
          <div className="benefits">
            <article><span className="feature-number">01</span><h3>See what’s happening.</h3><p>The proposed display brings food temperature, freshness estimates, and practical reminders together so you can plan meals with more information.</p></article>
            <article><span className="feature-number">02</span><h3>Make preservation a priority.</h3><p>The product vision includes automatic temperature adjustment to support food preservation. Cooling performance and freshness estimates require development and testing.</p></article>
            <article><span className="feature-number">03</span><h3>Build confidence through reliability.</h3><p>Simple controls, independent testing, and clear warranty terms are priorities informed by the venture’s research into longevity, service, and usability.</p></article>
          </div>
        </section>
        <section className="ritual section" id="demo" aria-labelledby="demo-title">
          <div><p className="eyebrow">02 / TRY THE INTERACTIVE DISPLAY</p><h2 id="demo-title">A little less<br />guesswork<span className="green">.</span></h2><p className="muted">Select a food to explore the proposed screen. All readings are fictional examples, not live measurements or food-safety predictions.</p><div className="food-tabs" role="group" aria-label="Select a demo food">{foods.map((item,i)=><button key={item.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{item.name}</button>)}</div></div>
          <div className="food-display" aria-live="polite"><p className="eyebrow">SIMULATED FOOD STATUS</p><h3>{food.name}</h3><div className="food-readings"><div><small>Example temperature</small><strong>{food.temperature}</strong></div><div><small>Planning reminder</small><strong>{food.note}</strong></div></div><p>{food.detail}</p><button className="button" onClick={()=>setPlanned(items=>items.includes(selected)?items.filter(i=>i!==selected):[...items,selected])}>{planned.includes(selected)?'Remove from meal plan −':'Add to meal plan +'}</button><p className="plan-status" role="status">{planned.length?'Demo meal plan: '+planned.map(i=>foods[i].name).join(', '):'Select foods to create a demo meal plan.'} Selections reset when you reload.</p></div>
        </section>
        <section className="research section"><p className="eyebrow">03 / THE THINKING BEHIND FRESHKEEP</p><h2>Designed around everyday concerns.</h2><p className="muted">The venture workspace reports longevity and repair experiences as recurring concerns in a small sample of 30 Reddit observations. These findings inform our product priorities; they are not representative estimates of customer demand.</p><a className="text-link" href="https://usda-nutrient-charts-2026.rainy-toad-6210.chatgpt.site/#research">Explore the venture research ↗</a><p className="concept-note">FreshKeep is a student venture concept, not a product available for purchase. Freshness predictions, automatic cooling, and preservation performance have not been validated. This demo cannot determine whether food is safe to eat.</p></section>
        <section className="closing"><p className="eyebrow">YOUR FOOD. YOUR ROUTINE. YOUR FRESHKEEP.</p><h2>Make more of what’s inside.</h2><a className="button dark-button" href="#product-title">Explore FreshKeep <span>↑</span></a></section>
      </main>
      <footer><a className="footer-brand" href="#">freshkeep<span className="green">.</span></a><p>Anthony Didato · MKTG 1101 · Product concept</p><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
