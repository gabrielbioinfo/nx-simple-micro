
import {Account} from './account';

describe('account enttity', () => {
  it('should create a new Account from create factory', () =>{
    const testAccount = Account.create('name');
    expect(testAccount).toBeDefined();
  });

  it('should update a Account name', () => {
    const testAccount = Account.create('name');
    testAccount.changeName('new name');
    expect(testAccount.props.name).toBe('new name');
  });
  
});