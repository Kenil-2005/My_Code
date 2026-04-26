#include <iostream>
#include <string>
#include <istream>
#include <cmath>
#include <memory>
#include <vector>
#include <list>
#include <queue>

using namespace std;

// data types and its 
    int main()
    {
        int a; // FOR INTIGER VALUE
        a = 90;
        cout << "size of int " << sizeof(a) << endl;

        float b; // FOR DECIMAL VALUE
        b = 1.2;
        cout << "size of float " << sizeof(b) << endl;

        char c; // FOR CHARACTER
        cout << "size of char " << sizeof(c) << endl;

        bool d; // FOR BINARY NO. (0,1)
        cout << "size of boolen " << sizeof(d) << endl;

        short int si; // FOR SHORT INTIGER VALUE
        cout << "size of short int " << sizeof(si) << endl;

        long int li; // FOR LONG INTGER VALUE
        cout << "size of long int " << sizeof(li) << endl;

        return 0;
    }

// '+' OPRATOR // TO MAKE ADDITION(+)
// int main()
// {
//     int amount1;
//     cin >> amount1;
//
//     int amount2;
//     cin >> amount2;
//
//     int sum = amount1 + amount2;
//
//     cout << sum << endl;
//
//     return 0;
// }

// MAXIMUM OF THREE NUMBER
//  int main()
//  {
//  #ifndef online_judge
//      freopen("input.txt", "r", stdin);
//      freopen("output.txt", "w", stdout);
//  #endif
//      int a, b, c;
//      cin >> a >> b >> c;
//
//     if (a > b)
//     {
//         if (a > c)
//         {
//             cout << "a is greater" << endl;
//         }
//         else
//         {
//             cout << "c is greter" << endl;
//         }
//     }
//     else
//     {
//         if (b > c)
//         {
//             cout << "b is greater" << endl;
//         }
//         else
//         {
//             cout << "c is greter" << endl;
//         }
//     }
//     return 0;
// }

// ENVEN ODD NUMBER
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//
//     int a;
//     cin>>a;
//
//     if (a%2==0) // to find even no.
//     {
//         cout<<"the no. is even"<<endl;
//     }
//     else{
//         cout<<"the no. is odd"<<endl;
//     }
//     return 0;
// }

// LOOP
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//
//     int n;
//     cin >> n;
//
//     int sum = 0;
//     for (int i = 1; i <= n; i++)
//     {
//         sum = sum + i;
//     }
//
//     cout << sum << endl;
//
//     return 0;
// }

// CONTINUE STATEMENT
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int n;
//     cin >> n;
//
//     for (int i = 1; i <= n; i++)
//     {
//         if (i % 3 == 0)
//         {
//             continue; // use to jump in upcomming loop
//         }
//         cout << i << endl;
//     }
//
//     return 0;
// }

// BREAK STATEMENT
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//
//     int n;
//     cin>>n;
//
//     for (int i = 1; i <= n; i++)
//     {
//         if (i == 5)
//         {
//             break;// use to break the whole loop
//         }
//         cout<<i<<endl;
//     }
//
//     return 0;
// }

// SWITCH FUNCTION
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//
//     int choice;
//     cin >> choice;
//
//     switch (choice) // USE WHEN WE HAVE MORE THAN TO CHOICE
//     {
//     case 1:
//         cout<<"MONDAY"<<endl;
//         break;
//     case 2:
//         cout<<"TUESDAY"<<endl;
//         break;
//     case 3:
//         cout<<"wednsday"<<endl;
//         break;
//     case 4:
//         cout<<"THURSDAY"<<endl;
//         break;
//     case 5:
//         cout<<"FRIDAY"<<endl;
//         break;
//     case 6:
//         cout<<"SATURDAY"<<endl;
//         break;
//     case 7:
//         cout<<"SUNDAY"<<endl;
//         break;
//     default:
//         cout<<"enter valid choice(1-7)"<<endl;
//         break;
//     }
//
//     return 0;
// }

// POSTINCREMENATAL
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//
//     int a = 6,b;
// b = a++;
//     cout<<a<<b<<endl;
//     return 0;
// }

