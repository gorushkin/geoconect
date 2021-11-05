import { Knex } from 'knex';

const body = `
  ### НА ДАЛЬНЕМ ВОСТОКЕ МОГУТ ВВЕСТИ НАЛОГОВЫЕ ЛЬГОТЫ ДЛЯ ДОБЫВАЮЩИХ КОМПАНИЙ\n\n
  Минвостокразвития выступил с предложение об уменьшении НДПИ для проектов по добыче твёрдых ископаемых на Дальнем Востоке. Как отметил Алексей ЧЕКУНКОВ, возглавляющий Министерство, при разработке месторождений в регионе, из-за отдалённого расположения, а также порой и климатических условий, компании сталкиваются с высокими затратами на обустройство как транспортной, так и энергетической инфраструктуры.\n\n
  Разработанный законопроект предлагает рассчитывать вычет как сумму понесённых расходов на необходимые строительные и логистические операции для подобных объектов. При этом вычет не должен превышать 50% от выплаченного НДПИ. \n\n
  На снижение ставки смогут рассчитывать только те проекты, где добывающие работы стартовали не ранее 2021 года. Предполагается, что действие льгот продлится вплоть до 2032 г. В Минвостокразвития рассчитывают, что данная мера поможет привлечь на Дальний Восток более 96 миллиардов руб. инвестиций.`;

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('table_name').del();

  try {
    await knex('news').del();
    console.log('news is empty');
  } catch (error) {
    console.log(error);
  }

  // Inserts seed entries
  // await knex('table_name').insert([
  //   { id: 1, colName: 'rowValue1' },
  //   { id: 2, colName: 'rowValue2' },
  //   { id: 3, colName: 'rowValue3' },
  // ]);

  try {
    await knex('news').insert({
      body,
      title: 'НА ДАЛЬНЕМ ВОСТОКЕ МОГУТ ВВЕСТИ НАЛОГОВЫЕ ЛЬГОТЫ ДЛЯ ДОБЫВАЮЩИХ КОМПАНИЙ',
    });
    console.log('Added dummy news!');
  } catch (error) {
    console.log(error);
  }
}
