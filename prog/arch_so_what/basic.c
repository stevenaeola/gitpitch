void gemm(int m, int n, int k,
          const double *a, int lda,
          const double *b, int ldb,
          double *c, int ldc)
{
  int i, j, p;
  for (j = 0; j < n; j++) {
    for (p = 0; p < k; p++) {
      for (i = 0; i < m; i++) {
        c[j*ldc + i] = c[j*ldc + i] + a[p*lda + i] * b[j*ldb + p];
      }
    }
  }
}
