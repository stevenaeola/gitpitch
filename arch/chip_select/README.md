
## Computer Architecture
## Desiging Chip Select


## Steps

* Identify top and bottom of range in hex
* Translate to boolean variables on address bus
* Identify variables that are always the same
* Simplify the rest out


## Example

The ARM Cortex-M3 processor has a ficed memory map working with a 32-bit address bus. 

The memory map allows for up to 1 GiB of external memory, starting at location 0x60000000

* Design an address decoder circuit for a 0.5GiB memory device connected to the processor
* Design an address decoder circuit for a 1.0GiB memory device connected to the processor



## Identify range

Specified either as start (low) or end (high) address.

Example: 

`\[
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]`

`\[
0.5GiB = 2^{19} B
\]`


