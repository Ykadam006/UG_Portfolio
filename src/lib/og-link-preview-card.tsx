import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { site } from "@/lib/data";

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  style: "normal" | "italic";
  weight: 400;
};

function bufferToArrayBuffer(buf: Buffer): ArrayBuffer {
  const sliced = buf.buffer.slice(
    buf.byteOffset,
    buf.byteOffset + buf.byteLength,
  );
  return sliced as ArrayBuffer;
}

export async function loadOgFonts(): Promise<OgFont[]> {
  const fontDir = join(
    process.cwd(),
    "node_modules/@fontsource/dm-serif-display/files",
  );
  const [dmSerif, dmSerifItalic] = await Promise.all([
    readFile(join(fontDir, "dm-serif-display-latin-400-normal.woff")),
    readFile(join(fontDir, "dm-serif-display-latin-400-italic.woff")),
  ]);
  return [
    {
      name: "DM Serif Display",
      data: bufferToArrayBuffer(dmSerif),
      style: "normal",
      weight: 400,
    },
    {
      name: "DM Serif Display",
      data: bufferToArrayBuffer(dmSerifItalic),
      style: "italic",
      weight: 400,
    },
  ];
}

/** Markup for the only social / link-preview image (no project or gallery assets). */
export function OgLinkPreviewCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#080808",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "rgba(201,168,76,0.35)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 55% at 50% 18%, rgba(100,50,160,0.14), transparent 52%), radial-gradient(ellipse 55% 45% at 85% 75%, rgba(201,168,76,0.07), transparent 50%), radial-gradient(ellipse 50% 40% at 12% 70%, rgba(60,40,120,0.08), transparent 45%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          padding: "0 64px",
          maxWidth: 1080,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(17,17,17,0.9)",
            borderRadius: 9999,
            padding: "10px 24px",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#c9a84c",
            textTransform: "uppercase",
            marginBottom: 32,
            fontFamily: "DM Serif Display",
          }}
        >
          Open to new roles · {site.location}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: 68,
              fontWeight: 400,
              color: "#fafafa",
              textAlign: "center",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontFamily: "DM Serif Display",
            }}
          >
            <span>Marketing &amp; </span>
            <span style={{ fontStyle: "italic", fontFamily: "DM Serif Display" }}>
              Strategy,
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 68,
              fontWeight: 400,
              color: "#fafafa",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontFamily: "DM Serif Display",
            }}
          >
            Backed by Data.
          </div>
        </div>

        <p
          style={{
            marginTop: 32,
            fontSize: 19,
            color: "#a3a3a3",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 900,
            fontFamily: "DM Serif Display",
          }}
        >
          {site.description}
        </p>
      </div>
    </div>
  );
}
