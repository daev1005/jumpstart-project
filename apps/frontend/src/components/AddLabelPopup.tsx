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