// PATTERN I
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int n;
//     cin >> n;
//
//     for (int i = 0; i < n; i++)
//     {
//         for (int k = n - i; k >= 0; k--)
//         {
//             cout << " ";
//         }
//         for (int j = 0; j <= i; j++)
//         {
//             cout << "*  ";
//         }
//         cout << endl;
//     }
//     return 0;
// }

// PATTERN II
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int row, col;
//     cin >> row >> col;
//
//     for (int i = 1; i <= row; i++)
//     {
//         for (int j = 1; j <= col; j++)
//         {
//             if (i == 1 || i == row || j == 1 || j == col)
//             {
//                 cout << "* ";
//             }
//             else{
//                 cout<<"  ";
//             }
//         }
//         cout << endl;
//     }
//     return 0;
// }

// REVERSE A NUMBER
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int k;
//     cin >> k;
//     int a = k;
//     int reverse = 0;
//     while (a > 0)
//     {
//         int lastdigit = a % 10;
//         reverse = reverse * 10 + lastdigit;
//         a = a / 10;
//     }
//     cout<<"the reverse of "<<k<<" is "<<reverse<<endl;
//     return 0;
// }

// FACTORIAL BY RECURTION
// int factorial(int n)
// {
//     int a = 1;
//     if ( n == 1 || n == 0)
//     {
//         return a;
//     }
//     else
//     {
//         a = n * factorial(n-1);
//     }
//     return a;
// }
//
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int k;
//     cin >> k;
//
//     cout<<factorial(k);
//     return 0;
// }
//
// ARRAY
// #define N 20
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int a[N];
//     for (int i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//     for (int i = 0; i < N; i++)
//     {
//         cout << a[i] <<endl;
//     }
//     return 0;
// }

// LINER SEARCH IN ARRAY
//
// #define N 10
// int main()
// {
//     #ifndef online_judge
//         freopen("input.txt", "r", stdin);
//         freopen("output.txt", "w", stdout);
//     #endif
//     int a[N];
//     bool flag = false;
//     for (int i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//     int k;
//     //cout << "Enter value to be find : ";
//     cin >> k;
//     for (int i = 0; i < N; i++)
//     {
//         if (k == a[i])
//         {
//             cout << "the value is '" << k << "' and its  position is : " << i << endl;
//             flag = true;
//         }
//     }
//     if (!flag)
//     {
//         cout << "the value is not there " << endl;
//     }
//
//     return 0;
// }

// BINARY SEARCH
//
// #define N 10
//
// void bsearch(int a[N], int n)
// {
//     int m, l, u;
//     l = 0;
//     u = N - 1;
//     while (l <= u)
//     {
//         m = (l + u) / 2;
//         if (a[m] == n)
//         {
//             cout << "The possition of variabel " << n << " is " << m << endl;
//             break;
//         }
//         else if (a[m] > n)
//         {
//             u = m - 1;
//         }
//         else
//         {
//             l = m + 1;
//         }
//     }
//     if (l > u)
//     {
//         cout << "The variable is not there " << endl;
//     }
// }
//
// int main()
// {
// #ifndef online_judge
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int a[N];
//     for (int i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//     int k;
//     cout << "Enter value to be find : " << endl;
//     cin >> k;
//
//     bsearch(a,k);
//     return 0;
// }

// SELECTION SHORT
//
// #define N 10
//
// int main()
// {
// #ifndef online_judeg
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int a[N];
//     int i, j, t;
//     for (int i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//
//     for (i = 0; i < N - 1; i++)
//     {
//         for (j = i + 1; j < N; j++)
//         {
//             if (a[i] > a[j])
//             {
//                 t = a[i];
//                 a[i] = a[j];
//                 a[j] = t;
//             }
//         }
//     }
//     cout << "the shorted array is : " << endl;
//     for (i = 0; i < N; i++)
//     {
//         cout << a[i] << endl;
//     }
//     return 0;
// }

// BUBBLE SHORT
//
// #define N 10
//
// int main()
// {
// #ifndef online_judeg
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int a[N];
//     int i, t;
//
//     for (i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//
//     for (i = 0; i < N - 1; i++)
//     {
//         if (a[i] > a[i + 1])
//         {
//             t = a[i];
//             a[i] = a[i + 1];
//             a[i + 1] = t;
//         }
//     }
//
//     for (i = 0; i < N; i++)
//     {
//         cout << a[i] << endl;
//     }
//     return 0;
// }

