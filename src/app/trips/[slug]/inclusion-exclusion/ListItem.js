export default function ListItem({ text, type }) {
  const isInclude = type === "include";

  return (
    <li className="flex gap-2 items-start">
      <span className={`mt-1 ${isInclude ? "text-green-600" : "text-red-500"}`}>
        {isInclude ? "✔" : "✖"}
      </span>

      <p className="text-gray-700">{text}</p>
    </li>
  );
}
