class Sudoku {

    public static boolean isSafe(char[][] board, int row, int col, int v) {
        for (int i = 0; i < 9; i++) {
            // for checking colume
            if (board[row][i] == (char) (v + '0')) {
                return false;
            }
            // for cheking row
            if (board[i][col] == (char) (v + '0')) {
                return false;
            }
        }
        // for checking grid
        int sr = (row / 3) * 3;
        int sc = (col / 3) * 3;
        for (int i = sr; i < sr + 3; i++) {
            for (int j = sc; j < sc + 3; j++) {
                if (board[i][j] == (char) (v + '0')) {
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean Helper(char[][] board, int row, int col) {
        // to check the lastbox(8,8)
        if (row == board.length) {
            return true;
        }
        int nrow = 0;
        int ncol = 0;
        // to change the colume and row to the next
        if (col != board.length - 1) {
            nrow = row;
            ncol = col + 1;
        }else{
            nrow = row + 1;
            ncol = 0;
        }
        // to check the box is full or not if not than place a value that is satisfy
        if (board[row][col] != '.') {
            if (Helper(board, nrow, ncol)) {
                return true;
            }
        } else {
            for (int i = 1; i <= 9; i++) {
                if (isSafe(board, row, col, i)) {
                    board[row][col] = (char) (i + '0');
                    if (Helper(board, nrow, ncol)) {
                        return true;
                    } else {
                        board[row][col] = '.';
                    }
                }
            }
        }

        return false;
    }

    public static void main(String[] args) {
        char[][] board = { { '.', '3', '.', '.', '7', '.', '.', '.', '.' },
                { '6', '.', '.', '1', '9', '5', '.', '.', '.' },
                { '1', '9', '8', '.', '.', '.', '.', '6', '.' },
                { '8', '.', '.', '.', '6', '.', '.', '.', '3' },
                { '4', '.', '.', '8', '.', '3', '.', '.', '1' },
                { '7', '.', '.', '.', '2', '.', '.', '.', '6' },
                { '.', '6', '.', '.', '.', '.', '2', '8', '.' },
                { '.', '.', '.', '4', '1', '9', '.', '.', '5' },
                { '.', '.', '.', '.', '8', '.', '.', '7', '9' } };
        Helper(board, 0, 0);
        // to print the sudoku
        System.out.println(" +-----------------------------------+");
        for(int i = 0; i < 9;i++){
            for(int j = 0 ; j < 9 ; j++){
                System.out.print(" | "+board[i][j]);
            }
            System.out.print(" |");
            System.out.println("");
            if ( i == 8) {
                break;
            }else{
                System.out.println(" |---|---|---|---|---|---|---|---|---|");
            }
        }
        System.out.println(" +-----------------------------------+");
    }
}