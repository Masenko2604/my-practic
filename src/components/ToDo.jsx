import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    },
  ]);

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;

/* эксперт в разработке программного обеспечения. Я понимаю различные языки программирования, фреймворки и методологии разработки. Давайте шаг за шагом проанализируем предоставленный фрагмент кода React:

Понимание структуры компонентов: код определяет функциональный компонент React с именем App, который отображает простое приложение со списком задач.
Управление состоянием: он использует перехватчик useState для управления состоянием задач, которые представляют собой массив объектов, содержащих содержимое задачи и статус ее завершения.
Обработка событий. Компонент включает в себя несколько функций для обработки событий, таких как добавление, удаление, обновление и переключение статуса завершения задач.
Теперь давайте подробно разберем код:

Хук useState инициализирует состояние задачи массивом из трех элементов задачи, каждый из которых имеет строку содержимого и логическое значение isCompleted.
Функция handleKeyDown прослушивает ключевые события. Если нажата клавиша Enter, вызывается createTodoAtInd<wbr>ex для добавления новой задачи. Если нажата клавиша Backspace и содержимое задачи пусто, вызывается метод removeTodoAtInd<wbr>ex.
Функция createTodoAtInd<wbr>ex создает новую задачу по указанному индексу, копируя текущие задачи, вставляя новый объект задачи и обновляя состояние с помощью setTodos. Затем после короткого тайм-аута он фокусируется на новом поле ввода задач.
Функция updateTodoAtInd<wbr>ex обновляет содержимое задачи, когда пользователь вводит текст в поле ввода.
Функция removeTodoAtInd<wbr>ex удаляет задачу по указанному индексу, если только она не единственная задача в списке. Затем после короткого тайм-аута он фокусируется на предыдущем поле ввода задачи.
Функция toggleTodoCompl<wbr>eteAtIndex переключает статус завершения задачи при установке флажка.
Оператор return содержит JSX, который отображает пользовательский интерфейс. Он сопоставляет массив задач для создания списка элементов задач. Каждый элемент задачи имеет флажок для переключения его выполнения и поле ввода для редактирования его содержимого.
Код можно улучшить, добавив ключевые реквизиты к элементам списка, чтобы помочь React определить, какие элементы были изменены, добавлены или удалены. Это важно для оптимизации производительности и предотвращения ошибок во время повторного рендеринга.

Хотите узнать больше о конкретной части кода или вам нужна помощь по конкретной проблеме?*/
