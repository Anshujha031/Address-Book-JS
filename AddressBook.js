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
        let duplicate = addressBook.filter(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if (duplicate.length > 0) {
            throw new Error("Duplicate contact: A contact with the same name already exists.");
        }
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

function deleteContact(firstName, lastName) {
    let index = addressBook.findIndex(c => c.firstName === firstName && c.lastName === lastName);
    if (index !== -1) {
        addressBook.splice(index, 1);
    } else {
        throw new Error("Contact not found");
    }
}

function getContactCount() {
    return addressBook.reduce(count => count + 1, 0);
}

function searchByCity(city) {
    return addressBook.filter(contact => contact.city === city).map(contact => `${contact.firstName} ${contact.lastName}`);
}

function searchByState(state) {
    return addressBook.filter(contact => contact.state === state).map(contact => `${contact.firstName} ${contact.lastName}`);
}

function viewPersonsByCity(city) {
    return addressBook.filter(contact => contact.city === city);
}

function viewPersonsByState(state) {
    return addressBook.filter(contact => contact.state === state);
}

function countByCity(city) {
    return addressBook.filter(contact => contact.city === city).reduce(count => count + 1, 0);
}

function countByState(state) {
    return addressBook.filter(contact => contact.state === state).reduce(count => count + 1, 0);
}
