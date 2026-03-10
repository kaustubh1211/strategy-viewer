const VIEWS = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

export default function ToggleSlider({ selected, onChange }) {
  return (
    <div className="flex bg-gray-100 rounded-full p-1 w-fit">
      {VIEWS.map((view) => (
        <button
          key={view}
          onClick={() => onChange(view)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${selected === view
              ? 'bg-blue-600 text-white shadow'
              : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          {view}
        </button>
      ))}
    </div>
  );
}