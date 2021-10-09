/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://gorushkin.github.io/geoconect/" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://gorushkin.github.io/geoconect/" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://gorushkin.github.io/geoconect/" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://gorushkin.github.io/geoconect/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Геоконект: Маркшейдерское обслуживание" />
        <meta property="og:title" content="Геоконект" />
        <meta property=" og:description" content="Маркшейдерское обслуживание -
Проектирование горных производств и объектов, маркшейдерское обеспечение горных работ" />
        <meta property="og:image" content="https://gorushkin.github.io/geoconect/img/about__logo--og.png" />
        <title>Geoconect</title>
      </Head>
      <header className="header js__header">
        <div className="wrapper">
          <div className="header__inner">
            <a className="header__logo">
              <img src="logo.png" alt="Geoconect Logo" />
            </a>
            <nav className="header__nav js__menu">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="#works">
                    Виды работ
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#documents">
                    Сертификаты
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#news">
                    Новости
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#about">
                    О Компании
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#contact">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__btn--wrapper">
              <button className="header__btn header__btn--open js__btn">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className='main'>
        <section className='promo'>
          <div className='wrapper'>
            <h1 className='promo__title'>Маркшейдерское обслуживание</h1>
            <div className='promo__inner'>
              <div className='promo__left'>
                <p className='promo__text'>
                  Проектирование горных производств и объектов, маркшейдерское обеспечение горных
                  работ
                </p>
                <a href='' className='promo__btn btn'>
                  Оставить заявку
                </a>
                <div className='promo__social'>
                  <p className='promo__social-text'>Подписывайтесь в соцсетях</p>
                  <ul className='promo__social-list'>
                    <li className='promo__social-item'>
                      <a href=''>
                        <svg className='img'>
                          <use xlinkHref='sprite.svg#icon__instagram'></use>
                        </svg>
                      </a>
                    </li>
                    <li className='promo__social-item'>
                      <a href=''>
                        <svg className='img'>
                          <use xlinkHref='sprite.svg#icon__youtube'></use>
                        </svg>
                      </a>
                    </li>
                    <li className='promo__social-item'>
                      <a href=''>
                        <svg className='img'>
                          <use xlinkHref='sprite.svg#icon__facebook'></use>
                        </svg>
                      </a>
                    </li>
                    <li className='promo__social-item'>
                      <a href=''>
                        <svg className='img'>
                          <use xlinkHref='sprite.svg#icon__twitter'></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='promo__info'>
                <li>
                  <p>Ежедневно с 08:00 до 18:00</p>
                  <a href='tel:+74957760634'>+7(495) 776 06 34</a>
                  <a href='tel:+79265661058'>+7 (926) 566 10 58</a>
                  <a href='mailto:info@geoconect.ru'>info@geoconect.ru</a>
                </li>

                <li>
                  <dl>
                    <dt>Адреc:</dt>
                    <dd>115477, г. Москва, ул. Деловая, д.11, корпус 1.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Генеральный директор :</dt>
                    <dd>Горюшкин Валерий Викторович</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id='works' className='works'>
          <div className='wrapper'>
            <h2 className='works__title'>Виды работ</h2>
            <p className='works__info-text'>
              Наша организация занимается выполнением следующих видов работ:
            </p>
            <ul className='works__list'>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--01'>
                  <p className='works__item-description'>
                    Маркшейдерское обеспечение горных работ
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--02'>
                  <p className='works__item-description'>
                    Оперативные (контрольные) маркшейдерские съемки
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--03'>
                  <p className='works__item-description'>
                    Разработка (корректировка) проектной документации
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--04'>
                  <p className='works__item-description'>
                    Планы развития горных работ
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--05'>
                  <p className='works__item-description'>
                    Разработка проектов производства маркшейдерских работ
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--06'>
                  <p className='works__item-description'>
                    Проекты горных отводов
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
              <li className='works__item'>
                <a href='' className='works__item-inner works__item-inner--07'>
                  <p className='works__item-description'>
                    Составление гос-веной статистической отчетности по формам 5-ГР, 70-ТП, 71-ТП,
                    2-ТП, 2-ЛС и др.
                    <span className='works__item-arrow'></span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id='documents' className='documents'>
          <div className='wrapper'>
            <h2 className='section-title documents__title'>Наши сертификаты</h2>
            <div className='documents__inner'>
              <div className='documents__left documents__img-wrpapper'>
                <Image
                  className='documents__img'
                  src='/documents__img01.jpg'
                  width='426'
                  height='611'
                  alt='Лицензия'
                />
              </div>
              <div className='documents__content'>
                <div className='document__content-inner'>
                  <p>ООО «Геоконект» осуществляет свою деятельность на основании:</p>
                  <p>Лицензии Ростехнадзора на производство маркшейдерских работ.</p>
                  <p>
                    В рамках реализации кадровой политики ООО «Геоконект» особое внимание уделяется
                    процессу непрерывного повышения профессионального уровня сотрудников.
                    Руководящие работники и специалисты компании в установленном порядке обучены и
                    аттестованы по вопросам промышленной безопасности и охраны труда, регулярно
                    проходят курсы повышения квалификации в специализированных учебных центрах,
                    принимают активное участие в тематических конференциях и семинарах.
                  </p>
                  <p>
                    Высокая деловая репутация ООО «Геоконект» подтверждена многочисленными
                    положительными отзывами Заказчиков.
                  </p>
                  <a href='' className='documents__btn btn btn--trans'>
                    Заказать обратный звонок
                  </a>
                </div>
              </div>
              <div className='documents__right documents__img-wrpapper'>
                <Image
                  className='documents__img'
                  src='/documents__img02.jpg'
                  width='426'
                  height='611'
                  alt='Диплом'
                />
              </div>
            </div>
          </div>
        </section>

        <section id='news' className='news'>
          <div className='wrapper'>
            <h2 className='section-title news__title'>Новости</h2>
            <ul className='news__list'>
              <li className='news__item'>
                <div className='news__img'>
                  <img src='news__img01.jpg' alt='' />
                </div>
                <div className='news__content'>
                  <h3 className='news__item-title'>
                    НА ДАЛЬНЕМ ВОСТОКЕ МОГУТ ВВЕСТИ НАЛОГОВЫЕ ЛЬГОТЫ ДЛЯ ДОБЫВАЮЩИХ КОМПАНИЙ
                  </h3>
                  <p>
                    Минвостокразвития выступил с предложение об уменьшении НДПИ для проектов по
                    добыче твёрдых ископаемых на Дальнем Востоке. Как отметил Алексей ЧЕКУНКОВ,
                    возглавляющий Министерство, при разработке месторождений в регионе, из-за
                    отдалённого расположения, а также порой и климатических условий, компании
                    сталкиваются с высокими затратами на обустройство как транспортной, так и
                    энергетической инфраструктуры.
                  </p>
                  <p>
                    Разработанный законопроект предлагает рассчитывать вычет как сумму понесённых
                    расходов на необходимые строительные и логистические операции для подобных
                    объектов. При этом вычет не должен превышать 50% от выплаченного НДПИ.
                  </p>
                  <p>
                    На снижение ставки смогут рассчитывать только те проекты, где добывающие работы
                    стартовали не ранее 2021 года. Предполагается, что действие льгот продлится
                    вплоть до 2032 г. В Минвостокразвития рассчитывают, что данная мера поможет
                    привлечь на Дальний Восток более 96 миллиардов руб. инвестиций.
                  </p>
                  <ul className='news__tag-list'>
                    <li className='news__tag-item'>
                      <a href=''>#ГорноеДело</a>
                    </li>
                    <li className='news__tag-item'>
                      <a href=''>#Промышленость</a>
                    </li>
                    <li className='news__tag-item'>
                      <a href=''>#добыча</a>
                    </li>
                    <li className='news__tag-item'>
                      <a href=''>#горнаяпромышленность</a>
                    </li>
                    <li className='news__tag-item'>
                      <a href=''>#mining</a>
                    </li>
                    <li className='news__tag-item'>
                      <a href=''>#журналглобус</a>
                    </li>
                    <li className='news__tag-item'>
                      <a href=''>#недропользователи</a>
                    </li>
                  </ul>
                  <dl className='news__source'>
                    <dt>Источник:</dt>
                    <dd>
                      <a href=''>
                        https://www.vnedra.ru/novosti/na-dalnem-vostoke-mogut-vvesti-nalogovye-lgoty-dlya-dobyvayushhih-kompanij-15215/
                      </a>
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id='about' className='about'>
          <div className='wrapper'>
            <div className='about__inner'>
              <div className='about__content'>
                <h2 className='about__title section-title'>О компании</h2>
                <div className='about__text'>
                  <div className='about__img about__img--tablet'>
                    <img src='about__logo.png' alt='' />
                  </div>
                  <p>
                    Наша организация успешно осуществляет работы по проектированию горных
                    производств и объектов, маркшейдерскому обеспечению горных работ и комплексу
                    инженерно - геодезических изысканий.
                  </p>

                  <p>
                    С нашей стороны все выполняемые работы сопровождаются при их экспертизе и
                    согласовании в соответствующих органах исполнительной власти РФ.
                  </p>

                  <p>
                    Благодаря своевременному соблюдению договорных обязательств, требований
                    законодательства, высокому уровню ответственности и квалифицированному кадровому
                    персоналу ООО «Геоконект» имеет безупречную репутацию во взаимоотношениях с
                    заказчиками и органами государственной власти РФ.
                  </p>
                </div>
                <a href='' className='about__btn btn btn--trans'>
                  Заказать обратный звонок
                </a>
              </div>
              <div className='about__img about__img--desktop'>
                <img src='about__logo.png' alt='' />
              </div>
            </div>
          </div>
        </section>

        <section id='contact' className='contact'>
          <div className='wrapper'>
            <div className='contact__inner'>
              <div className='contact__text-wrapper'>
                <h2 className='contact__title'>Оставьте заявку на бесплатную консультацию</h2>
                <p className='contact__text'>Мы перезвоним Вам в ближайшее время</p>
              </div>
              <form className='contact__form' action=''>
                <input
                  type='text'
                  className='contact__input contact__from-element'
                  placeholder='Ваше имя'
                />
                <input
                  type='text'
                  className='contact__input contact__from-element'
                  placeholder='+7 (___) ___-__-__'
                />
                <button type='submit' className='contact__btn btn contact__from-element'>
                  Отправить заявку
                </button>
                <p className='contact__warning'>
                  Нажимая кнопку Вы даете согласие на <a href=''>обработку персональных данных</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


export default Home;
