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

void inorderr(struct bstree *root)
{
    if (root != NULL)
    {
        inorderr(root->left);
        printf("%d\n", root->n);
        inorderr(root->right);
    }
}

void preorderr(struct bstree *root)
{
    if (root != NULL)
    {
        printf("%d\n", root->n);
        preorderr(root->left);
        preorderr(root->right);
    }
}

void postorderr(struct bstree *root)
{
    if (root != NULL)
    {
        postorderr(root->left);
        postorderr(root->right);
        printf("%d\n", root->n);
    }
}

void inordernr(struct bstree *root)
{
    struct bstree *stack[100];
    int top = -1;
    struct bstree *temp = root;

    while (temp != NULL || top >= 0)
    {
        while (temp != NULL)
        {
            stack[++top] = temp;
            temp = temp->left;
        }

        temp = stack[top--];
        printf("%d\n", temp->n);

        temp = temp->right;
    }
}

void preordernr(struct bstree *root)
{
    struct bstree *stack[100];
    int top = -1;
    if (root != NULL)
    {
        stack[++top] = root;

        while (top >= 0)
        {
            struct bstree *temp = stack[top--];
            printf("%d\n", temp->n);

            if (temp->right != NULL)
            {
                stack[++top] = temp->right;
            }

            if (temp->left != NULL)
            {
                stack[++top] = temp->left;
            }
        }
    }
}

void postordernr(struct bstree *root)
{
    struct bstree *stack1[100];
    struct bstree *stack2[100];
    int top1 = -1;
    int top2 = -1;

    if (root != NULL)
    {
        stack1[++top1] = root;

        while (top1 >= 0)
        {
            struct bstree *temp = stack1[top1--];
            stack2[++top2] = temp;

            if (temp->left != NULL)
            {
                stack1[++top1] = temp->left;
            }
            if (temp->right != NULL)
            {
                stack1[++top1] = temp->right;
            }
        }
        while (top2 >= 0)
        {
            printf("%d\n", stack2[top2--]->n);
        }
    }
}

int main()
{
    struct bstree *root;
    root = NULL;

    root = insert(root,20);
    root = insert(root,14);
    root = insert(root,28);
    root = insert(root,12);
    root = insert(root,2);
    root = insert(root,8);
    root = insert(root,54);

    printf("\n--Preorder--\n");
    printf("\nrecursing function\n");
    preorderr(root);
    printf("\nnon-recursing function\n");
    preordernr(root);
    printf("\n--Inorder--\n");
    printf("\nrecursing function\n");
    inorderr(root);
    printf("\nnon-recursing function\n");
    inordernr(root);
    printf("\n--Postorder--\n");
    printf("\nrecursing function\n");
    postorderr(root);
    printf("\nnon-recursing function\n");
    postordernr(root);

    return 0;
}