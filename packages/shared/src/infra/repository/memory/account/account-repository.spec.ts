import Entity from '../../../../domain/entity/unique-entity/unique-entity';
import { Account } from '../../../../domain/entity/account/account';
import { AccountRepositoryInMemory } from './account-repository';

function findFirst(repository: {items:Entity[]}) {
  return repository.items[0].id;
}

describe('account repository', () => {

  describe('memory repository', () => {

    let repository = new AccountRepositoryInMemory();
    let account = Account.create('name');
  
    beforeEach(() => {
      repository = new AccountRepositoryInMemory();
      account = Account.create('name');
    });
    
    it('should create a new Item', async () => {
      await repository.create(account);
      expect(repository.items).toHaveLength(1);
    });
  
    it('should find a item', async () => {
      await repository.create(account);
      const item = await repository.find(findFirst(repository));
      expect(item).toBeDefined();
      expect(repository.items[0]).toBe(item);
    });
  
    it('should update a Item name', async () => {
      const item = account;
      repository.create(account);
      item.changeName('new name');
      await repository.update(item.id, item);
      expect(repository.items).toHaveLength(1);
      expect(repository.items[0]).toBe(item);
    });
  
    it('should delete a Item', async () => {
      await repository.create(account);
      expect(repository.items).toHaveLength(1);
      await repository.delete(findFirst(repository));
      expect(repository.items).toHaveLength(0);
    });
  
  });
});

