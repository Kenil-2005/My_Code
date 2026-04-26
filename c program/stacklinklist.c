#include <stdio.h>
#include <stdlib.h>

struct stack
{
    int n;
    struct stack *next;
} *top;

int isempty()
{
    if (top == NULL)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

int count()
{
    struct stack *t;
    int i = -99;
    if (isempty())
    {
        printf("The stack is empty\n");
    }
    else
    {
        for (i = 1, t = top; t != NULL; t = t->next, i++);
    }
    return i;
}

void push(int n)
{
    struct stack *t;
    t = (struct stack *)malloc(sizeof(struct stack));
    t->n = n;
    t->next = NULL;
    if (top == NULL)
    {
        top = t;
    }
    else
    {
        t->next = top;
        top = t;
    }
}

void freelist()
{
    struct stack *t;
    while (top != NULL)
    {
        t = top;
        top = top->next;
        free(t);
    }
}

int display(int p)
{
    struct stack *t;
    int i;
    if (top == NULL)
    {
        printf("The stack is empty\n");
        return -99;
    }
    else
    {
        int j = count();
        if (p >= 1 && p <= j)
        {
            for (t = top, i = 1; i < p; t = t->next, i++);
            return(t->n);
        }
        else if (p > j)
        {
            printf("Enter valid position\n");
            return -99;
        }
    }
}

int pop()
{
    int x = -99;
    struct stack *t;
    if (top != NULL)
    {
        t = top;
        x = t->n;
        top = top->next;
        free(t);
    }
    else
    {
        printf("Stack is empty\n");
    }
    return x;
}

int peep(int p)
{
    int x = -99;
    x = display(p);
    return x;
}

int main()
{
    int choice, i, k, e;
    top = NULL;

    printf("\n1. Push\n2. pop\n3. peep\n4. Display\n5. Empty Stack\n6. exit\n");
    do
    {
        printf("Enter your choice :\n");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter value :\n");
            scanf("%d", &k);
            push(k);
            break;
        case 2:
            i = pop();
            if (i != -99)
            {
                printf("The pop value is : %d\n", i);
            }
            break;
        case 3:
            printf("Enter position\n");
            scanf("%d", &k);
            i = peep(k);
            if (i != -99)
            {
                printf("The peep value is :%d\n", i);
            }
            else
            {
                break;
            }
            break;
        case 4:
            for (e = 1;e < count(); e++)
            {
                i = display(e);
                if (i != -99)
                {
                    printf("%d\n", i);
                }
            }
            break;
        case 5:
            if (top == NULL)
            {
                printf("The stack is empty\n");
            }
            else
            {
                while (!isempty())
                {
                    printf("%d\n", pop());
                }
            }
            break;
        case 6:
            printf("Exiting...\n");
            freelist();
            break;
        default:
            printf("Enter valid choice (1-6)\n");
            break;
        }
    } while (choice != 6);
}
