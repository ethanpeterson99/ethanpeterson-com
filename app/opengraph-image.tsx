import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ethan Peterson — AI-first marketing systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0066FF",
          color: "#FFFFFF",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 36,
            opacity: 0.85,
            letterSpacing: -0.5,
          }}
        >
          EP
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              maxWidth: 980,
              letterSpacing: -1.5,
            }}
          >
            Ethan Peterson
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.25,
              opacity: 0.9,
              maxWidth: 980,
              letterSpacing: -0.5,
            }}
          >
            I build AI-first marketing systems that actually ship — and the
            agents that run them.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
