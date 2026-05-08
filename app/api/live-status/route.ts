import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch("https://kick.com/api/v2/channels/heymargaux", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return NextResponse.json({ isLive: false });
    }

    const data = await res.json();
    const stream = data?.livestream ?? null;

    return NextResponse.json(
      {
        isLive: stream !== null,
        title: stream?.session_title ?? null,
        viewers: stream?.viewers ?? null,
      },
      {
        headers: { "Cache-Control": "no-store, max-age=0" },
      }
    );
  } catch {
    return NextResponse.json({ isLive: false });
  }
}
