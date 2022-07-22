export abstract class InMemoryRepository<ENTITY extends { id: string }> {
  constructor(public items: ENTITY[] = []) {}

  public async create(entity: ENTITY): Promise<void> {
    this.items.push(entity);
  }

  public async update(id: string, entity: ENTITY): Promise<void> {
    this.items = this.items.map(item => item.id === id ? entity : item);
    const item = await this.find(id);
    if(!item)
      throw new Error('Item not found');
  }

  public async find(id: string): Promise<ENTITY> {
    const index = this.items.findIndex(item => item.id === id);
    return this.items[index];
  }

  public async findAll(filter: any): Promise<ENTITY[]> {
    return this.items;
  }

  public async delete(id: string): Promise<void> {
    this.items = this.items.filter(item => item.id !== id);
  }
}