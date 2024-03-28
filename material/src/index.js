import React from 'react';
import { createRoot } from 'react-dom/client';
import { Homepage } from './homepage';
import './styles.css';

const root = document.getElementById('root');

createRoot(root).render(<Homepage />);