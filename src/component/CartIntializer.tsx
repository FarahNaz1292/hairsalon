
'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { loadCart } from '../store/slices/cartSlice';

export default function CartInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return null; 
}
