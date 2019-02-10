void gemm(int m, int n, int k,
          const double *a, int lda,
          const double *b, int ldb,
          double *c, int ldc)
{
  int i, j, p;
  for (j = 0; j < n; j++) {
    for (i = 0; i < m; i++) {
      for (p = 0; p < k; p++) {
        c[j*ldc + i] = c[j*ldc + i] + a[p*lda + i] * b[j*ldb + p];
      }
    }
  }
}
