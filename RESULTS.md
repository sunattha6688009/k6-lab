# K6 lab results

## Part 0
- Step 0.1, http_req_duration: avg=265.87ms min=265.87ms med=265.87ms max=265.87ms p(90)=265.87ms p(95)=265.87ms
- Step 0.2, requests, rate and p(95), and why the rate stays below 5: 80 requests, 3.76 requests per second, p(95) = 281.79 ms. Each virtual user sends one request and then sleeps for 1 second. One iteration took about 1.31 seconds on average (1 second of sleep plus the response time of about 0.26 seconds). So one user sends less than 1 request per second, and 5 users send less than 5 requests per second.
- Step 0.6, exit code of the normal run and of the run with P95=300: 0 for the normal run (p(95) = 421.18 ms, all thresholds passed) and 99 for the run with P95=300 (p(95) = 367.26 ms).
- Step 0.7, rules that passed, p(95), p(99), exit code after your change: Original requirement: all 3 rules passed = p(95)<1000 (measured p(95) = 376.05 ms), p(99)<1500 (measured p(99) = 379.48 ms) and http_req_failed rate 0.00%. After changed p(95)<1000 to p(95)<100: In that run the p(95) rule failed (p(95) = 369.6 ms, above 100 ms), the other two rules still passed, and the exit code was 99.
- Step 0.8, what was wrong, and how the checks showed it: The script sent the names 'pepperoni' and 'knife' in lowercase, but the API uses 'Pepperoni' and 'Knife' with a capital letter. Under load, the checks ran many times and the failures became visible (% of the checks failed). After I changed the names to match the API, all checks passed.

## Part A results
| Step | Test type | Users | Req/s | p(95) | Max | Failed | Checks |
| ---- | ------------ | ----- | ----- | ----- | --- | ------ | ------ |
| A1 | Smoke | 1 | 0.480697 | 370.97ms | 373.84ms | 0.00% | 100% (20/20) |
| A2 | Average load | 3 | 1.31 | 380ms | 399ms | 0.00% | 100% |
| A3 | Stress | 5 | 2.13 | 369ms | 465ms | 0.00% | 100% |
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