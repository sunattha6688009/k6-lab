import { journey } from './journey.js';

export const options = {
  stages: [
    { duration: '30s', target: 1 },  // 1 user for 30s
    { duration: '5s', target: 5 },   // jump to 5 within 5s
    { duration: '30s', target: 5 },  // hold 5 for 30s
    { duration: '5s', target: 1 },   // drop back to 1 within 5s
    { duration: '1m', target: 1 },   // stay at 1 for 1 min
    { duration: '10s', target: 0 },  // ramp down
  ],
  thresholds: {
    checks: ['rate>0.99'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  journey();
}