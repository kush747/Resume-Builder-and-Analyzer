
import ArraySection from "./ArraySection";
import ObjectSection from "./ObjectSection";
import TextSection from "./TextSection";


const DynamicResumeForm = ({ data, setData,onSubmit }) => {

  const handleStringChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleObjectChange = (key, fieldKey, value) => {
    setData(prev => ({
      ...prev,
      [key]: { ...prev[key], [fieldKey]: value }
    }));
  };

  const handleArrayChange = (key, newItems) => {
    setData(prev => ({ ...prev, [key]: [...newItems] }));
  };

  return (
    <div className="space-y-8">
      {Object.entries(data).map(([key, value]) => {

        if (Array.isArray(value)) {
          return (
            <ArraySection
              key={key}
              title={key}
              items={value}
              onChange={(newItems) => handleArrayChange(key, newItems)}
            />
          );
        }

        if (typeof value === "object" && value !== null) {
          return (
            <ObjectSection
              key={key}
              title={key}
              data={value}
              onChange={(fieldKey, val) => handleObjectChange(key, fieldKey, val)}
            />
          );
        }

        if (typeof value === "string") {
          return (
            <TextSection
              key={key}
              title={key}
              value={value}
              onChange={(val) => handleStringChange(key, val)}
            />
          );
        }

        return null;
      })}
      <button
      onClick={onSubmit}
      className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Build Resume
      </button>
    </div>
  );
};

export default DynamicResumeForm;