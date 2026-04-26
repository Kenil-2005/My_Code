#include <stdio.h>
#include <stdlib.h>

struct avltree
{
    int a;
    struct avltree *right;
    struct avltree *left;
    int height;
};

int height(struct avltree *root)
{
    if (root == NULL)
        return 0;
    return root->height;
}

int max(int a, int b)
{
    return (a > b) ? a : b;
}

struct avltree *create(int n)
{
    struct avltree *temp;
    temp = (struct avltree *)malloc(sizeof(struct avltree));
    temp->right = temp->left = NULL;
    temp->a = n;
    temp->height = 1;
    return temp;
}

struct avltree *rightrotation(struct avltree *y)
{
    struct avltree *x = y->left;
    struct avltree *t2 = x->right;

    x->right = y;
    y->left = t2;

    y->height = max(height(y->left), height(y->right)) + 1;
    x->height = max(height(x->left), height(x->right)) + 1;

    return x;
}

struct avltree *leftrotation(struct avltree *x)
{
    struct avltree *y = x->right;
    struct avltree *t2 = y->left;

    y->left = x;
    x->right = t2;

    x->height = max(height(x->left), height(x->right)) + 1;
    y->height = max(height(y->left), height(y->right)) + 1;

    return y;
}

int getbalance(struct avltree *temp)
{
    if (temp == NULL)
    {
        return 0;
    }
    return height(temp->left) - height(temp->right);
}

struct avltree *insert(struct avltree *root, int b)
{
    if (root == NULL)
    {
        return create(b);
    }
    else
    {
        if (b <= root->a)
        {
            root->left = insert(root->left, b);
        }
        else
        {
            root->right = insert(root->right, b);
        }
    }

    root->height = 1 + max(height(root->left), height(root->right));

    int balance = getbalance(root);

    if (balance > 1 && b < root->left->a)
        return rightrotation(root);

    if (balance < -1 && b > root->right->a)
        return leftrotation(root);
    
    if (balance > 1 && b > root->left->a)
    {
        root->left = leftrotation(root->left);
        return rightrotation(root);
    }
    
    if (balance < -1 && b < root->right->a)
    {
        root->right = rightrotation(root->right);
        return leftrotation(root);
    }

    return root;
}

void display(struct avltree *root)
{
    if (root != NULL)
    {
        display(root->left);
        printf("%d ", root->a);
        display(root->right);
    }
}

void freelist(struct avltree *root)
{
    if (root != NULL)
    {
        freelist(root->left);
        freelist(root->right);
    }
}

int main()
{
    struct avltree *root;
    root = NULL;
    int i, d;
    printf("1. Insert\n2. Display\n3. Exit\n");
    do
    {
        printf("\nEnter your choice\n");
        scanf("%d", &i);
        switch (i)
        {
        case 1:
            printf("Enter value:\n");
            scanf("%d", &d);
            root = insert(root, d);
            break;
        case 2:
            printf("\nDisplaying...\n");
            display(root);
            break;
        case 3:
            printf("Exiting...");
            freelist(root);
            break;

        default:
            printf("Enter valid choice (1-3)\n");
            break;
        }
    } while (i != 3);
    return 0;
}