#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Contact structure
struct Contact {
    string name;
    string phone;
    string email;
};

// Function declarations
void addContact(vector<Contact>& contacts);
void displayContacts(const vector<Contact>& contacts);
void searchContact(const vector<Contact>& contacts);
void deleteContact(vector<Contact>& contacts);

int main() {
    vector<Contact> contacts;
    int choice;

    do {
        cout << "Address Book Menu" << endl;
        cout << "1. Add Contact" << endl;
        cout << "2. Display Contacts" << endl;
        cout << "3. Search Contact" << endl;
        cout << "4. Delete Contact" << endl;
        cout << "5. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore(); // To ignore newline character after choice input

        switch (choice) {
            case 1:
                addContact(contacts);
                break;
            case 2:
                displayContacts(contacts);
                break;
            case 3:
                searchContact(contacts);
                break;
            case 4:
                deleteContact(contacts);
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

// Function to add a new contact
void addContact(vector<Contact>& contacts) {
    Contact newContact;
    cout << "Enter name: ";
    getline(cin, newContact.name);
    cout << "Enter phone number: ";
    getline(cin, newContact.phone);
    cout << "Enter email: ";
    getline(cin, newContact.email);
    contacts.push_back(newContact);
    cout << "Contact added successfully!" << endl;
}

// Function to display all contacts
void displayContacts(const vector<Contact>& contacts) {
    if (contacts.empty()) {
        cout << "No contacts found." << endl;
        return;
    }
    for (size_t i = 0; i < contacts.size(); ++i) {
        cout << "Contact " << i + 1 << ":" << endl;
        cout << "Name: " << contacts[i].name << endl;
        cout << "Phone: " << contacts[i].phone << endl;
        cout << "Email: " << contacts[i].email << endl;
        cout << "--------------------------" << endl;
    }
}

// Function to search for a contact by name
void searchContact(const vector<Contact>& contacts) {
    if (contacts.empty()) {
        cout << "No contacts found." << endl;
        return;
    }
    string searchName;
    cout << "Enter name to search: ";
    getline(cin, searchName);
    bool found = false;
    for (const auto& contact : contacts) {
        if (contact.name == searchName) {
            cout << "Contact found:" << endl;
            cout << "Name: " << contact.name << endl;
            cout << "Phone: " << contact.phone << endl;
            cout << "Email: " << contact.email << endl;
            found = true;
            break;
        }
    }
    if (!found) {
        cout << "Contact not found." << endl;
    }
}

// Function to delete a contact by name
void deleteContact(vector<Contact>& contacts) {
    if (contacts.empty()) {
        cout << "No contacts found." << endl;
        return;
    }
    string deleteName;
    cout << "Enter name to delete: ";
    getline(cin, deleteName);
    for (auto it = contacts.begin(); it != contacts.end(); ++it) {
        if (it->name == deleteName) {
            contacts.erase(it);
            cout << "Contact deleted successfully!" << endl;
            return;
        }
    }
    cout << "Contact not found." << endl;
}