#include<stdio.h>
#include<conio.h>
#include<string.h>

#define N 20

struct stack
{
    char a[N];
    int top;
}s1;

int isfull()
{
    if (s1.top == N-1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

int isempty()
{
    if (s1.top == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void push(char n)
{
    if (isfull(s1))
    {
        printf("cannot pushh the stack is full");
    }
    else
    {
        s1.top++;
        s1.a[s1.top] = n;
    }
    //printf("pushing...\n");
}

char pop()
{
    char x;
    if (isempty())
    {
        printf("Cannot pop the stack is empty\n");
        //printf("poping...\n");
        return '\0';
    }
    else
    {
        //printf("poping...\n");
        x = s1.a[s1.top];
        s1.top--;
        return x;
    }   
}

int ischarecter(char k)
{
    if ((k >= 'a' && k <= 'z' ) || ( k >= 'A' && k <= 'Z'))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

//int isopretor(char k)
//{
//    if (k == '+' || k == '/' || k == '-' || k == '*' || k == '^' || k == '%')
//    {
//        return 1;
//    }
//    else
//    {
//        return 0;
//    }
//}
void result()
{
    while (!isempty())
    {
        printf("%c ",pop());
    }
    
}

int main()
{
    s1.top = -1;
    char e,f,k[N];
    int i;
    
    printf("\nEnter eqution:\n");
    gets(k);

    for ( i = 0; k[i] != '\0'; i++)
    {
        if (ischarecter(k[i]))
        {
            //printf("hello");
            push(k[i]);
        }
        else 
        {
            e = pop();
            f = pop();
            push(e);
            push(k[i]);
            push(f);
        }
    }
    result();

    return 0;
}