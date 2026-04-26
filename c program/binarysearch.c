#include<stdio.h>

#define N 5

void bsearch(int a[N] , int n)
{
    int l,u,m;
    l = 0;
    u = N-1;
    while (l <= u)
    {
        m = (l + u) / 2;
        if (a[m] == n)
        {
            printf("%d is found at position %d\n\n",n,m+1);      
            return;
        }
        else if (a[m] > n)
        {
            u = m - 1;
        }
        else
        {
            l = m + 1;
        }
    }
    if (l > u)
    {
        printf("%d is not found\n",n);
    }
}

int main()
{
    int a[N],i,n;
    printf("enter value:\n");
    for ( i = 0; i < N; i++)
    {
        scanf("%d",&a[i]);
    }
    
    printf("Enter value for search :\n");
    scanf("%d",&n);

    bsearch(a,n);
    return 0;
}