import { InfoCircleOutlined } from '@ant-design/icons';
import { TinyArea, TinyColumn, Progress } from '@ant-design/charts';
import { Col, Row, Tooltip } from 'antd';

import numeral from 'numeral';
import { ChartCard, Field } from './Charts';
import type { DataItem, TradesBalance, TradesStats } from '../data.d';
import Trend from './Trend';
import Vnd from '../utils/Vnd';
import styles from '../style.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = ({ loading, stats, balance }: { loading: boolean; stats?: TradesStats, balance?: TradesBalance }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="Capital"
        action={
          <Tooltip title="Capital">
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => numeral(stats?.account_consolidated).format('0,0.00a')}
        footer={<Field label="Currency" value={`${numeral(balance?.account_deposit).format('0,0.00a')} VND`} />}
        contentHeight={46}
      >
        <Trend flag={numeral(stats?.account_profit).value() < 0 ? "down" : "up"} reverseColor style={{ marginRight: 16 }}>
          P/L
          <span className={styles.trendText}>{numeral(stats?.account_profit).format('0.00%')}</span>
        </Trend>
        <Trend flag="down">
          DoD
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="Profit/Loss"
        action={
          <Tooltip title="Profit/Loss">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(stats?.account_profit_value).format('0,0.00a')}
        footer={<Field label="Depoist" value={numeral(stats?.account_profit_value).format('0,0')} />}
        contentHeight={46}
      >
        <TinyArea
          color="#975FE4"
          xField="x"
          height={46}
          forceFit
          yField="y"
          smooth
          data={[ {x: '1', y: 100 }, {x: '2', y: 100 }, {x: '3', y: 100 }]}
        />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="Trades per day"
        action={
          <Tooltip title="Trades per day">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total={numeral(1.2).format('0.00')}
        footer={<Field label="0 trades over 1 day" value="60%" />}
        contentHeight={46}
      >
        <TinyColumn xField="x" height={46} forceFit yField="y" data={[]} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title="Error rate"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total="78%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }}>
              周同比
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              日同比
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <Progress
          height={46}
          percent={0.78}
          color="#13C2C2"
          forceFit
          size={8}
          marker={[
            {
              value: 0.8,
              style: {
                stroke: '#13C2C2',
              },
            },
          ]}
        />
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
