#include <stdio.h>
#define N 5

int main()
{
    int a[N], min_index;
    int i, j, t;

    printf("Enter value :\n");
    for (i = 0; i < N; i++)
    {
        scanf("%d", &a[i]);
    }

    for (i = 0; i < N - 1; i++)
    {
        min_index = i;
        for (j = i + 1; j < N; j++)
        {
            if (a[j] < a[min_index] )
            {
                min_index = j;
            }
        }

        if (min_index != i)
        {
            t = a[i];
            a[i] = a[min_index];
            a[min_index] = t;
        }
    }

    printf("The shorted array is :\n");
    for (i = 0; i < N; i++)
    {
        printf("%d\n", a[i]);
    }
    return 0;
}
