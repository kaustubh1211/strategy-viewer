import { formatDate } from '../utils';

export default function EmptyState({ date }) {
  return (
    <div className="flex flex-col items-center justify-center mt-16 text-center">
      <p className="text-gray-500">There are no strategies for</p>
      <p className="font-bold text-gray-800 mt-1">{formatDate(date)}</p>
    </div>
  );
}