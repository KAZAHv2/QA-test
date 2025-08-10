import {browser} from "@wdio/globals";
import Login from "../pageobjects/login/login";
import unLogin from "../pageobjects/login/unlogin";

describe('Login', () => {
  const userName = `Adminimum`;
  const password = '12345678';

  it('should login Search Hotel page', async () => {
    await Login.login(userName, password);
  });
});

describe('unLogin', () => {

  it('should unlogin Search Hotel page', async () => {
    await unLogin.unlogin();
  });
});


