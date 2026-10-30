export function SiteHeader({pricing = false}: {pricing?: boolean}) {
  const home = pricing ? './' : '';
  return <header className="header">
    <a className="brand" href={pricing ? './' : '#'} aria-label="FreshKeep home"><span className="brand-icon">f<span>•</span></span> freshkeep</a>
    <nav aria-label="Main navigation">
      <a href={`${home}#details`}>The concept</a>
      <a href={`${home}#demo`}>Try the display</a>
      <a className="nav-cta" href="pricing.html" aria-current={pricing ? 'page' : undefined}>Pricing <span>↗</span></a>
    </nav>
  </header>;
}
