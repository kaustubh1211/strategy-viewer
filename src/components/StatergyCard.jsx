export default function StrategyCard({ name, count }) {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-white border border-gray-200 rounded-xl w-80 shadow-sm">
      <span className="font-semibold text-gray-800">{name}</span>
      <span className="text-gray-400 text-sm">
        • {count} {count === 1 ? 'Strategy' : 'Strategies'}
      </span>
    </div>
  );
}