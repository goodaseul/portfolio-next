export default function IntroTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
}