// INSERTION SHORT
//
// #define N 10
//
// int main()
// {
// #ifndef online_judeg
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int a[N];
//
//     for (int i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//
//     for (int i = 1; i < N; i++)
//     {
//         int t = a[i];
//         int j = i - 1;
//         while (a[j] > t && j >= 0)
//         {
//             a[j + 1] = a[j];
//             j--;
//         }
//         a[j + 1] = t;
//     }
//
//     for (int i = 0; i < N; i++)
//     {
//         cout << a[i] << endl;
//     }
//     return 0;
// }

// MAX TILL i
//
// #define N 10
//
// int main()
// {
// #ifndef online_judeg
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int a[N];
//
//     for (int i = 0; i < N; i++)
//     {
//         cin >> a[i];
//     }
//
//     int max = a[0];
//
//     for (int i = 0; i < N; i++)
//     {
//         if (max <= a[i])
//         {
//             max = a[i];
//         }
//         cout << max << "  ";
//     }
//     return 0;
// }

// STRING (WORD)
//
//  int main()
//  {
//  #ifndef online_judeg
//      freopen("input.txt", "r", stdin);
//      freopen("output.txt", "w", stdout);
//  #endif
//      string kenil;
//      cin<<kenil;
//      cout<< kenil;
//      return 0;
//  }

// STRING (SENTENCE)
//
// int main()
// {
// #ifndef online_judeg
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     string kenil;
//     getline(cin, kenil);
//
//     cout << kenil;
//     return 0;
// }

// POINTERS
//
// int main()
// {
//     int k = 50;
//     int *ptr;
//     ptr = &k;
//     int j = *ptr;
//     cout << "the adderres is " << ptr << endl;
//     cout << "the pointer point to " << j << endl;
//     return 0;
// }

// SIZE OF DATA TYPE
//
// int main()
// {
//     cout << "The size of integer is : " << sizeof(int) << endl;
//     cout << "The size of character is : " << sizeof(char) << endl;
//     cout << "The size of flot is : " << sizeof(float) << endl;
//     cout << "The size of double is : " << sizeof(double) << endl;
//     return 0;
// }

// STRUCTURE
// struct user
// {
//     const int id;
//     const char *name;
//     const char *email;
//     int course_seleted;
// };
//
// int main()
// {
//     int fun = 9;
//     user kenil = {001, "kenil", "kenil@gmial.com", 4};
//     user donal = {002, "donal", "donal@cartoon.nc", 1};
//
//     user *k = &kenil;
//     user *d = &donal;
//     cout << d->name << endl;
//     cout << k->name << endl;
//     return 0;
// }

// EMUNS (uses to predefine multipule value)
// enum kenil
// {
//     bold,
//     italic,
//     underline,
//     cossed
// };
// int main()
// {
// #ifndef online_judeg
//     freopen("input.txt", "r", stdin);
//     freopen("output.txt", "w", stdout);
// #endif
//     int t = bold;
//     int u = italic;
//     int v = underline;
//     int w = cossed;
//     cout << t << endl;
//     cout << u << endl;
//     cout << v << endl;
//     cout << w << endl;
//     return 0;
//}

// AUTO (auto take data type)
//
// string api_call()
// {
//     return "got same data";
// }
//
// int reapi_call()
// {
//     return 0;
// }
// int main()
// {
//     auto respone = api_call();
//     cout<<"api call"<<respone<<endl;
//     auto re = reapi_call();
//     cout<<"reapi call"<<re<<endl;
//     return 0;
// }

// STACK AND HEAP MEMORY STOREGE
//
// struct user
// {
//     const int id;
//     int age;
// };
//
// int main()
// {
//     // calling stack type memory allocation
//     int score = 100;
//     user mike;
//
//     // calling heap type memory allocation
//     int* heap_score = new int;
//     user* devin =  new user();
//     delete heap_score;
//     delete devin;
//     return 0;
// }

