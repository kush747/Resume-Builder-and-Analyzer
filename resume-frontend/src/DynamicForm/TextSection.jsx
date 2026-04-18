const TextSection = ({ title, value, onChange }) => {
  return (
    <div className="bg-black p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 capitalize">{title}</h2>
      <textarea
        rows="5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
};

export default TextSection;