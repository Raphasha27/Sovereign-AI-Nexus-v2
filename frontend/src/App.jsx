import React, { useState, useEffect } from 'react';

const App = () => {
  const [metrics, setMetrics] = useState({
    economic_stability: 0,
    social_impact_score: 0,
    ai_intervention_count: 0,
    arbitrage_efficiency: "0%"
  });
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [notification, setNotification] = useState(null);
  const [aiSolutions, setAiSolutions] = useState([]);

  const API_BASE = "http://localhost:8000";

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/api/dashboard`);
      const data = await response.json();
      setMetrics(data.metrics);
      setIncidents(data.incidents);

      const aiRes = await fetch(`${API_BASE}/api/ai-reasoning`);
      const aiData = await aiRes.json();
      setAiSolutions(aiData.active_solutions);

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
      // Fallback data if backend is not reachable
      setMetrics({
        economic_stability: 84,
        social_impact_score: 92,
        ai_intervention_count: 142,
        arbitrage_efficiency: "96.4%"
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // Pulse every 30s
    return () => clearInterval(interval);
  }, []);

  const handleInitiateGuard = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/initiate-guard`, { method: 'POST' });
      const data = await response.json();
      setNotification({
        type: 'success',
        message: data.message,
        action: data.action
      });
      fetchData(); // Refresh data
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Network error: Backend unavailable',
        action: 'Connection Failed'
      });
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div className="app-container">
      {notification && (
        <div className={`glass-panel fade-in`} style={{
          position: 'fixed', top: '100px', right: '40px', zIndex: 1001,
          padding: '1rem 2rem', borderLeft: `4px solid ${notification.type === 'success' ? 'var(--success-color)' : 'var(--error-color)'}`,
          minWidth: '300px'
        }}>
          <h4 style={{ color: notification.type === 'success' ? 'var(--success-color)' : 'var(--error-color)' }}>{notification.action}</h4>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{notification.message}</p>
        </div>
      )}

      <nav className="nav-bar">
        <div className="logo-container">
          <div className="logo-icon">EA</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>EcoArbitrage <span style={{ color: 'var(--accent-color)' }}>AI</span></h2>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <span 
            className={`nav-link ${currentView === 'dashboard' ? 'active' : ''}`} 
            onClick={() => setCurrentView('dashboard')}
            style={{ color: currentView === 'dashboard' ? 'var(--accent-color)' : 'var(--text-secondary)', cursor: 'pointer' }}
          >Dashboard</span>
          <span 
            className={`nav-link ${currentView === 'global' ? 'active' : ''}`} 
            onClick={() => setCurrentView('global')}
            style={{ color: currentView === 'global' ? 'var(--accent-color)' : 'var(--text-secondary)', cursor: 'pointer' }}
          >Global Feed</span>
          <span 
            className={`nav-link ${currentView === 'agentic' ? 'active' : ''}`} 
            onClick={() => setCurrentView('agentic')}
            style={{ color: currentView === 'agentic' ? 'var(--accent-color)' : 'var(--text-secondary)', cursor: 'pointer' }}
          >Agentic Guard</span>
          <button className="btn-primary" onClick={handleInitiateGuard}>Initiate Guard</button>
        </div>
      </nav>

      <main>
        <section className="hero-section fade-in">
          <h1 className="hero-title">Solving Socio-Economic Issues <br /> with <span style={{ color: 'var(--accent-color)' }}>Agentic AI</span></h1>
          <p className="tagline">
            Leveraging advanced AI arbitrage to identify disparities and deploying 
            autonomous guards to stabilize local economies and maximize social impact.
          </p>
        </section>

        {currentView === 'dashboard' && (
          <>
            <div className="dashboard-grid">
              <div className="card glass-panel fade-in" style={{ animationDelay: '0.1s' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ECONOMIC STABILITY</p>
                <div className="stat-value">{metrics.economic_stability}%</div>
                <div style={{ height: '4px', background: '#333', borderRadius: '2px', marginTop: '10px' }}>
                  <div style={{ height: '100%', width: `${metrics.economic_stability}%`, background: 'var(--accent-color)', borderRadius: '2px', transition: 'width 1s ease-out' }}></div>
                </div>
              </div>

              <div className="card glass-panel fade-in" style={{ animationDelay: '0.2s' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>SOCIAL IMPACT SCORE</p>
                <div className="stat-value">{metrics.social_impact_score}</div>
                <p style={{ color: 'var(--success-color)', fontSize: '0.8rem' }}>+12% from last cycle</p>
              </div>

              <div className="card glass-panel fade-in" style={{ animationDelay: '0.3s' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>AGENTIC INTERVENTIONS</p>
                <div className="stat-value">{metrics.ai_intervention_count}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Autonomous actions taken</p>
              </div>

              <div className="card glass-panel fade-in" style={{ animationDelay: '0.4s' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ARBITRAGE EFFICIENCY</p>
                <div className="stat-value">{metrics.arbitrage_efficiency}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Optimal resource allocation</p>
              </div>
            </div>

            <section style={{ padding: '2rem 4rem' }} className="fade-in">
              <h3 style={{ marginBottom: '1.5rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
                AI Reasoner: Purpose-Driven Interventions
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {aiSolutions.map((sol, i) => (
                  <div key={i} className="glass-panel" style={{ padding: '1.5rem', borderTop: '2px solid var(--accent-color)' }}>
                    <h5 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>{sol.purpose}</h5>
                    <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{sol.solution}</p>
                    <div style={{ padding: '8px 12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <p style={{ color: 'var(--success-color)', fontSize: '0.8rem', margin: 0 }}><strong>Prediction:</strong> {sol.impact_prediction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ padding: '2rem 4rem' }} className="fade-in">
              <h3 style={{ marginBottom: '1.5rem', opacity: 0.8 }}>Live Agentic Guard Status</h3>
              <div className="glass-panel" style={{ overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1.2rem' }}>Incident Type</th>
                      <th style={{ padding: '1.2rem' }}>Location</th>
                      <th style={{ padding: '1.2rem' }}>Severity</th>
                      <th style={{ padding: '1.2rem' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidents.map((incident) => (
                      <tr key={incident.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                        <td style={{ padding: '1.2rem' }}>{incident.title}</td>
                        <td style={{ padding: '1.2rem', color: 'var(--text-secondary)' }}>{incident.location}</td>
                        <td style={{ padding: '1.2rem' }}>
                          <span style={{ 
                            color: incident.severity === 'High' ? 'var(--error-color)' : 
                                   incident.severity === 'Medium' ? 'var(--warning-color)' : 'var(--accent-color)' 
                          }}>
                            {incident.severity}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem' }}>
                          <span className={`status-indicator ${incident.status === 'Active' ? 'status-active' : ''}`} style={{ background: 'rgba(255,255,255,0.1)' }}>
                            {incident.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section style={{ padding: '0 4rem 4rem' }} className="fade-in">
              <div className="glass-panel" style={{ padding: '3rem', marginTop: '2rem', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))' }}>
                <h3 style={{ marginBottom: '1rem' }}>The EcoArbitrage Mission</h3>
                <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '900px' }}>
                  In traditional finance, arbitrage is the practice of taking advantage of a price difference between two or more markets. 
                  <strong> EcoArbitrage AI</strong> repurposes this logic for humanity. Our agentic models identify "social arbitrage" 
                  opportunities—where resources are undervalued or unfairly distributed in South African communities—and autonomously 
                  deploys interventions to close those gaps. 
                </p>
                <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
                  <div>
                    <h5 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Predictive Ubuntu</h5>
                    <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Anticipating community needs before they become crises.</p>
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--success-color)', marginBottom: '0.5rem' }}>Agentic Fairness</h5>
                    <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Removing human bias from resource allocation using neural logic.</p>
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--warning-color)', marginBottom: '0.5rem' }}>Market Shield</h5>
                    <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Protecting local vendors from hyper-fluctuation in commodity pricing.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'global' && (
          <section style={{ padding: '4rem' }} className="fade-in">
            <h2 style={{ marginBottom: '2rem' }}>Mzansi Socio-Economic Feed</h2>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', borderLeft: '2px solid var(--accent-color)', background: 'rgba(255,255,255,0.02)' }}>
                <p>AI Arbitrage identifies price disparity in Western Cape agricultural market.</p>
                <small style={{ color: 'var(--text-secondary)' }}>Detected 5 mins ago</small>
              </div>
              <div style={{ padding: '1rem', borderLeft: '2px solid var(--success-color)', background: 'rgba(255,255,255,0.02)' }}>
                <p>Ubuntu Shield successfully balanced resource allocation in Gauteng healthcare sector.</p>
                <small style={{ color: 'var(--text-secondary)' }}>Mitigated 1 hr ago</small>
              </div>
              <div style={{ padding: '1rem', borderLeft: '2px solid var(--warning-color)', background: 'rgba(255,255,255,0.02)' }}>
                <p>Neural Network identifies potential grid failure in North West mining cluster - Rerouting power...</p>
                <small style={{ color: 'var(--text-secondary)' }}>Action taken 3 hrs ago</small>
              </div>
            </div>
          </section>
        )}
        {currentView === 'agentic' && (
          <section style={{ padding: '4rem' }} className="fade-in">
            <h2 style={{ marginBottom: '2rem' }}>Agentic Guard Control Center</h2>
            <div className="dashboard-grid">
              <div className="card glass-panel">
                <h3>Protection Layer</h3>
                <p style={{ color: 'var(--accent-color)', fontSize: '1.2rem', margin: '1rem 0' }}>Shield Alpha (Active)</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Monitoring socio-economic signals 24/7 across all regions.</p>
              </div>
              <div className="card glass-panel">
                <h3>Vulnerability Scan</h3>
                <p style={{ color: 'var(--success-color)', fontSize: '1.2rem', margin: '1rem 0' }}>0 Critical Risks</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Next automated scan in 12 minutes.</p>
              </div>
              <div className="card glass-panel">
                <h3>Neural Optimization</h3>
                <p style={{ color: 'var(--warning-color)', fontSize: '1.2rem', margin: '1rem 0' }}>94% Efficiency</p>
                <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={handleInitiateGuard}>Run Re-Optimization</button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 EcoArbitrage AI. Developed by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Raphasha27</span></p>
        <p style={{ fontSize: '0.7rem', marginTop: '5px', opacity: 0.5 }}>Engineering Socio-Economic Fairness through Agentic AI</p>
      </footer>
    </div>
  );
};

export default App;
