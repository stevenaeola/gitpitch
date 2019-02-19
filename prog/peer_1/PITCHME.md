---?color=#7E317B

# Peer Review

---

## In professional life (Q1)

@ul
- Code reviews
- Team performance review
- Interviewing
- Lots of others
@ulend

---

## At university (Q2)

@ul
- Many people find it uncomfortable to give/receive
- Better to start  with low stakes
- Already done formative peer review
@ulend


---?color=#7E317B

# Some of your thoughts

---

## First years should not do this (Q3)

- There are clear benefits to learning
- There are clear benefits to employability
- When would be a better time?

---

## My marks should not be based on peer review

- Why not? Your life will be
- Focus on being clear about how you meet the criteria
- Would you take it seriously if not 'real'?

---

## One of my markers is wrong

- Things tend to average out
- Statistical model minimises effects due to
  - Systematic bias (marking low or high)
  - Random 

---

## How is my mark calculated

@ul
- Using a [Hierarchical Bayesian Model](https://en.wikipedia.org/wiki/Bayesian_hierarchical_modeling)
- Model parameters include
  - Quality of work per section
  - Reviewer bias per section
  - Reviewer variability per section
  - Difficulty of section
- These are all based on 1-11 scale (no submission-exemplary)
- Mid-range scores selected from marking scale e.g. good = 62
- Most grades have range of 5%
@ulend

---

Based on [Accounting for peer reviewer bias with Bayesian models](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.296.4637)(
```
data {
  reviewdims = dim(REVIEWS)
}
model {
  range <- MAX_GRADE - MIN_GRADE

# epsilon_sigma is the minumum value for our sigmas, to avoid DIV 0
  epsilon_sigma <- 0.00001

# The BUGS book p225 suggests uniform as a vague prior for variance
# Choose the largest sigma is such that 3*sigma=range/2 (99.7% rule)
# So we choose sigma = range/6, tau=36/range^2
  sigma_grade_pooled ~ dunif(epsilon_sigma,range/6)
  
  sigma_bias_pooled ~ dunif(epsilon_sigma,range/6)
  tau_bias_pooled <- 1/(sigma_bias_pooled*sigma_bias_pooled)
  
  sigma_quality_pooled ~ dunif(epsilon_sigma,range/6)
  tau_quality_pooled <- 1/(sigma_quality_pooled*sigma_quality_pooled)
  
  # It so happens that 7 is the grade for "good", with central mark 62
  mu_quality_pooled ~ dnorm(trunc((MAX_GRADE+MIN_GRADE)/2) + 1, tau_quality_pooled)

  for (i in 1:length(REVIEWERS)) {
    for (d in 1:length(SECTIONS)) {

      bias[REVIEWERS[i],SECTIONS[d]] ~ dnorm(0, tau_bias_pooled)

      sigma_grade[REVIEWERS[i],SECTIONS[d]] ~ dunif(epsilon_sigma, sigma_grade_pooled)
      tau_grade[REVIEWERS[i],SECTIONS[d]] <- 1/(sigma_grade[REVIEWERS[i],SECTIONS[d]]*sigma_grade[REVIEWERS[i],SECTIONS[d]])
    }
  }
  
  for (j in 1:length(REVIEWEES)) {  
     mu_quality_reviewee[REVIEWEES[j]] ~ dnorm(mu_quality_pooled, tau_quality_pooled)
  }

  for (d in 1:length(SECTIONS)) {
    mu_quality_section[SECTIONS[d]] ~ dnorm(mu_quality_pooled, tau_quality_pooled)
    for (j in 1:length(REVIEWEES)) {
      quality[REVIEWEES[j],SECTIONS[d]] ~ dnorm(mu_quality_section[SECTIONS[d]] 
                                              + mu_quality_reviewee[REVIEWEES[j]],
                                                tau_quality_pooled)
    }
  }
  
  for(r in 1:reviewdims[1]) {
    reviewer[r] <- REVIEWS[r,1]
    reviewee[r] <- REVIEWS[r,2]
    section[r] <- REVIEWS[r,3]
    REVIEWS[r,4] ~ dnorm((bias[reviewer[r],section[r]] + quality[reviewee[r],section[r]]),
                         tau_grade[reviewer[r],section[r]])
  }
}
```

---

## Solving complex models

- Most things can't be solved analytically (e.g. normal distribution)
- Monte Carlo simulation can be used to calculate parameters e.g. pi
- Take enough samples and you converge on the answer
- [Markov Chain Monte Carlo](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo) (MCMC) is a [top ten algorithm](https://www.computer.org/csdl/mags/cs/2000/01/c1022.html)
- I ran ten chains for 10000 steps twice

---

## Quality scores

![Quality range](https://raw.githubusercontent.com/stevenaeola/gitpitch/master/prog/peer_1/quality_chart.png)


---

## Bias

![Quality range](https://raw.githubusercontent.com/stevenaeola/gitpitch/master/prog/peer_1/bias_chart.png)

---

## Peer review scoring

@ul
- One mark for each review completed (max 3)
- If your average absolute bias was greater than 0.5 you lose a peer review mark
- If your average absolute bias was greater than 1.0 you lose another peer review mark
- No impact of variance on peer review mark, only on awarded score
- Reviewers looking at your work saw five pieces of work
- Total of 9 pieces of co-reviewed work
@ulend

---

## Potential impact

- Chance of >0.5 error for one reviewer about 50%
- Chance of >0.5 error for three reviewers about 1/8
- Chance of >0.5 error for five reviewers about 1/32
- Adjusted grade out by 1 usually means 5% to final mark
- 5% difference means 1.7% on module mark
- 5% difference means 0.28% on end of year mark
- 5% difference means 0% on degree award

---

## Reviewing

- Model built with advice from Professor of Bayesian statistics
- I sampled and amended some marks
- Shadow (Stefan Dantchev) also sampled some marks (10% is standard)
- Let me know if
  - you are convinced all three are unfair
  - you are convinved a review does not relate to your work
- I reserve the right to reduce your peer review mark if you are wrong

---

## Second assignment (Q4)

- I will build FAQs on github alongside specification
- I will provide commentary on marking criteria
- I will hide usernames
- Peer review process will be the same
- How many reviewers?

