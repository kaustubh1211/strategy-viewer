// Counts occurrences of each strategy name in an array
export function getStrategyCounts(arr = []) {
  return arr.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});
}

// Formats date from "24-Apr-2024" → "24 Apr 2024"
export function formatDate(dateStr) {
  return dateStr.replace(/-/g, ' ');
}