export function getStrategyCounts(arr = []) {
  return arr.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});
}

export function formatDate(dateStr) {
  return dateStr.replace(/-/g, ' ');
}