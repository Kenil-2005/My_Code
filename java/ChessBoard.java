import java.awt.*;

public class ChessBoard extends Frame {
    private final Panel[][] cells;

    // Creating constructor of Frames
    public ChessBoard() {
        // Set visiblity of frame
        this.setVisible(true);
        // Set title of frame
        this.setTitle("My Frame");
        // Set size of frame as you mantion in x,y coordination
        this.setSize(800, 650);
        // Set background color of frame as set
        this.setBackground(Color.lightGray);
        // Set resizablity of frame as you mantion true or false
        this.setResizable(true);
        // Set location of frame as you mantion in the x,y coordination
        // this.setLocation(500,250);
        // Set grid to frame
        this.setLayout(new GridLayout(8, 8));
        int f = 1;
        // Create a new panel
        cells = new Panel[8][8];
        // Alternate the color of brg with black and white
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                cells[i][j] = new Panel();
                if (f == 1) {
                    this.cells[i][j].setBackground(Color.black);
                    f = 0;
                } else {
                    this.cells[i][j].setBackground(Color.white);
                    f = 1;
                }
                this.add(cells[i][j]);
            }
            // Reset the valuue of f for the next row to maintain the alternating patten
            f = (f == 1) ? 0 : 1;
        }
    }

    public static void main(String[] args) {
        new ChessBoard(); // Creating object frames
    }
}