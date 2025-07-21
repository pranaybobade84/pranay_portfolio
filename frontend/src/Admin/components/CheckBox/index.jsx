const CheckboxInput = ({ label, name, checked, onChange }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="accent-red-600"
    />
    <label className="text-sm text-gray-300">{label}</label>
  </div>
);

export default CheckboxInput;
