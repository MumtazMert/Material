import React from 'react';
import { createRoot } from 'react-dom/client';
import { Homepage } from './homepage';
import './main.css';

const root = document.getElementById('root');

createRoot(root).render(<Homepage />);