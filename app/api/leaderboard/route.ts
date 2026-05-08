import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

function currentMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export async function GET() {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("leaderboard_entries")
    .select("stake_username, wager_usd")
    .eq("month", currentMonth())
    .order("wager_usd", { ascending: false })
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const raw = body?.stake_username;

  if (!raw?.trim()) {
    return NextResponse.json(
      { error: "Stake username is required." },
      { status: 400 }
    );
  }

  const stake_username = raw.trim().toLowerCase();
  const month = currentMonth();
  const supabase = getSupabase();

  const { data: existing } = await supabase
    .from("leaderboard_entries")
    .select("id")
    .eq("stake_username", stake_username)
    .eq("month", month)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { message: "You're already in this month's race!" },
      { status: 200 }
    );
  }

  const { error } = await supabase
    .from("leaderboard_entries")
    .insert({ stake_username, month, wager_usd: 0 });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "You're in! Good luck this month." },
    { status: 201 }
  );
}
