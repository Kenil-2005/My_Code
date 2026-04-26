#include<stdio.h>
#include<conio.h>
#define N 20

struct Queue
{
    int a[N];
    int front,rear;
}Q1;

int isfull()
{
    if (Q1.rear == N-1)
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
    if(Q1.front == 0 && Q1.rear == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void insert(int b)
{
    int i,j;
    if (isfull())
    {
        printf("\nThe Queue is full\n");
    }
    else 
    {
        if (isempty())
        {
            Q1.rear++;
            Q1.a[Q1.rear] = b;
        }
        else
        {
            for ( i = Q1.front; Q1.a[i] >= b && i <= Q1.rear; i++);
            for ( j = Q1.rear; j >= i ; j--)
            {
                Q1.a[ j+1 ] = Q1.a[j];
            }
            Q1.a[i] = b;
            Q1.rear++;
        }
    }
}

int delete()
{
    int x = -1;
    if (isempty())
    {
        printf("\nThe Queue is empty\n");
        return x;
    }
    else
    {
        x = Q1.a[Q1.front];
        if (Q1.front == Q1.rear)
        {
            Q1.front = 0;
            Q1.rear = -1;
        }
        else
        {
            Q1.front++;
        }
        return x;
    }
}

int main()
{
    int i,b,c;
    Q1.front = 0;
    Q1.rear = -1;
    
    printf("1. insert\n2. delete\n3. exit\n");
    
    lable:
    printf("\nEnter your choice:\n");
    scanf("%d",&i);
    if (i == 1)
    {
        printf("\nEnter value:\n");
        scanf("%d",&b);
        insert(b);
        goto lable;
    }
    else if (i == 2)
    {
        c = delete();
        if (c != -1)
        {
            printf("\n%d\n",c); 
        }
        goto lable;
    }
    else if (i == 3)
    {
        printf("Exiting...");
    }
    else
    {
        printf("\nEnter valid choice(1,2,3)\n");
        goto lable;
    }
    return 0;
}