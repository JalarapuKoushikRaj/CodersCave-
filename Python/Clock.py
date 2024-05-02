import tkinter as tk
import time


class ClockApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Simple Clock")
        self.label = tk.Label(root, font=('calibri', 40, 'bold'), bg='blue')
        self.label.pack(fill='both', expand=True)
        self.update_clock()

    def update_clock(self):
        current_time = self.get_formatted_time()
        self.label.config(text=current_time)
        self.root.after(1000, self.update_clock)

    def get_formatted_time(self):
        current_time = time.localtime()
        formatted_time = time.strftime('%I:%M:%S %p', current_time)
        return formatted_time


if __name__ == "__main__":
    root = tk.Tk()
    app = ClockApp(root)
    root.mainloop()
