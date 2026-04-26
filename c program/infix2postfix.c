#include <stdio.h>
#include <conio.h>

struct stack
{
    char a[20];
    int top;
} s1;

int isfull()
{
    if (s1.top == 19)
        return 1;
    else
        return 0;
}

int isempty()
{
    if (s1.top == -1)
        return 1;
    else
        return 0;
}

void push(char n)
{
    if (isfull())
    {
        printf("Cannot pushh the stack is full");
    }
    else
    {
        s1.top++;
        s1.a[s1.top] = n;
    }
}

char pop()
{
    char x;
    if (isempty())
    {
        printf("Canot pop value stack is empty");
        return 0;
    }
    else
    {
        x = s1.a[s1.top];
        s1.top--;
        return x;
    }
}
int precedence(char ch)
{
    if (ch == '+' || ch == '-')
    {
        return 3;
    }
    if (ch == '*' || ch == '/' || ch == '%')
    {
        return 4;
    }

    if (ch == '^')
    {
        return 5;
    }

    return -1;
}

int main()
{
    char a[30];
    int i, k, l;
    s1.top = -1;

    printf("\n");
    printf("Enter equation :\n");
    gets(a);

    printf("The postfix eqution is : \n");
    for (i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == '(')
        {
            push(a[i]);
        }
        else if (a[i] >= 'a' && a[i] <= 'z')
        {
            printf("%c", a[i]);
        }
        else if (a[i] == '+' || a[i] == '-' || a[i] == '*' || a[i] == '/' || a[i] == '^' || a[i] == '%')
        {
            if (s1.top != -1)
            {
                while (precedence(a[i]) <= precedence(s1.a[s1.top]))
                {
                    printf("%c", pop());
                }
                push(a[i]);
            }
            else
                push(a[i]);
        }
        else if (a[i] == ')')
        {
            if (s1.a[s1.top] == '(')
            {
                pop();
            }
            else
            {
                for (l = 0; s1.a[s1.top] != '('; l++)
                {
                    printf("%c", pop());
                }
            }
        }
    }
    while (!isempty())
    {
        if (s1.a[s1.top] == '(')
        {
            pop();
        }
        else
            printf("%c", pop());
    }
    printf("\n");
    return 0;
}
