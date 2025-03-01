export type ButtonType = 'primary' | 'secondary' | 'danger';

interface ButtonConfig {
  label: string;
  variant: ButtonType;
  actionType: string; // Redux action type
}

export const BUTTONS: Record<string, ButtonConfig> = {
  SAVE: { label: 'Save', variant: 'primary', actionType: 'SAVE_DATA' },
  DELETE: { label: 'Delete', variant: 'danger', actionType: 'DELETE_ITEM' },
  CANCEL: { label: 'Cancel', variant: 'secondary', actionType: 'CANCEL_ACTION' },
};
