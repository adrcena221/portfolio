import type { IconType } from "react-icons/lib";
import "../index.css";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  icon: IconType;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  icon: Icon,
  className = "",
}) => {
  const baseStyle =
    "block w-full grow py-2 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6";

  return (
    <div className="w-full">
      {/* Label + Icon */}
      <div className="flex items-center text-base text-gray-400 pr-3 select-none sm:text-sm/6">
        <Icon className="mr-2" />
        <label
          htmlFor={id}
          className="block text-sm/6 font-bold text-white"
        >
          {label}
        </label>
      </div>

      <div className="mt-2">
        {/* Wrapper with hover + focus effects for both input and textarea */}
        <div
          className={`flex items-center rounded-2xl bg-slate-900 pl-3 outline-1 -outline-offset-1 outline-gray-600 transition-all duration-200 
          hover:outline-2 hover:-outline-offset-2 hover:outline-indigo-400
          has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500
          has-[textarea:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-indigo-500`}
        >
          {type === "textarea" ? (
            <textarea
              id={id}
              name={name}
              placeholder={placeholder}
              rows={5}
              className={`${baseStyle} resize-none h-36 ${className}`}
            />
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              className={`${baseStyle} ${className}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
