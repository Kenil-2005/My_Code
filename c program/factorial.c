#include<stdio.h>

int main()
{
    int f,a,i;
    printf("Enter a number :\n");
    scanf("%d",&a);
    f = 1;
    a = 5;
    for ( i = 1; i <= a; i++)
    {
        f = f * i;
    }
    printf("%d! = %d",a,f);
    return 0;
}
