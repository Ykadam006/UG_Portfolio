/**
 * Remotion composition — Animated 18% ROI Stats Card.
 *
 * Rendered entirely in React with Remotion's frame-based timeline.
 * Embeds in <Player> for browser-side playback (no server rendering needed).
 *
 * Timeline (90 frames @ 30 fps = 3 seconds, then loops):
 *   0–20   : Background + aurora glow fade in
 *   18–45  : "18%" counts up (easeOutCubic)
 *   42–60  : "ROI" label slides in from below
 *   58–80  : Three stat chips stagger in
 *   80–90  : Hold, subtle pulse
 */

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/* ── Helpers ────────────────────────────────────────────────────────────── */

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/** Clamp a value 0→1 for a sub-range of the timeline */
function progress(frame: number, from: number, to: number) {
  return easeOutCubic(Math.min(1, Math.max(0, (frame - from) / (to - from))));
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

function AuroraGlow({ opacity }: { opacity: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: "65%",
          height: "65%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-10%",
          top: "20%",
          width: "40%",
          height: "60%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(68,35,172,0.18) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-5%",
          bottom: "10%",
          width: "35%",
          height: "50%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(100,50,200,0.12) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
    </div>
  );
}

function StatChip({
  label,
  value,
  opacity,
  translateY,
}: {
  label: string;
  value: string;
  opacity: number;
  translateY: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        opacity,
        transform: `translateY(${translateY}px)`,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "10px 18px",
        minWidth: 90,
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#c9a84c",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 9,
          fontWeight: 600,
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Main composition ────────────────────────────────────────────────────── */

export function StatsComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  /* Background + glow */
  const bgOpacity = progress(frame, 0, 18);

  /* Counter: 0 → 18 between frame 18–45 */
  const counterProgress = progress(frame, 18, 45);
  const counterValue = Math.round(counterProgress * 18);

  /* ROI label */
  const roiOpacity = progress(frame, 42, 58);
  const roiY = interpolate(frame, [42, 58], [14, 0], { extrapolateRight: "clamp" });

  /* Three chips stagger */
  const chip1Opacity = progress(frame, 58, 72);
  const chip1Y = interpolate(frame, [58, 72], [12, 0], { extrapolateRight: "clamp" });
  const chip2Opacity = progress(frame, 64, 78);
  const chip2Y = interpolate(frame, [64, 78], [12, 0], { extrapolateRight: "clamp" });
  const chip3Opacity = progress(frame, 70, 84);
  const chip3Y = interpolate(frame, [70, 84], [12, 0], { extrapolateRight: "clamp" });

  /* Subtle pulse at end */
  const pulseSpr = spring({ fps, frame: frame - 80, config: { damping: 80, stiffness: 40 } });
  const pulseScale = frame >= 80 ? 1 + pulseSpr * 0.012 : 1;

  return (
    <AbsoluteFill
      style={{
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Aurora glow */}
      <AuroraGlow opacity={bgOpacity} />

      {/* Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          transform: `scale(${pulseScale})`,
        }}
      >
        {/* Big number */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, #e8c96a 0%, #c9a84c 45%, #f0d98a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
            }}
          >
            {counterValue}%
          </span>
        </div>

        {/* ROI label */}
        <div
          style={{
            opacity: roiOpacity,
            transform: `translateY(${roiY}px)`,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Strategic Simulation Outcome · ROI
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: interpolate(frame, [55, 75], [0, 160], { extrapolateRight: "clamp" }),
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
            borderRadius: 1,
          }}
        />

        {/* Stat chips */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <StatChip label="Shareholder lift" value="~12%" opacity={chip1Opacity} translateY={chip1Y} />
          <StatChip label="Tools" value="Excel · BI" opacity={chip2Opacity} translateY={chip2Y} />
          <StatChip label="Course" value="MBA Sim" opacity={chip3Opacity} translateY={chip3Y} />
        </div>
      </div>
    </AbsoluteFill>
  );
}
