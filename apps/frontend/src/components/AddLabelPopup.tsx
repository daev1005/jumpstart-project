import React, { useState } from 'react';
import { MuiColorInput } from 'mui-color-input';
import { Label } from 'types/types';
import apiClient from '@api/apiClient';

interface AddLabelPopupProps {
  onCancel: () => void;
  onLabelCreated: (newLabel?: Label | undefined) => void;
}

export const toHex = (color: string): string => {
  if (color.startsWith('#')) {
    return color;
  }

  if (color.startsWith('rgb')) {
    const rgbMatch = color.match(/\d+/g);
    if (rgbMatch && rgbMatch.length >= 3) {
      const r = parseInt(rgbMatch[0]);
      const g = parseInt(rgbMatch[1]);
      const b = parseInt(rgbMatch[2]);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
  }

  return color;
};

export const AddLabelPopup: React.FC<AddLabelPopupProps> = ({
  onCancel,
  onLabelCreated,
}) => {
  const [name, setName] = useState('');
  const [colorValue, setColorValue] = useState('#ffffff');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const mockLabel: Label = {
        id: Math.floor(Math.random() * 1000), 
        name,
        color: toHex(colorValue),
        tasks: [],
      };

      onLabelCreated(mockLabel);
    } catch (err) {
      onLabelCreated();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[278px] px-4 py-1 border-2 rounded-xl bg-[#D9D9D9] space-y-2 text-[18px] text-[#424242]"
    >
      <div className="flex flex-col gap-1">
        <label className="font-medium">Name</label>
        <input
          type="text"
          placeholder="Label.."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[211px] px-3 text-[14px]"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Color</label>
        <MuiColorInput
          value={colorValue}
          onChange={setColorValue}
          className="w-full"
        />
      </div>

      <div className="flex justify-end space-x-2 py-2">
        <button
          type="button"
          onClick={onCancel}
          className="w-[60px] bg-gray-200 px-3 py-1 text-[12px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-[60px] bg-gray-500 text-white px-3 py-1 text-[12px]"
        >
          Create
        </button>
      </div>
    </form>
  );
};
