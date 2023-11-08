import Question from "./Question";

export default function Anket() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="mazzardH text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          НЕЙМАРК.Абитур
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 text-gray-700 text-center">
          Портал для абитуриентов и студентов,
          <br/>
          заинтересованных экосистемой НЕЙМАРК
        </h2>
        <section class="relative pb-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Пройдите анкетирование:
            </h1>
            <Question 
              question="Какое утверждение наиболее подходит тебе?"
              answers={[
                "Я предпочитаю независимость и работу всю делаю в одиночку",
                "Я люблю работать в команде, зная, что коллеги мне помогут",
                "Я люблю руководить и следить, чтобы всё шло по плану"
              ]}
              id="q1"
            />
            <Question 
              question="Кто ты?"
              answers={[
                "Технарь",
                "Гуманитарий",
                "Исскуство, творчество",
                "Сложно сказать"
              ]}
              id="q2"
            />
            <Question 
              question="Как бы ты провел свой вечер?"
              answers={[
                "Изучение нового предмета / прохождение онлайн-курса",
                "Поиграю в компьютерные игры с друзьями",
                "Залипну в соцсетях",
                "Почитаю книжку, которую давно откладывал",
                "Нарисую картину или сочиню стих"
              ]}
              id="q3"
            />
            <Question 
              question="Какие сферы наиболее близки тебе?"
              answers={[
                "Математика",
                "Разработка программного обеспечения для компьютеров",
                "Алгоритмистика и компьютерные науки",
                "Машинное обучение и компьютерное зрение",
                "Разраюотка серверов или автоматизированых систем",
                "Творчество и дизайн",
                "Графический дизайн",
                "3D моделирование и прототипирование",
                "Проектирование"
              ]}
              id="q4"
            />
            <Question 
              question="Как ты лучше воспринимаешь информацию?"
              answers={[
                "Только на слух",
                "Только на глаз",
                "Только если понятна строгая структура",
                "Все постоянно лезет в голову беспорядочно"
              ]}
              id="q5"
            />
            <Question 
              question="Какой вид умственной деятельности преобладает?"
              answers={[
                "Анализ данных, выявление закономерностей",
                "Сбор и валидация данных",
                "Механическая работа",
                "Придумывать новые идеи и структурировать"
              ]}
              id="q6"
            />
            <Question 
              question="Тебе удобнее работать, если..."
              answers={[
                "Есть четкий план, расписаный по времени",
                "Есть примерное описание задач, но нет четких границ",
                "Я подчиняюсь только своему вдохновению",
                "Ты сам решаешь, что сделать сегодня, а что потом"
              ]}
              id="q7"
            />
            <h1 class="mb-9 mt-9 text-2xl font-semibold text-gray-200">
              Какие занятия на работе тебя больше всего привлекли?
            </h1>
            <textarea
              type="text"
              class="border border-gray-600 w-10/12 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />
            <h1 class="mb-9 mt-9 text-2xl font-semibold text-gray-200">
              Перед тобой оказался телефон. Что ты в первую очередь сделаешь?
            </h1>
            <textarea
              type="text"
              class="border border-gray-600 w-10/12 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />
            <h1 class="mb-9 mt-9 text-2xl font-semibold text-gray-200">
              Какие свои качества считаешь мощными?
            </h1>
            <textarea
              type="text"
              class="border border-gray-600  w-10/12 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />
            <h1 class="mb-9 mt-9 text-2xl font-semibold text-gray-200">
            Какие свои качества считаешь непостижимыми?
            </h1>
            <textarea
              type="text"
              class="border border-gray-600  w-10/12 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />
            <h1 class="mb-9 mt-9 text-2xl font-semibold text-gray-200">
            Какие качества ты сможешь приобрести за разумное время?
            </h1>
            <textarea
              type="text"
              class="border border-gray-600  w-10/12 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />
          </div>
          <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span class="justify-center">Отправить</span>
            </a>
        </div>
      </section>
      </div>
    </section>
  );
}
