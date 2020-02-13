
# Computer Architecture: So What?


## Trends
## Advantages
## Disadvantages


## Context of Modern Computing

- [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law) keeps on giving
- [Dennard scaling](https://en.wikipedia.org/wiki/Dennard_scaling) doesn't since about 2006
- Power dissipation (switching) goes up with cube of clock speed
- Static power dissipation starts to dominate at small scale
- Trend towards multi-core
- Extreme end is GPU/TPU


[42 years of Microprocessor trend data](https://www.karlrupp.net/2018/02/42-years-of-microprocessor-trend-data/)

[The Free Lunch Is Over](http://www.gotw.ca/publications/concurrency-ddj.htm)


## Power is Important

- Cooling for integrity (run at 9GHz with liquid nitrogen)
- Battery (mobile)
- Cloud computing power costs (including cooling)
  - [arctic data centres](https://www.bbc.co.uk/news/technology-40922048)
  - [underwater data centres](https://www.bbc.co.uk/news/technology-44368813)
- [Bitcoin is expensive](https://powercompare.co.uk/bitcoin-mining-electricity-map/)
- [Dark silicon](https://www.cc.gatech.edu/~hadi/doc/paper/2012-toppicks-dark_silicon.pdf) is a thing


## Virtualisation vs Parallelisation

- Opposite directions
- Number of linear clock cycles not so important
- Some tasks can effectively be parallelised, some can't
- Send the program to the data: google search


[Amdahl's law](https://en.wikipedia.org/wiki/Amdahl%27s_law)


## Cloud Computing

- http v1.1 (1997) multiple names for one IP address
- virtualisation vs timesharing
- docker images: multiple machines on same physical machine
- Durham php version stuck at 5.3 because one server multiple users


# Advantages


## Matrix Multiplication

- Remarkable variation in FLOPS for the same FLOPs
- All dependent on working with memory architecture
- See [CCS L4 coursework](https://github.com/wence-/ccs-l4-coursework-2018)
- Based on [BLIS: a framework for rapidly instantiating BLAS functionality](https://dl.acm.org/citation.cfm?id=2764454)


## Basic

```
for (j = 0; j < n; j++) {
  for (p = 0; p < k; p++) {
    for (i = 0; i < m; i++) {
      c[j*ldc + i] = c[j*ldc + i] + a[p*lda + i] * b[j*ldb + p];
    }
  }
}
```


## Bad order

```
for (j = 0; j < n; j++) {
  for (i = 0; i < m; i++) {
    for (p = 0; p < k; p++) {
      c[j*ldc + i] = c[j*ldc + i] + a[p*lda + i] * b[j*ldb + p];
    }
  }
}

```


Thanks to [Lawrence Mitchell](https://www.dur.ac.uk/computer.science/staff/profile/?id=17243)


# Disadvantages


## Meltdown/Spectre Vulnerabilities

- Considered "catastrophic" and "[unbelievable](https://www.bloomberg.com/news/articles/2018-01-08/-it-can-t-be-true-inside-the-semiconductor-industry-s-meltdown)"
- Identified late 2017, publicised early 2018, [reading privileged memory with a side-channel](https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html)
- Spectre uses speculative branching to allow one user process to access another
- Spectre affects some Intel, AMD and ARM chips
- Meltdown uses out-of-order execution with exceptions, Intel (from 2011) and possibly ARM



## Spectre

- Change CPU state depending on memory values you are not allowed to access (at location `data[offset]`)
- Speculative execution

```
if (offset < arr1->length) {
 value = arr1->data[offset];
 index2 = ((value&1)*0x100)+0x200;
 if (index2 < arr2->length) {
   value2 = arr2->data[index2];
 }
}
```


- Measure time to access `arr2->data[0x200]` and `arr2->data[0x300]`
- Depends on whether it is in cache i.e. on LSb of `value`


## Exploitation

- None reported in the wild
- Some variants rely on executing user code in kernel space with verified JIT eBPF bytecode execution
- Some rely on MESI protocol to keep values in cache for longer by sharing between cores
- JavaScript potentially allows remote exploitation


## Mitigation

- Many mitigations affect performance by flushing cache (TLB)
- Meltdown has kernel patch, Spectre doesn't
- 'Spectre may haunt us for a while'
- Intel announced fix for new hardware in October 2018
- New variants announced in November 2018
- Performance at price of security


# Summary


- Some things change more than others
- Knowing how things work can help you
  - Make things better (speedup)
  - Make things worse (vulnerability)
- Long time since anybody knew all about how a computer works
- Integrating knowledge is important
- 'May you live in interesting times'







