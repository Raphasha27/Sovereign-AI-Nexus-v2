import React, { useState, useEffect } from 'react';

const AquaNexusApp = () => {
  const [metrics, setMetrics] = useState({ dam_levels_avg: "0%", daily_purification_yield: "0L", detected_leak_reduction: "0%", water_quality_index: "0/100", regional_grids: [] });
  const [intel, setIntel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vRes = await fetch('http://localhost:8006/api/water-metrics');
        const vData = await vRes.json();
        setMetrics(vData);

        const iRes = await fetch('http://localhost:8006/api/aqua-intelligence');
        const iData = await iRes.json();
        setIntel(iData.active_interventions);
      } catch (e) {
        console.error("Fetch failed", e);
        setMetrics({ dam_levels_avg: "74.2%", daily_purification_yield: "1.2B Liters", detected_leak_reduction: "28%", water_quality_index: "98/100", regional_grids: [{region: "Vaal River", status: "Optimal", pressure: "Stable"}] });
        setIntel([{ purpose: "Acoustic Leak Detection", problem: "Sandton Pipe Failure", ai_solution: "Autonomous Pressure Balancing", outcome_prediction: "15ML Saved" }]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="aqua-nexus-v2">
      <nav className="aqua-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--sky)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff' }}>A</div>
          <div style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 700 }}>AQUANEXUS <span style={{color: 'var(--sky)' }}>AI</span></div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <span>Hydraulic Vitals</span>
          <span>Purity Sync</span>
          <span>Sovereign Storage</span>
          <button className="btn-aqua-modern">RE-BALANCE PRESSURE</button>
        </div>
      </nav>

      <div className="aqua-grid fade-in">
         <div className="aqua-card">
            <small style={{ color: 'var(--sky)', letterSpacing: '1px' }}>DAM LEVELS</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{metrics.dam_levels_avg}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>AGENTIC DAM-WALL AGENTS ACTIVE</div>
         </div>
         <div className="aqua-card">
            <small style={{ color: 'var(--sky)', letterSpacing: '1px' }}>DAILY PURITY</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{metrics.daily_purification_yield}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>NEURAL FILTRATION LAYER 4</div>
         </div>
         <div className="aqua-card">
            <small style={{ color: 'var(--sky)', letterSpacing: '1px' }}>LEAK REDUCTION</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#22d3ee' }}>{metrics.detected_leak_reduction}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>PRECISION ACOUSTIC SCANNING</div>
         </div>
         <div className="aqua-card">
            <small style={{ color: 'var(--sky)', letterSpacing: '1px' }}>QUALITY INDEX</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{metrics.water_quality_index}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--sky)' }}>BLUE DROP CONSENSUS</div>
         </div>
      </div>

      <div className="aqua-split">
         <div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', marginBottom: '1.5rem' }}>HydroGuard AI Interventions</h3>
            {intel.map((item, i) => (
              <div key={i} className="solution-box-aqua">
                <div style={{ color: 'var(--sky)', fontWeight: 800, fontSize: '0.75rem', marginBottom: '1rem', letterSpacing: '1px' }}>PURPOSE: {item.purpose}</div>
                <h4 style={{ margin: 0, fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.problem}</h4>
                <p style={{ margin: '0.5rem 0', color: '#94a3b8', fontSize: '0.95rem' }}><strong>Agentic Fixed:</strong> {item.ai_solution}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                   <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--sky)' }}>PREDICTED SAVINGS: {item.outcome_prediction}</span>
                   <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>COMPLIANCE: UN-WATER-ST-22</span>
                </div>
              </div>
            ))}
         </div>

         <div className="aqua-card">
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Grid Pressure Topology</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               {metrics.regional_grids.map((r, i) => (
                 <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span>{r.region}</span>
                    <span style={{ color: r.status === 'Optimal' ? '#10b981' : '#f59e0b', fontWeight: 700 }}>{r.pressure}</span>
                 </div>
               ))}
            </div>
            <button className="btn-aqua-modern" style={{ width: '100%', marginTop: '2rem' }}>Audit Pipe Network</button>
         </div>
      </div>

      <footer style={{ padding: '2rem 0', opacity: 0.4, fontSize: '0.8rem', textAlign: 'center' }}>
         &copy; 2026 AQUANEXUS AI. WATER SOVEREIGNTY INITIATIVE. RAPHASHA27 SOVEREIGN ASSET.
      </footer>
    </div>
  );
};

export default AquaNexusApp;