// FUNCTION
//
// int sum(int n)
// {
//     int sum = 0;
//     for (int i = 1; i <= n; i++)
//     {
//         sum = sum + i;
//     }
//     return sum;
// }
//
// int main()
// {
// #ifndef online_judeg
// freopen("input.txt","r",stdin);
// freopen("output.txt","w",stdout);
// #endif // !online_judeg
//     int n;
//     cin>>n;
//
//     cout<<"The sum is " << sum(n) <<endl;
//     return 0;
// }

// CREATING HEADER FILE
// #include"adder.h"
// void lifeup(int &life)
// {
//     ++life;
// }
// /*
// int addme(int a ,int b)
// {
//     return a+b;
// }
//
// float addme(float a,float b)
// {
//     return a+b;
// }
// */
// int main()
// {
//     int life = 3;
//     lifeup(life);
//     cout<< life<<endl;
//
//     int v1 = 4;
//     int v2 = 5;
//     float v3 = 5.6;
//     float v4 = 7.5;
//     cout<< addme(v3,v4)<<endl;
//     return 0;
// }

// HOW TO MAKE TEMPLATE
//
// void lifeup(int &life)
// {
//     ++life;
// }
//
// template<typename T>
//
// T addme(T a,T b)
// {
//     return a+b;
// }
//
// int main()
// {
//     int life = 3;
//     lifeup(life);
//     cout<< life<<endl;
//
//     int v1 = 4;
//     int v2 = 5;
//     float v3 = 5.6;
//     float v4 = 7.5;
//     cout<< addme(v3,v4)<<endl;
//     return 0;
// }

// FUNCTION POINTER
//
// void interesting()
// {
//     puts("i am interesting");
// }
//
// int main()
// {
//     void (*pointer)() = interesting;
//     pointer();
//     (*pointer)();
//     return 0;
// }

// VARIADIC (... indicate variadic)
//
// template <typename T>
// void func(T t)
// {
//     cout << "first " << t << endl;
// }
//
// template <typename T, typename... Args>
// void func(T t, Args... args)
// {
//     cout << "second " << t << endl;
//     func(args...);
// }
//
// int main()
// {
//     func(1);
//     func(1,2,3,4,5,"harsh");
//     return 0;
// }

// CLASS & OBJECT
//
// class User
// {
//     // Privet data
//     int _secret = 22; // (_) is use for privete member and (__) for system member
//
//     // Public data
// public:
//     string name = "default";
//     void classmessage();
//     // To access privet data
//     void setsecret(const int &newsecret)
//     {
//         string pword = "kenil";
//         string passw;
//         cout << "Enter pass word" << endl;
//         cin >> passw;
//         if (pword != passw)
//         {
//             cout << "invalid Password." << endl;
//         }
//         else
//         {
//             _secret = newsecret;
//             cout << "The change is done." << endl;
//         }
//     }
//     int getsecret() const { return _secret; }
// };
//
// // Another way to use method
// void User::classmessage()
// {
//     cout << "class is great, " << name << endl;
// }
//
// int main()
// {
//     User sam;
//     sam.name = "sam";
//     sam.classmessage();
//     sam.setsecret(333);
//     cout << sam.getsecret() << endl;
//
//     User dav;
//     dav.classmessage();
//     dav.name = "dav";
//     dav.classmessage();
//
//     // Non-const object can access const object but,const object not access non-const object
//     const User rahul;
//     cout << rahul.getsecret() << endl;
//
//     return 0;
// }

// COPY CONSTRUCTOR
//
// class User
// {
//     // Privet data
//     int _secret = 22;
//
//     // Public data
// public:
//     string name = "default";
//     void classmessage();
//     // To access privet data
//     void setsecret(const int &newsecret)
//     {
//         string pword = "kenil";
//         string passw;
//         cout << "Enter pass word" << endl;
//         cin >> passw;
//         if (pword != passw)
//         {
//             cout << "invalid Password." << endl;
//         }
//         else
//         {
//             _secret = newsecret;
//             cout << "The change is done." << endl;
//         }
//     }
//     int getsecret() const { return _secret; }
// };
//
// void User::classmessage()
// {
//     cout << "class is great, " << name << endl;
// }
//
// int main()
// {
//     User sam;
//     sam.name = "sam";
//     sam.classmessage();
//     sam.setsecret(333);
//     cout << sam.getsecret() << endl;
//
//     User peter = sam; // (Copy constructor)Copy aa value of sam object.
//     cout << peter.getsecret() << endl
//     return 0;
// }

