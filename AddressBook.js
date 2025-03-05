class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAddress() {
        return this.address;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }

    getZip() {
        return this.zip;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getEmail() {
        return this.email;
    }

    toString() {
        return `Contact { firstName: '${this.firstName}', lastName: '${this.lastName}', address: '${this.address}', city: '${this.city}', state: '${this.state}', zip: '${this.zip}', phoneNumber: '${this.phoneNumber}', email: '${this.email}' }`;
    }
}
