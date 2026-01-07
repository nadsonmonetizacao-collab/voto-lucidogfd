
export enum ViewState {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  PLANS = 'PLANS',
  DASHBOARD = 'DASHBOARD',
  ADMIN_GUIDE = 'ADMIN_GUIDE'
}

export interface User {
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
}

export interface WeeklyPdf {
  id: string;
  title: string;
  date: string;
  url: string;
}

export type AnalysisTool = 'verifier' | 'translator' | 'proposals';
