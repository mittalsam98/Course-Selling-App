import { toast } from 'react-hot-toast';

export const error = (title = 'Something Went Wrong') => {
  return toast.error(title, {
    style: {
      background: 'red',
      padding: '16px',
      color: '#ffffff'
    },
    icon: '😔'
  });
};
export const success = (title) => {
  return toast.success(title, {
    style: {
      background: 'green',
      padding: '16px',
      color: '#ffffff'
    },
    icon: '🥳'
  });
};
