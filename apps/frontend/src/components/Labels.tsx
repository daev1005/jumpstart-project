import React, { useEffect, useState, useCallback } from 'react';
import { LabelCard } from './LabelCard';
import { Label, Task } from 'types/types';
import apiClient from '@api/apiClient';
import { Button, Snackbar } from '@mui/material';
import { AddLabelPopup } from './AddLabelPopup';
import EditDeleteLabelPopup from './EditDeleteLabelPopup';
import { mockLabels } from 'data/mockLabels';

interface LabelsProps {
  currentTask?: Task;
  selectedLabelIds?: number[];
  onLabelSelectionChange: (labelIds: number[]) => void;
  onLabelsChanged: () => void;
}

export const Labels: React.FC<LabelsProps> = ({
  currentTask,
  selectedLabelIds = [],
  onLabelSelectionChange,
  onLabelsChanged,
}) => {
  const [labelData, setLabelData] = useState<Label[]>(mockLabels);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [taskLabels, setTaskLabels] = useState<number[]>([]);

  const isNewTask = !currentTask?.id;
  const currentLabelIds = selectedLabelIds || taskLabels;

  const changeCheckedState = async (
    targetLabelId: number,
    wasAlreadyChecked: boolean,
  ) => {};
};
