class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("Invalid first name: Must start with a capital letter and have at least 3 characters.");
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Invalid last name: Must start with a capital letter and have at least 3 characters.");
        }
        if (!/.{4,}/.test(address)) {
            throw new Error("Invalid address: Must have at least 4 characters.");
        }
        if (!/.{4,}/.test(city)) {
            throw new Error("Invalid city: Must have at least 4 characters.");
        }
        if (!/.{4,}/.test(state)) {
            throw new Error("Invalid state: Must have at least 4 characters.");
        }
        if (!/^\d{5}(-\d{4})?$/.test(zip)) {
            throw new Error("Invalid zip: Must be a valid zip code.");
        }
        if (!/^\d{10}$/.test(phoneNumber)) {
            throw new Error("Invalid phone number: Must be a 10-digit number.");
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Invalid email: Must be a valid email address.");
        }
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
    const addressBook = [];

function addContact(contact) {
    if (contact instanceof Contact) {
        addressBook.push(contact);
    } else {
        throw new Error("Invalid contact: Must be an instance of Contact");
    }
}

function getContacts() {
    return addressBook;
}
function findAndEditContact(firstName, lastName, updatedDetails) {
    let contact = addressBook.find(c => c.firstName === firstName && c.lastName === lastName);
    if (contact) {
        Object.assign(contact, updatedDetails);
    } else {
        throw new Error("Contact not found");
    }
}

   