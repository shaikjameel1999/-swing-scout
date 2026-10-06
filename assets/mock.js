/* ============================================
   SWING SCOUT — MOCK DATA (Phase 1 Demo)
   All values are simulated for UI demonstration.
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
      bullets: ['PCR 1.08 — neutral', 'OI shift mild long buildup', 'F&O eligible'] },
    { id: 9, name: 'Fundamentals', verdict: 'SUPPORTS', confidence: 70, prov: 'reference',
      bullets: ['Promoter pledge 0%', 'Debt/Equity 0.42', 'Last 2Q revenue up'] },
    { id: 10, name: 'Surveillance', verdict: 'SUPPORTS', confidence: 85, prov: 'live',
      bullets: ['Not on ASM/GSM', 'ATV ₹84 Cr (20-day)', 'Circuit band 20%'] },
    { id: 11, name: 'Risk Manager', verdict: 'SUPPORTS', confidence: 80, prov: 'live',
      bullets: ['Size 18 shares', 'Charges 8.2% of T1', 'Risk ₹148 / 0.99%'] },
    { id: 12, name: 'Critic', verdict: 'WARNS', confidence tech: 55, prov: 'live',
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
      fresh: true, price: 3925.40, change: '+1.12%',
      entryZone: [3910, 3948], stop: 3810, t1: 4120, t2: 4230,
      rr: 2.1, qty: 5, capital: 19627, riskInr: 148, charges: 38,
      exitDeadline: '2026-10-13',
      why: ['Breakout above 6-week base', 'RSI 62 — momentum intact', 'IT sector RS +2.4% (1w)'],
      critic: 'Global selloff risk if Nasdaq corrects — counter-case WEAK',
      invalidates: 'Close below 3810 or IT index rolling over'
    },
    {
      symbol: 'CIPLA', company: 'Cipla Ltd', sector: 'Pharma',
      setup: 'Reversal at support', group: 'SECONDARY', tier: 2, score: 73, confidence: 'MODERATE',
      fresh: false, price: 1568.20, change: '+0.45%',
      entryZone: [1560, 1575], stop: 1508, t1: 1650, t2: 1690,
      rr: 1.7, qty: 12, capital: 18818, riskInr: 148, charges: 35,
      exitDeadline: '2026-10-13',
      why: ['Reversal candle at 50-DMA support', 'Delivery 49% (avg 45%)', 'Pharma RS +1.8% (1m)'],
      critic: 'Repeat pick within 5 days — counter-case MODERATE',
      invalidates: 'Close below 1508 or pharma RS flipping negative',
      relaxed: 'Reward:Risk 1.7:1 (below 2:1 Core threshold)'
    },
    {
      symbol: 'TATAPOWER', company: 'Tata Power Co', sector: 'Utilities',
      setup: 'Breakout', group: 'SECONDARY', tier: 2, score: 71, confidence: 'MODERATE',
      fresh: true, price: 412.80, change: '+1.85%',
      entryZone: [410, 416], stop: 393, t1: 440, t2: 452,
      rr: 1.8, qty: 45, capital: 18576, riskInr: 148, charges: 30,
      exitDeadline: '2026-10-13',
      why: ['Volume breakout 2.1x avg', 'RSI 64', 'Utilities RS +2.2% (1w)'],
      critic: 'Utilities outside top-3 sectors — counter-case MODERATE',
      invalidates: 'Close below 393 or index rolling over',
      relaxed: 'Sector outside top-3'
    },
    {
      symbol: 'KPITTECH', company: 'KPIT Technologies', sector: 'IT',
      setup: 'Pullback to 20-DMA', group: 'EXPLORER', tier: 2, score: 68, confidence: 'MODERATE',
      fresh: true, price: 1452.60, change: '+0.32%',
      entryZone: [1445, 1462], stop: 1395, t1: 1540, t2: 1585,
      rr: 1.6, qty: 13, capital: 18884, riskInr: 148, charges: 32,
      exitDeadline: '2026-10-13',
      why: ['Explorer: mid-cap outside top-liquidity group', 'Delivery 51%', 'IT leadership'],
      critic: 'Small-cap volatility risk — counter-case MODERATE',
      invalidates: 'Close below 1395 or small-cap index breaking down',
      relaxed: 'Explorer pick — outside usual top-liquidity group'
    }
  ],

  rejected: [
    { symbol: 'ADANIENT', reason: 'On ASM list — hard rule' },
    { symbol: 'YESBANK', reason: 'ATV below ₹10 Cr — liquidity fail' },
    { symbol: 'IRCTC', reason: 'Earnings within window + 2 days' },
    { symbol: 'ZOMATO', reason: 'Extended 2.1 ATR above 20-DMA' },
    { symbol: 'PAYTM', reason: 'Reward:Risk below 1.5:1' },
    { symbol: 'IDEA', reason: 'Circuit-locked — no entry possible' }
  ],

  faq: [
    { q: 'Is Swing Scout financial advice?', a: 'No. It is a research and intelligence tool. All outputs are for educational and analytical purposes only. You are responsible for your own trades.' },
    { q: 'What is the trading horizon?', a: 'Strictly 3–4 trading days on cash-market NSE equities. A hard Day-4 time stop closes any remaining position.' },
    { q: 'What is the minimum capital?', a: 'The engine is calibrated for ₹15,000 baseline accounts, with 1% max risk per trade (₹150).' },
    { q: 'How are charges handled?', a: 'Any setup where statutory charges exceed 15% of Target 1 profit is automatically disqualified.' },
    { q: 'What happens on a drawdown?', a: 'A 5% weekly drawdown triggers a 3-day freeze. A 10% peak drawdown locks the desk into Paper Trading mode.' },
    { q: 'Do you use derivatives?', a: 'No. Cash-market equities only. F&O data is used solely as a sentiment/OI signal input.' },
    { q: 'Is this demo using real data?', a: 'Not yet. Phase 1 is a static UI demo — all numbers are simulated. Real NSE data layers arrive in Phase 2 with a backend.' }
  ]
};
