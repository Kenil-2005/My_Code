#include <stdio.h>
#include <stdlib.h>

struct queue
{
    int n;
    struct queue *next;
} *rear, *front;

int isempty()
{
    if (rear == NULL && front == NULL)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void insert(int a)
{
    struct queue *t;
    t = (struct queue *)malloc(sizeof(struct queue));
    t->next = NULL;
    t->n = a;
    if (rear == NULL && front == NULL)
    {
        rear = t;
        front = t;
    }
    else
    {
        front->next = t;
        front = t;
    }
}

int delet()
{
    int x = -99;
    struct queue *t;
    if (rear == NULL && front == NULL)
    {
        printf("The queue is empty\n");
        return x;
    }
    else if (rear == front)
    {
        x = rear->n;
        rear = front = NULL;
        return x;
    }
    else
    {
        t = rear;
        rear = rear->next;
        x = t->n;
        free(t);
        return x;
    }
}

int count()
{
    struct queue *t;
    if (isempty())
    {
        printf("The queue is empty\n");
        return -99;
    }
    else
    {
        int i;
        for (i = 0, t = rear; t != front; t = t->next, i++);
        return i + 1;
    }
}

void display()
{
    struct queue *t;
    if (!isempty())
    {
        int i;
        t = rear;
        printf("displaying...\n");
        while (t != front)
        {
            printf("%d\n",t->n);
            t = t->next;
        }
        printf("%d\n",t->n);
    }
    else
    {
        printf("The queue is empty\n");
    }
}

void freelist()
{
    if (isempty())
    {
        return;
    }

    struct queue *t;
    while (rear != front)
    {
        t = rear;
        rear = rear->next;
        free(t);
    }
    free(rear);
    rear = front = NULL;
}

int main()
{
    int choice, x, i,k;
    rear = NULL;
    front = NULL;

    printf("\n1. Insert\n2. Delete\n3. Display\n4. Count\n5. Exit\n");

    do
    {
        printf("\nEnter your choice : \n");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter value : \n");
            scanf("%d", &i);
            insert(i);
            break;
        case 2:
            x = delet();
            if (x != -99)
            {
                printf("The deleted value is : %d\n", x);
            }
            break;
        case 3:
            display();
            break;
        case 4:
            i = count();
            if (i != -99)
            {
                printf("The count is : %d", i);
            }
            break;
        case 5:
            printf("Exiting...\n");
            freelist();
            break;
        default:
            printf("Enter valid value (1-5)\n");
            break;
        }
    } while (choice != 5);
}
