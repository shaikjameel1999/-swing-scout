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
  agents: [
    { id: 1, name: 'Market Regime', verdict: 'NEUTRAL', confidence: 72, prov: 'live', bullets: ['NIFTY +0.29%, above 20-DMA', 'VIX 13.45, calm', 'Breadth positive'] },
    { id: 2, name: 'Screener', verdict: 'SUPPORTS', confidence: 81, prov: 'live', bullets: ['Pool: 47 unique names', '7 scans merged', 'Top-10 per scan'] },
    { id: 3, name: 'Technicals', verdict: 'SUPPORTS', confidence: 78, prov: 'delayed', bullets: ['DMA alignment bullish', 'RSI 58', 'ATR 2.4%'] },
    { id: 4, name: 'News & Catalyst', verdict: 'NEUTRAL', confidence: 65, prov: 'live', bullets: ['No earnings in window', 'No ex-div', '1 board mtg day 6'] },
    { id: 5, name: 'Sentiment', verdict: 'NEUTRAL', confidence: 60, prov: 'reference', bullets: ['News tone +0.3', 'Reddit normal', 'No hype'] },
    { id: 6, name: 'Smart Money', verdict: 'SUPPORTS', confidence: 74, prov: 'delayed', bullets: ['Delivery 52%', 'No bulk/block', 'FII mixed'] },
    { id: 7, name: 'Sector Rotation', verdict: 'SUPPORTS', confidence: 70, prov: 'delayed', bullets: ['Top-3: Energy, IT, Pharma', '1w RS +3.1%', '1m RS +2.4%'] },
    { id: 8, name: 'Derivatives (F&O)', verdict: 'NEUTRAL', confidence: 62, prov: 'live', bullets: ['PCR 1.08', 'Mild long buildup', 'F&O eligible'] },
    { id: 9, name: 'Fundamentals', verdict: 'SUPPORTS', confidence: 70, prov: 'reference', bullets: ['Pledge 0%', 'D/E 0.42', '2Q revenue up'] },
    { id: 10, name: 'Surveillance', verdict: 'SUPPORTS', confidence: 85, prov: 'live', bullets: ['Not ASM/GSM', 'ATV ₹84 Cr', 'Circuit 20%'] },
    { id: 11, name: 'Risk Manager', verdict: 'SUPPORTS', confidence: 80, prov: 'live', bullets: ['Size 18', 'Charges 8.2% T1', 'Risk ₹148'] },
    { id: 12, name: 'Critic', verdict: 'WARNS', confidence: 55, prov: 'live', bullets: ['Sector extended', 'RSI nearing 60', 'Counter MODERATE'] },
    { id: 13, name: 'Orchestrator', verdict: 'SUPPORTS', confidence: 76, prov: 'live', bullets: ['9 SUPPORTS', 'No VETO', 'Consensus 76'] }
  ],
  picks: [
    { symbol: 'RELIANCE', company: 'Reliance Industries', sector: 'Energy', setup: 'Pullback to 20-DMA', group: 'CORE', score: 84, confidence: 'HIGH', fresh: true, price: 1284.50, change: '+0.82%', entryZone: [1280, 1292], stop: 1248, t1: 1345, t2: 1385, rr: 2.4, qty: 18, capital: 23120, riskInr: 148, charges: 42, exitDeadline: '2026-10-13', why: ['20-DMA 1276', 'Delivery 52%', 'RS +3.1%'], critic: 'Sector extended 4.2% in 3d — MODERATE', invalidates: 'Close below 1248' },
    { symbol: 'TCS', company: 'Tata Consultancy', sector: 'IT', setup: 'Base breakout', group: 'CORE', score: 81, confidence: 'HIGH', fresh: true, price: 3925.40, change: '+1.12%', entryZone: [3910, 3948], stop: 3810, t1: 4120, t2: 4230, rr: 2.1, qty: 5, capital: 19627, riskInr: 148, charges: 38, exitDeadline: '2026-10-13', why: ['Base breakout', 'RSI 62', 'IT RS +2.4%'], critic: 'Nasdaq risk — WEAK', invalidates: 'Close below 3810' },
    { symbol: 'CIPLA', company: 'Cipla Ltd', sector: 'Pharma', setup: 'Reversal at support', group: 'SECONDARY', score: 73, confidence: 'MODERATE', fresh: false, price: 1568.20, change: '+0.45%', entryZone: [1560, 1575], stop: 1508, t1: 1650, t2: 1690, rr: 1.7, qty: 12, capital: 18818, riskInr: 148, charges: 35, exitDeadline: '2026-10-13', why: ['Reversal at 50-DMA', 'Delivery 49%', 'Pharma RS +1.8%'], critic: 'Repeat pick — MODERATE', invalidates: 'Close below 1508', relaxed: 'R:R 1.7:1 (below 2:1)' },
    { symbol: 'TATAPOWER', company: 'Tata Power', sector: 'Utilities', setup: 'Breakout', group: 'SECONDARY', score: 71, confidence: 'MODERATE', fresh: true, price: 412.80, change: '+1.85%', entryZone: [410, 416], stop: 393, t1: 440, t2: 452, rr: 1.8, qty: 45, capital: 18576, riskInr: 148, charges: 30, exitDeadline: '2026-10-13', why: ['Volume 2.1x', 'RSI 64', 'Utilities RS +2.2%'], critic: 'Outside top-3 sectors', invalidates: 'Close below 393', relaxed: 'Sector outside top-3' },
    { symbol: 'KPITTECH', company: 'KPIT Tech', sector: 'IT', setup: 'Pullback to 20-DMA', group: 'EXPLORER', score: 68, confidence: 'MODERATE', fresh: true, price: 1452.60, change: '+0.32%', entryZone: [1445, 1462], stop: 1395, t1: 1540, t2: 1585, rr: 1.6, qty: 13, capital: 18884, riskInr: 148, charges: 32, exitDeadline: '2026-10-13', why: ['Explorer mid-cap', 'Delivery 51%', 'IT leadership'], critic: 'Small-cap volatility', invalidates: 'Close below 1395', relaxed: 'Explorer outside top-liquidity' }
  ],
  faq: [
    { q: 'Is Swing Scout financial advice?', a: 'No. It is a research and intelligence tool. All outputs are for educational purposes only.' },
    { q: 'What is the trading horizon?', a: 'Strictly 3–4 trading days on cash-market NSE equities.' },
    { q: 'What is the minimum capital?', a: 'Calibrated for ₹15,000 baseline with 1% max risk per trade.' },
    { q: 'How are charges handled?', a: 'Setups where charges exceed 15% of T1 profit are auto-disqualified.' },
    { q: 'What happens on drawdown?', a: '5% weekly → 3-day freeze. 10% peak → Paper Trading mode.' },
    { q: 'Is this real data?', a: 'Not yet. Phase 1 is a static UI demo. Real NSE data arrives in Phase 2.' }
  ]
};
