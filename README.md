
# Cinematic Prompt Studio - How to Run Locally

This is a modern web application built with React and TypeScript that runs directly in the browser without a complex build step.

Because it uses ES Modules (`import`/`export`), you **cannot** simply open the `index.html` file directly from your file system. You must serve the files using a local web server. Here are three easy ways to do that.

---

### Prerequisites

- You have downloaded and unzipped the project files.
- You have a terminal or command prompt.

---

### Option 1: Using Python (Recommended for Simplicity)

Most systems (macOS, Linux) come with Python pre-installed. On Windows, you can easily install it from the Microsoft Store or [python.org](https://python.org).

1.  **Open your terminal** (Terminal on Mac/Linux, Command Prompt or PowerShell on Windows).
2.  **Navigate to the project folder** where you unzipped the files.
    ```bash
    cd path/to/your/cinematic-prompt-studio-folder
    ```
3.  **Start the web server.**
    *   If you have Python 3 (most common):
        ```bash
        python -m http.server
        ```
    *   If you have an older system with Python 2:
        ```bash
        python -m SimpleHTTPServer
        ```
4.  **Open your browser** and go to the following address:
    [http://localhost:8000](http://localhost:8000)

The application should now be running.

---

### Option 2: Using Node.js and `serve`

If you are a web developer, you likely have Node.js installed.

1.  **Open your terminal.**
2.  **Navigate to the project folder.**
    ```bash
    cd path/to/your/cinematic-prompt-studio-folder
    ```
3.  **Run the `serve` command.** The `npx` command will automatically download and run the `serve` package without you needing to install it globally.
    ```bash
    npx serve
    ```
4.  The terminal will give you a local address, usually something like `http://localhost:3000`. **Open that URL in your browser.**

---

### Option 3: Using VS Code and the "Live Server" Extension

If you use Visual Studio Code as your editor, this is the easiest graphical method.

1.  **Install the extension:** Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`) and search for **"Live Server"** by Ritwick Dey. Install it.
2.  **Open the project folder** in VS Code.
3.  **Right-click** on the `index.html` file in the file explorer.
4.  Select **"Open with Live Server"**.
5.  A new browser tab will automatically open with the application running.

---

Choose any of these methods, and you'll have the Cinematic Prompt Studio running locally on your machine.
