const ObjectSection = ({ title, data, onChange }) => {
  return (
    <div className="bg-black p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 capitalize">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <label className="text-sm text-gray-500 capitalize">{key}</label>
            <input
              type="text"
              value={value || ""}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectSection;