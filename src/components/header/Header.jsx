import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div>
        <header className='header'>
            <div className='container'>
                <div className='wrapper-header'>
                    <img src="" alt="" />

                    <nav>
                        <ul>
                        <li>1 Введение</li>
                            <Link to="/">1.1 Об этом курсе</Link>
                            <Link to="/IntroductionTwo">1.2 Что такое Векипедия,Векимедия и векипроекты</Link>
                            <Link to="/IntroductionThree">1.3 Общие принципы Векипедии</Link>
                            <li>2 Первые шаги</li>
                            <Link to="/IntroductionFour">2.1 Регистрация в Векипедии</Link>
                            <Link to="/IntroductionFifht">2.2 Первые шаги после регистрации </Link>
                            <Link to="/IntroductionSix">2.3 Если нужна помощь</Link>
                            <li>3 Основы интерфейса Векипедии</li>
                            <Link to="/IntroductionSeven">3.1 Пространства имен</Link>
                            <Link to="/IntroductionEight">3.2 Цвет гиперссылок</Link>
                            <Link to="/IntroductionNine">3.3 Интерфейс статьи</Link>
                            <li>4 Инстурменты отслеживания правок</li>
                            <Link to='/IntroductionTen'>4.1 Свежие правки</Link>
                            <Link to='/IntroductionEleven'>4.2 История статьи</Link>
                            <Link to='/IntroductionTwelve'>4.3 Список наблюдения</Link>
                            <Link to='/IntroductionThirteen'>4.4 Вклад участника </Link>
                            <Link to='/IntroductionFourteen'>4.5 Борьба с вандализмом </Link>
                            <li>Структура, стиль и содержание статьи</li>
                            <Link to='/IntroductionFifteen'>5.1 Название,стиль и язык статьи</Link>
                            <Link to='/IntroductionSixteen'>5.2 Структура статьи</Link>
                            <Link to='/IntroductionSeventeen'>5.3 Шаблон-карточка</Link>
                            <Link to='/IntroductionEightteen'>5.4 Преамбула</Link>
                            <Link to='/IntroductionNineteen'>5.5 Разделы</Link>
                            <Link to='/IntroductionTwenty'>5.6 Иллюстрация</Link>
                            <Link to='/IntroductionTwentyOne'>5.7 Примечания</Link>
                            <Link to='/IntroductionTwentyTwo'>5.8 Категории</Link>
                            <li>6 Источники</li>
                            <Link to='/IntroductionTwentyThree'>6.1 Факты и Мнение</Link>
                            <Link to='/IntroductionTwentyFour'>6.2 Понятие источника</Link>
                            <Link to='/IntroductionTwentyFift'>6.3  Типы источников</Link>
                            <Link to='/IntroductionTwentySix'>6.4 Авторитетность источников </Link>
                            <Link to='/IntroductionTwentySeven'>6.5 Проверяемость источника</Link>
                            <Link to='/IntroductionTwentyEight'>6.6 Независимость авторитетных источников</Link>
                            <Link to='/IntroductionTwentyNine'>6.7 Биографии современников </Link>
                            <Link to='/IntroductionThirty'>6.8 Цитирование </Link>
                            <Link to='/IntroductionThirtyOne'>6.9 Дополнительные источники информации </Link>
                            <li>7 Визуальный редактор</li>
                            <Link to='/IntroductionThirtyTwo'>7.1 Введение </Link>
                            <Link to='/IntroductionThirtyThree'>7.2  Создание первой страницы черновика  </Link>
                            <Link to='/IntroductionThirtyFour'>7.3 Редактирование текста, добавление разделов и ссылок </Link>
                            <Link to='/IntroductionThirtyFift'>7.4  Простановка источников </Link>
                            <Link to='/IntroductionThirtySix'>7.5 Иллюстрации, формулы, таблицы и графики  </Link>
                            <Link to='/IntroductionThirtySeven'>7.6   Списки</Link>
                            <Link to='/IntroductionThirtyEight'>7.7  Использование специальных символов</Link>
                            <Link to='/IntroductionThirtyNine'>7.8   Простановка шаблонов</Link>
                            <Link to='/IntroductionFiftyOne'>7.9 Простановка категорий</Link>
                            <Link to='/IntroductionFiftyTwo'>7.10 Выбор вида редактирования</Link>
                            <li>8 Вики-разметка</li>
                            <Link to='/IntroductionFiftyThree'>8.1  Что такое вики-разметка</Link>
                            <Link to='/IntroductionFiftyFour'>8.2  Полужирный шрифт и курсив</Link>
                            <Link to='/IntroductionFiftyFift'>8.3 Разделы статьи </Link>
                            <Link to='/IntroductionFiftySix'>8.4  Внутренние и внешние ссылки</Link>
                            <Link to='/IntroductionFiftySeven'>8.5 Списки внутри статьи </Link>
                            <Link to='/IntroductionFiftyEight'>8.6  Иллюстрации </Link>
                            <Link to='/IntroductionFiftyNine'>8.7  Викификатор </Link> 

                        </ul>
                    </nav>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci aspernatur ipsum hic nemo temporibus error enim quae doloremque inventore saepe, aliquid earum voluptatibus consequuntur expedita magnam explicabo exercitationem ea illum rem molestias aliquam. Temporibus recusandae facilis repudiandae perferendis exercitationem mollitia distinctio, voluptatibus eaque, rem dolores error saepe fugit veniam quibusdam aliquam perspiciatis quaerat ullam, enim quo corrupti impedit dignissimos magnam veritatis! Odio voluptate et, eligendi, ex nobis libero aspernatur laborum eaque in dolorem blanditiis mollitia quam deleniti exercitationem inventore praesentium minus, ad sit id molestiae doloremque! Maxime, voluptatum tempore, adipisci laboriosam iste ipsa numquam dignissimos voluptate, repellendus ducimus rerum.</p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header