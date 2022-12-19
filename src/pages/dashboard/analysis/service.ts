import { request } from 'umi';
import type { AnalysisData, TradesData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}

export async function fetchTrades(): Promise<{ data: TradesData }> {
  return request('/api/v1/trades');
}