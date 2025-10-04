import React, { useEffect, useState } from 'react';
import apiClient from '@api/apiClient';
import { Label } from 'types/types';
import { MuiColorInput } from 'mui-color-input';
import { Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Edit from '@mui/icons-material/Edit';
import { toHex } from './AddLabelPopup';
import { mockLabels } from 'data/mockLabels';

interface EditDeleteLabelPopupProps {
  onClose: () => void;
  onLabelsChanged: () => void;
}
