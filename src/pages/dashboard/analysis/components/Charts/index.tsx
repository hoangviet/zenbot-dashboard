import numeral from 'numeral';
import ChartCard from './ChartCard';
import Field from './Field';

const yuan = (val: number | string) => `¥ ${numeral(val).format('0,0')}`;
const vnd = (val: number | string) => `${numeral(val).format('0,0')} VND`;

const Charts = {
  vnd,
  yuan,
  ChartCard,
  Field,
};

export { Charts as default, yuan, vnd, ChartCard, Field };
