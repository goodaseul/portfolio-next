export default function WorkSection({ items }: { items: any }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Work</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="border border-point/50 rounded p-4">
            <div className="flex justify-between">
              <strong>{item.company}</strong>
              <span className="text-sm opacity-70">{item.period}</span>
            </div>
            <p className="text-sm mt-1">{item.role}</p>
            <p className="text-sm mt-2 whitespace-pre-line">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
