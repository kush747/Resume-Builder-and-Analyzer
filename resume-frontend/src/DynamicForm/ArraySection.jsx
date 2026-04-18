const ArraySection = ({ title, items, onChange }) => {

  const handleFieldChange = (index, field, value) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    onChange(updated);
  };

  const handleRemove = (index) => {
    const updated = items.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleAdd = () => {
    if (items.length === 0) {
      // Empty array — nothing to base template on, add a blank object
      onChange([...items, {}]);
      return;
    }
    // Clone the structure of the first item with empty values
    const template = Object.fromEntries(
      Object.keys(items[0]).map((key) => [key, ""])
    );
    onChange([...items, template]);
  };

  // If array is empty, just show an Add button
  if (items.length === 0) {
    return (
      <div className="bg-black p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold capitalize">{title}</h2>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
          >
            + Add
          </button>
        </div>
        <p className="text-gray-500 text-sm">No entries yet.</p>
      </div>
    );
  }

  // Simple string arrays (e.g. ["English", "Hindi"])
  if (typeof items[0] === "string") {
    return (
      <div className="bg-black p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold capitalize">{title}</h2>
          <button
            onClick={() => onChange([...items, ""])}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
          >
            + Add
          </button>
        </div>
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const updated = items.map((v, i) => i === index ? e.target.value : v);
                onChange(updated);
              }}
              className="flex-1 border rounded-lg p-2"
            />
            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-700 font-bold px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    );
  }

  // Object arrays (skills, experience, languages, interests, etc.)
  return (
    <div className="bg-black p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
        >
          + Add
        </button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="border border-gray-700 rounded-xl p-4 mb-4 relative">
          
          <button
            onClick={() => handleRemove(index)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700 font-bold text-sm"
          >
            ✕ Remove
          </button>

          <div className="grid grid-cols-2 gap-3">
            {Object.entries(item).map(([field, val]) => (
              <div key={field}>
                <label className="text-sm text-gray-500 capitalize">{field}</label>
                <input
                  type="text"
                  value={val || ""}
                  onChange={(e) => handleFieldChange(index, field, e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};

export default ArraySection;