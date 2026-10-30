import {SiteHeader} from './components/SiteHeader';
import pricing from './public-pricing.json';
const product = pricing.products[0];
const price = new Intl.NumberFormat('en-US', {style:'currency', currency:product.currency, maximumFractionDigits:0}).format(product.price);

export default function Pricing() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <SiteHeader pricing />
    <main id="main" className="pricing-page">
      <section className="pricing-intro section">
        <p className="eyebrow"><span className="status-dot" /> FRESHKEEP / PRODUCT & PRICING</p>
        <div className="pricing-heading"><h1>A clearer view.<br />One thoughtful fridge<span className="green">.</span></h1><p className="intro">{product.description}</p></div>
      </section>
      <section className="offer section" aria-labelledby="offer-title">
        <div className="offer-art">
          <div className="stage-top"><span>FRESHKEEP SMART FRIDGE</span><span>CONCEPT PREVIEW</span></div>
          <div className="fridge-art" role="img" aria-label="Concept illustration of the FreshKeep refrigerator; proposed design">
            <div className="fridge-door"><div className="fridge-screen"><small>FRESHKEEP / CONCEPT</small><strong>Food in focus.</strong><p>Temperature<br />Freshness reminders<br />Storage guidance</p><span>● PROPOSED DISPLAY</span></div><div className="fridge-food" aria-hidden="true">🥬 🍋 🥛</div></div>
            <div className="fridge-drawer">F R E S H K E E P</div>
          </div>
          <p className="art-caption">A full refrigerator concept.<br /><strong>Designed around the food inside.</strong></p>
        </div>
        <div className="offer-copy">
          <span className="concept-pill">Student venture concept</span>
          <h2 id="offer-title">{product.name}</h2>
          <p className="offer-price">{price}<span>{product.currency}</span></p>
          <p className="price-unit">{product.billingModel} · per {product.unit}</p>
          <div className="offer-divider" />
          <p className="eyebrow">THE PROPOSED EXPERIENCE</p>
          <ul className="offer-features">{product.features.map((feature,i)=><li key={feature}><span aria-hidden="true">0{i+1}</span>{feature}</li>)}</ul>
          <a className="button" href="./#demo">Try the concept display <span>↗</span></a>
          <p className="offer-note">{product.claimsStatus}. FreshKeep is not currently available for purchase.</p>
        </div>
      </section>
      <section className="pricing-details section" aria-labelledby="pricing-details-title">
        <div><p className="eyebrow">THE DETAILS, UP FRONT</p><h2 id="pricing-details-title">Know what<br />you’re exploring.</h2><p className="muted">A proposed product experience, with a clear price and room for development.</p><a className="text-link" href="./#details">Explore the product concept ↗</a></div>
        <div className="pricing-faq">
          <details open><summary>What does the price describe?</summary><p>{price} {product.currency} per {product.unit}, using a {product.billingModel.toLowerCase()} model. It is the selected price for this student venture concept.</p></details>
          <details><summary>Are there tiers or optional add-ons?</summary><p>One product is presented: {product.name}. Optional add-ons: {product.addons.toLowerCase()}.</p></details>
          <details><summary>Can I buy FreshKeep today?</summary><p>FreshKeep is a concept, not a product available for purchase. The proposed features and performance have not been validated. Explore the existing interactive display to see the concept in action.</p><a className="text-link" href="./#demo">Explore the display ↗</a></details>
          <details><summary>What can I explore in the demo?</summary><p>The existing display lets you select example foods and create a demo meal plan. Its readings are fictional examples, not live measurements or food-safety predictions.</p></details>
        </div>
      </section>
      <section className="closing"><p className="eyebrow">FROM THE PRICE TO THE EXPERIENCE</p><h2>See the idea in action.</h2><a className="button dark-button" href="./#demo">Explore the FreshKeep demo <span>↗</span></a></section>
    </main>
    <footer><a className="footer-brand" href="./">freshkeep<span className="green">.</span></a><p>Anthony Didato · MKTG 1101 · Product concept</p><a href="#main">Back to top ↑</a></footer>
  </>;
}
