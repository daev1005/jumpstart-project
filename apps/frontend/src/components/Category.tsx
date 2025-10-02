import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { TaskCategory } from '../types/types';

interface CategoryProps {
  value: TaskCategory;
  onChange: (newCategory: TaskCategory) => void;
}