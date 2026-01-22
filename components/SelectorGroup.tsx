
import React from 'react';
import type { Options } from '../types';

interface SelectorGroupProps {
  label: string;
  options: Options;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectorGroup: React.FC<SelectorGroupProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.entries(options).map(([key, option]) => (
          <option key={key} value={key}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
