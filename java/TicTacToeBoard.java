
// public class Help {
//     public static void main(String[] args) {

//     }
// }

import javax.swing.*;
import java.awt.*;
import java.util.Random;

public class TicTacToeBoard extends JFrame {
    private JLabel[][] cells; 

    public TicTacToeBoard() {
        // Creating frame
        setTitle("Tic Tac Toe");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(500, 500);
        setLayout(new GridLayout(3, 3));

        cells = new JLabel[3][3]; // Creating cells or partition
        Random random = new Random();

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                cells[i][j] = new JLabel();
                add(cells[i][j]); // Add cells to frame

                int choice = random.nextInt(2); // 0 for X, 1 for O, 2 for empty
                if (choice == 0)
                    cells[i][j].setIcon(new ImageIcon("X.png"));
                else if (choice == 1)
                    cells[i][j].setIcon(new ImageIcon("O.gif"));
            }
        }
        setVisible(true); // Setting visibility
    }

    public static void main(String[] args) {
        new TicTacToeBoard(); // Creating object
    }
}
