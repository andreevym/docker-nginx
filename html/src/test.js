export class Test {
  group = {
    users: [{
      id: 543,
      firstName: 'Bob',
      lastName: 'Barker'
    }]
  };

  userService = {
    users: [{
      id: 123,
      firstName: 'Matt',
      lastName: 'Davis'
    }, {
      id: 345,
      firstName: 'Donald',
      lastName: 'Trump'
    }, {
      id: 678,
      firstName: 'Hillary',
      lastName: 'Clinton'
    }, {
      id: 543,
      firstName: 'Bob',
      lastName: 'Barker'
    }, {
      id: 910,
      firstName: 'Bernie',
      lastName: 'Sanders'
    }]
  };
}

export class UserToIdValueConverter {
  toView(user, users) {
    return user ? user.id : null;
  }

  fromView(id, users) {
    return users.find(u => u.id === id);
  }
}
