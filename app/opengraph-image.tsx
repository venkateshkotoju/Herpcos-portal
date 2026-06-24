import { ImageResponse } from "next/og";

export const alt = "HerPCOS Portal — AI-Powered PCOS Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #db2777 0%, #7c3aed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            borderRadius: "100px",
            padding: "10px 28px",
            marginBottom: "28px",
            display: "flex",
          }}
        >
          <span style={{ color: "white", fontSize: "20px", fontWeight: 600, letterSpacing: "0.05em" }}>
            AI-POWERED PCOS SUPPORT
          </span>
        </div>

        {/* Brand name */}
        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "20px" }}>
          <span style={{ color: "white", fontSize: "88px", fontWeight: 800, lineHeight: 1 }}>
            Her
          </span>
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "88px", fontWeight: 800, lineHeight: 1 }}>
            PCOS
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "40px", fontWeight: 500, marginLeft: "14px", marginBottom: "12px" }}>
            Portal
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "26px",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.45,
            margin: "0 0 48px 0",
          }}
        >
          Free AI-powered PCOS guidance, expert guides, and community support — available 24/7
        </p>

        {/* Stats pills */}
        <div style={{ display: "flex", gap: "20px" }}>
          {["1 in 10 women have PCOS", "70% go undiagnosed", "100% free to use"].map((stat) => (
            <div
              key={stat}
              style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "14px",
                padding: "12px 24px",
                color: "white",
                fontSize: "17px",
                fontWeight: 600,
                display: "flex",
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