// TYPES OF CONSTRUCTOR
//
// class phone
// {
//     string _name = "";
//     string _os = "";
//     int _price = 0;
// public:
//     phone();
//     phone(const string &name, const string os, const int price); // parameter constructor
//     phone(const phone &);                                        // copy constructor
//     string getname() { return _os; }
//     ~phone();
// };
//
// phone::phone() : _name(), _os(), _price()
// {
//     puts("Default constructor");
// }
//
// phone::phone(const string &name, const string os, const int price) : _name(name), _os(os), _price(price)
// {
//     puts("This is parameter constructor");
// }
//
// phone::phone(const phone & Values)
// {
//     puts("OVERWRITE copy construct");
//     _name = "New"+Values._name;
//     _os = "Skinned-"+Values._os;
//     _price = Values._price;
// }
//
// phone::~phone(){
//     printf("Destructor called for %s\n", _name.c_str());
// }
//
// int main()
// {
//     phone samsungA1;
//     cout << samsungA1.getname() << endl;
//
//     phone oneplus8("OP8", "Android", 35999);
//     cout << oneplus8.getname() << endl;
//
//     phone oneplus8S = oneplus8;
//     cout << oneplus8S.getname() << endl;
//     return 0;
// }

// this KEY WORD
//
// class Rectangle
// {
//     double _length;
//     double _breadth;
//
// public:
//     Rectangle(double l = 2.0, double b = 2.0)
//     {
//         _length = l;
//         _breadth = b;
//     }
//     double Area()
//     {
//         return _length * _breadth;
//     }
//     int compare(Rectangle rectangle)
//     {
//         return this->Area() > rectangle.Area();
//     }
// };
//
// int main()
// {
//     Rectangle h1(3.0, 3.0);
//     Rectangle h2(4.0, 4.0);
//     cout << h1.compare(h2) << endl;
//     if (h1.compare(h2))
//     {
//         cout << "h2 is smaller " << endl;
//     }
//     else
//     {
//         cout << "h1 is smaller" << endl;
//     }
//
//     return 0;
// }

// INHERITANCE
// // BASE CLASS
// class Man
// {
//     string _name;
//     int _age;
//     Man() {}
//
// protected:
//     Man(const string &name, const int &age)
//         : _name(name), _age(age) {}
//     void run() { puts("I can run"); }
//
// public:
//     void sayName() const;
// };
//
// void Man::sayName() const
// {
//     cout << "my name is :" << _name << " and age is :" << _age << endl;
// }
// // DIRIVED CLASS
// class Superman : public Man
// {
//     bool flight;
//
// public:
//     Superman(string name) : Man(name, 26) {}
//     void run() { puts("I can run at light speed"); }
// };
//
// class Spiderman : public Man
// {
//     bool webbing;
//
// public:
//     Spiderman(string name) : Man(name, 19) {}
//     void run() { puts("I can run at normal speed"); }
// };
//
// int main()
// {
//     Superman clark("kent");
//     clark.sayName();
//     clark.run();
//
//     Spiderman peter("peter");
//     peter.sayName();
//     peter.run();
//     return 0;
// }

// Friend KEYWORD
//
// class Man
// {
//     string _name;
//     int _age;
//     Man() {}
// // Use to give access to use privet data for other class
//     friend class Superman;
//
// protected:
//     Man(const string &name, const int &age)
//         : _name(name), _age(age) {}
//     void run() { puts("I can run"); }
//
// public:
//     void sayName() const;
// };
//
// void Man::sayName() const
// {
//     cout << "my name is :" << _name << " and age is :" << _age << endl;
// }
//
// class Superman : public Man
// {
//     bool flight;
//
// public:
//     Superman(string name) : Man(name, 26) {}
// // Accessing privet data
//     void run() { printf("my age is : %d\n",_age); }
// };
//
// class Spiderman : public Man
// {
//     bool webbing;
//
// public:
//     Spiderman(string name) : Man(name, 19) {}
//     void run() { puts("I can run at normal speed"); }
// };
//
// int main()
// {
//     Superman clark("kent");
//     clark.sayName();
//     clark.run();
//
//     Spiderman peter("peter");
//     peter.sayName();
//     peter.run();
//     return 0;
// }

