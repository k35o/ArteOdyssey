import { Checkbox } from '../checkbox';
import { CheckboxGroup as BaseCheckboxGroup } from './checkbox-group';

export const CheckboxGroup = Object.assign(BaseCheckboxGroup, {
  Item: Checkbox,
});
