# 🐸 Croakulator

A simple, elegant calculator desktop application built with Electron. Features a charming frog-themed design with smooth animations and cross-platform compatibility.

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Aayush-Sigdel/simpleCalculator.git
    cd simpleCalculator
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the application**
    ```bash
    npm start
    ```

## 🔨 Building

### Development

```bash
npm start          # Run in development mode with hot reload
```

### Production Builds

#### Windows

```bash
npm run build:win      # Create Windows installer (.exe)
```

#### macOS

```bash
npm run build:mac      # Create macOS DMG and ZIP
```

#### Linux

```bash
npm run build:linux    # Create AppImage, DEB, and Arch packages
npm run build:arch     # Create Arch Linux package only
```

#### All Platforms

```bash
npm run build:all      # Build for Windows, macOS, and Linux
```

## 🎮 Usage

### Basic Operations

-   **Numbers**: Click number buttons or type on keyboard
-   **Operations**: Use +, -, \*, / buttons or keyboard
-   **Calculate**: Press = button or Enter key
-   **Clear**: AC button clears all input
-   **Delete**: Backspace button removes last character
-   **Decimal**: Use . button for decimal numbers
-   **Percentage**: % button for percentage calculations

## 📁 Project Structure

```
simpleCalculator/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with animations
├── script.js           # Calculator logic
├── main.js             # Electron main process
├── package.json        # Project configuration
├── icon.png            # Application icon
├── background.svg      # Display background pattern
├── Vector.png          # Delete button icon
└── output-onlinegiftools.gif  # Animated frog mascot
```

## 🛠️ Technologies Used

-   **Electron**: Cross-platform desktop app framework
-   **HTML5**: Modern markup
-   **CSS3**: Animations and responsive design
-   **JavaScript**: Calculator logic and DOM manipulation
-   **Electron Builder**: Application packaging and distribution

## 📦 Download

### Latest Release

-   **Windows**: `Croakulator-Windows-1.0.0-Setup.exe`
-   **macOS**: `Croakulator-macOS-1.0.0.dmg`
-   **Linux AppImage**: `Croakulator-Linux-1.0.0.AppImage`
-   **Debian/Ubuntu**: `Croakulator-Linux-1.0.0.deb`
-   **Arch Linux**: `Croakulator-Linux-1.0.0.pacman`

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aayush Sigdel**

-   GitHub: [@Aayush-Sigdel](https://github.com/Aayush-Sigdel)
-   Project: [simpleCalculator](https://github.com/Aayush-Sigdel/simpleCalculator)

## 🐛 Bug Reports

Found a bug? Please open an issue on [GitHub Issues](https://github.com/Aayush-Sigdel/simpleCalculator/issues).

---
