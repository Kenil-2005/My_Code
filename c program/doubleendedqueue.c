#include<stdio.h>
#define N 20

struct Queue
{
    int a[N];
    int front,rear;
}Q1;

int isfull()
{
    if (Q1.rear == Q1.front-1)
    {
        return 1;
    }
    else 
    {
        return 0;
    }
}

int isempty()
{
    if (Q1.rear == -1 && Q1.front == N)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void insert(int n,int a)
{
    if (isfull())
    {
        printf("\nThe queue is full can't insert\n");
    }
    else if (n == 1)
    {
        Q1.rear++;
        Q1.a[Q1.rear] = a;
    }
    else if (n == 2)
    {
        Q1.front--;
        Q1.a[Q1.front] = a;
    }
}

int delete(int n)
{
    int x = -1;
    if (isempty())
    {
        printf("\nThe queue is empty can't delete\n");
        return x;
    }
    else if (n == 1)
    {
        x = Q1.a[Q1.rear];
        Q1.rear--;
        return x;
    }
    else if (n == 2)
    {
        x = Q1.a[Q1.front];
        Q1.front++;
        return x;
    }
}
int main()
{
    int k,n,i,e;
    Q1.front = N;
    Q1.rear = -1;
    lable:
    printf("\n1.insert\n2.delete\n3.exit\n");
    printf("\nEnter your choice:\n");
    scanf("%d",&i);
    if (i == 1)
    {
        printf("\n1.in rear\n2.in front\n");
        printf("Enter your choice:\n");
        scanf("%d",&e);
        printf("\nEnter value:\n");
        scanf("%d",&k);
        insert(i,e);
        goto lable;
    }
    else if (i == 2)
    {
        printf("\n1.in rear\n2.in front\n");
        printf("Enter your choice:\n");
        scanf("%d",&e);
        n = delete(e);
        if (n != -1)
        {
            printf("%d",n);
        }
        goto lable;
    }
    else if (i == 3)
    {
        printf("\nExiting...\n");
    }
    else
    {
        printf("\nEnter valide choice(1,2,3)\n");
        goto lable;
    }
    return 0;
}
