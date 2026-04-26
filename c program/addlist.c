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
                    for (i = 1, temp1 = h; i < p - 1; temp1 = temp1->next, i++)
                        ;
                    temp->next = temp1->next;
                    temp1->next = temp;
                }
            }
            return h;
        }
    }
}

void add(struct node *h, struct node *k, struct node *o)
{
    struct node *temp, *temp1, *temp2;
    temp2 = o;
    int m, n, i, l, s;
    m = count(h);
    n = count(k);
    if (m <= n)
    {
        l = n;
    }
    else
    {
        l = m;
    }
    printf("hello\n");
    for (temp = h, temp1 = k, i = 1; i <= l; temp = temp->next, temp1 = temp1->next, i++)
    {
        s = temp->n + temp1->n;
        temp2->n = s;
        temp2 = temp2->next;
        return o;
    }
}

int main()
{
    struct node *h, *k, *o;
    printf("Createing... h\n");
    h = create();
    printf("Createing... k\n");
    k = create();
    printf("Createing... o\n");
    o = create();
    printf("count of h =%d\n",count(h));
    printf("count of k =%d\n",count(k));
    add(h, k, o);
    printf("displaying... h\n");
    display(h);
    printf("displaying... k\n");
    display(k);
    printf("displaying... o\n");
    display(o);
    freelist(h);
    freelist(k);
    freelist(o);
    return 0;
}
