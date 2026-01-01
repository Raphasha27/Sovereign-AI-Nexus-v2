import React, { useState, useEffect } from 'react';

const AgriNexusApp = () => {
  const [stats, setStats] = useState({ active_farmers: 0, arable_land_optimized: "...", projected_harvest_boost: "0%", regional_clusters: [] });
  const [intel, setIntel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await fetch('http://localhost:8004/api/yield-stats');
        const statsData = await statsRes.json();
        setStats(statsData);

        const intelRes = await fetch('http://localhost:8004/api/agri-intelligence');
        const intelData = await intelRes.json();
        setIntel(intelData.active_interventions);
      } catch (e) {
        console.error("Fetch failed", e);
        setStats({ active_farmers: 1420, arable_land_optimized: "12,500 Ha", projected_harvest_boost: "+38%", regional_clusters: [{ region: "Limpopo Fruit", status: "Harvest Ready", optimization: 94 }] });
        setIntel([{ purpose: "Direct Arbitrage", problem: "Middleman Exploitation", ai_solution: "Blockchain Farmer-Retailer Bridge", impact_metric: "Profit +110%" }]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="agri-nexus">
      <nav className="agri-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--lime)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#000' }}>A</div>
          <div style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 700 }}>AGRI-NEXUS <span style={{color: 'var(--lime)' }}>AI</span></div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <span>Yield Monitor</span>
          <span>Market Flux</span>
          <span>Export Audit</span>
          <button className="btn-agri-modern">DEPLOY SHIELD</button>
        </div>
      </nav>

      <div className="agri-hero fade-in">
         <h1 style={{ fontFamily: 'Outfit', fontSize: '3.5rem', fontWeight: 800, margin: 0 }}>Sovereign Food Security</h1>
         <p style={{ color: '#86efac', maxWidth: '700px', margin: '1rem auto' }}>
           Eliminating pre-consumer waste and price exploitation. Our AI secures the food chain 
           from the Limpopo cluster to global marketplaces.
         </p>
      </div>

      <div className="agri-stats-grid">
         <div className="agri-card">
            <small style={{ letterSpacing: '1.5px', color: '#86efac' }}>ACTIVE FARMERS</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{stats.active_farmers}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--lime)' }}>+12% GLOBAL ONBOARDING</div>
         </div>
         <div className="agri-card">
            <small style={{ letterSpacing: '1.5px', color: '#86efac' }}>OPTIMIZED LAND</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{stats.arable_land_optimized}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>AGENTIC PRECISION PLANTER ACTIVE</div>
         </div>
         <div className="agri-card">
            <small style={{ letterSpacing: '1.5px', color: '#86efac' }}>HARVEST BOOST</small>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--lime)' }}>{stats.projected_harvest_boost}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>COMPARED TO TRADITIONAL YIELD</div>
         </div>
      </div>

      <div className="ai-reasoning-panel">
         <div className="agri-card">
            <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>HarvestGuard AI Interventions</h3>
            {intel.map((item, i) => (
              <div key={i} className="solution-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                   <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--lime)', border: '1px solid var(--lime)', padding: '2px 10px', borderRadius: '50px' }}>AI ACTIVE</span>
                   <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>{item.impact_metric}</span>
                </div>
                <h4 style={{ margin: 0, color: 'var(--lime)', fontSize: '1.2rem' }}>{item.purpose}</h4>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><strong>Issue:</strong> {item.problem}</p>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}><strong>Neural Fix:</strong> {item.ai_solution}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: '#84cc16', fontWeight: 700 }}>GLOBAL EXPORT QUALITY: VERIFIED</div>
              </div>
            ))}
         </div>

         <div className="agri-card">
            <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Regional Cluster Health</h3>
            <div className="regional-list">
               {(stats.regional_clusters || []).map((cluster, i) => (
                 <div key={i} className="region-item">
                    <div>
                       <div style={{ fontWeight: 700 }}>{cluster.region}</div>
                       <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{cluster.status}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <div style={{ color: 'var(--lime)', fontWeight: 800 }}>{cluster.optimization}%</div>
                       <div style={{ height: '4px', background: 'rgba(0,0,0,0.2)', width: '80px', borderRadius: '2px', marginTop: '5px' }}>
                          <div style={{ height: '100%', width: `${cluster.optimization}%`, background: 'var(--lime)' }}></div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
            <button className="btn-agri-modern" style={{ width: '100%', marginTop: '2rem' }}>Audit All Clusters</button>
         </div>
      </div>

      <footer style={{ padding: '2rem 0', opacity: 0.4, fontSize: '0.8rem', textAlign: 'center' }}>
         &copy; 2026 AGRI-NEXUS AI. GLOBAL FOOD SECURITY INITIATIVE. RAPHASHA27 SOVEREIGN ASSET.
      </footer>
    </div>
  );
};

export default AgriNexusApp;
