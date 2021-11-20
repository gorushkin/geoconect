import Knex from 'knex';
import configs from './knexfile';

const config = configs[process.env['NODE_ENV'] || 'development'];
console.log('config: ', config);

const knex = config ? Knex(config) : null;

const initDatabase = async () => {
  if (knex) {
    await knex.schema.createTableIfNotExists('news', (table) => {
      table.increments('id').primary();
      table.text('body').notNullable();
      table.string('href');
      table.string('title');
      table.string('img_src');
      if (knex) table.timestamp('updated_at').defaultTo(knex.fn.now());
      if (knex) table.timestamp('created_at').defaultTo(knex.fn.now());
    });
    const list = await knex.queryBuilder().select('*').from('news')
    console.log('list: ', list);
  }
};

initDatabase();

export default knex;
