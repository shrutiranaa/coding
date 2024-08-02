#include <iostream>
#include <vector>
#include <string>
#include <fstream>

using namespace std;

// Book structure to store book details
struct Book {
    int id;
    string title;
    string author;
    bool isIssued;
};

// Vector to store books
vector<Book> books;
int bookIdCounter = 1; // Starting book ID

// Function declarations
void loadBooks();
void saveBooks();
void addBook();
void displayBooks();
void issueBook();
void returnBook();

int main() {
    loadBooks();
    int choice;

    do {
        cout << "\nLibrary Management System Menu" << endl;
        cout << "1. Add Book" << endl;
        cout << "2. Display All Books" << endl;
        cout << "3. Issue Book" << endl;
        cout << "4. Return Book" << endl;
        cout << "5. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore(); // To ignore the newline character after choice input

        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                displayBooks();
                break;
            case 3:
                issueBook();
                break;
            case 4:
                returnBook();
                break;
            case 5:
                cout << "Exiting..." << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
    } while (choice != 5);

    return 0;
}

// Function to load books from a file
void loadBooks() {
    ifstream file("books.txt");
    if (!file) return;

    Book book;
    while (file >> book.id >> book.isIssued) {
        file.ignore();
        getline(file, book.title);
        getline(file, book.author);
        books.push_back(book);
    }
    if (!books.empty()) {
        bookIdCounter = books.back().id + 1;
    }
    file.close();
}

// Function to save books to a file
void saveBooks() {
    ofstream file("books.txt");
    for (const auto& book : books) {
        file << book.id << " " << book.isIssued << endl;
        file << book.title << endl;
        file << book.author << endl;
    }
    file.close();
}

// Function to add a new book
void addBook() {
    Book newBook;
    newBook.id = bookIdCounter++;
    cout << "Enter book title: ";
    cin.ignore();
    getline(cin, newBook.title);
    cout << "Enter book author: ";
    getline(cin, newBook.author);
    newBook.isIssued = false;
    books.push_back(newBook);
    saveBooks();
    cout << "Book added successfully!" << endl;
}

// Function to display all books
void displayBooks() {
    if (books.empty()) {
        cout << "No books found." << endl;
        return;
    }
    for (const auto& book : books) {
        cout << "ID: " << book.id << ", Title: " << book.title << ", Author: " << book.author << ", Issued: " << (book.isIssued ? "Yes" : "No") << endl;
    }
}

// Function to issue a book
void issueBook() {
    int id;
    cout << "Enter book ID to issue: ";
    cin >> id;
    for (auto& book : books) {
        if (book.id == id) {
            if (!book.isIssued) {
                book.isIssued = true;
                saveBooks();
                cout << "Book issued successfully!" << endl;
                return;
            } else {
                cout << "Book is already issued." << endl;
                return;
            }
        }
    }
    cout << "Book not found." << endl;
}

// Function to return a book
void returnBook() {
    int id;
    cout << "Enter book ID to return: ";
    cin >> id;
    for (auto& book : books) {
        if (book.id == id) {
            if (book.isIssued) {
                book.isIssued = false;
                saveBooks();
                cout << "Book returned successfully!" << endl;
                return;
            } else {
                cout << "Book was not issued." << endl;
                return;
            }
        }
    }
    cout << "Book not found." << endl;
}