import React from "react";

interface BaseProps {
  label: React.ReactNode; // THE FIX IS HERE: Changed from 'string' to 'React.ReactNode'
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Added for completeness
  textarea?: boolean;
  className?: string;
}

// Spreading the rest of the props, so we let the input/textarea handle them
type InputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseProps> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof BaseProps>;

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  onKeyDown,
  textarea = false,
  className = "",
  type = "text", // It's good practice to keep type here
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className="block text-black mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="w-full border border-gray-600 bg-transparent p-3 text-black rounded-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none h-32 resize-none"
          {...rest}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="w-full border border-gray-600 bg-transparent p-3 rounded-sm text-black focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none"
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;