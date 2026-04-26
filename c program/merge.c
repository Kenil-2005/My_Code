#include <stdio.h>
#define N 5

void merge(int a[], int lb, int mid, int ub)
{
    int i, j, k;
    int n1 = mid - lb + 1;
    int n2 = ub - mid;

    int l[n1], r[n2];

    for (i = 0; i < n1; i++)
    {
        l[i] = a[lb + i];
    }

    for (j = 0; j < n1; j++)
    {
        r[j] = a[mid + 1 + j];
    }

    i = 0;
    j = 0;
    k = lb;

    while (i < n1 && j < n2)
    {
        if (l[i] <= r[j])
        {
            a[k] = l[i];
            i++;
        }
        else
        {
            a[k] = r[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        a[k] = l[i];
        i++;
        k++;
    }
    while (j < n2)
    {
        a[k] = r[j];
        j++;
        k++;
    }
}

void mergesort(int a[], int lb, int ub)
{
    if (lb < ub)
    {
        int mid = lb + (ub - lb) / 2;
        mergesort(a, lb, mid);
        mergesort(a, mid + 1, ub);
        merge(a, lb, mid, ub);
    }
}

int main()
{
    int i, a[N];

    printf("Enter values :\n");
    for (i = 0; i < N; i++)
    {
        scanf("%d", &a[i]);
    }

    mergesort(a, 0, N - 1);

    printf("\nsorted array\n");
    for (i = 0; i < N; i++)
    {
        printf("%d\n", a[i]);
    }
    return 0;
}