class Person:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def __str__(self):
        return f"{self.name}: ${self.balance:.2f}"


class Expense:
    def __init__(self, description, amount, participants):
        self.description = description
        self.amount = amount
        self.participants = participants

    def __str__(self):
        return f"{self.description}: ${self.amount:.2f}"


def add_expense(expenses, description, amount, participants):
    expense = Expense(description, amount, participants)
    expenses.append(expense)
    per_person_share = amount / len(participants)
    for participant in participants:
        participant.balance += per_person_share


def settle_balances(people, expenses):
    for expense in expenses:
        per_person_share = expense.amount / len(expense.participants)
        for participant in expense.participants:
            participant.balance -= per_person_share


def display_balances(people):
    for person in people:
        print(person)


def main():
    people = [Person("sumanth"), Person("koushik"), Person("varun"), Person("sai")]
    expenses = []

    while True:
        print("\n1. Add Expense\n2. Clear Expense\n3. View Balances\n4. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            description = input("Enter expense description: ")
            amount = float(input("Enter expense amount:"))
            participants = input("Enter participants (comma-separated): ").split(",")
            participants = [person for person in people if person.name in participants]
            add_expense(expenses, description, amount, participants)
            print("Expense added successfully!")

        elif choice == "2":
            settle_balances(people, expenses)
            print("Balances settled.")

        elif choice == "3":
            display_balances(people)

        elif choice == "4":
            break

        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
