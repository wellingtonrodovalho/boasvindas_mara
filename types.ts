
import React from 'react';

export enum AppSection {
  HOME = 'home',
  APARTAMENTO = 'apartamento',
  CHECKIN = 'checkin',
  GUIA_CASA = 'guia_casa',
  REGRAS = 'regras',
  GUIA_LOCAL = 'guia_local',
  CHECKOUT = 'checkout',
  EMERGENCIA = 'emergencia'
}

export interface LocalPlace {
  name: string;
  category: string;
  url?: string;
}

export interface NavItem {
  id: AppSection;
  label: string;
  icon: React.ReactNode;
}
