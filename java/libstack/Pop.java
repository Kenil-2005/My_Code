package libstack;

public class Pop {
    Stack1 stack = new Stack1();

    boolean isfull() {
        if (stack.top == 5) {
            return true;
        }
        return false;
    }

    boolean isempty() {
        if (stack.top <= 0) {
            return true;
        }
        return false;
    }

    public void push(int a) {
        if (!isfull()) {
            stack.s[stack.top] = a;
            stack.top++;
            System.out.println("The value is pushed.\n");
        } else {
            System.out.println("Cannot push, the Stack is full.\n");
        }
    }

    public void pop() {
        if (!isempty()) {
            stack.top--;
            System.out.println("The poped value is : " + stack.s[stack.top] + "\n");
        } else {
            System.out.println("Cannot pop,the stack is empty\n");
        }
    }

    public void peep(int k) {
        if (!isempty()) {
            System.out.println("cannot peep the stack is empty");
        } else if (k < 0 || k > stack.top - 1) {
            System.out.println("Enter valid position.");
        } else {
            System.out.println("The peeped value is : " + stack.s[k]);
        }
    }
}