// MULTIPLE INGERITANCE
//
// class Money
// {
// public:
//     void gotmoney(){puts("Got 5K USD in my account");}
// };
//
// class Man
// {
//     string _name;
//     int _age;
//     Man() {}
//
// protected:
//     Man(const string &name, const int &age)
//         : _name(name), _age(age) {}
//     void run() { puts("I can run"); }
//
// public:
//     void sayName() const;
// };
//
// void Man::sayName() const
// {
//     cout << "my name is :" << _name << " and age is :" << _age << endl;
// }
// class Superman : public Man
// {
//     bool flight;
//
// public:
//     Superman(string name) : Man(name, 26) {}
//     void run() { puts("I can run at light speed"); }
// };
//
// // Calling multiple inheritance
// class Spiderman : public Man,public Money
// {
//     bool webbing;
//
// public:
//     Spiderman(string name) : Man(name, 19) {}
//     void run() { puts("I can run at normal speed"); }
// };
//
// int main()
// {
//     Superman clark("kent");
//     clark.sayName();
//     clark.run();
//
//     Spiderman peter("peter");
//     peter.sayName();
//     peter.run();
//     // Multipal Inheritance is used here
//     peter.gotmoney();
//     return 0;
// }

// POLYMORPHISM
//
// class One{
// public:
//     void intro(){
//         cout<<"I am one\n";
//     }
// };
//
// class Two:public One{
// public:
//     void intro(){
//         cout<<"I am two"<<endl;
//     }
// };
//
// class Three:public One{
// public:
//     void intro(){
//         cout<<"I am three"<<endl;
//     }
// };
//
// int main()
// {
//     One a;
//     Two b;
//     Three c;
//
//     a.intro();
//     b.intro();
//     c.intro();
//
//     return 0;
// }

// virtual KEYwORD
//
// class One
// {
// public:
// // use to point pointer to write place
//     virtual void intro()
//     {
//         cout << "I am one\n";
//     }
// };
//
// class Two : public One
// {
// public:
//     void intro()
//     {
//         cout << "I am two" << endl;
//     }
// };
//
// class Three : public One
// {
// public:
//     void intro()
//     {
//         cout << "I am three" << endl;
//     }
// };
//
// int main()
// {
//     One *a;
//     Two b;
//     Three c;
//
//     a = &b;
//     a->intro();
//     a = &c;
//     a->intro();
//
//     return 0;
// }

// SMART POINTER
//
// class User
// {
// public:
//     user()
//     {
//         cout << "User Created\n";
//     }
//     ~User()
//     {
//         cout << "User destroyed\n";
//     }
//
//     void testfunc()
//     {
//         cout << "I am testing function\n";
//     }
// };
//
// int main()
// {
//     //    unique pointer
//     {
//         // unique_ptr<User> sam(new User()); // non fav. way of devlopers
//
//         unique_ptr<User> sam = make_unique<User>();
//         sam->testfunc();
//
//         // unique_ptr<User> samm = sam; // NOT ALLOWED
//
//     //    shared pointer
//
//         shared_ptr<User> tim = make_shared<User>(); // can't use for weak pointer
//         weak_ptr<User> wtim = tim;                  // There is no traking of this data
//         shared_ptr<User> timm = tim;                // ALLOWED IN SHARED POINTER
//     }
//     cout << "OUTSIDE CODE\n";
//
//     return 0;
// }

// Move Semantics
//
// void swap(int &a, int &b)
// {
//     int tmp = move(a);
//     a = move(b);
//     b = move(tmp);
// }
//
// int main()
// {
//     int a, b;
//     cin >> a >> b;
//     cout << "befor change :"<< a <<" "<<b<<" "<<endl ;
//     swap(a, b);
//     cout << "aftor change :"<< a <<" "<<b<<" "<<endl ;
//     return 0;
// }

// LVALUE AND RVALUE
//
// string printme()
// {
// cout<<"kenil\n";
// return "";
// }
//
// int main()
// {
// string s = printme();   // reference is store in "s"
// string &&t = printme(); // reference is is directly refer no need of storage
// return 0;
// }

