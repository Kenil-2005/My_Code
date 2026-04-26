#include <stdio.h>
#include <stdlib.h>

struct bstree
{
    int n;
    struct bstree *right, *left;
};

struct bstree *create(int d)
{
    struct bstree *temp;
    temp = (struct bstree *)malloc(sizeof(struct bstree));
    temp->right = temp->left = NULL;
    temp->n = d;
    return temp;
}

struct bstree *insert(struct bstree *root, int d)
{
    if (root == NULL)
    {
        return create(d);
    }
    else
    {
        if (d <= root->n)
        {
            root->left = insert(root->left, d);
        }
        else
        {
            root->right = insert(root->right, d);
        }
        return root;
    }
}

void display(struct bstree *root)
{
    if (root != NULL)
    {
        display(root->left);
        printf("%d\n", root->n);
        display(root->right);
    }
}

void freelist(struct bstree *root)
{
    if (root != NULL)
    {
        freelist(root->left);
        freelist(root->right);
        free(root);
    }
}

int main()
{
    struct bstree *root;
    root = NULL;
    int i, d;

    printf("\n1. insert\n2. display\n3. exit\n");
lable:
    printf("Enter choice :\n");
    scanf("%d", &i);
    if(i == 1)
    {
        printf("Enter value :\n");
        scanf("%d", &d);
        root = insert(root, d);
        goto lable;
    }
    else if (i == 2)
    {
        printf("\nDislaying...\n");
        display(root);
        goto lable;
    }
    else if (i == 3)
    {
        printf("Exiting...\n");
        freelist(root);
    }
    else
    {
        printf("Enter valid choice (1-3)\n");
    }
return 0;
}