#include <stdio.h>
#include <conio.h>

struct stack
{
    int a[15];
    int top;
} s1;

int isfull()
{
    if (s1.top == 14)
        return 1;
    else
        return 0;
}

int isempty()
{
    if (s1.top == -1)
        return 1;
    else
        return 0;
}

void push(int n)
{
    if (isfull())
    {
        printf("Cannot push the stack is full\n");
    }
    else
    {
        s1.top++;
        s1.a[s1.top] = n;
    }
}

int pop()
{
    int x = -1;
    if (isempty())
    {
        printf("Cannot pop the stack is empty\n");
        return x;
    }
    else
    {
        x = s1.a[s1.top];
        s1.top--;
        return x;
    }
}

int peep(int k)
{
    if (isempty())
    {
        printf("cannot peep the stack is empty\n");
        return -99;
    }
    else if (k >= 0 && k <= s1.top)
    {
        return s1.a[k-1];
    }
    else
    {
        printf("Enter valid position\n");
    }
}

int main()
{
    int k, e, n, i, l;
    s1.top = -1;
    printf("\nFor Push : 1\n");
    printf("For Pop : 2\n");
    printf("For Peep : 3\n");
    printf("For display: 4\n");
    printf("For Exit : 5\n");
label:
    printf("Enter What you want to do : \n");
    scanf("%d", &n);
    printf("\n");

    if (n > 0 && n < 6)
    {
        if (n == 1)
        {
            printf("Enter the value you want to push :\n");
            scanf("%d", &k);
            printf("\n");
            push(k);
            goto label;
        }
        else if (n == 2)
        {
            l = pop();
            if (l != -1)
            {
                printf("%d\n", l);
                printf("\n");
            }
            goto label;
        }
        else if (n == 3)
        {
            printf("Enter the position of :\n");
            scanf("%d", &e);
            i = peep(e);
            if (i != -99)
            {
                printf("The value is : %d\n", i);
                printf("\n");
            }
            goto label;
        }
        else if (n == 4)
        {
            for (i = 0 ; i <= s1.top; i++)
            {
                printf("%d\n", peep(i));
                printf("\n");
            }
            goto label;
        }
        else if (n == 5)
        {
            printf("exit\n");
            printf("\n");
        }
    }
    else
    {
        printf("Enter valid no. \n");
        printf("\n");
        goto label;
    }
    return 0;
}
