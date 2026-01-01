import React, { useState, useEffect } from 'react';

const MasterNexusDashboard = () => {
  const [chatActive, setChatActive] = useState(false);
  const [crisisMode, setCrisisMode] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState("Sovereign Brain initializing... Syncing with global pillars.");
  const [pillarData, setPillarData] = useState({});

  const pillars = [
    { id: 'eco', name: 'Social/Eco Harmony', icon: '🌍', color: '#3b82f6', desc: 'Socio-Economic Fairness', port: 5173 },
    { id: 'kasi', name: 'Kasi-Logistics', icon: '📦', color: '#f59e0b', desc: 'Township-Global Bridge', port: 5174 },
    { id: 'cyber', name: 'CyberNexus', icon: '🛡️', color: '#ef4444', desc: 'Infrastructure Security', port: 5175 },
    { id: 'solar', name: 'SolarGrid', icon: '☀️', color: '#10b981', desc: 'Energy Sovereignty', port: 5176 },
    { id: 'agri', name: 'Agri-Nexus', icon: '🌽', color: '#84cc16', desc: 'Food Security Shield', port: 5177 },
    { id: 'health', name: 'HealthNexus', icon: '🏥', color: '#ec4899', desc: 'Predictive Wellness', port: 5178 },
    { id: 'aqua', name: 'AquaNexus', icon: '💧', color: '#38bdf8', desc: 'Water Sovereignty', port: 5179 }
  ];

  useEffect(() => {
    const fetchSystem = async () => {
      try {
        // Fetch AI Advisor Reasoning
        const advRes = await fetch('http://localhost:8007/api/advisor');
        const advData = await advRes.json();
        setAiAnalysis(advData.analysis);

        // Fetch System Status for Crisis detection and metrics
        const statusRes = await fetch('http://localhost:8007/api/system-status');
        const statusData = await statusRes.json();
        setPillarData(statusData);

        // Crisis Detection
        if (statusData.SolarGrid && statusData.SolarGrid.load_shedding_risk === "TOTAL COLLAPSE") {
          setCrisisMode(true);
          setChatActive(true);
        } else {
          setCrisisMode(false);
        }
      } catch (e) {
        console.error("Master Sync failed", e);
        setAiAnalysis("Nexus connection intermittent. Heuristic: Secure vital export corridors.");
      }
    };

    fetchSystem();
    const interval = setInterval(fetchSystem, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleDeployGuard = async () => {
    try {
      const res = await fetch('http://localhost:8007/api/deploy-master-guard', { method: 'POST' });
      const data = await res.json();
      setAiAnalysis(`[DEPLOYED] ${data.action}: ${data.message}`);
    } catch (e) {
      setAiAnalysis("Deployment sequence failed. Re-routing through local override...");
    }
  };

  return (
    <div className="master-nexus-container">
      <div className="master-scanline"></div>
      {crisisMode && <div className="crisis-overlay"></div>}

      {/* AI STRATEGIC ADVISOR */}
      <div className="ai-orb-container">
        <div className={`ai-chat-bubble ${chatActive ? 'active' : ''}`}>
          <div style={{ fontWeight: 800, color: 'var(--nexus-primary)', marginBottom: '8px' }}>SOVEREIGN BRAIN v5.0</div>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>{aiAnalysis}</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '8px' }}>
            <button 
              onClick={handleDeployGuard}
              style={{ padding: '6px 12px', fontSize: '0.7rem', background: 'var(--nexus-primary)', border: 'none', borderRadius: '4px', color: '#fff', cursor: 'pointer' }}
            >Deploy Guard</button>
            <button onClick={() => setChatActive(false)} style={{ padding: '6px 12px', fontSize: '0.7rem', background: 'transparent', border: '1px solid var(--border)', color: '#fff', cursor: 'pointer' }}>Dismiss</button>
          </div>
        </div>
        <div className="ai-orb" onClick={() => setChatActive(!chatActive)}>🧠</div>
      </div>

      <header className="header">
        <div className="title-glow">THE RAPHASHA27 NEXUS</div>
        <div className="global-integration-badge">Global Integration Mode Active • 2026</div>
      </header>

      <div className="pillar-grid">
        {pillars.map(p => (
          <div key={p.id} className="pillar-card" onClick={() => window.open(`http://localhost:${p.port}`, '_blank')}>
            <div className="status-indicator">
              <div className="dot" style={{ background: pillarData[p.id === 'eco' ? 'EcoArbitrage' : p.id === 'kasi' ? 'KasiLogistics' : p.id === 'cyber' ? 'CyberNexus' : p.id === 'solar' ? 'SolarGrid' : p.id === 'agri' ? 'AgriNexus' : p.id === 'health' ? 'HealthNexus' : 'AquaNexus'] === 'Offline' ? 'var(--nexus-danger)' : 'var(--nexus-accent)' }}></div>
              {pillarData[p.id === 'eco' ? 'EcoArbitrage' : p.id === 'kasi' ? 'KasiLogistics' : p.id === 'cyber' ? 'CyberNexus' : p.id === 'solar' ? 'SolarGrid' : p.id === 'agri' ? 'AgriNexus' : p.id === 'health' ? 'HealthNexus' : 'AquaNexus'] === 'Offline' ? 'OFFLINE' : 'OPERATIONAL'}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '1.5rem' }}>
              <div className="pillar-icon" style={{ background: p.color }}>{p.icon}</div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{p.name}</h3>
                <small style={{ color: '#94a3b8' }}>{p.desc}</small>
              </div>
            </div>

            <div className="vitals-list">
              {p.id === 'eco' && (
                <>
                  <div className="vital-item">Stability Score <span className="vital-value">94.8%</span></div>
                  <div className="vital-item">Global Sync <span className="vital-value">UNESCO-v4</span></div>
                </>
              )}
              {p.id === 'kasi' && (
                <>
                  <div className="vital-item">Trade Flux <span className="vital-value">$4.2B</span></div>
                  <div className="vital-item">Carrier Sync <span className="vital-value">G-Shield-42</span></div>
                </>
              )}
              {p.id === 'cyber' && (
                <>
                  <div className="vital-item">Threat Level <span className="vital-value">ALPHA-1</span></div>
                  <div className="vital-item">Neutralized <span className="vital-value">412</span></div>
                </>
              )}
              {p.id === 'solar' && (
                <>
                  <div className="vital-item">Gen Output <span className="vital-value">{pillarData.SolarGrid?.current_generation || "0.0 MW"}</span></div>
                  <div className="vital-item">Consensus <span className="vital-value">Active</span></div>
                </>
              )}
              {p.id === 'agri' && (
                <>
                  <div className="vital-item">Yield Boost <span className="vital-value">+38%</span></div>
                  <div className="vital-item">Export Audit <span className="vital-value">Verified</span></div>
                </>
              )}
              {p.id === 'health' && (
                <>
                  <div className="vital-item">Wellness Index <span className="vital-value">82%</span></div>
                  <div className="vital-item">WHO Sync <span className="vital-value">Active</span></div>
                </>
              )}
              {p.id === 'aqua' && (
                <>
                  <div className="vital-item">Dam Levels <span className="vital-value">74.2%</span></div>
                  <div className="vital-item">Pressure <span className="vital-value">Stable</span></div>
                </>
              )}
            </div>

            <button className="btn-hud" onClick={(e) => { e.stopPropagation(); window.open(`http://localhost:${p.port}`, '_blank'); }}>DRIVE CONTROL HUD</button>
          </div>
        ))}
      </div>

      <footer className="footer-nexus">
        <div>&copy; 2026 RAPHASHA27 AI COMMAND. ALL SYSTEMS AGENTIC / GLOBAL MODE ACTIVE.</div>
        <div style={{ marginTop: '10px', fontSize: '0.8rem', opacity: 0.5 }}>PEERING NODES: GAUTENG • LONDON • DUBAI • SINGAPORE</div>
      </footer>
    </div>
  );
};

export default MasterNexusDashboard;
