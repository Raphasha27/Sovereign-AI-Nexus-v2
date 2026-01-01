import React, { useState, useEffect } from 'react';

const SolarGridApp = () => {
  const [metrics, setMetrics] = useState({ current_generation: "45.8 MW", community_usage: "21.2 MW", excess_distributed: "24.6 MW", revenue_generated: "R 156,000", load_shedding_risk: "Minimal" });
  const [trades, setTrades] = useState([]);
  const [intellect, setIntellect] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metricsRes = await fetch('http://localhost:8003/api/grid-metrics');
        const metricsData = await metricsRes.json();
        setMetrics(metricsData);

        const tradesRes = await fetch('http://localhost:8003/api/energy-trades');
        const tradesData = await tradesRes.json();
        setTrades(tradesData);

        const intelRes = await fetch('http://localhost:8003/api/grid-intelligence');
        const intelData = await intelRes.json();
        setIntellect(intelData.grid_solutions);
      } catch (e) {
        console.error("Fetch failed", e);
        setTrades([{ id: "SOL-1", target: "Hospital Cluster", amount: "1.2 MW", time: "Just now" }]);
        setIntellect([{ crisis: "Grid Instability", ai_solution: "Microgrid Isolation", purpose: "Sovereign Stability", success_probability: "98%" }]);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-nexus">
      <nav className="grid-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--emerald)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#000' }}>S</div>
          <div style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 700 }}>SOLARGRID <span style={{color: 'var(--emerald)'}}>SENTINEL</span></div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <span>Energy Flows</span>
          <span>Carbon Credits</span>
          <span>Consensus Grid</span>
          <button className="btn-stabilize-v2">OPTIMIZE NEXUS</button>
        </div>
      </nav>

      <div className="grid-hero fade-in">
         <h1 style={{ fontFamily: 'Outfit', fontSize: '3.5rem', fontWeight: 800, margin: 0 }}>Sovereign Energy Consensus</h1>
         <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '1rem auto' }}>
           Decentralized power orchestration for the Republic. Our AI manages community-owned 
           solar clusters, ensuring zero blackouts and global carbon compliance.
         </p>
      </div>

      <div className="hero-stats-row">
         <div className="glass-pill">
            <small style={{ letterSpacing: '1px', color: '#94a3b8' }}>GENERATION</small>
            <div style={{ fontSize: '2rem', fontWeight: 800 }}>{metrics.current_generation}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--emerald)' }}>85% SOLAR • 15% BATTERY</div>
         </div>
         <div className="glass-pill">
            <small style={{ letterSpacing: '1px', color: '#94a3b8' }}>COMMUNITY DEMAND</small>
            <div style={{ fontSize: '2rem', fontWeight: 800 }}>{metrics.community_usage}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--sky)' }}>PEAK OPTIMIZED</div>
         </div>
         <div className="glass-pill">
            <small style={{ letterSpacing: '1px', color: '#94a3b8' }}>REVENUE (ZAR)</small>
            <div style={{ fontSize: '2rem', fontWeight: 800 }}>{metrics.revenue_generated}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--amber)' }}>ARBITRAGE ACTIVE</div>
         </div>
         <div className="glass-pill">
            <small style={{ letterSpacing: '1px', color: '#94a3b8' }}>RISK LEVEL</small>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--emerald)' }}>{metrics.load_shedding_risk.toUpperCase()}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>SHIELDED FROM MAIN GRID</div>
         </div>
      </div>

      <div style={{ padding: '3rem 0' }}>
        <div className="energy-viz-row">
           <div className="energy-card">
              <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Grid Stability Intelligence</h3>
              {intellect.map((item, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '20px', borderLeft: '4px solid var(--emerald)', marginBottom: '1.5rem' }}>
                   <div style={{ color: 'var(--emerald)', fontWeight: 800, fontSize: '0.75rem', marginBottom: '0.5rem' }}>AGENTIC SOLUTION: {item.purpose}</div>
                   <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '5px' }}>{item.crisis}</div>
                   <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>{item.ai_solution}</p>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--sky)' }}>GLOBAL CARBON COMPLIANCE: 100%</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>SUCCESS: {item.success_probability}</span>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="energy-card">
              <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Energy Flow Vitals</h3>
              <div style={{ marginBottom: '2rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                    <span>Cluster Capacity</span>
                    <span>85%</span>
                 </div>
                 <div className="energy-flow-bar">
                    <div className="energy-fill" style={{ width: '85%' }}></div>
                 </div>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                    <span>Battery Reserves</span>
                    <span>72%</span>
                 </div>
                 <div className="energy-flow-bar">
                    <div className="energy-fill" style={{ width: '72%', background: 'var(--amber)' }}></div>
                 </div>
              </div>
              <button className="btn-stabilize-v2" style={{ width: '100%' }}>Initiate Load-Balancing</button>
           </div>
        </div>

        <div className="energy-card">
           <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Agentic Trade Ledger (Global Mode)</h3>
           <div className="trade-ledger-modern">
              {trades.map((trade, i) => (
                <div key={i} className="trade-item-v3">
                   <div>
                      <div style={{ fontWeight: 700 }}>{trade.target}</div>
                      <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>Via {trade.source || 'Main Cluster'}</div>
                   </div>
                   <div style={{ textAlign: 'right' }}>
                      <div style={{ color: 'var(--emerald)', fontWeight: 800 }}>+{trade.amount}</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{trade.time}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <footer style={{ padding: '2rem 0', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
         &copy; 2026 SOLARGRID SENTINEL. GLOBAL ENERGY ACCORD v5.1. RAPHASHA27 SOVEREIGN ASSET.
      </footer>
    </div>
  );
};

export default SolarGridApp;
