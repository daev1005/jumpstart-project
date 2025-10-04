import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import React, { useState, useEffect } from 'react';

interface LabelCardProps {
  id: number;
  title: string;
  color: string;
  defaultChecked: boolean;
  changeCheckedState: (
    targetLabelId: number,
    wasAlreadyChecked: boolean,
  ) => void;
}
