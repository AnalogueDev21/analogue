export default function PageContainer({ children, className = "" }) {
  return (
    <section className={`flex flex-1 flex-col ${className}`}>{children}</section>
  );
}
