import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, ComposedChart } from "recharts";

const data = [
  { month: 0,  label: "Start",   brl: 3000,  level: "Trainee",    delta: "—",        pctIncrease: "—",       review: "Hire Date",   regime: "MEI" },
  { month: 6,  label: "6 mo",    brl: 4000,  level: "Trainee II", delta: "+R$1,000",  pctIncrease: "+33.3%",  review: "Review #1",   regime: "MEI" },
  { month: 12, label: "1 yr",    brl: 5000,  level: "Junior I",   delta: "+R$1,000",  pctIncrease: "+25.0%",  review: "Review #2",   regime: "MEI" },
  { month: 18, label: "1.5 yr",  brl: 6000,  level: "Junior I",   delta: "+R$1,000",  pctIncrease: "+20.0%",  review: "Review #3",   regime: "MEI" },
  { month: 24, label: "2 yr",    brl: 7000,  level: "Junior II",  delta: "+R$1,000",  pctIncrease: "+16.7%",  review: "Review #4",   regime: "ME / PJ" },
  { month: 30, label: "2.5 yr",  brl: 8500,  level: "Mid-Level",  delta: "+R$1,500",  pctIncrease: "+21.4%",  review: "Review #5",   regime: "ME / PJ" },
  { month: 36, label: "3 yr",    brl: 10000, level: "Mid-Level",  delta: "+R$1,500",  pctIncrease: "+17.6%",  review: "Review #6",   regime: "ME / PJ" },
  { month: 42, label: "3.5 yr",  brl: 11500, level: "Mid-Senior", delta: "+R$1,500",  pctIncrease: "+15.0%",  review: "Review #7",   regime: "ME / PJ" },
  { month: 48, label: "4 yr",    brl: 13000, level: "Mid-Senior", delta: "+R$1,500",  pctIncrease: "+13.0%",  review: "Review #8",   regime: "ME / PJ" },
  { month: 54, label: "4.5 yr",  brl: 14500, level: "Senior",     delta: "+R$1,500",  pctIncrease: "+11.5%",  review: "Review #9",   regime: "ME / PJ" },
  { month: 60, label: "5 yr",    brl: 16000, level: "Senior",     delta: "+R$1,500",  pctIncrease: "+10.3%",  review: "Review #10",  regime: "ME / PJ" },
];

