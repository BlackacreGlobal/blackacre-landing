export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="article-content text-slate-100 flex flex-col max-w-prose text-[24px] gap-6 mb-12">
      {children}
    </div>
  );
}
