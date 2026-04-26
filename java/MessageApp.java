import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MessageApp extends JFrame {
    private JLabel messageLabel;
    private JButton leftButton;
    private JButton rightButton;
    private JRadioButton redRadio;
    private JRadioButton blueRadio;
    private JRadioButton greenRadio;

    public MessageApp() {
        setTitle("Message App");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        messageLabel = new JLabel("Hello, world!");
        messageLabel.setFont(new Font("Helvetica", Font.PLAIN, 24));
        add(messageLabel, BorderLayout.CENTER);

        JPanel buttonPanel = new JPanel();
        leftButton = new JButton("Left");
        leftButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                moveLeft();
            }
        });
        buttonPanel.add(leftButton);

        rightButton = new JButton("Right");
        rightButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                moveRight();
            }
        });
        buttonPanel.add(rightButton);

        add(buttonPanel, BorderLayout.NORTH);

        JPanel radioPanel = new JPanel();
        redRadio = new JRadioButton("Red");
        redRadio.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                changeColor("red");
            }
        });
        radioPanel.add(redRadio);

        blueRadio = new JRadioButton("Blue");
        blueRadio.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                changeColor("blue");
            }
        });
        radioPanel.add(blueRadio);

        greenRadio = new JRadioButton("Green");
        greenRadio.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                changeColor("green");
            }
        });
        radioPanel.add(greenRadio);

        ButtonGroup colorGroup = new ButtonGroup();
        colorGroup.add(redRadio);
        colorGroup.add(blueRadio);
        colorGroup.add(greenRadio);

        add(radioPanel, BorderLayout.SOUTH);
    }

    private void moveLeft() {
        Point location = messageLabel.getLocation();
        messageLabel.setLocation(location.x - 10, location.y);
    }

    private void moveRight() {
        Point location = messageLabel.getLocation();
        messageLabel.setLocation(location.x + 10, location.y);
    }

    private void changeColor(String color) {
        switch (color) {
            case "red":
                messageLabel.setForeground(Color.RED);
                break;
            case "blue":
                messageLabel.setForeground(Color.BLUE);
                break;
            case "green":
                messageLabel.setForeground(Color.GREEN);
                break;
            default:
                break;
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                MessageApp app = new MessageApp();
                app.setVisible(true);
            }
        });
    }
}
