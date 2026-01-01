import React, { useState, useEffect } from 'react';

const KasiLogisticsApp = () => {
  const [hubs, setHubs] = useState([]);
  const [trades, setTrades] = useState([]);
  const [intellect, setIntellect] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initData = async () => {
      try {
        const hubRes = await fetch('http://localhost:8001/api/hubs');
        const hubData = await hubRes.json();
        setHubs(hubData);

        const tradeRes = await fetch('http://localhost:8001/api/global-bridge');
        const tradeData = await tradeRes.json();
        setTrades(tradeData);

        const intelRes = await fetch('http://localhost:8001/api/logistics-intelligence');
        const intelData = await intelRes.json();
        setIntellect(intelData.active_interventions);

        setLoading(false);
      } catch (e) {
        console.error("Fetch failed", e);
        // Fallback
        setHubs([{ id: "Soweto-1", merchants: 142, uptime: "99.9%", load: 65 }]);
        setTrades([{ id: "TR-901", product: "Agri-Nectar", origin: "Free State", destination: "Rotterdam, NL", stage: "In Transit", vessel: "Global Shield 42" }]);
        setIntellect([{ problem: "Road Gap", ai_solution: "Neural Mapping Active", purpose: "Global Export Bridge", target_metric: "0% Fail Rate" }]);
        setLoading(false);
      }
    };
    initData();
  }, []);

  return (
    <div className="kasi-app">
      <nav className="kasi-nav">
        <div className="kasi-brand">
          <div className="kasi-logo">K</div>
          <div className="kasi-title" style={{ fontSize: '1.5rem' }}>KASI-LOGISTICS <span style={{ color: 'var(--kasi-primary)' }}>2.0</span></div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <span>Hub Network</span>
          <span>Global Monitor</span>
          <span>Compliance</span>
          <button style={{ background: 'var(--kasi-primary)', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 800, cursor: 'pointer' }}>Connect Merchant</button>
        </div>
      </nav>

      <main className="kasi-hero fade-in">
        <div className="ai-badge-kasi">
          <div className="pulse-dot"></div>
          Global Integration Mode Active
        </div>
        <h1 className="kasi-title">Bridging Township Trade <br /> to the <span style={{ color: 'var(--kasi-primary)' }}>Global Market</span></h1>
        <p className="kasi-subtitle">
          Direct-to-Global export infrastructure. Our AI manages the entire supply chain 
          from the Kasi hub to international shipping ports, ensuring local entrepreneurs reach the world stage.
        </p>
      </main>

      <section className="kasi-grid">
        <div className="kasi-card">
          <h3 style={{ marginTop: 0 }}>Hub Performance</h3>
          {hubs.map(hub => (
            <div key={hub.id} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 700 }}>{hub.id}</span>
                <span style={{ color: 'var(--kasi-primary)' }}>{hub.uptime}</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                <div style={{ height: '100%', width: `${hub.load}%`, background: 'var(--kasi-primary)', borderRadius: '3px' }}></div>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '5px' }}>
                {hub.merchants} ACTIVE MERCHANTS • LOAD: {hub.load}%
              </div>
            </div>
          ))}
        </div>

        <div className="kasi-card">
          <h3 style={{ marginTop: 0 }}>AI Intelligence Engine</h3>
          {intellect.map((intel, idx) => (
            <div key={idx} style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.05)', borderRadius: '16px', marginBottom: '1rem' }}>
               <div className="ai-badge-kasi">OPTIMIZATION TASK</div>
               <div style={{ fontWeight: 700, marginBottom: '5px' }}>{intel.purpose}</div>
               <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                 <strong>Issue:</strong> {intel.problem}<br />
                 <strong>Agentic Fix:</strong> {intel.ai_solution}
               </div>
            </div>
          ))}
        </div>

        <div className="kasi-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
           <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
           <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>92.4%</div>
           <div style={{ color: 'var(--text-dim)' }}>Global Export Efficiency</div>
           <button className="btn-primary" style={{ marginTop: '1.5rem' }}>View Analytics</button>
        </div>
      </section>

      <section className="trade-section">
        <h3 style={{ fontFamily: 'Outfit', fontSize: '1.5rem', marginBottom: '1rem' }}>Global Trade Monitor</h3>
        <div className="card-glass" style={{ padding: '1rem' }}>
          <table className="trade-table-v2">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Product</th>
                <th>Dest. Port</th>
                <th>Transit Stage</th>
                <th>Global Carrier</th>
              </tr>
            </thead>
            <tbody>
              {trades.map(trade => (
                <tr key={trade.id} className="trade-row-v2">
                  <td style={{ fontWeight: 800 }}>{trade.id}</td>
                  <td>{trade.product}</td>
                  <td>{trade.destination}</td>
                  <td>
                    <span className={`status-tag ${trade.stage.includes('Transit') ? 'stage-transit' : 'stage-customs'}`}>
                      {trade.stage.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ color: 'var(--kasi-primary)', fontWeight: 600 }}>{trade.vessel || "Pending Alpha-Sync"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer style={{ padding: '2rem 4rem', borderTop: '1px solid var(--kasi-border)', marginTop: 'auto' }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>&copy; 2026 KASI-LOGISTICS 2.0. A RAPHASHA27 SOVEREIGN PILLAR. GLOBAL MODE v4.0.</p>
      </footer>
    </div>
  );
};

export default KasiLogisticsApp;
