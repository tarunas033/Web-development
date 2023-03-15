// interface for object with title, status, and id properties
interface MyObject {
    title: string;
    status: boolean;
    id: number;
  }
  
  // function to get full name from first and last name
  function getName({ firstname, lastname }: { firstname: string; lastname?: string }): string {
    if (lastname) {
      return `${firstname} ${lastname}`;
    } else {
      return firstname;
    }
  }
  
  // interface for address object
  interface Address {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  // interface for person details object
  interface PersonDetails {
    prefix?: string;
    phones: number[];
    addresses: Address[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
  }
  
  // function to add person details to phone book array
  function PhoneBook(details: PersonDetails): void {
    phoneBookArray.push(details);
  }
  
  // array to store person details
  const phoneBookArray: PersonDetails[] = [];
  
  // example usage
  const myObject: MyObject = { title: "My Title", status: true, id: 123 };
  const fullName: string = getName({ firstname: "Taruna", lastname: "Sharma" });
  const address: Address = {
    houseNumber: "904",
    street: "The serenas",
    city: "Gurugram",
    state: "Haryana",
    postalCode: "12345",
    country: "India"
  };
  const personDetails: PersonDetails = {
    prefix: "Mrs.",
    phones: [9540674445],
    addresses: [address],
    email: "tarunas033@gmail.com",
    firstname: "Taruna",
    lastname: "Sharma",
    middlename: ""
  };
  PhoneBook(personDetails);
  