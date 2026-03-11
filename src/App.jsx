import { useState } from 'react';
import ToggleSlider from './components/Toggleslider';
import DateDropdown from './components/DateDropDown';
import EmptyState from './components/EmptyState';
import StrategyCard from './components/StatergyCard';
import { dateArray, strategyArray } from './data';
import { getStrategyCounts } from './utils';

export default function App() {
  const [activeView, setActiveView] = useState('Bullish');       // Default  Bullish
  const [selectedDate, setSelectedDate] = useState(dateArray[0]); // Default first date


  const viewData = strategyArray.find((s) => s.View === activeView);
  const strategies = viewData?.Value?.[selectedDate] || [];
  const strategyCounts = getStrategyCounts(strategies);

  // Handle view change — reset date to first
  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10 px-4">
      <ToggleSlider selected={activeView} onChange={handleViewChange} />
      <DateDropdown
        dates={dateArray}
        selected={selectedDate}
        onChange={setSelectedDate}
      />

      <div className="mt-6 flex flex-col gap-3 w-80">
        {Object.keys(strategyCounts).length === 0 ? (
          <EmptyState date={selectedDate} />
        ) : (
          Object.entries(strategyCounts).map(([name, count]) => (
            <StrategyCard key={name} name={name} count={count} />
          ))
        )}
      </div>
    </div>
  );
}