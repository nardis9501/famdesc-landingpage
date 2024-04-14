import { useAppContext } from "@/app/providers";
export default function SelectColor(props) {
  const colors = ["blue", "red"];
  const { color, handleThemeColor } = useAppContext();
  const handleChange = (e) => {
    handleThemeColor(e);
  };
  return (
    <>
      <select
        value={color}
        id="demo-controlled-open-select"
        onChange={handleChange}
        className={`capitalize cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 md:mx-4 text-sm rounded-lg ${
          color === "blue" &&
          "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        } ${
          color === "red" &&
          "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
        } block w-full md:w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
      >
        {colors &&
          colors.map((color) => (
            <option
              className={`${color === "blue" && "bg-blue-500"} ${
                color === "red" && "bg-red-500"
              }`}
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
      </select>
    </>
  );
}
