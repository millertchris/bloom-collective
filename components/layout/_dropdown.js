export default function _paragraph({ type, name, value1, value2, value3 }) {
  return (
    <select
      type={type}
      name={name}
      className="w-full border border-gray-300 px-4 py-2 my-2"
    >
      <option value={value1}>{value1}</option>
      <option value={value2}>{value2}</option>
      <option value={value3}>{value3}</option>
    </select>
  );
}
