


//  N A T I V E

import assert from "assert";

//  I M P O R T

import Test from "@webb/test";

//  U T I L

import { emailRegex } from "../dist";
import validateEmail from "../dist";



//  T E S T S

const test = Test("@webb/validate-email");

test("Returns false if email does not validate", () => {
  assert.strictEqual(validateEmail("l0l you gez h@x0r3d!"), false);
});

test("Returns false if email input is incomplete", () => {
  assert.strictEqual(validateEmail(""), false);
});

test("Returns true if email validates", () => {
  assert.strictEqual(validateEmail("you@example.com"), true);
});

test("Returns true if 'emailRegex' is indeed a regex", () => {
  assert.ok(typeof emailRegex === "object");
});

test("Returns true if regex validates proper email address as true", () => {
  assert.strictEqual(emailRegex.test("you@example.com"), true);
});

test("Returns false if regex validates phony email address as false", () => {
  assert.strictEqual(emailRegex.test("l0l you gez h@x0r3d!"), false);
});

test.run();
