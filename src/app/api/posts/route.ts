import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const response = [
        {
            "name": "Толгоев Алишер",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC_2UAdzHGR-mN6O2483iwxwHaH5RcJJK4kDMCuIq7RdEXpk91um4gmV3rIg6tJ36bIc&usqp=CAU",
            "title": "Моя страсть — в создании уникальных, практичных интерфейсов. Повышаю эффективность проектов через инновации, улучшая стандарты пользовательского опыта.",
            "target": "Я верю, что хороший дизайн и качественная функциональность идут рука об руку. Я стараюсь создавать интерфейсы, которые удовлетворяют потребности пользователей и выделяются на фоне конкурентов. Я считаю, что детали имеют значение, и в каждом проекте я стремлюсь к максимальной точности и продуманности.",
            "skills": [
              {
                "skill": "Ant Design - это мощная библиотека для создания современных интерфейсов в React."
              },
              {
                "skill": "UX/UI - это два взаимосвязанных, но различных аспекта дизайна веб-сайтов."
              },
              {
                "skill": "HTML -  является основным языком разметки, который определяет структуру веб-страницы."
              },
              {
                "skill": "CSS - используется для стилизации HTML-элементов."
              },
              {
                "skill": "SCSS (Sass) - препроцессор CSS, который позволяет использовать переменные, вложенные правила, миксины и многие другие возможности."
              },
              {
                "skill": "React - разработка компонентов, хуки, контексты и другие основные функции React."
              },
              {
                "skill": "Next.js - создание серверно-рендерируемых приложений и статических сайтов."
              },
              {
                "skill": "Redux - управление глобальным состоянием приложения."
              },
              {
                "skill": "TailwindCSS - быстрое создание адаптивных дизайнов с максимальной гибкостью."
              },
              {
                "skill": "TypeScript - статическая типизация для повышения надежности кода."
              },
              {
                "skill": "JavaScript (ES6+) - знание основ и новых возможностей языка."
              },
              {
                "skill": "Git - система контроля версий, команды, ветвление и слияние."
              },
              {
                "skill": "Rest API - это набор методов и функций, предоставляемых React."
              },
              {
                "skill": "Firebase - разработка и интеграция приложений с использованием облачных служб."
              },
              {
                "skill": "Supabase - открытая альтернатива Firebase, предоставляющая инструменты для баз данных и аутентификации."
              },
              {
                "skill": "jQuery - библиотека JavaScript, упрощающая взаимодействие с DOM, обработку событий и анимацию."
              },
              {
                "skill": "PostgreSQL - это мощная и открытая объектно-реляционная система управления базами данных (ORDBMS)."
              },
              {
                "skill": "Redux Toolkit -  это официальный пакет инструментов для более удобного и эффективного использования библиотеки."
              },
              {
                "skill": "MySQL - это свободная и открытая система управления базами данных "
              },
              {
                "skill": "Python - это высокоуровневый, интерпретируемый язык программирования общего назначения."
              },
              {
                "skill": "Django - это бесплатный и открытый фреймворк для веб-разработки на языке программирования Python."
              }
            ],
            "images": [
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJn9uG-cNlPcXyVwGPa51aI69Udhyub9lxSDhBiLiG8Xq8vB_l"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHVlQc5AhVAvqjdr8gbC438lT3-Ik9SeU2iGuZI0EKoq0ED9vv"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS901FRQfCYNQID1yy-ChhiGSRYxPi14vSoKFLZuSLuH8LYDitU"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
              },
              {
                "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS61vKK67UMkrtp6zVnjqVmBvW2TbR5PJTIermbAsyQHkavb5FS"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXY-zoBxx6cXYUSEe9o_Qpy7w7VOmJE6gmxSALosiTYa1bF8g"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAHHprN89ARiqheO9pM6O5eIXwHhWkFQKVuAG62kH8QvO5wNt"
              },
              {
                "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRdPSHX8EgeNx8QjRSkH0cJmIdSxqhJPl9LUZZxyksjzvvViMa"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGABmc-HVQH3IwIF1TjrEuQQMh5-C-x5P7xmSLKdZhrYoDndba"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIv-zqIO16qdb4RNQJWpz6YkLTts1DAA3qaZsls6Sw1edn_oE"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEu7EP2rV19uPBun5nVyyCo8fzg91eZpLD1S8cDbOL6_WwF_Md"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSegm9nU-wdZKAsct7m-_b87l2YeLsEpUuIXoutZDX2IUZ5A1_1"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkr2AghUapIpbK8r5w8_QQc0p39diNabxY1-rDNxPDvj3_NDrS"
              },
              {
                "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfudGTSvJqhp8reg06DNaU_Q6UdjRHQf7-5wUm89DaUtH-vNNH"
              }
            ],
            "sliceStart": 0,
            "sliceEnd": 5,
            "id": "1"
        },
        {
            "name": "Русланов Элдар",
            "avatar": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZ96ZWtYyES440dLeXw6EO_xgpxuGI0a_G7fCvH_3_mKape9gG",
            "title": "Я фронтенд-разработчик с опытом, создаю интерфейсы, где красота сочетается с удобством. Каждая строка кода - это искусство, каждый пиксель - взаимодействует.",
            "target": "Фронтенд разработчик, и моя миссия - преобразовать красивый дизайн в интерактивную реальность. Я работаю на стыке творчества и технологии, создавая визуальные впечатления, которые заставляют пользователей влюбляться в интерфейс. Мой код - это не просто строки исходного текста, это ключ к потрясающему пользовательскому опыту. Погрузись в мир моих веб-страниц, где каждый пиксель задуман, а каждая анимация - часть виртуозного танца технологии и дизайна. Добро пожаловать в мое веб-пространство, где красота встречает функциональность, а пользователи ощущают волшебство при каждом нажатии клавиши",
            "skills": [
              {
                "skill": "Ant Design - это мощная библиотека для создания современных интерфейсов в React."
              },
              {
                "skill": "UX/UI - это два взаимосвязанных, но различных аспекта дизайна веб-сайтов."
              },
              {
                "skill": "HTML -  является основным языком разметки, который определяет структуру веб-страницы."
              },
              {
                "skill": "CSS - используется для стилизации HTML-элементов."
              },
              {
                "skill": "SCSS (Sass) - препроцессор CSS, который позволяет использовать переменные, вложенные правила, миксины и многие другие возможности."
              },
              {
                "skill": "React - разработка компонентов, хуки, контексты и другие основные функции React."
              },
              {
                "skill": "Next.js - создание серверно-рендерируемых приложений и статических сайтов."
              },
              {
                "skill": "Redux - управление глобальным состоянием приложения."
              },
              {
                "skill": "TailwindCSS - быстрое создание адаптивных дизайнов с максимальной гибкостью."
              },
              {
                "skill": "TypeScript - статическая типизация для повышения надежности кода."
              },
              {
                "skill": "JavaScript (ES6+) - знание основ и новых возможностей языка."
              },
              {
                "skill": "Git - система контроля версий, команды, ветвление и слияние."
              },
              {
                "skill": "Rest API - это набор методов и функций, предоставляемых React."
              },
              {
                "skill": "Redux Toolkit -  это официальный пакет инструментов для более удобного и эффективного использования библиотеки."
              },
              {
                "skill": "Firebase - разработка и интеграция приложений с использованием облачных служб."
              },
              {
                "skill": "Supabase - открытая альтернатива Firebase, предоставляющая инструменты для баз данных и аутентификации."
              },
              {
                "skill": "jQuery - библиотека JavaScript, упрощающая взаимодействие с DOM, обработку событий и анимацию."
              },
              {
                "skill": "PostgreSQL - это мощная и открытая объектно-реляционная система управления базами данных (ORDBMS)."
              },
              {
                "skill": "MySQL - это свободная и открытая система управления базами данных "
              },
              {
                "skill": "Python - это высокоуровневый, интерпретируемый язык программирования общего назначения."
              },
              {
                "skill": "Django - это бесплатный и открытый фреймворк для веб-разработки на языке программирования Python."
              }
            ],
            "images": [
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJn9uG-cNlPcXyVwGPa51aI69Udhyub9lxSDhBiLiG8Xq8vB_l"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHVlQc5AhVAvqjdr8gbC438lT3-Ik9SeU2iGuZI0EKoq0ED9vv"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS901FRQfCYNQID1yy-ChhiGSRYxPi14vSoKFLZuSLuH8LYDitU"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9D0jwOFY9FYS5QKirMcPFAJxdQrPMyCf3YNVypUzVm5GI8SOI"
              },
              {
                "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHLTpGcTkgmXjQLARRkYrweUbh27jxuGvm5GluPCbJ7Cb3-dS"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS61vKK67UMkrtp6zVnjqVmBvW2TbR5PJTIermbAsyQHkavb5FS"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSQLaJn09xYtPiac1Hhz2D5ritA6IZkNUuZKicSs5SZjHxWfm"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXY-zoBxx6cXYUSEe9o_Qpy7w7VOmJE6gmxSALosiTYa1bF8g"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAHHprN89ARiqheO9pM6O5eIXwHhWkFQKVuAG62kH8QvO5wNt"
              },
              {
                "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRdPSHX8EgeNx8QjRSkH0cJmIdSxqhJPl9LUZZxyksjzvvViMa"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGABmc-HVQH3IwIF1TjrEuQQMh5-C-x5P7xmSLKdZhrYoDndba"
              },
              {
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIv-zqIO16qdb4RNQJWpz6YkLTts1DAA3qaZsls6Sw1edn_oE"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEu7EP2rV19uPBun5nVyyCo8fzg91eZpLD1S8cDbOL6_WwF_Md"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7HdlK1H6OcWBx920WajBr1LnKiarnoMeIuIVU54a_S_qOHJGM"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSegm9nU-wdZKAsct7m-_b87l2YeLsEpUuIXoutZDX2IUZ5A1_1"
              },
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkr2AghUapIpbK8r5w8_QQc0p39diNabxY1-rDNxPDvj3_NDrS"
              },
              {
                "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfudGTSvJqhp8reg06DNaU_Q6UdjRHQf7-5wUm89DaUtH-vNNH"
              }
            ],
            "sliceStart": 3,
            "sliceEnd": 14,
            "id": "2"
        }
    ];

    setTimeout(() => {
        response.forEach(person => {
            person.images.forEach(image => {
                image.img = "https://via.placeholder.com/150";
            });
        });
    }, 10000); 

    return NextResponse.json(response);
}
