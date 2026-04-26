#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

struct node
{
    int n;
    struct node *prev, *next;
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
        temp->prev = temp->next = NULL;
        printf("Enter data\n");
        scanf("%d", &temp->n);
        if (head == NULL)
        {
            head = temp;
        }
        else
        {
            temp->prev = temp1;
            temp1->next = temp;
        }
        temp1 = temp;

        printf("\nCONTINUE y/n \n");
        getchar();
        scanf(" %c", &ch);
    }
    return head;
}

void display(struct node *h, int a)
{
    struct node *temp;
    temp = h;
    if (temp == NULL)
    {
        printf("The list is empty\n");
    }
    else
    {
        printf("Displaying\n");
        if (a == 1)
        {
            printf("\n");
            while (temp != NULL)
            {
                printf("%d ", temp->n);
                printf("\n");
                temp = temp->next;
            }
        }
        else
        {
            printf("\n");
            for (temp = h; temp->next != NULL; temp = temp->next);
            for (; temp->prev != NULL; temp = temp->prev)
            {
                printf("%d\n", temp->n);
            }
            printf("%d\n", temp->n);
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
    h = NULL;
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
            temp->next = temp->prev = NULL;
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
                    h->prev = temp;
                    h = temp;
                }
                else if (p == count(h) + 1)
                {
                    for (i = 1, temp1 = h; i < p -1; temp1 = temp1->next, i++);
                    temp->prev = temp1;
                    temp1->next = temp;
                }
                else
                {
                    for (i = 1, temp1 = h; i < p - 1; temp1 = temp1->next, i++);
                    (temp1->next)->prev = temp;
                    temp->next = temp1->next;
                    temp1->next = temp;
                }
            }
            return h;
        }
    }
}

struct node *delet(struct node *h, int p)
{
    struct node *temp, *temp1;
    int i;
    if (h == NULL)
    {
        printf("The list is empty\n");
        return h;
    }
    else
    {
        if (p < 1 || p > count(h))
        {
            printf("Enter valid possition\n");
            return h;
        }
        else if (p == 1)
        {
            temp = h;
            h = h->next;
            h->prev = NULL;
            free(temp);
            return h;
        }
        else if (p  == count(h))
        {
            temp = h;
            for (i = 1, temp = h; i < p - 2; temp = temp->next, i++);
            printf("%d",temp->n);
            getch();
            temp1 = temp->next;
            temp->next = NULL;
            temp1->prev = NULL;
            free(temp1);
            return h;
        }
        else
        {
            temp = h;
            for (i = 1, temp = h; i < p - 2; temp = temp->next, i++);
            temp1 = temp->next;
            (temp1->next)->prev = temp;
            temp->next = temp1->next;
            free(temp1);
            return h;
        }
    }
}

int main()
{
    int choice, p, k;
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
            printf("1.forward_display\n2.backward_display\n");
            scanf("%d", &k);
            display(h, k);
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
            printf("Enter possition : \n");
            scanf("%d", &p);
            if (p == 1)
            {
                printf("front node deleted\n");
            }
            else if (p == count(h)+1)
            {
                printf("end node deleted\n");
            }
            else
            {
                printf("deleted node before specified\n");
            }
            h = delet(h, p);
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
    getch();
    return 0;
}
