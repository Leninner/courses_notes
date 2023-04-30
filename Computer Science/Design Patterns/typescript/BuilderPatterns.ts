interface IQueryBuilder {
    select(...fields: string[]): IQueryBuilder;
    from(table: string): IQueryBuilder;
    where(condition: string): IQueryBuilder;
    build(): string;
}

class QueryBuilder implements IQueryBuilder {
    private query: string = '';

    select(...fields: string[]): IQueryBuilder {
        this.query += `SELECT ${fields.join(', ')} `;
        return this;
    }

    from(table: string): IQueryBuilder {
        this.query += `FROM ${table} `;
        return this;
    }

    where(condition: string): IQueryBuilder {
        this.query += `WHERE ${condition} `;
        return this;
    }

    build(): string {
        return new Query(this.query).toString();
    }
}

class Query {
    private query: string;

    constructor(query: string) {
        this.query = query;
    }

    toString(): string {
        return this.query;
    }
}

const query = new QueryBuilder()
    .select('name', 'age')
    .from('users')
    .where('age > 18')

console.log(query.build()); // SELECT name, age FROM users WHERE age > 18