// vector DAYNAMIC ARRAY
//
// struct Corners
// {
//     float a, b, c, d;
// };
//
// ostream &operator<<(ostream &stream, const Corners &corner)
// {
//     stream << corner.a << " " << corner.b << " " << corner.c << " " << corner.d;
//     return stream;
// }
//
// int main()
// {
//     vector<int> inty;
//
//     inty.push_back(2);
//     inty.push_back(3);
//     inty.push_back(4);
//     inty.push_back(5);
//     inty.push_back(6);
//     inty.push_back(7);
//     inty.push_back(8);
//     inty.push_back(9);
//
//     for (auto i = inty.begin(); i < inty.end(); ++i)
//     {
//         cout << *i << endl;
//     }
//
//     vector<Corners> corners;
//     corners.push_back({5.4, 6.01, 7.0, 8.0});
//     corners.push_back({6.5, 7.5, 8.5, 9.5});
//
//     for (int i = 0; i < corners.size(); ++i)
//     {
//         cout << corners[i] << endl;
//     }
//
//     return 0;
// }

// LAMBDA ("[]{}()")
//
// int main()
// {
//     []{ cout << "Hello Kenil\n"; }();
//     [](){ return "kenil"; };
//
//     auto sum = [](auto a, auto b){ return a + b ;};
//     cout << "Sum Of 2 and 3 is : " << sum(2, 3) << endl;
//
//     string a = "pansara ";
//     string b = "kenil";
//     cout << sum(a,b) <<endl;
//
//     return 0;
// }

// FILE
//
// int main()
// {
//     static const char *originalfile = "origrnalfile.txt";
//     static const char *editedfile = "editedfile.txt";
//
//     rename(originalfile, editedfile); //  To rename the file
//     remove(editedfile); // To remove the file
//     FILE *fh = fopen(originalfile, "w"); // To open the file
//     fclose(fh); // To close the file
//
//     return 0;
// }

// READING AND WRITING INTO FLIES
//
// constexpr int maxbuffer = 1024;
//
// int main()
// {
//     const char *filename = "mythisfile.txt";
//     const char *information = "I am kenil \n";
// // To write into file
//     FILE *fh = fopen(filename, "w");
//     for (int i = 0; i < 50; i++)
//     {
//         fputs(information, fh);
//     }
//     fclose(fh);
// // To read memory form flie
//     char buf[maxbuffer];
//     FILE * fh = fopen(filename,"r");
//     while (fgets(buf,maxbuffer,fh))
//     {
//         fputs(buf,stdout);
//     }
//     fclose(fh);
//
//     return 0;
// }

// STL
// /*
// **STL takes generic programming to b=next level
// **Generic programming is nothig but the code in which the data type is note inportant and the data type is declare at the time of compiling
// **This is also known as run time polymorphism
// */
// template <typename T>
// T getBigger(T a, T b)
// {
//     return (a > b) ? a : b;
// }
//
// int main()
// {
//     cout << getBigger('A' ,'a') << endl;
//     return 0;
// }

// MAIN COMPONENTS IN STL
//
// /*
// 1) ITERATORS (LOOP THEM LIKE VECTOR)
// 2) FUNCTORS (MANAGE STATE, PARAMETERIZED)
// 3)ALGORITHMS (SEARCH,SORT)
// 4)CONTAINERS (IMPLEMENTATION OF WELL DEFINED DATA STRUCTURE){
//     TYPES
//     Sequence types -- vectors,list,deques,stack,queues
//     Associative types -- set,multisets,maps,multimaps(binary tree)
//     Unorderd associative types -- set,multisets,maps,multimaps(hash tree)
// }
// */

// FUNCTION IN STL
//
// class MyFloat
// {
//     float ft;
//
// public:
//     MyFloat()
//     {
//         ft = 0.1;
//     }
//     void getvalue()
//     {
//         cout << ft << endl;
//     }
//     void operator()(float v) // functor oprater syntax(data_type  operator overwrrite_oprator (parameter))
//     {
//         ft += v;
//     }
// };
//
// int main()
// {
//     MyFloat floaty;
//     floaty.getvalue();
//
//     floaty(1);
//     floaty.getvalue();
//
//     return 0;
// }

