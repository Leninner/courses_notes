interface IQueryBuilder {
    public void from(String from);
    public void where(String where);
    public void orderBy(String orderBy);
    public Query getQuery();
}

class QueryBuilder implements IQueryBuilder {
    private Query query = new Query();

    public void from(String from) {
        query.setFrom(from);
    }

    public void where(String where) {
        query.setWhere(where);
    }

    public void orderBy(String orderBy) {
        query.setOrderBy(orderBy);
    }

    public Query getQuery() {
        return query;
    }
}

class Query {
    private String from;
    private String where;
    private String orderBy;

    public void setFrom(String from) {
        this.from = from;
    }

    public void setWhere(String where) {
        this.where = where;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public String toString() {
        return "from: " + from + ", where: " + where + ", orderBy: " + orderBy;
    }
}

public class BuilderPattern {
    public static void main(String[] args) {
        QueryBuilder builder = new QueryBuilder();
        builder.from("client");
        builder.where("client.name = 'John'");
        builder.orderBy("client.name");
        
        Query query = builder.getQuery();
        System.out.println(query);
    }
}