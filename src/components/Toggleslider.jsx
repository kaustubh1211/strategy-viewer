const VIEWS = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

export default function ToggleSlider({ selected, onChange }) {
  return (
    <div className="grid grid-cols-2 sm:flex bg-gray-100 rounded-2xl sm:rounded-full p-1 w-full sm:w-fit gap-1 sm:gap-0">
      {VIEWS.map((view) => (
        <button
          key={view}
          onClick={() => onChange(view)}
          className={`px-3 py-2 rounded-xl ounded-full text-sm font-medium transition-all duration-200 text-center
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