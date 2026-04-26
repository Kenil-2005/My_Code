#include<stdio.h>
#include<string.h>
#define N 20

struct stack
{
    char a[N][5];
    int top;
};

int isfull(struct stack* s)
{
    if((s)->top == N - 1)
        return 1;
    else
        return 0;
}

int isempty(struct stack* s)
{
    if ((s)->top == -1)
        return 1;
    else
        return 0;
}

void push(struct stack* s ,char n[N])
{
    int i;
    if (isfull(s))
    {
        printf("Cannot push the stack is full");
    }
    else
    {
        (s)->top++;
        strcpy((s)->a[(s)->top],n);
        printf("pushing...\n");
    }
}

char *pop(struct stack* s)
{
    int i;
    char x[N] = "\0";
    if (isempty(s))
    {
        printf("Cannot pop value stack is empty");
        return NULL;
    }
    else
    {
        strcpy(x,(s)->a[(s)->top]);
        (s)->top--;
        printf("poping...\n");
        return x;
    }
}

int isoprerand(char c)
{
    return (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z');
}

char *postflix_to_infix( char k[] , char e[])
{
    struct stack s1;
    s1.top = -1;
    int i;
    for ( i = 0;k[i] != '\0'; i++)
        {
            if (isoprerand(k[i]))
            {
                push(&s1,k[i]);
            }
            else 
            {
                char o1,o2;
                o2 = pop(&s1);
                o1 = pop(&s1);
                sprintf(e + strlen(e),"%c%c%c",o1,k[i],o2);
                push(&s1,e[strlen(e) - 1]);
            }   
        }
    e[strlen(e)] = '\0';
}

int main()
{
    char k[N];
    char e[N];
    printf("Enter eqution:\n");
    scanf("%s",k);
    postflix_to_infix(k,e);
    printf("%s",e);
  
    return 0;
}

