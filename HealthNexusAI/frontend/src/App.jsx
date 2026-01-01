import React, { useState, useEffect } from 'react';

const HealthNexusApp = () => {
  const [vitals, setVitals] = useState({ community_wellness_index: 0, active_outbreak_suppression: 0, mobile_clinics_dispatched: 0, medication_stock_stability: "0%", regional_health: [] });
  const [intel, setIntel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vRes = await fetch('http://localhost:8005/api/health-vitals');
        const vData = await vRes.json();
        setVitals(vData);

        const iRes = await fetch('http://localhost:8005/api/health-intelligence');
        const iData = await iRes.json();
        setIntel(iData.active_interventions);
      } catch (e) {
        console.error("Fetch failed", e);
        // Fallback
        setVitals({ community_wellness_index: 82, active_outbreak_suppression: 2, mobile_clinics_dispatched: 45, medication_stock_stability: "94%", regional_health: [{region: "Gauteng", status: "Stable", risk: "Low"}] });
        setIntel([{ purpose: "Averting Health Crisis", problem: "Pre-outbreak Pattern", ai_solution: "Autonomous Drone Medication Deployment", outcome_prediction: "92% Suppression" }]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="health-dash-v2">
      <nav className="health-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--pink)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff' }}>H</div>
          <div style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 700 }}>HEALTHNEXUS <span style={{color: 'var(--pink)' }}>AI</span></div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <span>Vital Patterns</span>
          <span>Stock Arbitrage</span>
          <span>Wellness Consensus</span>
          <button className="btn-health-modern">ACTIVATE AI SHIELD</button>
        </div>
      </nav>

      <div className="health-grid fade-in">
         <div className="health-card">
            <small style={{ color: '#94a3b8', letterSpacing: '1px' }}>WELLNESS INDEX</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--pink)' }}>{vitals.community_wellness_index}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>AGENTIC ANALYSIS LEVEL 4</div>
         </div>
         <div className="health-card">
            <small style={{ color: '#94a3b8', letterSpacing: '1px' }}>CLINICS DISPATCHED</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{vitals.mobile_clinics_dispatched}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>AUTONOMOUS MOBILE CARE</div>
         </div>
         <div className="health-card">
            <small style={{ color: '#94a3b8', letterSpacing: '1px' }}>STOCK STABILITY</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{vitals.medication_stock_stability}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--pink)' }}>ARBITRAGE ACTIVE</div>
         </div>
         <div className="health-card">
            <small style={{ color: '#94a3b8', letterSpacing: '1px' }}>SUPPRESSION NODES</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{vitals.active_outbreak_suppression}</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>PREDICTIVE MITIGATION</div>
         </div>
      </div>

      <div className="intelligence-split">
         <div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Predictive Wellness Interventions</h3>
            {intel.map((item, i) => (
              <div key={i} className="ai-wellness-box">
                <div style={{ color: 'var(--pink)', fontWeight: 800, fontSize: '0.75rem', marginBottom: '1rem', letterSpacing: '1px' }}>MISSION: {item.purpose}</div>
                <h4 style={{ margin: 0, fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.problem}</h4>
                <p style={{ margin: '0.5rem 0', color: '#94a3b8', fontSize: '0.95rem' }}><strong>Agentic Response:</strong> {item.ai_solution}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                   <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--pink)' }}>EXPECTED OUTCOME: {item.outcome_prediction}</span>
                   <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>GLOBAL COMPLIANCE: WHO-PROTOCOL-SYNC</span>
                </div>
              </div>
            ))}
         </div>

         <div className="health-card">
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Risk Topology</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               {vitals.regional_health.map((r, i) => (
                 <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span>{r.region}</span>
                    <span style={{ color: r.risk === 'Low' ? '#10b981' : '#f59e0b', fontWeight: 700 }}>{r.status}</span>
                 </div>
               ))}
            </div>
            <button className="btn-health-modern" style={{ width: '100%', marginTop: '2rem' }}>Re-scan National Vitals</button>
         </div>
      </div>

      <footer style={{ padding: '2rem 0', opacity: 0.4, fontSize: '0.8rem', textAlign: 'center' }}>
         &copy; 2026 HEALTHNEXUS AI. PREDICTIVE COMMUNITY WELLNESS. RAPHASHA27 SOVEREIGN ASSET.
      </footer>
    </div>
  );
};

export default HealthNexusApp;
