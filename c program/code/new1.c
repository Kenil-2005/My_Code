#include <stdio.h>
#include <conio.h>
void main()
{
    int i, max, min, a, b, c;
    // clrscr();
    printf("Enter value\n");
    scanf("%d", &a);
    printf("Enter value\n");
    scanf("%d", &b);
    printf("Enter value\n");
    scanf("%d", &c);
    max = a;
    min = a;
    if (max <= a)
    {
        max = a;
        if (max <= b)
        {
            max = b;
        }
        if (max <= c)
        {
            max = c;
        }
    }
    if (min >= a)
    {
        min = a;
        if (min >= b)
        {
            min = b;
        }
        if (min >= c)
        {
            min = c;
        }
    }
    printf("max = %d\nmin = %d\n", max, min);
    getch();
}

#include <stdio.h>
#include <conio.h>
void main()
{
    int i;
    char k, j;
    char a[20];
    clrscr();
    printf("Enter value in string : \n");
    gets(a);
    printf("Enter a charecter that you want to changed : \n");
    scanf(" %c", &k);
    printf("Enter a charecter that you want to change into : \n");
    scanf(" %c", &j);
    for (i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == k)
        {
            a[i] = j;
        }
    }
    printf("The new string is :\n");
    for (i = 0; i <= 10; i++)
    {
        printf("%c ", a[i - 1]);
    }
    getch();
}

//

#include <stdio.h>
#include <conio.h>
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

void main()
{
    int i, a[N];
    clrscr();

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
    getch();
}

//

#include <stdio.h>
#include <conio.h>
#define N 20

struct Queue
{
    int a[N];
    int front, rear;
} Q1;

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

void main()
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
    getch();
}

//

#include <stdio.h>
#include <conio.h>
#include <math.h>

void main()
{
    int n, i;
    float a = 0.0, g = 1.0, h = 0.0;
    clrscr();

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    float numbers[n];

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++)
    {
        scanf("%f", &numbers[i]);
        a = a + numbers[i];
        g = g * numbers[i];
    }

    float arithmetic_mean = a / n;
    float geometric_mean = pow(g, 1.0 / n);

    printf("Avrege: %f\n", arithmetic_mean);
    printf("Geometric Mean: %f\n", geometric_mean);

    getch();
}
