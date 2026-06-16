export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-analogue-line bg-white ${className}`}>
      {children}
    </div>
  );
}
