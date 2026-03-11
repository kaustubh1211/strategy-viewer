import { useState } from 'react';
import { formatDate } from '../utils';

export default function DateDropdown({ dates, selected, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-80 mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm font-medium"
      >
        <span>{formatDate(selected)}</span>
        <span className={` text-blue-700 transition-transform ${open ? 'rotate-180 ' : ''}`}>▼</span>
      </button>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => { onChange(date); setOpen(false); }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 border-b last:border-0"
            >
              {formatDate(date)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}