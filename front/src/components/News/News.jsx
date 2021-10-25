import ReactMarkdown from 'react-markdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Mousewheel, Navigation, Pagination, Autoplay } from 'swiper/core';
SwiperCore.use([Scrollbar, Mousewheel, Navigation, Pagination, Autoplay]);

const NewsTags = ({ tags }) => {
  return (
    <ul className='news__tag-list'>
      {tags.map((tag, id) => {
        return (
          <li key={id} className='news__tag-item'>
            <a href=''>#{tag}</a>
          </li>
        );
      })}
    </ul>
  );
};

const NewsSource = ({ source }) => (
  <dl className='news__source'>
    <dt>Источник:</dt>
    <dd>
      <a href={source}>{source}</a>
    </dd>
  </dl>
);

const News = ({ posts }) => {
  const clickHandler = (e) => {
    console.log(e.target);
  };
  return (
    <section id='news' className='news'>
      <div className='wrapper'>
        <h2 className='section-title news__title'>Новости</h2>
        <div className='news__swiper-wp'>
          <Swiper pagination slidesPerView={1} autoplay loop tag='div' navigation>
            {posts.map((post) => {
              return (
                <SwiperSlide tag='li' key={post.id} className='news__item'>
                  <div className='news__img'>
                    <img src='news__img01.jpg' alt='' />
                  </div>
                  <div className='news__content'>
                    <ReactMarkdown>{post.body}</ReactMarkdown>
                    {/* <NewsTags tags={post.tags} /> */}
                    <NewsSource source={post.source} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;