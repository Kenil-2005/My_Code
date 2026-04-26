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
        printf("%d\n",temp->n);

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
            printf("%d\n",temp->n);

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
            printf("%d\n",stack2[top2--]->n);
        }
                
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
        printf("n\1. Preoder\n2. Inoder\n3. Postoder\n");
        printf("Enter your TRAVERSAL :\n");
        scanf("%d",&d);
        if (d == 1)
        {
            printf("\n--Preorder--\n");
            printf("\nrecursing function\n");
            preorderr(root);
            printf("\nnon-recursing function\n");
            preordernr(root);
        }
        else if (d == 2)
        {
            printf("\n--Inorder--\n");
            printf("\nrecursing function\n");
            inorderr(root);
            printf("\nnon-recursing function\n");
            inordernr(root);
        }
        else if (d == 3)
        {
            printf("\n--Postorder--\n");
            printf("\nrecursing function\n");
            postorderr(root);
            printf("\nnon-recursing function\n");
            postordernr(root);
        }
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
        goto lable;
    }
return 0;
}