const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  ...rest
}) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 text-white p-3 rounded-lg border border-gray-700 focus:ring-1 focus:ring-red-600"
      {...rest}
    />
  </div>
);

export default TextInput;
