export default function ScoreRing({ label, value, tone = "blue" }) {
  const safeValue = Math.max(0, Math.min(100, value));
  const color = {
    blue: "#2F80ED",
    green: "#34C759",
    amber: "#FFB020",
  }[tone];

  return (
    <div className="rounded-lg border border-analogue-line bg-white p-4">
      <div className="flex items-center gap-4">
        <div
          className="grid h-16 w-16 shrink-0 place-items-center rounded-full"
          style={{
            background: `conic-gradient(${color} ${safeValue * 3.6}deg, #E5E5EA 0deg)`,
          }}
        >
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-sm font-bold">
            {safeValue}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-analogue-ink">{label}</p>
          <p className="mt-1 text-xs leading-5 text-analogue-muted">
            คะแนนนี้ใช้เพื่อจัดเส้นทางการเรียนรู้ ไม่ใช่การตัดสินความสามารถ
          </p>
        </div>
      </div>
    </div>
  );
}
