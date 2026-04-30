import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const PASSWORD = "0523";
  const [input, setInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return (
      <div style={styles.lockPage}>
        <div style={styles.lockBox}>
          <h1 style={styles.lockTitle}>第１回 池上杯</h1>
          <p style={styles.lockText}>パスワードを入力してください</p>

          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            style={styles.input}
          />

          <button
            style={styles.button}
            onClick={() => {
              if (input === PASSWORD) {
                setIsUnlocked(true);
              } else {
                alert("パスワードが違います");
              }
            }}
          >
            入場する
          </button>
        </div>
      </div>
    );
  }

  return <IkeagmiCupPage />;
}

function IkeagmiCupPage() {
  const schedule = [
    { time: "12:30", title: "受付開始" },
    { time: "13:00", title: "開会式" },
    { time: "13:20", title: "玉入れ" },
    { time: "13:50", title: "障害物リレー" },
    { time: "14:30", title: "休憩" },
    { time: "14:50", title: "綱引き" },
    { time: "15:20", title: "リレー" },
    { time: "16:00", title: "閉会式" },
  ];

  const participants = ["けんしん", "はると", "まこ", "けいご", "けいた"];
  const backgroundImages = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideImages {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => {
  document.head.removeChild(style)
}
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.imageSlider}>
        {[...backgroundImages, ...backgroundImages].map((src, i) => (
          <img key={i} src={src} style={styles.bgImage} />
        ))}
      </div>

      <div style={styles.overlay}>
        <motion.section
          style={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div style={styles.badge}>🔥 一日限りの本気勝負</div>

          <motion.h1
            style={styles.title}
            initial={{ y: -35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            第１回
            <br />
            <span style={styles.titleAccent}>池上杯</span>
          </motion.h1>

          <p style={styles.lead}>
            小さな運動会じゃない。<br />
            これは、意地と友情をかけた戦い。
          </p>

          <button style={styles.button}>参加する</button>
        </motion.section>

        <main style={styles.main}>
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>開催概要</h2>
            <p>日時：6月1日</p>
            <p>場所：中野総合体育館</p>
          </section>

          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>タイムスケジュール</h2>
            {schedule.map((s, i) => (
              <motion.div
                key={s.time}
                style={styles.scheduleItem}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <span style={styles.time}>{s.time}</span>
                <span> - {s.title}</span>
              </motion.div>
            ))}
          </section>

          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>参加者</h2>
            <div style={styles.memberGrid}>
              {participants.map((p) => (
                <div key={p} style={styles.member}>
                  {p}
                </div>
              ))}
            </div>
          </section>

          <section style={styles.notice}>
            <h2 style={styles.sectionTitle}>諸注意</h2>
            <p>・動きやすい服装、室内用シューズを持参してください。</p>
            <p>・水分補給を忘れず、体調が悪い場合は無理せず申告してください。</p>
            <p>・勝負は本気で。安全は最優先で。</p>
          </section>
        </main>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  lockPage: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #050505, #250800)",
    color: "white",
    display: "grid",
    placeItems: "center",
    padding: "20px",
  },
  lockBox: {
    width: "100%",
    maxWidth: "420px",
    padding: "34px",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,120,0,0.35)",
    textAlign: "center",
    boxShadow: "0 0 50px rgba(255,70,0,0.25)",
  },
  lockTitle: {
    fontSize: "38px",
    margin: "0 0 12px",
  },
  lockText: {
    color: "#f4d2c7",
    marginBottom: "18px",
  },
  input: {
    width: "100%",
    padding: "15px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    fontSize: "16px",
    boxSizing: "border-box",
    marginBottom: "16px",
  },
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #050505 0%, #170000 50%, #2b0900 100%)",
    color: "white",
    overflowX: "hidden",
    position: "relative",
    fontFamily: "system-ui, sans-serif",
  },
  imageSlider: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    gap: "24px",
    width: "max-content",
    height: "100vh",
    opacity: 0.15,
    animation: "slideImages 35s linear infinite",
    zIndex: 0,
  },
  bgImage: {
    width: "320px",
    height: "100vh",
    objectFit: "cover",
    filter: "grayscale(100%) contrast(130%)",
  },
  overlay: {
    position: "relative",
    zIndex: 2,
    minHeight: "100vh",
    background: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.86))",
    padding: "0 20px 50px",
  },
  hero: {
    textAlign: "center",
    paddingTop: "80px",
    paddingBottom: "60px",
  },
  badge: {
    display: "inline-block",
    padding: "10px 18px",
    border: "1px solid rgba(255,110,0,0.7)",
    borderRadius: "999px",
    color: "#ff9a3d",
    fontWeight: 900,
    background: "rgba(255,80,0,0.12)",
    marginBottom: "20px",
  },
  title: {
    fontSize: "clamp(52px, 12vw, 96px)",
    fontWeight: 900,
    lineHeight: "1.08",
    margin: "14px 0 0",
    letterSpacing: "-2px",
  },
  titleAccent: {
    color: "#ff3b00",
    textShadow: "0 0 35px rgba(255,70,0,0.85)",
  },
  lead: {
    marginTop: "24px",
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#f4d2c7",
    fontWeight: 800,
  },
  button: {
    marginTop: "28px",
    padding: "16px 46px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #ff3b00, #ff9a00)",
    color: "white",
    fontSize: "20px",
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 0 36px rgba(255,80,0,0.7)",
  },
  main: {
    maxWidth: "760px",
    margin: "0 auto",
    display: "grid",
    gap: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "24px",
    padding: "26px",
    boxShadow: "0 20px 70px rgba(0,0,0,0.35)",
  },
  sectionTitle: {
    fontSize: "28px",
    margin: "0 0 16px",
  },
  scheduleItem: {
    padding: "10px 0",
    fontSize: "18px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  time: {
    color: "#ff9a00",
    fontWeight: 900,
  },
  memberGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "12px",
  },
  member: {
    padding: "14px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, rgba(255,68,0,0.25), rgba(255,255,255,0.07))",
    border: "1px solid rgba(255,110,0,0.3)",
    textAlign: "center",
    fontWeight: 900,
  },
  notice: {
    background: "rgba(255,80,0,0.1)",
    border: "1px solid rgba(255,110,0,0.25)",
    borderRadius: "24px",
    padding: "26px",
  },
};