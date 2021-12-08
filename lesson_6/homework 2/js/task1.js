// task 1

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {

    for (var props in userObj) {
        if (props == 'data') {
            for (var person in userObj[props]) {
                if (person == 'friends') {
                    userObj[props][person].push(friend);
                   return userObj[props][person];
                }
            }
        }
    }
}
console.log(addFriend(user, 'Pete'));
