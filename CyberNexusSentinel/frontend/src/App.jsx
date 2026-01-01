import React, { useState, useEffect } from 'react';

const CyberNexusApp = () => {
  const [status, setStatus] = useState({ firewall_active: true, threat_level: "Alpha-1", ai_scan_count: 54102, blocked_attacks_24h: 412 });
  const [nodes, setNodes] = useState([]);
  const [logs, setLogs] = useState([]);
  const [defense, setDefense] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statusRes = await fetch('http://localhost:8002/api/security-status');
        const statusData = await statusRes.json();
        setStatus(statusData);
        setNodes(statusData.nodes);

        const logRes = await fetch('http://localhost:8002/api/threat-logs');
        const logData = await logRes.json();
        setLogs(logData);

        const defRes = await fetch('http://localhost:8002/api/adaptive-defense');
        const defData = await defRes.json();
        setDefense(defData.active_countermeasures);
      } catch (e) {
        console.error("Fetch failed", e);
        setNodes([{ id: "Node-ZA-1", load: 34, status: "Secure" }]);
        setLogs([{ id: "ID-01", type: "Intrusion", status: "Neutralized", time: "Now" }]);
        setDefense([{ purpose: "Global Threat Shield", detection: "Pattern X", countermeasure: "Quantum Block", risk_mitigation: "Critical" }]);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cyber-nexus">
      <div className="scanline"></div>
      
      <nav className="cyber-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--neon-blue)' }}>CYBERNEXUS <span style={{color: '#fff'}}>SENTINEL</span></div>
          <div style={{ padding: '4px 12px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--neon-blue)', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800 }}>GLOBAL MODE ACTIVE</div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--neon-blue)' }}>Traffic Analysis</span>
          <span>Threat Intel</span>
          <span>Encryption Matrix</span>
          <button style={{ background: 'var(--neon-red)', border: 'none', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>EMERGENCY PURGE</button>
        </div>
      </nav>

      <div className="cyber-stats">
        <div className="cyber-card">
          <small style={{ color: 'var(--text-dim)', letterSpacing: '1px' }}>THREAT LEVEL</small>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: status.threat_level === 'Alpha-1' ? 'var(--neon-blue)' : 'var(--neon-red)' }}>{status.threat_level}</div>
          <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>AGENTIC DEFENSE NOMINAL</div>
        </div>
        <div className="cyber-card">
          <small style={{ color: 'var(--text-dim)', letterSpacing: '1px' }}>SCANS COMPLETE</small>
          <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{status.ai_scan_count.toLocaleString()}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--neon-blue)' }}>+14.2% FREQUENCY BOOST</div>
        </div>
        <div className="cyber-card">
          <small style={{ color: 'var(--text-dim)', letterSpacing: '1px' }}>BLOCKED (24H)</small>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--neon-green)' }}>{status.blocked_attacks_24h}</div>
          <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>GLOBAL THREAT INTERCEPTION</div>
        </div>
        <div className="cyber-card">
          <small style={{ color: 'var(--text-dim)', letterSpacing: '1px' }}>UPTIME</small>
          <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>99.99%</div>
          <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>7 REDUNDANT GLOBAL NODES</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
        <div className="cyber-card">
          <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Sovereign AI Defensive Matrix</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {defense.map((def, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: '16px', borderLeft: '4px solid var(--neon-blue)' }}>
                 <div style={{ color: 'var(--neon-blue)', fontWeight: 800, fontSize: '0.75rem', marginBottom: '0.5rem' }}>PURPOSE: {def.purpose}</div>
                 <div style={{ fontWeight: 700, marginBottom: '5px' }}>{def.detection}</div>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '10px' }}>{def.countermeasure}</div>
                 <span style={{ fontSize: '0.65rem', padding: '4px 10px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--neon-red)', borderRadius: '50px', fontWeight: 800 }}>MITIGATION: {def.risk_mitigation}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cyber-card">
          <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Node Topology</h3>
          <div className="node-grid">
            {nodes.map(node => (
              <div key={node.id} className="node-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem' }}>
                  <span>{node.id}</span>
                  <span style={{ color: 'var(--neon-green)' }}>{node.status}</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                  <div style={{ height: '100%', width: `${node.load}%`, background: 'var(--neon-blue)', borderRadius: '2px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cyber-card">
         <h3 style={{ marginTop: 0, fontFamily: 'Outfit' }}>Global Threat Repository</h3>
         <div className="log-panel-modern">
            {logs.map(log => (
              <div key={log.id} className="log-line">
                <span className="timestamp">[{log.time}]</span>
                <span style={{ fontWeight: 800 }}>{log.id}</span>
                <span style={{ color: 'var(--text-dim)' }}>{log.type}</span>
                <span className={log.status === 'Neutralized' ? 'threat-ok' : 'threat-high'}>{log.status.toUpperCase()}</span>
                <span style={{ marginLeft: 'auto', opacity: 0.5 }}>SRC: {log.source || 'GLOBAL_NET'}</span>
              </div>
            ))}
         </div>
      </div>

      <footer style={{ padding: '2rem 4rem', opacity: 0.4, fontSize: '0.8rem', textAlign: 'center' }}>
         &copy; 2026 CYBERNEXUS SENTINEL. INTEGRATED GLOBAL MODE v4.2. AUTHORIZED PERSONNEL ONLY.
      </footer>
    </div>
  );
};

export default CyberNexusApp;
