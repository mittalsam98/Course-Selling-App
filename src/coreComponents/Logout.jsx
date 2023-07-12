import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdmin } from './helper/utils';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    if (isAdmin()) {
      navigate('/admin');
    } else {
      navigate('/');
    }
    window.location.reload();
  }, []);
  return;
}
