# @webb/validate-email

> Pretty good email validation



## Install

```sh
$ npm i @webb/validate-email
```



## Usage

```js
import validateEmail from "@webb/validate-email";

// You would obviously have this wrapped in an async function
// This example is extremely pared down

if (!validateEmail("l0l you gez h@x0r3d!")) {
  return "Email validation failed";
}
```

```js
// You can also import the raw regex this module is using...
// But like, why?
import { emailRegex } from "@webb/validate-email";

if (!emailRegex.test("you@example.com")) {
  return "Email validation failed";
}
```



## API

### validateEmail(suppliedEmail)
#### suppliedEmail
Type: `string`

Pass any input into this function and you will find out if it is valid or not.

### emailRegex

You better know what you are doing.
