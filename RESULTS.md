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
| A4 | Spike | 5 | 1.03 | 384ms | 433ms | 0.00% | 100% |
| A5 | Soak | 2 | 0.94 | 387ms | 1s | 0.00% | 100% |

## Part B
1. | Step | Test type | Users | Req/s | p(95) | Max | Failed | Checks |
   | ---- | ------------ | ----- | ----- | ----- | --- | ------ | ------ |
   | A1 | Smoke | 1 | 0.480697 | 370.97ms | 373.84ms | 0.00% | 100% (20/20) |
   | A2 | Average load | 3 | 1.31 | 380ms | 399ms | 0.00% | 100% |
   | A3 | Stress | 5 | 2.13 | 369ms | 465ms | 0.00% | 100% |
   | A4 | Spike | 5 | 1.03 | 384ms | 433ms | 0.00% | 100% |
   | A5 | Soak | 2 | 0.94 | 387ms | 1s | 0.00% | 100% |
2. Each virtual user sends one request and then sleeps for 1 second. The response time also adds to the waiting time, so 5 users send fewer than 5 requests per second.
3. No. The p95 response time decreased from 380ms to 369ms. The system handled the stress test well.
4. The response time stayed around 345–385ms during the spike. The system recovered in about 10 seconds.
5. The response time stayed mostly stable, and the error rate remained at 0%. A soak test lasting several hours could reveal a memory leak.
6. p95 shows how long 95% of requests take. It helps us understand the user experience better.
7. Internet speed and network conditions can be different. Also, the public website may have other users.
8. Testing with too many users may overload the website and affect other users.
9. A testable requirement is: 95% of requests must respond within 1 second, and fewer than 1% of requests can fail.