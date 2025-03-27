export default function StatsCard({ value, label, color = 'orange', icon }) {
  const getColorClasses = () => {
    return color === 'orange'
      ? 'bg-orange-400 text-white'
      : 'bg-purple-500 text-white';
  };

  return (
    <div className={`rounded-lg ${getColorClasses()} px-4 py-3 flex flex-col items-center shadow-lg`}>
      <div className="flex items-center space-x-2">
        {icon && <span>{icon}</span>}
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
