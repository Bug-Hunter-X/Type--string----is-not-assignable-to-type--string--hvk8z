function greeter(person: string): string {
  return "Hello, " + person;
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

let user = ["Jane Doe", "John Smith"];

if (isString(user)) {
  console.log(greeter(user));
} else {
  console.log(`Error: Expected a string, but got ${typeof user}`);
}

// Alternative Solution using array iteration
user.forEach(name => {
    console.log(greeter(name));
})