// SORT ALGO IN STL
//
// int main()
// {
//     int number[6] = {3, 2, 6, 4, 7, 9};
//
//     cout << "Unshorted array" << endl;
//     for (int n : number)
//     {
//         cout << n << "  ";
//     }
//
//     for (int i = 0; i < 6; i++)
//     {
//         if (number[i] > number[i + 1])
//         {
//             int t = number[i];
//             number[i] = number[i + 1];
//             number[i + 1] = t;
//         }
//     }
//
// //it short array by quick short method directly
//     sort(number,number+6); // not applicable for this compiler...
//
//     cout << "\nShorted array" << endl;
//     for (int n : number)
//     {
//         cout << n << "  ";
//     }
//     return 0;
// }

// PARTITION AND STABLE PARTITION IN STL
//
// int main()
// {
//     vector<int> myints = {1, 2, 3, 4, 5, 6, 7, 8, 9};
//     for (int i : myints)
//     {
//         cout << i << " ";
//     }
//     cout << "\n";
//     // IT SEPRATE THE VALUE THAT IS SETISFY THE CONDITION AND NON SETISFY CONDITION
//     partition(myints.begin(), myints.end(), [](auto x){ return x % 2 == 0; });
//     for (int i : myints)
//     {
//         cout << i << " ";
//     }
//     cout << "\n";
//     return 0;
// }
// /* OUTPUT
//     1 2 3 4 5 6 7 8 9
//     2 8 4 6 5 7 3 9 1 // SEPRATE THE VALUE THAT SATISFY THE CONDITION
// */

// REVVIDITING VECTOR IN STL
//
// int main()
// {
//     vector<int> numb;
//     vector<string> heros{"batman", "flase", "superman"};
//     numb.push_back(5);
//     numb.push_back(6);
//     numb.push_back(7);
//     numb.push_back(8);
//     for (int i = 0; i < 5; i++)
//     {
//         numb.push_back(i);
//     }
//     cout << numb.size() << endl
//          << numb.capacity() << endl
//          << numb.max_size() << endl;
//     cout << numb.empty() << endl;
//     for (auto i = numb.begin(); i != numb.end(); i++)
//     {
//         cout<< *i <<" ";
//     }
//     return 0;
// }

// LIST
//
// int main()
// {
//     list<int> mylist;
//     for (int i = 0; i < 5; i++)
//     {
//         mylist.push_back(i);
//     }
//
//     cout<<mylist.front()<<endl; // TO CHECK WHAT ELEMENT IS AT FRIST
//     cout<<mylist.back()<<endl; // TO CHECK WHAT ELEMENT IS AT LAST
//
//     mylist.pop_front(); // DELETE THE FIRST ELEMENT
//     mylist.pop_back(); // DELETE THE LAST ELEMENT
//     cout<<mylist.back()<<endl;
//
//     mylist.reverse(); // REVERSE ALL ELEMENT
//     for (auto i : mylist)
//     {
//         cout <<i << " ";
//     }
//     return 0;
// }

// QUEUE AND PRIORITY QUEUE IN STL
//
// int main()
// {
//     queue<int> myq;
//     myq.push(10);
//     myq.push(11);
//     myq.push(12);
//     myq.push(13);
//     cout << myq.front() << endl; // SHOWS TOP MOST ELEMENT
//     cout << myq.back() << endl; // SHOES BOTTEM MOST ELEMENT
//     myq.pop(); // POP TOP MOST ELEMENT 
//     while (!myq.empty())
//     {
//         cout << " " << myq.front();
//         myq.pop();
//     }
//     cout << "\n";
//     cout << "Outside" << endl;
//     cout << myq.front() << endl;
//
//     priority_queue<int> mypq;
//     mypq.push(1);
//     mypq.push(2);
//     mypq.push(3);
//     mypq.push(4);
//     while (!mypq.empty())
//     {
//         cout << " " << mypq.top(); // IN PQ INSTED OF FRONT TOP IS USE
//         mypq.pop();
//     }
//     cout<<"\n";
//
//     return 0;
// }
