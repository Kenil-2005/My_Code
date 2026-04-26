#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

struct node
{
    int n;
    struct node *next;
};

struct node *create()
{
    struct node *head, *temp, *temp1;
    char ch = 'y';
    head = NULL;
    temp1 = NULL;
    while (ch == 'y')
    {
        temp = (struct node *)malloc(sizeof(struct node));
        if (temp == NULL)
        {
            printf("Memory allocation failed\n");
            return NULL;
        }
        temp->next = NULL;
        printf("Enter data\n");
        scanf("%d", &temp->n);
        if (head == NULL)
        {
            head = temp;
        }
        else
        {
            temp1->next = temp;
        }
        temp1 = temp;

        printf("\nCONTINUE y/n \n");
        getchar();
        scanf("%c", &ch);
    }
    return head;
}

void display(struct node *h)
{
    struct node *temp;
    temp = h;
    if (temp == NULL)
    {
        printf("The list is empty\n");
    }
    else
    {
        while (temp != NULL)
        {
            printf("%d ", temp->n);
            printf("\n");
            temp = temp->next;
        }
    }
}

int count(struct node *h)
{
    struct node *temp;
    int c = 0;
    temp = h;
    if (temp == NULL)
    {
        printf("The list is empty\n");
        return c;
    }
    for (temp = h; temp != NULL; temp = temp->next)
    {
        c++;
    }
    return c;
}

void freelist(struct node *h)
{
    struct node *temp;
    temp = h;
    if (h == NULL)
    {
        return;
    }
    while (h != NULL)
    {
        temp = h;
        h = h->next;
        free(temp);
    }
}

struct node *insert(struct node *h, int p)
{
    struct node *temp, *temp1;
    int i;
    if (h == NULL)
    {
        printf("The list is empty\n");
        return NULL;
    }
    else
    {
        if (p < 1 || p > count(h) + 1)
        {
            printf("Enter valid position\n");
            return NULL;
        }
        else
        {
            temp = (struct node *)malloc(sizeof(struct node));
            if (temp == NULL)
            {
                printf("Memory allocation failed\n");
                exit(1);
            }
            else
            {
                temp->next = NULL;
                printf("Enter data\n");
                scanf("%d", &temp->n);
                if (p == 1)
                {
                    temp->next = h;
                    h = temp;
                }
                else
                {
                    for (i = 1, temp1 = h; i < p - 1; temp1 = temp1->next, i++);
                    temp->next = temp1->next;
                    temp1->next = temp;
                }
            }
            return h;
        }
    }
}

struct node *delet(struct node *h,int p)
{
    struct node *temp, *temp1;
    int i;
    if (h == NULL)
    {
        printf("The list is empty\n");
        return (h);
    }
    else
    {
        if (p < 1 || p > count(h))
        {
            printf("Enter valid possition\n");
        }
        else if (p == 1)
        {
            temp = h;
            h = h->next;
            free(temp);
        }
        else
        {
            temp = h;
            for (i = 1, temp = h; i < p - 1; temp = temp->next, i++)
                ;
            temp1 = temp->next;
            temp->next = temp1->next;
            free(temp1);
        }
    }
    return (h);
}

int main()
{
    int choice, p;
    struct node *h = NULL;
    printf("\n1.Create\n2.Display\n3.Insert\n4.Count\n5.Delete\n6.Exit\n");

    do
    {
        printf("\nEnter choice:\n");
        scanf("%d", &choice);
        printf("\n");
        switch (choice)
        {
        case 1:
            printf("Creating\n");
            h = create();
            break;
        case 2:
            printf("displaying\n");
            display(h);
            break;
        case 3:
            printf("Enter possition : \n");
            scanf("%d", &p);
            if (p == 1)
            {
                printf("insert node at front\n");
            }
            else if (p == count(h) + 1)
            {
                printf("insert node at end\n");
            }
            h = insert(h, p);
            break;
        case 4:
            printf("No. of node = %d", count(h));
            printf("\n");
            break;
        case 5:
            printf("Enter possition\n");
            scanf("%d", &p);
            if (p == 1)
            {
                printf("front node deleted\n");
            }
            else if (p == count(h))
            {
                printf("end node deleted\n");
            }
            else
            {
                printf("specified node deleted");
            }
            h = delet(h,p);
            break;
        case 6:
            printf("exiting...\n");
            freelist(h);
            break;
        default:
            printf("Enter valid choice\n");
            break;
        }
    } while (choice != 6);
    return 0;
}
