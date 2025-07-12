const data = [
    {
        "question_ua": "Розкажіть трохи про себе.",
        "answer_ua": "Я розпочав свій професійний шлях як Full-Stack розробник, працюючи в Agile-середовищі, де брав участь у розробці бекенд-систем на Java, Groovy та GWT, а також допомагав створювати й підтримувати адміністративну панель на основі Spring Framework, Thymeleaf і PostgreSQL. До моїх щоденних обов’язків входила розробка функціоналу, написання документації та командна співпраця через Git і Jira. До початку цієї роботи та під час неї я брав участь у створенні кількох повноцінних проєктів, зокрема: клону Twitter із чатами, завантаженням медіа, сповіщеннями через WebSocket і входом через Google; генератора шкільного розкладу з ролями користувачів і автоматичним плануванням; а також книжкового онлайн-магазину з автентифікацією через Okta та оплатами через Stripe. Ці проєкти допомогли мені оволодіти розробкою REST API, інтеграцією фронтенду з бекендом і розгортанням додатків за допомогою Docker та Heroku. Мій основний технічний стек включає Java, Spring, React, JavaScript/TypeScript, SQL, Docker і Git. Я також розгортав застосунки на AWS і працював з такими інструментами, як Stripe, Telegram-боти та OAuth. Одним із моїх найбільших досягнень є розвиток навичок сліпого друку англійською мовою зі швидкістю до 60 слів на хвилину без погляду на клавіатуру — навичка, яка суттєво підвищила мою швидкість програмування та ефективність у спілкуванні. Я активно продовжую навчання через практичні проєкти та онлайн-курси. Регулярно проходжу навчання на таких платформах, як Udemy, де опановую поглиблені теми, зокрема Spring Security і мікросервіси. Також я ставлю собі виклики, створюючи повноцінні застосунки на основі нових знань і застосовуючи сучасні інструменти та технології в реальних проєктах.",
        "question_en": "Will you tell me a little about yourself?",
        "answer_en": "I began my professional journey as a Full-Stack Developer, working in an Agile environment where I contributed to backend systems using Java, Groovy, and GWT, and helped build and maintain an admin panel based on Spring Framework, Thymeleaf, and PostgreSQL. My daily tasks involved feature development, documentation, and collaboration through Git and Jira. Before and during this role, I took part in building several end-to-end projects, including a Twitter clone with chat, media uploads, WebSocket notifications, and Google login; a school timetable generator with role-based access and auto-scheduling; and a bookstore with Okta authentication and Stripe payments. These projects helped me master REST API design, frontend-backend integration, and deployment using Docker and Heroku. My core stack includes Java, Spring, React, JavaScript/TypeScript, SQL, Docker, and Git. I’ve also deployed applications to AWS and worked with tools like Stripe, Telegram bots, and OAuth. One of my proudest achievements is developing touch-typing skills in English, reaching up to 60 words per minute without looking at the keyboard—a skill that dramatically improved my coding speed and communication. I actively continue to learn through hands-on projects and online courses. I regularly study on platforms like Udemy, where I complete advanced courses on Spring Security and microservices. I also challenge myself by building full-featured applications based on what I learn, applying new tools and technologies in real-world scenarios."
    },
    {
        "question_ua": "Як ви дізналися про цю вакансію?",
        "answer_ua": "Я дізнався про вакансію під час активного пошуку можливостей, які відповідають моєму досвіду як Full-Stack розробника. Я зазвичай звертаю увагу на компанії, що працюють із сучасними технологіями та підтримують професійний розвиток.",
        "question_en": "How did you hear about this position?",
        "answer_en": "I found out about this opportunity while actively searching for roles that align with my experience as a Full-Stack Developer. I usually focus on companies that work with modern technologies and support professional growth."
    },
    {
        "question_ua": "Чому саме вас варто найняти?",
        "answer_ua": "Я маю міцну технічну базу як у фронтенд, так і в бекенд розробці. Маю практичний досвід роботи з Java, Spring Framework, React, SQL, Docker та Git. Розробляв повноцінні додатки, постійно навчаюсь через курси й pet-проєкти, добре організований, швидко навчаюсь і маю досвід командної роботи.",
        "question_en": "Why should we hire you?",
        "answer_en": "I have a strong technical background in both frontend and backend development, with hands-on experience using Java, Spring Framework, React, SQL, Docker, and Git. I’ve built full-featured applications, continue to improve my skills through courses and side projects, and bring strong self-discipline, fast learning ability, and teamwork experience to any role."
    },
    {
        "question_ua": "Чому ви хочете отримати цю посаду?",
        "answer_ua": "Я шукаю можливість реалізувати себе як Full-Stack розробник. Мені цікаві складні проєкти з використанням сучасних технологій та простір для зростання. Я отримую задоволення від створення зручних і корисних продуктів.",
        "question_en": "Why do you want this position?",
        "answer_en": "I'm looking for a position where I can realize my potential as a Full-Stack Developer. I enjoy working on challenging projects that require modern technologies and allow for continuous learning and growth. I’m passionate about creating useful and user-friendly products."
    },
    {
        "question_ua": "Розкажіть про ваш досвід на попередній роботі.",
        "answer_ua": "Я працював Full-Stack розробником, використовуючи Java, Groovy, MySQL, GWT, Spring, Thymeleaf та PostgreSQL. Працював у Agile-середовищі, брав участь у мітингах, документував функціонал і оцінював завдання. Це допомогло мені глибше зрозуміти командну роботу та складні проєкти.",
        "question_en": "Can you tell me about your experience at your last job?",
        "answer_en": "At my last job, I worked as a Full-Stack Developer using Java, Groovy, MySQL, GWT, Spring, Thymeleaf, and PostgreSQL. I was responsible for daily tasks in an Agile environment, participated in meetings, feature documentation, and task estimation. This helped me deepen my understanding of team collaboration and large-scale system development."
    },
    {
        "question_ua": "Як би вас описали керівник та колеги?",
        "answer_ua": "Мене описують як надійного, відповідального та організованого фахівця. Колеги цінують мою ініціативу, уважність до деталей і здатність самостійно вирішувати складні задачі. Я відкритий до зворотного зв’язку та завжди готовий допомогти команді.",
        "question_en": "How would your boss and coworkers describe you?",
        "answer_en": "My colleagues and managers would describe me as reliable, responsible, and well-organized. They appreciate my initiative, attention to detail, and ability to solve technical problems independently. I’m open to feedback and always willing to support the team."
    },
    {
        "question_ua": "Яке ваше найбільше професійне досягнення?",
        "answer_ua": "Одним із найбільших досягнень стало створення Twitter-клону у складі команди. Він мав Google-реєстрацію, пости, коментарі, чати та сповіщення в реальному часі. Ми використовували React, Spring, PostgreSQL, Docker, Heroku. Я долучався до всіх етапів — від архітектури до деплою.",
        "question_en": "What’s your biggest professional accomplishment to date?",
        "answer_en": "One of my biggest achievements was developing a Twitter clone as part of a team project. It included Google sign-in, posts, comments, chat, and real-time notifications. We used React, Spring, PostgreSQL, Docker, and Heroku. I was involved in all phases — from architecture to deployment — and gained valuable experience in building real-world apps."
    },
    {
        "question_ua": "Які ваші головні професійні сильні сторони?",
        "answer_ua": "Мої сильні сторони — це глибокі знання Java та Spring, досвід роботи з React, SQL, Docker, Git, здатність швидко адаптуватися. Я дотримуюсь принципів чистого коду, застосовую шаблони проєктування та постійно вдосконалюю навички.",
        "question_en": "In your opinion, what are your greatest strengths, professionally speaking?",
        "answer_en": "My core strengths include deep knowledge of Java and Spring, experience with React, SQL, Docker, Git, and a strong ability to adapt. I’m committed to clean code, apply design patterns where appropriate, and continuously improve my skills through self-learning and structured training."
    },
    {
        "question_ua": "Які ваші головні професійні слабкі сторони?",
        "answer_ua": "Іноді я витрачаю забагато часу на деталі, прагнучи ідеального результату. Я навчився керувати цим через тайм-менеджмент і пріоритизацію. Також працюю над поліпшенням розмовної англійської, для чого проходжу курси й читаю технічну літературу.",
        "question_en": "In your opinion, what are your greatest weaknesses, professionally speaking?",
        "answer_en": "I sometimes spend too much time perfecting details. I’ve learned to manage this by applying time management and prioritization. I’m also working on improving my spoken English for technical communication, which I’ve been addressing through English courses and daily reading."
    },
    {
        "question_ua": "Як ви справляєтеся зі стресом або тиском на роботі?",
        "answer_ua": "У стресових ситуаціях я дію за планом: розбиваю завдання, встановлюю пріоритети та рухаюсь крок за кроком. Якщо перевантажений — роблю короткі перерви або дихальні вправи. Наприклад, при стислих дедлайнах я створив таймлайн задач і розподілив навантаження в команді, що дозволило завершити все вчасно.",
        "question_en": "How do you handle pressure or stressful situations at work?",
        "answer_en": "In stressful situations, I stick to a clear plan. I break tasks into smaller parts, set priorities, and focus step by step. If I feel overloaded, I take short breaks or use breathing techniques to regain focus. For example, under a tight deadline, I created a task timeline and distributed work across the team, which helped us deliver on time."
    },
    {
        "question_ua": "Які ваші очікування щодо заробітної плати?",
        "answer_ua": "Мої очікування базуються на ринковому рівні для спеціаліста з відповідними навичками. Я гнучкий і відкритий до обговорення, адже для мене важливі також можливості розвитку та цікаві проєкти.",
        "question_en": "What are your salary requirements?",
        "answer_en": "My expectations are based on market rates for a developer with my skill set. I'm open to negotiation and flexible, as I value growth opportunities, interesting projects, and team culture alongside compensation."
    },
    {
        "question_ua": "З якими іншими компаніями ви проходите співбесіди?",
        "answer_ua": "Я розглядаю кілька варіантів у сфері веб-розробки, зокрема ролі, пов’язані з Java, Spring, React. Мені важливо знайти команду, де я зможу розвиватися та використовувати свої навички на практиці.",
        "question_en": "What other companies are you interviewing with?",
        "answer_en": "I’m currently exploring a few opportunities in web development, especially roles involving Java, Spring, React, and related technologies. I’m looking for a team where I can continue to learn and apply my skills meaningfully.",
    },
    {
        "question_ua": "Чому ви залишаєте теперішнє місце роботи?",
        "answer_ua": "Я шукаю нові виклики та можливості професійного зростання у проєктах із сучасними технологіями та чіткими процесами. Попередній досвід дав мені сильну базу, і я готовий до нового етапу.",
        "question_en": "Why are you leaving your current job?",
        "answer_en": "I’m looking for new challenges and professional growth in projects involving modern technologies and strong development processes. My previous experience gave me a solid base, and now I’m ready for the next step in my career."
    },
    {
        "question_ua": "Які у вас захоплення поза роботою?",
        "answer_ua": "У вільний час я навчаюся онлайн, читаю технічні книги, пробую нові технології у pet-проєктах. Також цікавлюся англійською, слухаю подкасти, читаю художню літературу й катаюсь на велосипеді. Це підтримує баланс і креативність.",
        "question_en": "What are your hobbies outside of work?",
        "answer_en": "In my free time, I continue learning through online courses, reading technical books, and trying out new technologies in small pet projects. I’m also interested in English, listen to podcasts, read fiction, and enjoy cycling. These activities help me maintain balance and creativity."
    },
    {
        "question_ua": "Де ви бачите себе через п’ять років?",
        "answer_ua": "У найближчі п’ять років я планую розвиватися в напрямку архітектури систем, DevOps та хмарних рішень. Хочу стати старшим розробником або тімлідом, брати участь у великих проєктах і ділитися досвідом з іншими.",
        "question_en": "Where do you see yourself in five years’ time?",
        "answer_en": "In the next five years, I plan to deepen my knowledge in system architecture, DevOps, and cloud services, and grow toward a senior or lead developer role. I aim to contribute to complex, large-scale projects and share my experience by mentoring others."
    },
    {
        "question_ua": "Як ви керуєте своїм часом і пріоритетами?",
        "answer_ua": "Мій підхід до тайм-менеджменту поєднує структуроване планування, техніки фокусування та розумне використання інструментів. Це дозволяє мені дотримуватись дедлайнів, швидко адаптуватися до змін і ефективно працювати як Java-розробник. Наприклад, під час роботи над додатком для бібліотеки я використовував Trello для пріоритизації, техніку Pomodoro для фокусування й регулярно звітував про прогрес. Це дозволило завершити проєкт вчасно та з часом на тестування.",
        "question_en": "How do you manage your time and prioritize tasks?",
        "answer_en": "My approach to time management combines structured planning, focus techniques, and the smart use of tools. This enables me to consistently meet deadlines, adapt to changing priorities, and contribute effectively as a Java developer. For example, while working on a library system, I used Trello to break down and prioritize tasks, applied Pomodoro for focus, and regularly synced progress with the team. This helped us finish the project on time with room for testing and optimization."
    },
    {
        "question_ua": "Розкажіть про ваш останній конфлікт на роботі та як ви його вирішили?",
        "answer_ua": "Для нової версії проєкту було змінено формат імпорту/експорту конфігурації з XML на JSON відповідно до сучасних вимог. Це спричинило конфлікт, оскільки деякі члени команди все ще використовували старий формат XML. Щоб вирішити ситуацію, я ініціював відкрите обговорення та сприяв командній взаємодії. В результаті ми вирішили підтримати обидва формати — XML і JSON, що забезпечило сумісність і врегулювало конфлікт.",
        "question_en": "Tell me about your last conflict at work and how you resolved it?",
        "answer_en": "For the newest version of the project, the configuration import/export format was switched from XML to JSON to meet modern requirements. This change caused a conflict because some team members were still relying on the older XML format. To address the issue, I encouraged open communication and brought the team together to discuss it. As a result of our collaboration, I implemented support for both formats—ensuring compatibility with XML and JSON—and the conflict was resolved effectively."
    }
]

export default data;