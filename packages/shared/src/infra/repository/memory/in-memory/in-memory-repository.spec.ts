import { InMemoryRepository } from './in-memory-repository';

class StubEntity {
  constructor(public id: string, public name: string) {}
}

class StubMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('memory repository', () => {

  let repository = new StubMemoryRepository();

  beforeEach(() => {
    repository = new StubMemoryRepository();
  });
  
  it('should create a new Item', async () => {
    await repository.create(new StubEntity('id', 'name'));
    expect(repository.items).toHaveLength(1);
  });

  it('should find a item', async () => {
    await repository.create(new StubEntity('id', 'name'));
    const item = await repository.find('id');
    expect(item).toBeDefined();
    expect(repository.items[0]).toBe(item);
  });

  it('should update a Item name', async () => {
    const item = new StubEntity('id', 'name');
    repository.create(new StubEntity('id', 'name'));
    item.name = 'new name';
    await repository.update(item.id, item);
    expect(repository.items).toHaveLength(1);
    expect(repository.items[0]).toBe(item);
  });

  it('should delete a Item', async () => {
    await repository.create(new StubEntity('id', 'name'));
    expect(repository.items).toHaveLength(1);
    await repository.delete('id');
    expect(repository.items).toHaveLength(0);
  });

});