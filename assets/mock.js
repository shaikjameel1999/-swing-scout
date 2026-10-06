/* ============================================
   SWING SCOUT — MOCK DATA (Phase 1 Demo)
   All values are simulated. Real data comes in Phase 2+.
   ============================================ */

const MOCK = {
  ticker: [
    { name: 'NIFTY 50', val: '25,250.50', chg: '+0.29%', up: true },
    { name: 'BANK NIFTY', val: '51,840.20', chg: '+0.28%', up: true },
    { name: 'INDIA VIX', val: '13.45', chg: '-2.32%', up: false },
    { name: 'GIFT NIFTY', val: '25,280.00', chg: '+0.18%', up: true },
    { name: 'BRENT', val: '$74.80', chg: '-0.53%', up: false },
    { name: 'USD/INR', val: '₹84.15', chg: '-0.02%', up: false },
    { name: 'US 10Y', val: '4.21%', chg: '+0.03%', up: true }
  ],

  regime: {
    label: 'NEUTRAL',
    confidence: 72,
    bullets: [
      'NIFTY 50 above 20 & 50-DMA, below 200-DMA slope',
      'India VIX at 13.45 (-2.32% DoD) — calm regime',
      'Breadth: 1,247 advances / 892 declines',
      'FII net: -₹1,240 Cr (3-session net -₹3,410 Cr)',
      'GIFT Nifty +0.18% — flat open expected'
    ]
  },

  agents: [
    { id: 1, name: 'Market Regime', verdict: 'NEUTRAL', confidence: 72, prov: 'live',
      bullets: ['NIFTY +0.29%, above 20-DMA', 'VIX 13.45, calm', 'Breadth positive'] },
    { id: 2, name: 'Screener', verdict: 'SUPPORTS', confidence: 81, prov: 'live',
      bullets: ['Pool: 47 unique names', '7 scans merged', 'Top-10 per scan'] },
    { id: 3, name: 'Technicals', verdict: 'SUPPORTS', confidence: 78, prov: 'delayed',
      bullets: ['DMA alignment bullish', 'RSI 58 (channel intact)', 'ATR 2.4% — normal'] },
    { id: 4, name: 'News & Catalyst', verdict: 'NEUTRAL', confidence: 65, prov: 'live',
      bullets: ['No earnings in window', 'No ex-dividend events', '1 board meeting day 6'] },
    { id: 5, name: 'Sentiment', verdict: 'NEUTRAL', confidence: 60, prov: 'reference',
      bullets: ['Google News RSS: +0.3 tone', 'Reddit mentions normal', 'No hype-pump signals'] },
    { id: 6, name: 'Smart Money', verdict: 'SUPPORTS', confidence: 74, prov: 'delayed',
      bullets: ['Delivery 52% (5-session avg 48%)', 'No bulk/block deals', 'FII mixed'] },
    { id: 7, name: 'Sector Rotation', verdict: 'SUPPORTS', confidence: 70, prov: 'delayed',
      bullets: ['Top-3: Energy, IT, Pharma', '1-week RS +3.1%', '1-month RS +2.4%'] },
    { id: 8, name: 'Derivatives (F&O)', verdict: 'NEUTRAL', confidence: 62, prov: 'live',
      bullets: ['PCR 1.08 — neutral', 'OI shift mild long buildup', 'F&O eligible ✓'] },
    { id: 9, name: 'Fundamentals', verdict: 'SUPPORTS', confidence: 70, prov: 'reference',
      bullets: ['Promoter pledge 0%', 'Debt/Equity 0.42', 'Last 2Q revenue up'] },
    { id: 10, name: 'Surveillance', verdict: 'SUPPORTS', confidence: 85, prov: 'live',
      bullets: ['Not on ASM/GSM', 'ATV ₹84 Cr (20-day)', 'Circuit band 20%'] },
    { id: 11, name: 'Risk Manager', verdict: 'SUPPORTS', confidence: 80, prov: 'live',
      bullets: ['Size 18 shares', 'Charges 8.2% of T1', 'Risk ₹148 / 0.99%'] },
    { id: 12, name: 'Critic', verdict: 'WARNS', confidence: 55, prov: 'live',
      bullets: ['Sector extended 4.2% in 3d', 'RSI nearing 60 zone', 'Counter-case MODERATE'] },
    { id: 13, name: 'Orchestrator', verdict: 'SUPPORTS', confidence: 76, prov: 'live',
      bullets: ['9 SUPPORTS, 3 NEUTRAL, 1 WARNS', 'No VETO', 'Consensus: 76/100'] }
  ],

  picks: [
    {
      symbol: 'RELIANCE', company: 'Reliance Industries', sector: 'Energy',
      setup: 'Pullback to 20-DMA', group: 'CORE', tier: 1, score: 84, confidence: 'HIGH',
      fresh: true, price: 1284.50, change: '+0.82%',
      entryZone: [1280, 1292], stop: 1248, t1: 1345, t2: 1385,
      rr: 2.4, qty: 18, capital: 23120, riskInr: 148, charges: 42,
      exitDeadline: '2026-10-13',
      why: ['20-DMA at 1276, price 0.7% above', 'Delivery 52% (avg 48%)', 'Sector RS +3.1% (1w)'],
      critic: 'Sector extended 4.2% in 3 days — counter-case MODERATE',
      invalidates: 'Daily close below 1248 or sector RS turning negative'
    },
    {
      symbol: 'TCS', company: 'Tata Consultancy Services', sector: 'IT',
      setup: 'Base breakout', group: 'CORE', tier: 1, score: 81, confidence: 'HIGH',
      fresh: true, price
