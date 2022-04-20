let randomMessage = () => {

    let firstNames = ['Toni', 'Kelly', 'Liam', 'James', 'Lucas', 'Ethan', 'Chris', 'Jhon', 'Levi', 'Jack', 'David', 'Leo'];

    let lastNames = ['Smith', 'Jhonson', 'Williams', 'Brown', 'Miller', 'Davis', 'Lopez', 'Martinez', 'Willson', 'Thomas'];

    let sports = ['football', 'baseball', 'tennis', 'cricket', 'volleyball', 'table tennis'];

    let randomFnames = firstNames[Math.floor(Math.random(firstNames.length) * 11 + 1)]

    let randomLnames = lastNames[Math.floor(Math.random(lastNames.length) * 9 + 1)]

    let randomSports = sports[Math.floor(Math.random(sports.length) * 5 + 1)]

    const output = "My name is " + randomFnames + ' ' + randomLnames + " and i love watching " + randomSports + "!";

    return output

};

console.log(randomMessage())