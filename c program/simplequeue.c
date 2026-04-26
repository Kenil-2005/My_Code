#include <stdio.h>
#include <conio.h>
#define N 20

struct Queue
{
    int a[N];
    int front, rear;
}Q1;

int isfull()
{
    if (Q1.rear == N - 1)
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
    if (Q1.front == 0 && Q1.rear == -1)
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
    if (isfull())
    {
        printf("\nThe Queue is full\n");
    }
    else
    {
        Q1.rear++;
        Q1.a[Q1.rear] = b;
    }
}

int delete()
{
    int x = -99;
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
        printf("The deleted value is :  ");
        return x;
    }
}
void display()
{
    int x = Q1.front, i;
    if (isempty())
    {
        printf("\nThe Queue is empty\n");
    }
    else
    {
        printf("Displaying value:\n");
        for (i = x; i <= Q1.rear; i++)
        {
            printf("%d\n", Q1.a[i]);
        }
    }
}

int main()
{
    int i, b, c;
    Q1.front = 0;
    Q1.rear = -1;

    printf("1. Insert\n2. Delete\n3. Dispaly\n4. Exit\n");

lable:
    printf("\nEnter your choice:\n");
    scanf("%d", &i);
    if (i == 1)
    {
        printf("\nEnter value:\n");
        scanf("%d", &b);
        insert(b);
        goto lable;
    }
    else if (i == 2)
    {
        c = delete ();
        if (c != -99)
        {
            printf("%d\n", c);
        }
        goto lable;
    }
    else if (i == 3)
    {
        display();
        goto lable;
    }

    else if (i == 4)
    {
        printf("Exiting...");
    }
    else
    {
        printf("\nEnter valid choice(1,2,3,4)\n");
        goto lable;
    }
    return 0;
}