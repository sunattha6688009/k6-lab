# K6 lab results

## Part 0
- Step 0.1, http_req_duration: avg=265.87ms min=265.87ms med=265.87ms max=265.87ms p(90)=265.87ms p(95)=265.87ms
- Step 0.2, requests, rate and p(95), and why the rate stays below 5: 80 requests, 3.76 requests per second, p(95) = 281.79 ms. Each virtual user sends one request and then sleeps for 1 second. One iteration took about 1.31 seconds on average (1 second of sleep plus the response time of about 0.26 seconds). So one user sends less than 1 request per second, and 5 users send less than 5 requests per second.
- Step 0.6, exit code of the normal run and of the run with P95=300: 0 for the normal run (p(95) = 421.18 ms, all thresholds passed) and 99 for the run with P95=300 (p(95) = 367.26 ms).
- Step 0.7, rules that passed, p(95), p(99), exit code after your change:
- Step 0.8, what was wrong, and how the checks showed it:

## Part A results
| Step | Test type | Users | Req/s | p(95) | Max | Failed | Checks |
| ---- | ------------ | ----- | ----- | ----- | --- | ------ | ------ |
| A1 | Smoke | 1 | | | | | |
| A2 | Average load | 3 | | | | | |
| A3 | Stress | 5 | | | | | |
| A4 | Spike | 5 | | | | | |
| A5 | Soak | 2 | | | | | |

## Part B
1.
2.
3.
4.
5.
6.
7.
8.
9.