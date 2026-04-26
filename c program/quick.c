#include <stdio.h>
#define N 5

void swap(int *a, int *b)
{
    int t;
    t = *a;
    *a = *b;
    *b = t;
}

int pratition(int a[], int lb, int ub)
{
    int poivet = a[lb];
    int start = lb;
    int end = ub;
    while (start < end)
    {
        if (a[start] <= poivet)
        {
            start++;
        }
        if (poivet < a[end])
        {
            end--;
        }
        if (start < end)
        {
            swap(&a[start], &a[end]);
        }
    }
    swap(&a[lb], &a[end]);
    return end;
}

void quick(int a[], int lb, int ub)
{
    if (lb < ub)
    {
        int loc = pratition(a, lb, ub);
        quick(a, lb, loc - 1);
        quick(a, loc + 1, ub);
    }
}

int main()
{
    int a[N];
    int i, j, t;

    printf("Enter value :\n");
    for (i = 0; i < N; i++)
    {
        scanf("%d", &a[i]);
    }

    quick(a, 0, N - 1);

    printf("\nsorted array\n");
    for (i = 0; i < N; i++)
    {
        printf("%d\n", a[i]);
    }
    return 0;
}