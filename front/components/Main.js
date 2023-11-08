import Block from "./Block";

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 className="mazzardH text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          НЕЙМАРК.Абитуриенты
        </h1>
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 text-gray-700 text-center">
          Портал для абитуриентов и студентов,
          <br/>
          заинтересованных экосистемой НЕЙМАРК
        </h2>
        { /* <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-neyred-100 focus:shadow-outline"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center">Зарегистрироваться</span>
            </div>
          </a>
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-neyred-100 focus:shadow-outline ml-2"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center">Войти</span>
            </div>
          </a>
        </div> */}
      </div> 
      <h2 className="mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Удобный и быстрый сервис
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Мы учитываем ваши достижения и предпочтения, на их основе подбираем мероприятия, которые Вам, вероятнее всего, подойдут
        <br />
        Также наш сервис может помочь поступить в ИТ-кампус НЕЙМАРК на наиболее подходящее Вам направление.
        <br />
        Мы предлагаем ознакомиться с ближайшими запланированными мероприятиями:
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <Block 
          title="Всероссийский турнир «Кубок будущего»"
          description="ИТ-кампус НЕЙМАРК стал соорганизатором всероссийского турнира
           «Кубок будущего», эксперты НЕЙМАРКА оценивают работу гениев алгоритма и кода. 
           В их числе - действующий тренер по олимпиадному программированию, серебряный
            призер ICPС-2011 Алексей Шмелев."
        />
       <Block 
          title="Юрий Исаакович Неймарк"
          description="Лекции, посвященные личности Юрия Исааковича Неймарка, ученого с мировым именем, математика, 
          доктора технических наук, профессора, основателя первого в СССР факультета вычислительной математики и кибернетики."
        />
         <Block 
          title="НЕЙМАРК.Лекторий про олимпиадное программирование"
          description="Действующий тренер по олимпиадному программированию, ведущий инженер HUAWEI, серебряный призер ICPС-2011 
          Алексей Шмелев расскажет много интересного об олимпиадном програмировании и перспективах, которые оно открывает для школьников и студентов."
        />
         <Block 
          title="Интенсив по информационной безопасности."
          description="НЕЙМАРК.Интенсив по информационной безопасности пройдет с октября по декабрь. Все учащиеся смогут посетить большое количество 
          лекций от ведущий IT компаний страны, получат возможность трудоустроится."
        />
      </div>
      <h2 className="mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Анкетирование
      </h2>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 pt-10 lg:w-2/3">
        Вы можете заполнить следующую анкету и на её основе мы можем порекомендовать вам мероприятия, проводимые в рамках экосистемы НЕЙМАРК и направления ИТ-кампуса
        НЕЙМАРК которые, вероятнее всего, вам подойдут.
      </p>
      <div className="ml-6 pb-10 text-center pt-10">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-neyred-100 focus:shadow-outline"
            href="/anket"
          >
            <div className="flex text-lg">
              <span className="justify-center">Заполнить</span>
            </div>
          </a>
        </div>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 pb-10 lg:w-2/3">
              Также можно подробнее ознакомиться с направлениями, по которым ведётся обучение в кампусе:
        </p>
        <div className="pb-12 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <Block 
          title="Информационная безопасность и защищённый ИИ"
          description="Специалист по информационной безопасности - профессионал, который обеспечивает конфиденциальность 
          любой информации, касающейся как самой компании, так и её сотрудников. Также этот человек предотвращает 
          любые утечки информации и минимизирует угрозы информационным системам компании."
        />
        <Block 
          title="Беспилотные технологии"
          description="Беспилотные технологии — это одна из наиболее молодых и активно развивающихся технологических отраслей 
          новой экономики. Универсальность БПЛА как платформы для решения задач позволяет беспилотным системам проникать на все
           новые рынки, захватывая все новые сферы человеческой деятельности."
        />
        
      </div>
    </section>
  );
}
