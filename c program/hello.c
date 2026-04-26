// #include <stdio.h>
// #include <conio.h>
// #include <math.h>
// #include <string.h>
// #include <stdlib.h>
// ONE(calucater)********************************************************************************************************************************************************************
/*
int main() {
    int a,b,c;
    printf("Enter the value of a and b\n");
    scanf("%d%d",&a,&b);
    c = a + b;
    printf("addition of a and b is : %d\n",c);
    c = a - b;
    printf("substraction a and b is : %d\n",c);
    c = a * b;
    printf("multiplication of a and b is : %d\n",c);
    c = a / b;
    printf("divtion of a and b is : %d\n",c);
    return 0;
}
*/
// TWO(area of tringel)**************************************************************************************************************************************************************
/*
int main () {
    float area,base,height;
    printf("Enter the value of base and height\n");
    scanf("%f\n%f",&base,&height);
    area = base * height * (0.5);
    printf("The area of the tringle is : %f",area);
    return 0;
}
*/
// THREE(calculat interest)**********************************************************************************************************************************************************
/*
int main() {
    float i,p,r,n;
    printf("i = interest\np = principal\nr = rate of interest\nn = no. of year\n");
    printf("Enter the value of p, r and n\n");
    scanf("%f%f%f",&p,&r,&n);
    i = (p * r * n)/100;
    printf("The interest is : %f",i);
    return 0;
}
*/
// FOUR(interchnge two integer)******************************************************************************************************************************************************
/*
int main() {
    int a,b,c;
    printf("Enter the value of a nad b\n");
    scanf("%d%d",&a,&b);
    printf("Befor the exchange the value of a and b is :\na = %d\nb = %d\n",a,b);
    c = a;
    a = b;
    b = c;
    printf("After the exchange the value of a and b is :\na = %d\nb = %d\n",a,b);
    return 0;
}
*/
// FIVE(convert distance)************************************************************************************************************************************************************
/*

int main () {
    float d,i,c,m,f;
    printf("d = distance\nm = meter\nf = feet\ni = inches\nc = centimeter\n");
    printf("Enter the value of distance in kilometer :\n");
    scanf("%f",&d);
    m = d * 1000;
    printf("the distance in meter is : %f\n",m);
    f = d * 3280.84;
    printf("The distance in feet is : %f\n",f);
    i = d * 39370.1;
    printf("The distance in inches is : %f\n",i);
    c = m * 100;
    printf("The distance in centimeter is : %f\n",c);
    return 0;
}
*/
// SIX(convet tempreture)************************************************************************************************************************************************************
/*
int main() {
    int i;
    float f,c,t;
    printf("t = tempreture\nf = fahrenheit\nc = centigrade\n");
    printf("for conver into fahrenheit i = 1\nfor conver into centigrade i = 2\n");
    printf("Enter the value of i :\n");
    scanf("%d",&i);
    printf("Enter the tempreture :\n");
    scanf("%f",&t);
    switch (i)
    {
    case 1:
    f = (1.8 * t) + 32;
    printf("The tempreture in fahrenheit is : %f",f);
        break;
    case 2:
    c = (t - 32) / 1.8;
    printf("The tempreture in centigrade is : %f",c);
    default:

        break;
    }
    return 0;
}
*/
// SEVEN(distance travell)***********************************************************************************************************************************************************
/*
int main() {
    float u,t,d,a;
    printf("d = distance\nu = intial velocity\nt = time\na = accelration\n");
    printf("Enter the value of u\n");
    scanf("%f",&u);
    printf("Enter the value of a\n");
    scanf("%f",&a);
    printf("Enter the value of t\n");
    scanf("%f",&t);
    d = (u*t) + (a*t*t)/2;
    printf("The distance is : %f\n",d);
    return 0;
}
*/
// EIGHT(type of number)*************************************************************************************************************************************************************
/*
int main() {
    int i;
    printf("Enter the number :\n");
    scanf("%d",&i);
    if (i>0)
    {
        printf("The number is positive");
    }
    else if (i<0)
    {
        printf("The number is negative");
    }
    else
        printf("The number is zero");
    return 0;
}
*/
// NINE(check result of student)*****************************************************************************************************************************************************
/*
int main()  {
    int m;
    printf("Enter the marks of student (0-100):");
    scanf("%d",&m);
    if (m>0 && m<100)
    {
    if (m>32)
    {
        printf("The student is PASS");
    }
    else
        printf("The student is FAIL");
    }
    else
        printf("Enter valid marks");
    return 0;
}
*/
// TEN(find max & min useing nested if else)*****************************************************************************************************************************************
/*
int main() {
    int i,max,min,a,b,c;
    printf("Enter value\n");
    scanf("%d",&a);
    printf("Enter value\n");
    scanf("%d",&b);
    printf("Enter value\n");
    scanf("%d",&c);
max = a;
min = a;
if (max<=a)
{
        max = a;
    if (max <= b)
        {
            max = b;
        }
    if (max <= c)
        {
            max = c;
        }
}
if (min >= a)
{
        min = a;
    if (min >= b)
        {
            min = b;
        }
    if (min >= c)
        {
            min = c;
        }
}
printf("max = %d\nmin = %d\n",max,min);
 return 0;
}
*/
// ELEVEN(check the character)*******************************************************************************************************************************************************
/*
int main()
 {
    char ch;
    printf("Enter character :\n");
    scanf("%c",&ch);
    if (ch >= 'A' && ch <= 'Z')
    {
        printf("Enter character is capital");
    }
    else if (ch >= 'a' && ch <= 'z')
    {
        printf("Enter character is small");
    }
    else
    printf("the character is special");
    return 0;
}
*/
// TWELVE(mark and equivalent grade)*************************************************************************************************************************************************
/*
int main() {
    int m;
    printf("Enter the marks of student :\n");
    scanf("%d",&m);
    if (m>=0 && m<=100)
    {
        if (m <= 100 && m >= 80)
        {
            printf("The class is : Distinction");
        }
        else if (m < 80 && m >= 60)
        {
            printf("The class is : First class");
        }
        else if (m < 60 && m >= 40)
        {
            printf("The class is : Second class");
        }
        else if (m < 40)
        {
            printf("The student is FAIL");
        }
    }
    else
        printf("Enter valid marks");
    return 0;
}
*/
// THIRTEEN(pay slip)****************************************************************************************************************************************************************
/*
int main() {
    float basic,Da,Hra,Ma =300,Pf,Nt,Gross;
    printf("Enter basic salaryv :\n");
    scanf("%f",&basic);
    Da = (10/100) * basic;
    Hra = (7.50/100) * basic;
    Pf = (12.50/100) * basic;
    Gross = basic + Da + Hra + Ma;
    Nt = Gross - Pf;
    printf("__________________________________________________________________________________________________________\n");
    printf("|    Basic     |      Da      |      Ma      |      Hra     |      Pf      |     Gross    |      Nt      |\n");
    printf("|______________|______________|______________|______________|______________|______________|______________|\n");
    printf("| %f |   %f   |  %f  | %f  |  %f | %f | %f |\n",basic,Da,Ma,Hra,Pf,Gross,Nt);
    printf("|______________|______________|______________|______________|______________|______________|______________|\n");
    return 0;
}
*/
// FORTEEN(no. on weekday)***********************************************************************************************************************************************************
/*
int main()  {
    int i;
    printf("Enter the no. (1-7) : \n");
    scanf("%d",&i);
    if (i > 0 && i < 8)
    {
        switch (i)
        {
        case 1:
            printf("SUNDAY");
            break;
        case 2:
            printf("MONDAY");
            break;
        case 3:
            printf("TUESDAY");
            break;
        case 4:
            printf("WEDNESDAY");
            break;
        case 5:
            printf("THUESDAY");
            break;
        case 6:
            printf("FRIDAY");
            break;
        case 7:
            printf("SATURDAY");
            break;
        default:
            printf("Enter valid value");
            break;
        }
    }
    else
        printf("Enter valid value");
    return 0;
}
*/
// FIVTEEN(find max & min)***********************************************************************************************************************************************************
/*
int main() {
    int i,n[10],max,min;
    printf("Enter the value :\n");
    for ( i = 0; i < 9; i++)
    {
        scanf("%d\n",&n[i]);
    }
    max = n[0];
    min = n[0];
    for ( i = 0; i < 9; i++)
    {
        if (max <= n[i])
        {
            max = n[i];
        }
        if (min >= n[i])
        {
            min = n[i];
        }
    }
    printf("max = %d\nmin = %d",max,min);
    return 0;
}
*/
// SIXTEEN(last no. is even or odd)**************************************************************************************************************************************************
/*
int main()  {
    int n,l;
    printf("Enter a number :\n");
    scanf("%d",&n);
    l = n % 10;
    printf("The last digit : %d\n",l);
    if (l % 2 == 0)
        printf("The number is even\n");
    else
        printf("The number is odd\n");
    return 0;
}
*/
// SEVEMTEEN(factorial of a no.)*****************************************************************************************************************************************************
/*
int main() {
    int f,i,n;
    printf("Enter the number : \n");
    scanf("%d",&n);
    f=1;
    if (n == 0 || n == 1)
    {
        printf("The factorial is : %d\n",n);
    }
    else if (n > 1)
    {
        for ( i = 1; i <= n; i++)
        {
            f = f * i;
        }
    }
     printf("The factorial of %d is : %d",n,f);
    return 0;
}
*/
// EIGHTEEN(reverse a number)********************************************************************************************************************************************************
/*
int main() {
    int n,i,r = 0;
    printf("enter a number  : \n");
    scanf("%d",&n);
    i = n;
    while (n > 0)
    {
        r = r * 10 + n % 10;
        n = n/10;
    }
    printf("The reverse of %d is : %d",i,r);
    return 0;
}
*/
// NINETEEN(Fibonacci series)********************************************************************************************************************************************************
/*
int main() {
    int f,i,n,e,s;
    printf("Enter the term  of the series : \n");
    scanf("%d",&n);
    f = 0;
    s = 1;
    printf("The fibonacci series is : \n");
    for ( i = 0; i <= n; i++)
    {
        e = f + s;
        printf("%d  ",e);
        f = s;
        s = e;
    }
    return 0;
}
*/
// TWENTY(sum of first & last digit of no.)******************************************************************************************************************************************
/*
int main() {
    int n,l,f,s;
    printf("Enter a number : \n");
    scanf("%d",&n);
    l = n % 10;
    while (n >= 10)
    {
        n = n / 10;
    }
    f = n;
    printf("The first digit is : %d\n",f);
    printf("The last digit is : %d\n",l);
    s = f + l;
    printf("The sum of last and first digit is : %d\n",s);
return 0;
}
*/
// TWENTYONE(average of given no.)***************************************************************************************************************************************************
/*
int main() {
    float A,s;
    int a[100],n,i;
    printf("Enter the no. of term :\n");
    scanf("%d",&n);
    printf("Enter value :\n");
    for ( i = 0; i < n; i++)
    {
        scanf("%d",&a[i]);
    }
    s = 0;
    for ( i = 0; i < n; i++)
    {
        s = s + a[i];
    }
        A = s / n;
        printf("The average is : %f\n",A);
    return 0;
}
*/
// TWENTYTHREE(group distibution using height and weight)****************************************************************************************************************************
/*
int main() {
    int h[5],w[5],i,count;
    printf("Enter the value of height and weight : \n");
    for ( i = 0; i < 5; i++)
    {
        scanf("%d%d",&h[i],&w[i]);
    }
    for ( i = 0; i < 5; i++)
    {
    if (h[i] > 170 && w[i] < 50)
    {
        count++;
    }
    else
        continue;
    }
    printf("The count is : %d",count);
    return 0;
}
*/
// TWENTYFOUR(prime or not)**********************************************************************************************************************************************************
/*
int main() {
    int n;
    printf("Enter a number :\n");
    scanf("%d",&n);
    if (n == 1 || n == 0)
    {
        printf("The number id not primr : %d",n);
    }
    else if (n == 2 || n == 3 || n == 5)
    {
        printf("The no. is prime : %d",n);
    }
    else if (n%2 == 0 || n%3 == 0 || n%5 ==0)
    {
        printf("The no. is not prime : %d",n);
    }
    else
        printf("The no. is prime : %d",n);
    return 0;
}
*/
// TWENTYFIVE(evalute sum of squ. of series)*****************************************************************************************************************************************
/*
int main() {
    int n,s,i;
    printf("Enter last term of the series :\n");
    scanf("%d",&n);
    s = 0;
    for ( i = 0; i <= n; i++)
    {
         s = s + (i * i);
    }
    printf("The sum of series is : %d\n",s);
    return 0;
}
*/
// TWENTYSIX(evalute sum of half of series)******************************************************************************************************************************************
/*
int main() {
    float s,n,i;
    printf("Enter last term of series : \n");
    scanf("%f",&n);
    s = 0;
    for ( i = 1; i <= n; i++)
    {
        s = s + (1/i);
    }
printf("The sum of series is : %f\n",s);
    return 0;
}
*/
// TWENTYSEVEN(evalute sum of factor of half series)*********************************************************************************************************************************
/*
int main() {
    float s,n,i;
    printf("Enter last term of series  :\n");
    scanf("%f",&n);
    s = 0.0;
    for ( i = 1; i <= n; i++)
    {
        s = s + (1.0/(i * i));
    }
    printf("The sum of series is : %f\n",s);
}
*/
// TWENTYEIGHT(evatute series)*******************************************************************************************************************************************************
/*
int main() {
    float f,s;
    int x,i,k,n;
    printf("Enter the last digit : \n");
    scanf("%d",&n);
    printf("Enter value of x :\n");
    scanf("%d",&x);
    s = 1.0;
    for ( i = 1; i <= n; i++)
    {
        f = 1.0;
        for ( k = 1; k <= i; k++)
        {
            f = f * k;
        }

    if (i%2 ==0)
    {
        s = s + (pow(x,i)/f);
    }
    else
    {
        s = s - (pow(x,i)/f);
    }
    }
    printf("The sum of series is : %f\n",s);
    return 0;
}
*/
// TWENTYNINE {i} (pattern of star)**************************************************************************************************************************************************
/*
int main() {
    int i,k,n;
    printf("Enter no. row :\n");
    scanf("%d",&n);
    for ( i = 1; i <= n; i++)
    {
        for (k = 1;k <= i; k++)
        {
            printf("*  ");
        }
        printf("\n");
    }

    return 0;
}
*/
// TWENTYNINE {ii} (pattern of star)*************************************************************************************************************************************************
/*
int main ()  {
    int k,n,i;
    printf("Enter no. of row :");
    scanf("%d",&n);
    for ( i = 1; i <= n; i++)
    {
        for ( k = i ; k < (n+1); k++)
        {
            printf("  ");
        }
        for ( k = 1; k <= i; k++)
        {
            printf(" *  ");
        }
        printf("\n");
    }
    return 0;
}
*/
// TWENTYNINE {iii} (pattern of star)************************************************************************************************************************************************
/*
int main() {
    int k,i,n;
    printf("Enter no. of row : ");
    scanf("%d",&n);
    for (i = n; i >= 0;i--)
    {
        for ( k = 1; k <= i; k++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
*/
// THERTY {i} (pattern of no.)*******************************************************************************************************************************************************
/*
int main() {
    int k,n,i;
    printf("Enter no. of row : ");
    scanf("%d",&n);
    for ( i = 1; i <= n; i++)
    {
        for ( k = i; k <= (n+1); k++)
        {
            printf("  ");
        }

        for ( k = 1; k <= i; k++)
        {
            printf(" %d  ",k);
        }
        printf("\n");
    }
    return 0;
}
*/
// THERTY {ii} (pattern of no.)******************************************************************************************************************************************************
/*
int main() {
    int k,i,n;
    printf("Enter no. of row : ");
    scanf("%d",&n);
    for ( i = n; i >=0 ; i--)
    {
        for ( k = i-1;k <= (n+1); k++)
        {
            printf("   ");
        }
        for ( k = 1; k <= i; k++)
        {
            printf(" %d   ",k);
        }
        printf("\n");
    }
    return 0;
}
*/
// THERTY {iii} (pattern of no.)*****************************************************************************************************************************************************
/*
int main() {
    int k,i,n;
    printf("Enter no. of rwo :");
    scanf("%d",&n);
    for ( i = n; i >= 0; i--)
    {
        for ( k = i; k <= (n+1); k++)
        {
            printf("  ");
        }

        for ( k = 1; k <= i; k++)
        {
            printf(" %d  ",i);
        }
        printf("\n");
    }
}
*/
// THERTY {iv} (pattern of no.)******************************************************************************************************************************************************
/*
int main() {
    int k,n,i;
    printf("Enter no. of row :");
    scanf("%d",&n);
    for ( i = 1; i <= n; i++)
    {
        for (k = i; k <= (n+1); k++)
        {
            printf("  ");
        }
        for ( k = 1; k <= i; k++)
        {
            printf(" %d  ",i);
        }
        printf("\n");
    }
    return 0;
}
*/
// THERTYONE {i} (pattern of character)**********************************************************************************************************************************************
/*
int main() {
    int i,k,n;
    printf("Enter no. of row : ");
    scanf("%d",&n);
    for ( i = 0; i <= n; i++)
    {
        for ( k = 0; k <= i; k++)
        {
            printf(" %c  ",'A' + i);
        }
        printf("\n");
    }
    return 0;
}
*/
// THERTYONE {ii} (pattern of character)*********************************************************************************************************************************************
/*
int main() {
    int k,n,i;
    printf("Enter no. of row : ");
    scanf("%d",&n);
    for ( i = 1; i <= n; i++)
    {
        for ( k = 0; k <= i-1; k++)
        {
            printf(" %c  ",'A' + k);
        }
        printf("\n");
    }
    return 0;
}
*/
// THERTYTWO (store roll no. and marks using array)**********************************************************************************************************************************
/*
int main() {
    int a[20],b[20],i;
    printf("Enter roll no. and marks of student : \n");
    for ( i = 0; i < 20; i++)
    {
        scanf("%d",&a[i]);
        scanf("%d",&b[i]);
    }
    printf("The roll no. and marks of student is :\nsr no.     Roll no.  Marks\n");
    for ( i = 0; i < 20; i++)
    {
        printf("  %d    --     %d        %d\n",i+1,a[i],b[i]);
    }
    return 0;
}
*/
// THERTYTHREE (find even or odd for 10 no.)*****************************************************************************************************************************************
/*
int main() {
    int a[10],i;
    printf("Enter 10 number :\n");
    for ( i = 0; i < 10; i++)
    {
        scanf("%d",&a[i]);
    }
    for ( i = 0; i < 10; i++)
    {
        if (a[i] % 2 == 0)
        {
            printf("The number '%d' is EVEN\n",a[i]);
        }
        else
        {
            printf("The number '%d' is ODD\n",a[i]);
        }
        }
    return 0;
}
*/
// THERTYFOUR (max for array)********************************************************************************************************************************************************
/*
int main() {
    int a[10],i,max,min;
    printf("Enter value : \n");
    for ( i = 0; i < 10; i++)
    {
        scanf("%d",&a[i]);
    }
    max = 0;
    min = 0;
    for ( i = 0; i < 10; i++)
    {
        if (max < a[i])
        {
            max = a[i];
        }
        else if (min > a[i])
        {
            min = a[i];
        }
    }
    printf("The maximun and minimun no. fro array is :\n");
    printf("max = %d\nmin = %d",max,min);
    return 0;
}
*/
// THERTYFIVE (calulate avg. ,geomonic and harmonic mean of element)*****************************************************************************************************************
/*
#include <stdio.h>
#include <math.h>

int main() {
    int n, i;
    float a = 0.0, g = 1.0, h = 0.0;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    float numbers[n];

    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%f", &numbers[i]);
        a = a + numbers[i];
        g = g * numbers[i];
    }

    float arithmetic_mean = a / n;
    float geometric_mean = pow(g, 1.0 / n);

    printf("Avrege: %f\n", arithmetic_mean);
    printf("Geometric Mean: %f\n", geometric_mean);

    return 0;
}
*/
// THERTYSIX (arrange array in assending order)**************************************************************************************************************************************
/*
int main() {
    int a[10],i,j,t;
    printf("Enter value : \n");
    for ( i = 0; i < 10; i++)
    {
        scanf("%d",&a[i]);
    }
    for ( i = 9; i > 0 ; i--)
    {
        for ( j = 0; j < i ; j++)
        {
            if (a[j] > a[j+1])
            {
                t = a[j];
                a[j] = a[j+1];
                a[j+1] = t;
            }
        }
    }
    printf("The new array is : \n");
    for ( j = 0; j < 10; j++)
    {
        printf(" %d  ",a[j]);
    }
    return 0;
}
*/
// THERTYSEVEN (find a character from string)****************************************************************************************************************************************
/*
int main() {
    int i;
    char k;
    char a[20];
    printf("Enter value in string : \n");
    gets(a);
    printf("Enter a charecter that you want to find : \n");
    scanf(" %c",&k);
    for ( i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == k)
        {
            printf("The charecter %c is ther at %d\n",k,i+1);
        }
    }
    return 0;
}
*/
// THERTYEIGHT (replace  a  character from string)***********************************************************************************************************************************
/*
int main() {
    int i;
    char k,j;
    char a[20];
    printf("Enter value in string : \n");
    gets(a);
    printf("Enter a charecter that you want to changed : \n");
    scanf(" %c",&k);
    printf("Enter a charecter that you want to change into : \n");
    scanf(" %c",&j);
    for ( i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == k)
        {
            a[i] = j;
        }
    }
    printf("The new string is :\n");
    for (i = 0; i <= 10;i++)
    {
        printf("%c ",a[i-1]);
    }
    return 0;
}
*/
// THERTYNINE (delete a  character from string)**************************************************************************************************************************************
/*
int main() {
    int i,j;
    char a[30],k;
    printf("Enter string :\n");
    gets(a);

    printf("Enter charecter that you want to delete : \n");
    scanf("%c",&k);

    for ( i = 0; a[i] != '\0'; i++)
    {
        if (a[i] == k)
        {
            for ( j = i; a[j] != '\0'; j++)
            {
                a[j] = a[j+1];
            }
        }
    }
    printf("The new string is : \n");
    for ( i = 0; a[i] != '\0'; i++)
    {
        printf("%c",a[i]);
    }
    return 0;
}
*/
// FOURTY (reverse a string)*********************************************************************************************************************************************************
/*
int main() {
    int i,n;
    char a[10],s[10];
    printf("Enter string :\n");
    gets(a);

    for ( i = 0; a[i] != '\0'; i++)
    {
        s[i] = a[i];
    }
    s[i] = '\0';
    n = strlen(s);
    printf("The length of string is : %d\n",n);
    for ( i = n; i >= 0; i--)
    {
        printf("%c",s[i]);
    }
    return 0;
}
*/
// FOURTYONE (convert string in upper case)******************************************************************************************************************************************
/*
int main() {
    int i,j;
    char s[20];
    printf("Enter value in string in lowercase :\n");
    gets(s);
    printf("The string is :\n");
    for ( i = 0; s[i] != '\0'; i++)
    {
        printf("%c",s[i]);
    }
    printf("The new string is :\n");
    for ( i = 0; s[i] != '\0'; i++)
    {
        printf("%c ",s[i] - 32);
    }
    return 0;
}
*/
// FOURTYTWO (sum of n no. by function)**********************************************************************************************************************************************
//------------U-S-I-N-G----R-E-C-U-R-S-I-O-N----F-U-N-C-T-I-O-N----------------------------------------------------------------------------------------------------------------------
/*
int sum(int n)
{

    if (n == 0 )
    {
        return 0;
    }
    else if (n > 1)
    {
        n = n + sum(n - 1);
        return n;
    }
}
int main() {
    int n,s;
    printf("Enter a positive number : \n");
    scanf("%d",&n);

    s = sum(n);
    printf("Sum = %d",s);
;    return 0;
}
*/
//---------------U-S-I-N-G----F-U-N-C-T-I-O-N----------------------------------------------------------------------------------------------------------------------------------------
/*
int sum(int n) {
    if (n != 0)
    {
        return n + sum(n -1);
    }
    else
        return n;
}
int main() {
    int n;
    printf("Enter a positive number : \n");
    scanf("%d",&n);

    printf("Sum = %d",sum(n));
    retu
    return 0;
}
*/
// FOURTYTHREE (if no. prime return 1 otherwise 0  by function)**********************************************************************************************************************
/*
int prime(int n)
{
    if (n == 1 || n == 0)
    {
        return 0;
    }
    else if (n == 2 || n == 3 || n == 5)
    {
        return 1;
    }
    else if (n%2 == 0 || n%3 == 0 || n%5 ==0)
    {
        return 0;
    }
    else
        return 1;
}
int main() 
{   
    int k,i;
    printf("Enter a number :\n");
    scanf("%d",&k);
    i = prime(k);
    printf("%d",i);
    return 0;
}
*/
// FOURTYFOUR (interchange value by function)****************************************************************************************************************************************
/*
void change(int *a,int *b)
{
    int c;
    c = *a;
    *a = *b;
    *b = c;
}
int main()
{
    int a,b;
    printf("Enter value of a and b :\n");
    scanf("%d%d",&a,&b);

    printf("The no. is : \na = %d \nb = %d\n",a,b);

    change(&a,&b);

    printf("After changing : \na = %d\nb = %d\n",a,b);
    return 0;
}
*/
// FOURTYFIVE (recursive call of given series)***************************************************************************************************************************************
/*
int fact(int n)
{
    if (n == 0 || n == 1)
    {
        return 1;
    }
    else 
    {
        return n * fact(n-1);
    }   
}
float series(int x,int n)
{
     if (n <= 0 )
    {
        return x;
    }
    else if (n % 2 == 0)
    {
        return series(x, n - 2) + pow(x, n) / fact(n);
    }
    else
    {
        return series(x, n - 2) - pow(x, n) / fact(n);
    }
}
int main() 
{
    int x,n;
    float sum;
    printf("Enter last term of series : \n");
    scanf("%d",&n);
    printf("Enter value of x : \n");
    scanf("%d",&x);
    sum = series(x,n);
    printf("The sum of series is : %f\n",sum);
    return 0;
}
*/
// FOURTYSIX (factorial by recursion)************************************************************************************************************************************************
/*
int fact(int k) 
{
    if (k == 0 )
    {
        return 1;
    }
    else
        return k * fact(k-1);
}


int main() {
    int n,f;
    printf("Enter number : \n");
    scanf("%d",&n);

    f = fact(n);
    printf("%d! = %d",n,f);
    return 0;
}
*/
// FOURTYSEVEN (global variable & static variable)************************************************************************************************************************************
/*
int no(int n)
{
    return n;
}
int main() {
    int a=1;
    printf("'a' is static variable\n");
    printf("%d\n",a);

    printf("'no' is global variable\n");
    printf("%d\n",no(a));
    return 0;
}
*/
// FOURTYEIGHT (change lowercasse in uppercase by function)**************************************************************************************************************************
/*
int change(char s)
{
    if (s >= 'a' && s <= 'z')
    {
        return s - 32;
    }
    else
    {
        return s;
    }
    return 0;
}

int main() 
{
    int i;
    char s[30],k;

    printf("Enter a string :\n");
    gets(s);
    

    printf("New string is :\n");
    for ( i = 0; s[i] != '\0'; i++)
    {
        k = change(s[i]);
        printf("%c ",k);
    }
    return 0;
}
*/
// FOURTYNINE (read structure data form keybord)**************************************************************************************************************************************
/*
struct structure
{
    int rollno;
    char name[20];
}s1;

int main() 
{
    int i;

    printf("Enter roll no. student : \n");
    scanf("%d",&s1.rollno);
    printf("Enter name of student : \n");
    scanf("%s",s1.name);
    printf("Roll no. = %d \nName = %s \n",s1.rollno,s1.name);

    return 0;
}
*/
// FIFTY (store information given in question by structure)**************************************************************************************************************************
/*
struct hello
{
    char name[20];
    char DOJ;
    int salary;
}s1[5];

int main() 
{
    int i;
    printf("Enter data of employ :\n");
    for ( i = 0; i < 5; i++)
    {
        scanf("%s  %s %d\n",s1[i].name,&s1[i].DOJ,&s1[i].salary);
    }
    for ( i = 0; i < 5; i++)
    {
        printf("Data of employ %d\n",i+1);
        printf("Name = %s\nDOJ = %s\nSalary = %d\n",i+1,s1[i].name,s1[i].DOJ,s1[i].salary);
    }
    
    return 0;
}
*/
// FIFTYONE (store information given in question by structure)**************************************************************************************************************************
/*
struct time_struct
{
    int hour;
    int minute;
    int second;
}s1 ;

int main()
{
    printf("Enter data :\n");
    scanf("%d%d%d",&s1.hour,&s1.minute,&s1.second);
 
    printf("The time is :");
    printf("%02d:%02d:%02d\n",s1.hour,s1.minute,s1.second);
    return 0;
}
*/
// FIFTYTWO (store information given in question by structure)**************************************************************************************************************************
/*
struct cricket
{
    char pname[30];
    char tname[30];
    float average;
}s[50];

int main()
{
    int i;
    printf("Enter data :\n");
    for ( i = 0; i < 50; i++)
    {
        scanf("%s%s%f",s[i].pname,s[i].tname,&s[i].average);
    }
    for ( i = 0; i < 50; i++)
    {
        printf("Data of player %d\n",i+1);
        printf("Player name = %s\nTeam name = %s\nBatting average = %f\n",s[i].pname,s[i].tname,s[i].average);
    }
    
    return 0;
}
*/
// FIFTYTHREE (store information given in question by structure)**************************************************************************************************************************
/*
struct student_record
{
    char name[20];
    char branch[10];
    int marks;
}s[10];

int main()
{
    int i;
    printf("Enter data :\n");
    for ( i = 0; i < 10; i++)
    {
        scanf("%s%s%d",s[i].name,s[i].branch,&s[i].marks);
    }

    for ( i = 0; i < 10; i++)
    {
        printf("Data of student %d\n",i+1);
        printf("Name = %s\nBranch = %s\nTotal marks =%d\n",s[i].name,s[i].branch,s[i].marks);
    }
    
}
*/
// FIFTYFOUR (print address using pointer)**************************************************************************************************************************
/*
int main() 
{
    int a=5;
    int *k;
    k=&a;
    printf("%d\n",a);
    printf("%p\n",&k);
    return 0;
}
*/
// FIFTYFIVE (swap two values using pointer)**************************************************************************************************************************
/*
void swap(int *a,int *b)
{
    int k;
    k = *a;
    *a = *b;
    *b = k;
}

int main() 
{
    int a,b;
    printf("Enter a and b : \n");
    scanf("%d%d",&a,&b);
    printf("The value befor swap a = %d and b = %d\n",a,b);
    swap(&a,&b);
    printf("The value after swap a = %d and b = %d",a,b);
    return 0;
}
*/
// FIFTYSIX (print address and charecter using pointer)**************************************************************************************************************************
/*
int main()
{
    char k;
    char *a;
    printf("Enter charecter:\n");
    scanf("%c",&k);
    a=&k;
    printf("The charecter is %c\n",k);
    printf("The address of charecter is %p",a);
    return 0;
}
*/
// FIFTYSEVEN (access elements using pointer)**************************************************************************************************************************
/*
int main()
{
    int i;
    int a[5];
    int *ptr;

    ptr=a;
    printf("Enter element :\n");
    for ( i = 0; i < 5; i++)
    {
        scanf("%d",&a[i]);
    }
    
    printf("Elements are :\n");
    for ( i = 0; i < 5; i++)
    {
        printf("%d = %d\n",i,*ptr);
        ptr++;
    }
    return 0;
}
*/
// FIFTYEIGHT (sorting using pointer)**************************************************************************************************************************
/*
void sort(int *a,int *b)
{
    int t;
    if (*a > *b)
    {
        t = *a;
        *a = *b;
        *b = t;
    }
}

int main()
{
    int i,j;
    int a[20];
    printf("Enter element :\n");
    for ( i = 0; i < 20; i++)
    {
        scanf("%d",&a[i]);
    }
    
    for ( i = 20; i > 0; i--)
    {
        for(j = 0 ; j < i; j++)
        {
            sort(&a[j],&a[j+1]);
        }
    }
    printf("The short array :\n");
    for ( i = 0; i < 20; i++)
    {
        printf("%d\n",a[i]);
    }  
}
*/
// FIFTYNINE (write a string in file)**************************************************************************************************************************
/*
int main()
{
    FILE *kenil;
    
    kenil = fopen("kenil.txt","r");

    if (kenil == NULL) 
    {
    printf("Error opening file");
    return 1;
    }
    char ch;
    ch = fgetc(kenil);
    while (ch != EOF)
    { 
        printf("%c",ch);
        ch = fgetc(kenil);
    }
    printf("\n");
    
    fclose(kenil);
    return 0;
}
*/