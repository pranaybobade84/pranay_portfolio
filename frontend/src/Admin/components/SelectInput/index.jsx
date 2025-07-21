const SelectInput = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 text-white p-3 rounded-lg border border-gray-700"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
