interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function getUserType(user: User | Admin): string {
    if (user.type === 'user') {
      return 'User';
    } else if (user.type === 'admin') {
      return 'Admin';
    } else {
      throw new Error('Invalid user type');
    }
  }
  