const levelColors = {
  "Trainee": "#F59E0B",
  "Trainee II": "#F59E0B",
  "Junior I": "#3B82F6",
  "Junior II": "#3B82F6",
  "Mid-Level": "#8B5CF6",
  "Mid-Senior": "#EC4899",
  "Senior": "#10B981",
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div style={{
        background: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(148, 163, 184, 0.2)",
        borderRadius: "12px",
        padding: "16px 20px",
        fontFamily: "'DM Sans', sans-serif",
        minWidth: "240px",
      }}>
        <div style={{ color: "#F8FAFC", fontSize: "15px", fontWeight: 700, marginBottom: "8px" }}>
          {d.review} — {d.label}
        </div>
        <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span style={{
            background: levelColors[d.level] + "22", color: levelColors[d.level],
            padding: "3px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: 600,
            border: `1px solid ${levelColors[d.level]}44`,
          }}>{d.level}</span>
          <span style={{
            background: d.regime === "MEI" ? "rgba(16, 185, 129, 0.15)" : "rgba(59, 130, 246, 0.15)",
            color: d.regime === "MEI" ? "#10B981" : "#60A5FA",
            padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 600,
            border: `1px solid ${d.regime === "MEI" ? "rgba(16, 185, 129, 0.3)" : "rgba(59, 130, 246, 0.3)"}`,
          }}>{d.regime}</span>
        </div>
        <div>
          <div style={{ fontSize: "10px", color: "#64748B", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>Base Salary</div>
          <div style={{ color: "#F8FAFC", fontSize: "18px", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
            R${d.brl.toLocaleString()}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function SalaryProgressionPlan() {
  const compactListStyle = { margin: 0, paddingLeft: "18px", display: "grid", gap: "6px" };
  const compactListItemStyle = { color: "#CBD5E1", lineHeight: 1.65 };
  const mutedListItemStyle = { color: "#94A3B8", lineHeight: 1.65 };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(165deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)",
      fontFamily: "'DM Sans', sans-serif",
      color: "#E2E8F0",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: "1280px", margin: "0 auto", paddingBottom: "1px" }}>

      {/* Header */}
      <div style={{ padding: "40px 40px 28px", borderBottom: "1px solid rgba(148, 163, 184, 0.1)" }}>
        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#64748B", marginBottom: "12px" }}>
          Compensation Framework · Brazil · 2026
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 8px 0", lineHeight: 1.1, letterSpacing: "-1px" }}>
          5-Year Compensation Plan
        </h1>
        <p style={{ fontSize: "16px", color: "#94A3B8", margin: "0", lineHeight: 1.5, maxWidth: "720px" }}>
          Software Engineering · Data Engineering · Data Science
          <br />
          <span style={{ fontSize: "14px", color: "#64748B" }}>
            6-month review ladder with optional commissions. Starts on Microempreendedor Individual (MEI). On the base-only path, the usual move to Microempresa / Pessoa Jurídica (ME / PJ) is at year 2.
          </span>
        </p>
      </div>

      {/* Top Disclaimer */}
      <div style={{
        margin: "24px 40px 0",
        padding: "18px 22px",
        background: "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(245, 158, 11, 0.05) 100%)",
        borderRadius: "10px",
        border: "1px solid rgba(239, 68, 68, 0.25)",
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
      }}>
        <div style={{ fontSize: "20px", flexShrink: 0, marginTop: "1px" }}>⚠️</div>
        <div style={{ fontSize: "13px", color: "#E2E8F0", lineHeight: 1.7 }}>
          <div style={{ color: "#FCA5A5", fontWeight: 700, marginBottom: "6px" }}>This is not a contract.</div>
          <ul style={compactListStyle}>
            <li style={compactListItemStyle}>This is a <strong style={{ color: "#F8FAFC" }}>tentative compensation roadmap</strong>. It may change at any time.</li>
            <li style={compactListItemStyle}>Salary progression is <strong style={{ color: "#F8FAFC" }}>not guaranteed</strong>. Raises depend on performance, company results, and funding, and may be paused, delayed, or revised.</li>
            <li style={compactListItemStyle}>Commission rules, thresholds, and tax guidance may change as the company learns.</li>
          </ul>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "1px", background: "rgba(148, 163, 184, 0.1)",
        margin: "24px 40px 0", borderRadius: "12px", overflow: "hidden",
      }}>
        {[
          { label: "Starting Base", value: "R$3,000", sub: "R$36k / yr", mono: true },
          { label: "Year 5 Base", value: "R$16,000", sub: "R$192k / yr", mono: true },
          { label: "Tax Structure", value: "MEI → ME / PJ", sub: "Base-only path: Year 2", mono: false },
          { label: "Year 5 vs. Start", value: "5.3×", sub: "R$3k → R$16k base", mono: true, highlight: true },
        ].map((stat, i) => (
          <div key={i} style={{ background: "rgba(15, 23, 42, 0.8)", padding: "18px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: stat.highlight ? "#F59E0B" : "#64748B", marginBottom: "6px" }}>{stat.label}</div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: stat.highlight ? "#F59E0B" : "#F8FAFC", fontFamily: stat.mono ? "'JetBrains Mono', monospace" : "'DM Sans', sans-serif", letterSpacing: "-0.5px" }}>{stat.value}</div>
            <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* MEI Alert */}
      <div style={{
        margin: "20px 40px 0", padding: "16px 20px",
        background: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.03) 100%)",
        borderRadius: "10px", border: "1px solid rgba(245, 158, 11, 0.2)",
        display: "flex", gap: "14px", alignItems: "flex-start",
      }}>
        <div style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>⚠️</div>
        <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.7 }}>
          <div style={{ color: "#F59E0B", fontWeight: 700, marginBottom: "6px" }}>MEI Revenue Cap: R$81,000/year (~R$6,750/mo average).</div>
          <ul style={compactListStyle}>
            <li style={compactListItemStyle}>On base salary alone, hires usually stay on <strong style={{ color: "#F8FAFC" }}>MEI</strong> through Review #3 and move to <strong style={{ color: "#F8FAFC" }}>ME / PJ</strong> under Simples Nacional at Review #4 (R$7,000/mo).</li>
            <li style={compactListItemStyle}><strong style={{ color: "#F8FAFC" }}>Commissions also count toward MEI revenue</strong>, so steady deal flow may force an earlier migration.</li>
            <li style={compactListItemStyle}>Track total monthly revenue as <strong style={{ color: "#F8FAFC" }}>salary + commissions</strong>. Any mid-year tax or penalty exposure from crossing the cap is handled case by case with an accountant.</li>
          </ul>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "24px 40px 8px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#94A3B8", fontWeight: 500 }}>
            <span style={{ width: "14px", height: "3px", background: "#3B82F6", borderRadius: "2px" }} />
            Base Salary
          </span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ padding: "8px 24px 8px 16px", height: "380px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <defs>
              <linearGradient id="salaryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.08)" />
            <XAxis dataKey="label" tick={{ fill: "#64748B", fontSize: 11, fontFamily: "'DM Sans', sans-serif" }} axisLine={{ stroke: "rgba(148, 163, 184, 0.15)" }} tickLine={false} />
            <YAxis tick={{ fill: "#64748B", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `R$${(v/1000).toFixed(0)}k`} domain={[0, 18000]} width={65} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={6750} stroke="#F59E0B" strokeDasharray="4 3" strokeWidth={1.5} label={{ value: "MEI Cap", position: "left", fill: "#F59E0B", fontSize: 10, fontFamily: "'DM Sans', sans-serif" }} />
            <Area type="monotone" dataKey="brl" stroke="#3B82F6" strokeWidth={3} fill="url(#salaryGradient)" dot={(props) => { const d = data[props.index]; return (<circle key={props.index} cx={props.cx} cy={props.cy} r={6} fill={levelColors[d.level]} stroke="#0F172A" strokeWidth={3} />); }} activeDot={{ r: 8, stroke: "#F8FAFC", strokeWidth: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* PHASE 1 TABLE */}
      <div style={{ padding: "32px 40px 0", overflowX: "auto" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F59E0B", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Phase 1 — Foundation</span>
          <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10B981", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 700, letterSpacing: "1px" }}>MEI → ME / PJ</span>
          <span style={{ flex: 1, height: "1px", background: "rgba(245, 158, 11, 0.2)" }} />
          <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", textTransform: "none", fontSize: "12px" }}>R$3k → R$7k · Years 0–2</span>
        </div>

        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", fontSize: "14px", minWidth: "780px" }}>
          <thead>
            <tr>
              {["Review", "Month", "Level", "Base Salary", "Raise", "Raise %", "Regime"].map((h, i) => (
                <th key={i} style={{ textAlign: i === 3 || i === 4 || i === 5 ? "right" : "left", padding: "10px 14px", fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#475569", borderBottom: "2px solid rgba(148, 163, 184, 0.15)", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((row, i) => {
              const isLevelChange = i === 0 || row.level !== data[i - 1]?.level;
              return (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(148, 163, 184, 0.03)" }}>
                  <td style={{ padding: "13px 14px", fontWeight: 600, color: "#CBD5E1", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.review}</td>
                  <td style={{ padding: "13px 14px", color: "#94A3B8", borderBottom: "1px solid rgba(148, 163, 184, 0.08)", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}>{row.month}</td>
                  <td style={{ padding: "13px 14px", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
                    {isLevelChange ? (
                      <span style={{ display: "inline-block", background: levelColors[row.level] + "18", color: levelColors[row.level], padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 700, border: `1px solid ${levelColors[row.level]}33` }}>{row.level}</span>
                    ) : (
                      <span style={{ color: "#475569", fontSize: "12px", paddingLeft: "12px" }}>{row.level}</span>
                    )}
                  </td>
                  <td style={{ padding: "13px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "14px", color: "#F8FAFC", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>R${row.brl.toLocaleString()}</td>
                  <td style={{ padding: "13px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: row.month === 0 ? "#475569" : "#10B981", fontWeight: row.month === 0 ? 400 : 600, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.delta}</td>
                  <td style={{ padding: "13px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: row.month === 0 ? "#475569" : "#10B981", fontWeight: row.month === 0 ? 400 : 600, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.pctIncrease}</td>
                  <td style={{ padding: "13px 14px", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
                    <span style={{
                      display: "inline-block",
                      background: row.regime === "MEI" ? "rgba(16, 185, 129, 0.12)" : "rgba(59, 130, 246, 0.12)",
                      color: row.regime === "MEI" ? "#10B981" : "#60A5FA",
                      padding: "3px 9px", borderRadius: "5px", fontSize: "10px", fontWeight: 700,
                      border: `1px solid ${row.regime === "MEI" ? "rgba(16, 185, 129, 0.25)" : "rgba(59, 130, 246, 0.25)"}`,
                      letterSpacing: "0.5px",
                    }}>{row.regime}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Transition callout */}
        <div style={{
          margin: "16px 0",
          padding: "14px 18px",
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
          borderRadius: "8px",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          borderLeft: "3px solid #3B82F6",
          fontSize: "13px",
          color: "#94A3B8",
          lineHeight: 1.6,
        }}>
          <strong style={{ color: "#60A5FA" }}>↑ Typical base-only transition</strong>: Review #4, month 24 (R$7,000/mo). See the MEI Alert above.
        </div>

        {/* PHASE 2 TABLE */}
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#8B5CF6", marginBottom: "12px", marginTop: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Phase 2 — Growth & Mastery</span>
          <span style={{ background: "rgba(59, 130, 246, 0.15)", color: "#60A5FA", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 700, letterSpacing: "1px" }}>ME / PJ</span>
          <span style={{ flex: 1, height: "1px", background: "rgba(139, 92, 246, 0.2)" }} />
          <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", textTransform: "none", fontSize: "12px" }}>R$8.5k → R$16k · Years 2.5–5</span>
        </div>

        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", fontSize: "14px", minWidth: "780px" }}>
          <thead>
            <tr>
              {["Review", "Month", "Level", "Base Salary", "Raise", "Raise %", "Regime"].map((h, i) => (
                <th key={i} style={{ textAlign: i === 3 || i === 4 || i === 5 ? "right" : "left", padding: "10px 14px", fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#475569", borderBottom: "2px solid rgba(148, 163, 184, 0.15)", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(5).map((row, i) => {
              const globalIdx = i + 5;
              const isLevelChange = row.level !== data[globalIdx - 1]?.level;
              return (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(148, 163, 184, 0.03)" }}>
                  <td style={{ padding: "13px 14px", fontWeight: 600, color: "#CBD5E1", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.review}</td>
                  <td style={{ padding: "13px 14px", color: "#94A3B8", borderBottom: "1px solid rgba(148, 163, 184, 0.08)", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}>{row.month}</td>
                  <td style={{ padding: "13px 14px", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
                    {isLevelChange ? (
                      <span style={{ display: "inline-block", background: levelColors[row.level] + "18", color: levelColors[row.level], padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 700, border: `1px solid ${levelColors[row.level]}33` }}>{row.level}</span>
                    ) : (
                      <span style={{ color: "#475569", fontSize: "12px", paddingLeft: "12px" }}>{row.level}</span>
                    )}
                  </td>
                  <td style={{ padding: "13px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "14px", color: "#F8FAFC", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>R${row.brl.toLocaleString()}</td>
                  <td style={{ padding: "13px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#10B981", fontWeight: 600, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.delta}</td>
                  <td style={{ padding: "13px 14px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#10B981", fontWeight: 600, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.pctIncrease}</td>
                  <td style={{ padding: "13px 14px", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>
                    <span style={{
                      display: "inline-block", background: "rgba(59, 130, 246, 0.12)", color: "#60A5FA",
                      padding: "3px 9px", borderRadius: "5px", fontSize: "10px", fontWeight: 700,
                      border: "1px solid rgba(59, 130, 246, 0.25)", letterSpacing: "0.5px",
                    }}>{row.regime}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ASSOCIATE TRACK */}
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#22D3EE", marginBottom: "12px", marginTop: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Associate Track</span>
          <span style={{ flex: 1, height: "1px", background: "rgba(34, 211, 238, 0.2)" }} />
          <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", textTransform: "none", fontSize: "12px" }}>Project-scoped · By invitation · Revocable</span>
        </div>

        <div style={{
          background: "linear-gradient(135deg, rgba(34, 211, 238, 0.06) 0%, rgba(34, 211, 238, 0.02) 100%)",
          border: "1px solid rgba(34, 211, 238, 0.2)",
          borderRadius: "12px", padding: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{
              width: "56px", height: "56px", borderRadius: "16px",
              background: "linear-gradient(135deg, #22D3EE 0%, #0891B2 100%)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0,
            }}>◆</div>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#F8FAFC", marginBottom: "4px", letterSpacing: "-0.3px" }}>Associate</div>
              <div style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6 }}>
                Own one internal product, software as a service (SaaS), or service line end to end while staying on the salary ladder. You add a project-scoped commission slice.
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            <div style={{ padding: "16px 18px", background: "rgba(34, 211, 238, 0.06)", borderRadius: "10px", borderLeft: "3px solid #22D3EE" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#22D3EE", marginBottom: "8px" }}>You Take On</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>End-to-End Ownership</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6 }}>
                You own the outcome across engineering, sales, management, customer service, operations, and coordination. This is responsibility for the full result, not just the code.
              </div>
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(16, 185, 129, 0.06)", borderRadius: "10px", borderLeft: "3px solid #34D399" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#34D399", marginBottom: "8px" }}>You Gain</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>One Project-Pool Slice</div>
              <ul style={compactListStyle}>
                <li style={mutedListItemStyle}>You get one equal slice of that project's pool. It follows the same equal-split mechanics as the active-partner slice, but only on that project. It stacks with closer slices, and your base salary stays in place.</li>
                <li style={mutedListItemStyle}><strong style={{ color: "#FCD34D" }}>Cap:</strong> in any month, commission from one Associate engagement cannot exceed your <strong style={{ color: "#F8FAFC" }}>monthly base salary</strong>.</li>
                <li style={mutedListItemStyle}>The cap is per project, per month. Multiple Associate engagements can stack across projects. Any excess on one project goes back to the company slice.</li>
                <li style={mutedListItemStyle}><em>If you later become a Project Co-founder on that project, that project's slice becomes uncapped. Any Associate engagements you keep on other projects stay capped against your virtual progression.</em></li>
              </ul>
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(139, 92, 246, 0.06)", borderRadius: "10px", borderLeft: "3px solid #A78BFA" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#A78BFA", marginBottom: "8px" }}>Terms</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>Flexible and Revocable</div>
              <ul style={compactListStyle}>
                <li style={mutedListItemStyle}>A project may have multiple Associates, and one person may hold Associate status on multiple projects.</li>
                <li style={mutedListItemStyle}>The company may <strong style={{ color: "#CBD5E1" }}>revoke</strong> Associate status if the project's broader needs stop being met.</li>
                <li style={mutedListItemStyle}>Any Associate engagement may later lead to an invitation to become a <strong style={{ color: "#F8FAFC" }}>Project Co-founder</strong>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJECT CO-FOUNDER TRACK */}
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#A855F7", marginBottom: "12px", marginTop: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Project Co-founder Track</span>
          <span style={{ flex: 1, height: "1px", background: "rgba(168, 85, 247, 0.2)" }} />
          <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", textTransform: "none", fontSize: "12px" }}>Project-scoped · By invitation · Individually negotiated</span>
        </div>

        <div style={{
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.02) 100%)",
          border: "1px solid rgba(168, 85, 247, 0.25)",
          borderRadius: "12px", padding: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{
              width: "56px", height: "56px", borderRadius: "16px",
              background: "linear-gradient(135deg, #A855F7 0%, #22D3EE 100%)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0,
            }}>◈</div>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#F8FAFC", marginBottom: "4px", letterSpacing: "-0.3px" }}>Project Co-founder</div>
              <div style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6 }}>
                A deeper bet on one project: base salary ends, and you take an uncapped partner-level stake in that project instead of across the whole company.
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            <div style={{ padding: "16px 18px", background: "rgba(239, 68, 68, 0.06)", borderRadius: "10px", borderLeft: "3px solid #F87171" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#F87171", marginBottom: "8px" }}>You Give Up</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>Base Salary</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6 }}>
                Guaranteed monthly base pay ends. You remain part of the company, but income now comes from this project's commissions and any other commission-based roles you still hold.
              </div>
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(16, 185, 129, 0.06)", borderRadius: "10px", borderLeft: "3px solid #34D399" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#34D399", marginBottom: "8px" }}>You Gain</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>Uncapped Stake in the Project</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6 }}>
                An uncapped partner-level stake in this project. You are not a company Partner, but on this project you function like one: every deal tied to it pays your full project-level slice.
              </div>
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(168, 85, 247, 0.08)", borderRadius: "10px", borderLeft: "3px solid #A855F7" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C084FC", marginBottom: "8px" }}>Eligibility & Terms</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>By Invitation · Individual</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6 }}>
                Only existing Associates who have already shown ownership of a project's outcome are eligible. Slice size, responsibilities, and ongoing requirements are negotiated per invitation. <strong style={{ color: "#CBD5E1" }}>On the same project, Co-founder replaces Associate</strong>; there is no double-dipping.
              </div>
            </div>
          </div>

          <div style={{ marginTop: "16px", padding: "14px 18px", background: "rgba(34, 211, 238, 0.06)", borderRadius: "10px", borderLeft: "3px solid #22D3EE", fontSize: "12px", color: "#CBD5E1", lineHeight: 1.7 }}>
            <div style={{ color: "#22D3EE", fontWeight: 700, marginBottom: "6px" }}>Keeping Associate roles on other projects.</div>
            <ul style={compactListStyle}>
              <li style={compactListItemStyle}>When you become a Co-founder, the company decides whether any Associate engagements on other projects remain in place.</li>
              <li style={compactListItemStyle}>Any retained Associate engagement stays capped monthly. Because you no longer draw salary, the cap follows the salary your <strong style={{ color: "#F8FAFC" }}>virtual progression</strong> would have reached on the ladder, and that virtual progression still advances every 6 months.</li>
              <li style={compactListItemStyle}>On each retained Associate engagement, you can earn up to that virtual monthly amount while remaining uncapped on your Co-founder project.</li>
              <li style={compactListItemStyle}>Holding Co-founder status on more than one project is possible, though expected to be rare. Each Co-founder project remains individually uncapped.</li>
              <li style={compactListItemStyle}><em>More complex multi-role combinations (for example, Partner + Co-founder + Associate) are handled case-by-case as the team grows.</em></li>
            </ul>
          </div>
        </div>

        {/* PARTNER TRACK */}
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F8FAFC", marginBottom: "12px", marginTop: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Partner Track</span>
          <span style={{ flex: 1, height: "1px", background: "rgba(248, 250, 252, 0.15)" }} />
          <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", textTransform: "none", fontSize: "12px" }}>Year 5+ · By invitation</span>
        </div>

        <div style={{
          background: "linear-gradient(135deg, rgba(248, 250, 252, 0.06) 0%, rgba(248, 250, 252, 0.02) 100%)",
          border: "1px solid rgba(248, 250, 252, 0.12)",
          borderRadius: "12px", padding: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{
              width: "56px", height: "56px", borderRadius: "16px",
              background: "linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0,
            }}>★</div>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#F8FAFC", marginBottom: "4px", letterSpacing: "-0.3px" }}>Partner</div>
              <div style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.6 }}>
                Trade salary for a stake across the company.
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            <div style={{ padding: "16px 18px", background: "rgba(239, 68, 68, 0.06)", borderRadius: "10px", borderLeft: "3px solid #F87171" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#F87171", marginBottom: "8px" }}>You Give Up</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>Base Salary</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6 }}>
                Guaranteed monthly base pay ends. Income comes entirely from your share of company deals.
              </div>
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(16, 185, 129, 0.06)", borderRadius: "10px", borderLeft: "3px solid #34D399" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#34D399", marginBottom: "8px" }}>You Gain</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>A Slice of Every Deal</div>
              <ul style={compactListStyle}>
                <li style={mutedListItemStyle}><strong style={{ color: "#CBD5E1" }}>Active on the project:</strong> you get one active-partner slice alongside closers.</li>
                <li style={mutedListItemStyle}>For a regular Partner, that is your full stake on that project. You do <strong style={{ color: "#F8FAFC" }}>not</strong> also draw from the company slice for it.</li>
                <li style={mutedListItemStyle}><strong style={{ color: "#CBD5E1" }}>Not active on the project:</strong> you draw from the company slice under your individual partnership terms.</li>
                <li style={mutedListItemStyle}><em>Projects usually have one active partner, but more are possible. The company decides which Partners are active where.</em></li>
              </ul>
            </div>
            <div style={{ padding: "16px 18px", background: "rgba(139, 92, 246, 0.06)", borderRadius: "10px", borderLeft: "3px solid #A78BFA" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#A78BFA", marginBottom: "8px" }}>Eligibility</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8FAFC", marginBottom: "6px" }}>Year 5+ · By Invitation</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.6 }}>
                Earned through demonstrated contribution and alignment. Slice size and ongoing partnership requirements are set per invitation.
              </div>
            </div>
          </div>

          <div style={{ marginTop: "16px", padding: "14px 18px", background: "rgba(248, 250, 252, 0.06)", borderRadius: "10px", borderLeft: "3px solid #F8FAFC", fontSize: "12px", color: "#CBD5E1", lineHeight: 1.7 }}>
            <div style={{ color: "#F8FAFC", fontWeight: 700, marginBottom: "6px" }}>Pool stacking.</div>
            <ul style={compactListStyle}>
              <li style={compactListItemStyle}>The founder and any future company co-founders, plus Project Co-founders on their own project, stack when active: they receive both the active-partner slice and their company/project-level slice on that same project.</li>
              <li style={compactListItemStyle}>A regular Partner does <strong style={{ color: "#F8FAFC" }}>not</strong> stack. They get one project slice: the active-partner slice when active, or a share of the company's slice when not.</li>
              <li style={compactListItemStyle}><strong style={{ color: "#F8FAFC" }}>Senior Partner:</strong> a Partner may be promoted at the company's discretion. Senior Partners stack like founders and co-founders on projects where they are active. Terms are negotiated per promotion.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ═══ COMMISSION FRAMEWORK SECTION ═══ */}
      <div style={{ padding: "32px 40px 0" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F59E0B", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Commission Framework</span>
          <span style={{ flex: 1, height: "1px", background: "rgba(245, 158, 11, 0.2)" }} />
          <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", textTransform: "none", fontSize: "12px" }}>Optional · Three streams · Loyalty + merit bonuses on top</span>
        </div>
        <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#F8FAFC", margin: "8px 0 16px 0", letterSpacing: "-0.5px" }}>
          Three revenue streams. One pool logic.
        </h2>
        <div style={{ maxWidth: "820px", marginBottom: "28px", fontSize: "13px", color: "#CBD5E1", lineHeight: 1.7 }}>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Sales is voluntary <em>for salaried colleagues without Associate status</em>. For Associates, it may become part of the role. The same pool logic applies to Software as a Service (SaaS), Custom Build, and Consulting.
          </div>
          <ul style={compactListStyle}>
            <li style={compactListItemStyle}>Core seats in the split: <strong style={{ color: "#CBD5E1" }}>deal closer(s) + at least one active partner + any other Associates on the project + company</strong>.</li>
            <li style={compactListItemStyle}><strong style={{ color: "#F8FAFC" }}>Active partner</strong> = the person the company designates to lead and manage the project. That can be the founder, an Associate, a Project Co-founder, or a Year 5+ Partner. The active-partner slice pays for that role.</li>
            <li style={compactListItemStyle}><strong style={{ color: "#F8FAFC" }}>Stacking rule:</strong> founders, Project Co-founders on their own project, and closers may hold multiple slices. Closer slices always stack on top of any other slice. Everyone else gets one slice per project unless this document says otherwise.</li>
            <li style={compactListItemStyle}>Closers sell; engineers build. Salaried engineering time is deducted as <strong style={{ color: "#F8FAFC" }}>engineering cost</strong> before the split. The founder, Partners, and Project Co-founders are paid through pool slices, so their engineering time is not deducted as cost. Associates are salaried, so their delivery time is deducted as cost; the Associate slice separately pays for project-wide ownership beyond engineering.</li>
            <li style={compactListItemStyle}>In the current two-person team, the founder holds both the active-partner and company slices, so a colleague's <strong style={{ color: "#F8FAFC" }}>first qualified deal of the year</strong> splits <strong style={{ color: "#F8FAFC" }}>2/3 to the founder/company side and 1/3 to the closer</strong>. Later qualified deals scale through the Closer Loyalty Bonus below. For salaried colleagues, closer commissions stack on top of base salary with <strong style={{ color: "#CBD5E1" }}>no ceiling</strong>; Associate slices still follow the caps above.</li>
          </ul>
        </div>

        {/* 3 Commission Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "24px" }}>

          {/* SaaS Card */}
          <div style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 100%)", border: "1px solid rgba(139, 92, 246, 0.2)", borderRadius: "14px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(139, 92, 246, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>∞</div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#A78BFA" }}>Stream 1</div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.3px" }}>SaaS / Recurring</div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "14px" }}>
              Monthly recurring revenue from subscriptions or ongoing support. Payouts start in <strong style={{ color: "#F8FAFC" }}>month 4</strong> and then adjust as the median changes.
            </div>

            <div style={{ background: "rgba(15, 23, 42, 0.4)", borderRadius: "8px", padding: "12px 14px", marginBottom: "10px", borderLeft: "3px solid #A78BFA" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#A78BFA", marginBottom: "6px" }}>Payout Formula</div>
              <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: 1.7 }}>
                <div><strong style={{ color: "#F8FAFC" }}>Month 1–3:</strong> observation window. Track monthly revenue.</div>
                <div><strong style={{ color: "#F8FAFC" }}>Month 4:</strong> median of the first 3 months → <strong style={{ color: "#F8FAFC" }}>lifetime value (LTV) ≈ 20 × median revenue</strong>.</div>
                <div><strong style={{ color: "#F8FAFC" }}>Engineering cost</strong> = proportional pay of <em>salaried</em> delivery engineers. The founder, Partners, and Project Co-founders are paid through pool slices, so their engineering time is not booked as cost. Associates are salaried, so their delivery time <strong style={{ color: "#F8FAFC" }}>is</strong> deducted as cost; the Associate slice separately pays for project-wide ownership beyond engineering.</div>
                <div><strong style={{ color: "#F8FAFC" }}>Net pool</strong> = LTV − engineering cost. Slice-holders split it equally by default, with any extra closer slices added through the Closer Loyalty Bonus below.</div>
                <div><strong style={{ color: "#F8FAFC" }}>Installment:</strong> each member's share ÷ 20, paid in <strong>20 monthly installments</strong>.</div>
                <div><strong style={{ color: "#F8FAFC" }}>Month 5+:</strong> add the new data point, recompute the median and LTV, and adjust payouts.</div>
                <div><strong style={{ color: "#F8FAFC" }}>Payout ends</strong> after installment 20 (usually around month 23 or 24 overall, because installments start in month 4), or <strong style={{ color: "#F87171" }}>immediately if the client cancels</strong>. Any unpaid balance is forfeited.</div>
                <div style={{ marginTop: "6px", fontSize: "11px", color: "#64748B", fontStyle: "italic" }}>The 20× multiplier comes from average SaaS churn (~5%/mo → ~20-month customer lifetime). Until a project-specific value is set, <strong style={{ color: "#94A3B8" }}>20× is the default</strong>. The company may revise it by project or segment as churn data accumulates.</div>
              </div>
            </div>

            <div style={{ background: "rgba(239, 68, 68, 0.06)", borderRadius: "6px", padding: "10px 12px", marginBottom: "8px", borderLeft: "2px solid #F87171", fontSize: "11px", color: "#CBD5E1", lineHeight: 1.6 }}>
              <strong style={{ color: "#F87171" }}>Negative pool = no commission.</strong> If engineering cost exceeds LTV, no commission is paid on that project. The company absorbs the loss, and the deal does not advance the closer's loyalty counter.
            </div>

            <div style={{ background: "rgba(16, 185, 129, 0.06)", borderRadius: "6px", padding: "10px 12px", marginBottom: "8px", borderLeft: "2px solid #34D399", fontSize: "11px", color: "#CBD5E1", lineHeight: 1.6 }}>
              <strong style={{ color: "#34D399" }}>Costs are counted once.</strong> If a SaaS is repurposed or resold without additional engineering, engineering cost is zero and the entire LTV becomes the pool. This rewards reusable, productized work. Only new work on that specific project counts toward cost.
            </div>

            <div style={{ background: "rgba(239, 68, 68, 0.06)", borderRadius: "6px", padding: "10px 12px", borderLeft: "2px solid #F87171", fontSize: "11px", color: "#CBD5E1", lineHeight: 1.6 }}>
              <strong style={{ color: "#F87171" }}>True-up mechanism:</strong> If a recomputed median lowers the LTV and someone has been overpaid, the negative balance is deducted from the next commission, or from the next payment if no commission is queued. Underpayments are added to the next payment.
            </div>
          </div>

          {/* Custom Build Card */}
          <div style={{ background: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.02) 100%)", border: "1px solid rgba(236, 72, 153, 0.2)", borderRadius: "14px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(236, 72, 153, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>⚒</div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#F472B6" }}>Stream 2</div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.3px" }}>Custom Build</div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "14px" }}>
              Bespoke projects where the client owns the deliverable outright.
            </div>

            <div style={{ background: "rgba(15, 23, 42, 0.4)", borderRadius: "8px", padding: "12px 14px", marginBottom: "10px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#F472B6", marginBottom: "6px" }}>Payment Flow</div>
              <div style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: 1.7 }}>
                <div>1. Client payment arrives.</div>
                <div>2. Cover engineering cost (delivery engineers' time).</div>
                <div>3. Split remaining overage among pool members.</div>
              </div>
            </div>

            <div style={{ padding: "10px 12px", background: "rgba(148, 163, 184, 0.06)", borderRadius: "6px", fontSize: "11px", color: "#94A3B8", lineHeight: 1.5 }}>
              <strong style={{ color: "#CBD5E1" }}>Note:</strong> Post-delivery maintenance or support becomes SaaS (Stream 1). Cost then uses the <em>support</em> engineers' time, not the original build team. <strong style={{ color: "#CBD5E1" }}>The original closer remains the closer on the derived support SaaS</strong>. Payouts start only after standard SaaS qualification (3 consecutive months of revenue and a positive net pool), and the loyalty counter does <strong>not</strong> advance again.
            </div>
          </div>

          {/* Consulting Card */}
          <div style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "14px", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>◈</div>
              <div>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#34D399" }}>Stream 3</div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.3px" }}>Consulting</div>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "14px" }}>
              Advisory and delivery engagements billed per project. Payment flow is the same as custom build.
            </div>

            <div style={{ padding: "10px 12px", background: "rgba(148, 163, 184, 0.06)", borderRadius: "6px", fontSize: "11px", color: "#94A3B8", lineHeight: 1.5 }}>
              <strong style={{ color: "#CBD5E1" }}>Note:</strong> Any recurring consulting support is reclassified as SaaS (Stream 1) under the <strong style={{ color: "#CBD5E1" }}>same derived-support mechanics as Custom Build</strong>: support engineers' time sets the cost basis, the original closer carries over, standard SaaS qualification applies before payouts begin, and the loyalty counter does <strong>not</strong> advance again.
            </div>
          </div>

        </div>

        {/* Closer Loyalty Bonus */}
        <div style={{
          background: "linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.03) 100%)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
          borderRadius: "14px",
          padding: "24px",
          marginBottom: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "22px" }}>🎯</span>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F59E0B" }}>Closer Loyalty Bonus</div>
          </div>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#F8FAFC", marginBottom: "8px", letterSpacing: "-0.3px" }}>
            Each qualified deal you close that year grows your slice.
          </div>
          <div style={{ fontSize: "13px", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "16px" }}>
            On your <strong style={{ color: "#F8FAFC" }}>N-th qualified deal of the calendar year</strong>, you count as <strong style={{ color: "#F8FAFC" }}>N closer slices</strong> in the split. Each baseline non-closer seat stays <strong style={{ color: "#F8FAFC" }}>1 slice</strong>: active partner, company, and any additional Associates on the project. The counter resets every January 1.
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "440px", borderCollapse: "separate", borderSpacing: "0", fontSize: "12px" }}>
              <thead>
                <tr>
                  {["Deal #", "Your Slices", "Other Slices (Active Partner + Company)", "Your % of Pool", "Closer : Company"].map((h, i) => (
                    <th key={i} style={{ textAlign: i === 0 ? "left" : "right", padding: "8px 12px", fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "#94A3B8", borderBottom: "1px solid rgba(245, 158, 11, 0.25)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: 1, pct: "33%", ratio: "1:1" },
                  { n: 2, pct: "50%", ratio: "2:1" },
                  { n: 3, pct: "60%", ratio: "3:1" },
                  { n: 4, pct: "67%", ratio: "4:1" },
                  { n: 5, pct: "71%", ratio: "5:1" },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(245, 158, 11, 0.04)" }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: "#F8FAFC", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.n}{row.n === 1 ? "st" : row.n === 2 ? "nd" : row.n === 3 ? "rd" : "th"}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", color: "#F59E0B", fontWeight: 700, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.n}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", color: "#94A3B8", borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>2</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", color: "#F8FAFC", fontWeight: 700, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.pct}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "'JetBrains Mono', monospace", color: "#F59E0B", fontWeight: 600, borderBottom: "1px solid rgba(148, 163, 184, 0.08)" }}>{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul style={{ ...compactListStyle, marginTop: "14px", fontSize: "11px", color: "#64748B", fontStyle: "italic" }}>
            <li style={mutedListItemStyle}>The counter advances <strong style={{ color: "#94A3B8" }}>once per deal</strong>, when the deal qualifies. <strong style={{ color: "#94A3B8" }}>SaaS:</strong> at month 4, after 3 consecutive months of revenue and a positive net pool at the initial median. <strong style={{ color: "#94A3B8" }}>Custom Build / Consulting:</strong> when work ships and the client has paid in full. Later payouts and true-ups do not advance it again. Cancelled or never-qualifying deals do not advance it.</li>
            <li style={mutedListItemStyle}>The table shows the 3-slice baseline: closer + active partner + company. Other configurations add one non-closer slice for each extra active partner or Associate, with the closer's N slices on top.</li>
            <li style={mutedListItemStyle}>When two people co-close a deal, each advances their own yearly counter for it. The loyalty bonus applies across SaaS, Custom Build, and Consulting.</li>
            <li style={mutedListItemStyle}>A closer's in-flight 20-month SaaS payouts continue on schedule even after they leave the company.</li>
          </ul>
        </div>

        {/* Worked Example */}
        <div style={{
          background: "rgba(15, 23, 42, 0.5)",
          border: "1px solid rgba(148, 163, 184, 0.15)",
          borderRadius: "14px",
          padding: "24px",
          marginBottom: "8px",
        }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#64748B", marginBottom: "4px" }}>Worked Examples · R$10,000/mo Base · Solo Closer · 1st Deal of Year · unless noted</div>
          <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "16px", fontStyle: "italic" }}>Assumes the current two-person team: 1 salaried colleague + founder holding both the active-partner and company slices. The colleague does the engineering, so salary time is a real, <strong style={{ color: "#94A3B8" }}>deductible</strong> engineering cost; if the founder did the work instead, engineering cost would be R$0 and the full LTV would become the pool. In the SaaS examples below, <strong style={{ color: "#94A3B8" }}>founder/company side retains</strong> means revenue left after the closer payout, including the engineering-cost recovery already on that side. <strong style={{ color: "#94A3B8" }}>AP</strong> = active partner; <strong style={{ color: "#94A3B8" }}>Co</strong> = company.</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
            <div style={{ padding: "14px 16px", background: "rgba(139, 92, 246, 0.06)", borderRadius: "8px", borderLeft: "3px solid #8B5CF6" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#A78BFA", marginBottom: "6px" }}>SaaS · Small Client</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Revenue R$500/mo → LTV R$10,000.<br />
                Eng cost (0.2 mo) = R$2,000.<br />
                Pool R$8,000 → 3 slices ≈ R$2,667.<br />
                Closer → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$133/mo × 20</strong>. Founder/company side retains R$367/mo (R$500 − R$133) over those 20 months; full R$500/mo after.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(139, 92, 246, 0.06)", borderRadius: "8px", borderLeft: "3px solid #8B5CF6" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#A78BFA", marginBottom: "6px" }}>SaaS · Mid Client</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Revenue R$1,250/mo → LTV R$25,000.<br />
                Eng cost (0.5 mo) = R$5,000.<br />
                Pool R$20,000 → 3 slices ≈ R$6,667.<br />
                Closer takes 33% (1 slice) → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$333/mo × 20</strong>. Founder/company side retains R$917/mo (R$1,250 − R$333) over those 20 months; full R$1,250/mo after.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(139, 92, 246, 0.06)", borderRadius: "8px", borderLeft: "3px solid #8B5CF6" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#A78BFA", marginBottom: "6px" }}>SaaS · Large Client</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Revenue R$5,000/mo → LTV R$100,000.<br />
                Eng cost (2 mo) = R$20,000.<br />
                Pool R$80,000 → 3 slices ≈ R$26,667.<br />
                Closer → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$1,333/mo × 20</strong>. Founder/company side retains R$3,667/mo (R$5,000 − R$1,333) over those 20 months; full R$5,000/mo after.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(139, 92, 246, 0.06)", borderRadius: "8px", borderLeft: "3px solid #8B5CF6" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#A78BFA", marginBottom: "6px" }}>SaaS · 2 Closers Co-selling</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Revenue R$5k/mo → LTV R$100,000.<br />
                Eng cost R$20,000 → Pool R$80,000.<br />
                4 slices (2 closers + AP + Co) = R$20,000.<br />
                Each closer → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$1,000/mo × 20</strong>. Founder/company side retains R$3,000/mo (R$5,000 − 2×R$1,000) over those 20 months; full R$5,000/mo after.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(236, 72, 153, 0.06)", borderRadius: "8px", borderLeft: "3px solid #EC4899" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#F472B6", marginBottom: "6px" }}>Custom Build · Solo Closer</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                R$60k payment. R$40k covers engineering cost.<br />
                Overage R$20k → 3 slices ≈ R$6,667.<br />
                Closer → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$6,667</strong>. Founder (AP+Co) R$13,333.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(239, 68, 68, 0.06)", borderRadius: "8px", borderLeft: "3px solid #F87171" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#F87171", marginBottom: "6px" }}>SaaS · Loss Scenario</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Revenue R$300/mo → LTV R$6,000.<br />
                Eng cost (1 mo) = R$10,000.<br />
                Pool = −R$4,000 → negative.<br />
                <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>No commission paid.</strong> Company absorbs the loss.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(16, 185, 129, 0.06)", borderRadius: "8px", borderLeft: "3px solid #34D399" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#34D399", marginBottom: "6px" }}>SaaS · Repurposed</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Existing product resold to new client.<br />
                Revenue R$1,250/mo → LTV R$25,000.<br />
                Eng cost = R$0. Pool R$25,000 → 3 slices ≈ R$8,333.<br />
                Closer → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$417/mo × 20</strong>. Founder/company side retains R$833/mo (R$1,250 − R$417) over those 20 months; full R$1,250/mo after.
              </div>
            </div>
            <div style={{ padding: "14px 16px", background: "rgba(245, 158, 11, 0.08)", borderRadius: "8px", borderLeft: "3px solid #F59E0B" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#F59E0B", marginBottom: "6px" }}>SaaS · Mid Client · 3rd Deal</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.6 }}>
                Same R$20k pool as the Mid Client above.<br />
                Closer is 3 slices, AP + Co = 2 slices.<br />
                5 total slices → R$4,000 each.<br />
                Closer takes 60% (3 slices) → <strong style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono', monospace" }}>R$600/mo × 20</strong> (vs. 33% on Deal 1). Founder/company side retains R$650/mo (R$1,250 − R$600) over those 20 months; full R$1,250/mo after.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ ANNUAL MERIT BONUS ═══ */}
      <div style={{ padding: "0 40px", marginTop: "32px" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(244, 63, 94, 0.10) 0%, rgba(245, 158, 11, 0.08) 100%)",
          border: "1px solid rgba(244, 63, 94, 0.25)",
          borderRadius: "14px",
          padding: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "26px" }}>🏆</span>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FB7185" }}>Annual Merit Bonus</div>
            <span style={{ flex: 1, height: "1px", background: "rgba(244, 63, 94, 0.2)", minWidth: "40px" }} />
            <span style={{ color: "#64748B", fontWeight: 500, letterSpacing: "0.5px", fontSize: "12px" }}>Discretionary · Not guaranteed · Evolves over time</span>
          </div>

          <div style={{ fontSize: "20px", fontWeight: 800, color: "#F8FAFC", marginBottom: "10px", letterSpacing: "-0.4px" }}>
            A year-end reward for exceptional contribution.
          </div>

          <div style={{ fontSize: "13.5px", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "20px", maxWidth: "800px" }}>
            At year-end, the company may award a merit bonus based on a <strong style={{ color: "#F8FAFC" }}>percentage of total annual earnings</strong>. Base salary and all commission income count equally, including Associate slices. It is discretionary, not guaranteed, and reserved for exceptional contribution.
          </div>

          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#94A3B8", marginBottom: "10px" }}>
            Considerations · Illustrative, May Evolve
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
            {[
              "Work ethic",
              "Commitment & consistency",
              "Technical mastery",
              "Extraordinary solutions",
              "Innovation & outside-the-box thinking",
              "Closing deals",
              "Going the extra mile",
            ].map((label, i) => (
              <span key={i} style={{
                display: "inline-block",
                background: "rgba(244, 63, 94, 0.12)",
                color: "#FECACA",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                border: "1px solid rgba(244, 63, 94, 0.25)",
              }}>{label}</span>
            ))}
          </div>

          <div style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.7, padding: "12px 14px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "8px", borderLeft: "3px solid #FB7185" }}>
            The percentage, criteria, and recipients are set at the company's discretion and may change year to year. This bonus rewards <strong style={{ color: "#F8FAFC" }}>excellence</strong>, not just meeting expectations. Partners and Project Co-founders, who do not draw salary, follow separately negotiated bonus arrangements.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ margin: "28px 40px 44px", padding: "20px 24px", background: "rgba(148, 163, 184, 0.04)", borderRadius: "12px", border: "1px solid rgba(148, 163, 184, 0.1)" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#64748B", marginBottom: "12px" }}>Ground Rules</div>
        <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "8px" }}>
          <div><strong style={{ color: "#CBD5E1" }}>Personally-closed deals only.</strong> Base salaried colleagues (without Associate status) earn commissions only from deals they personally close.</div>
          <div><strong style={{ color: "#CBD5E1" }}>Track-specific pool participation.</strong> Associates, Project Co-founders, and Partners participate in commission pools under the track rules above.</div>
          <div><strong style={{ color: "#CBD5E1" }}>Company growth alone does not dilute closers.</strong> Adding people elsewhere in the company does not reduce a closer's share. A closer's percentage changes only when that specific project adds extra slice-holders; those seats come out of what would otherwise stay on the company side.</div>
        </div>
      </div>
      </div>

    </div>
  );
}
