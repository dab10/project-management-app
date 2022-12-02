import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React 18',
          },
          header: {
            main: 'Go to Main Page',
            board: 'Board',
            boardList: 'Board list',
            newBoard: 'New board',
            search: 'Search',
            signIn: 'Sign in',
            signUp: 'Sign up',
            signOut: 'Sign out',
            profile: 'Edit profile',
            toggleLng: 'Toggle language',
            welcome: 'Welcome page',
          },
          sign: {
            login: 'login',
            password: 'password',
            name: 'name',
            signInQuestion: 'Already registered?',
            regQuestion: 'You are not registered yet? ',
            submit: 'Submit',
            editProfile: 'Edit profile',
            delete: 'Delete account',
            danger: 'Account will be permanently deleted!',
            question: 'Are you sure?',
            ok: 'Ok',
            cancel: 'Cancel',
          },
          formRules: {
            nameRequired: 'Please input your name!',
            nameLength: 'Name must be at least 3 characters',
            loginRequired: 'Please input your login!',
            loginLength: 'Login must be at least 3 characters',
            passwordRequired: 'Please input your password!',
            passwordLength: 'Password must be at least 8 characters',
            passwordPattern: 'Only numbers and english characters without space can be entered',
          },
          welcome: {
            appTitle: 'Kanban-board',
            appSubtitle:
              'Manage your projects, achieve maximum efficiency, help your AGILE and DevOps team streamline their daily work',
            team: 'Our team',
            teammate1: 'Denis Bazhenov',
            teammate2: 'Mikhail Dvorkin',
            teammate3: 'Yuri Labatsevich',
            api: 'Interaction with api',
            auth: 'Registration/login',
            main: 'Main page',
          },
          search: {
            searchTitle: 'Search tasks',
            searchCardTitle: 'Task id:',
            searchTaskTitle: 'Task title:',
            searchTaskDescription: 'Task description:',
            searchLabel: 'Search',
            searchByKeyword: 'by keyword',
            searchByKeywordErr: 'Please input attempt!',
            searchByKeywordPlaceholder: 'Enter keyword',
            searchById: 'by id task',
            searchByIdErrInput: 'Please input task id!',
            searchByIdErrLength: 'Id must contain 24 characters!',
            searchByIdErrType: 'Only numbers and letters!',
            searchByIdPlaceholder: 'Enter full id',
            searchByIdAddButton: 'Add field',
            searchButton: 'Search',
            searchMessage: 'Nothing found yet. Another attempt?',
          },
          message: {
            errorMessage: 'Error message',
            unexpectedError: 'An unexpected error occurred.',
            badRequest: 'Bad request.',
            taskNotFound: 'Task was not founded!',
            boardNotFound: 'Board was not founded!',
            authorizationError: 'Invalid login/password!',
            invalidToken: 'Invalid token!',
            loginExist: 'Login already exist!',
            createBoardSuccess: 'The board was created successfully!',
            createBoardError: 'The board was not created!',
            createColumnSuccess: 'The column was created successfully!',
            createColumnError: 'The column was not created!',
            createTaskSuccess: 'The task was created successfully!',
            createTaskError: 'The task was not created!',
            deleteColumnSuccess: 'The column was deleted successfully!',
            deleteColumnError: 'Error while deleting the column!',
            deleteBoardSuccess: 'The board was deleted successfully!',
            deleteBoardError: 'Error while deleting the board!',
            deleteTaskSuccess: 'The task was deleted successfully!',
            deleteTaskError: 'Error while deleting the task!',
            deleteUserSuccess: 'The user was deleted successfully!',
            deleteUserError: 'Error while deleting the user!',
            getAllTasksByIdsEmptySuccess: 'Search complete! Nothing found.',
            getAllTasksByIdsSuccess: 'Search complete!',
            getAllTasksByIdsError: 'Error while searching!',
            getAllTasksByKeywordEmptySuccess: 'Search complete! Nothing found.',
            getAllTasksByKeywordSuccess: 'Search complete!',
            getAllTasksByKeywordError: 'Error while searching!',
            getBoardColumnError: 'Error while loading columns!',
            getBoardsError: 'Error while loading boards!',
            getTasksByBoardIdError: 'Error while loading tasks!',
            getTasksByColumnError: 'Error while loading tasks!',
            getTitleByBoardIdError: 'Error while loading board title!',
            getUsersError: 'Error while loading!',
            signInSuccess: 'Login completed successfully!',
            signInError: 'Authorization error!',
            signUpSuccess: 'User created successfully!',
            signUpError: 'Error while creating user!',
            updateColumnTitleSuccess: 'The title was edited successfully!',
            updateColumnTitleError: 'Error while editing the title!',
            updateTaskSuccess: 'The task was updated successfully!',
            updateTaskError: 'Error while updating the task!',
            updateUserSuccess: 'The user was updated successfully!',
            updateUserError: 'Error while updating the user!',
            deleteConfirm: 'Are you sure delete this ',
            task: 'task',
            column: 'column',
            board: 'board',
          },
          boards: {
            header: 'Your Boards',
            title: 'Board title',
            modalTitle: 'Create Board',
            description: 'Board description',
            created: 'Created by',
          },
          columns: {
            back: 'Back',
            add: 'Add column',
            title: 'Column title',
          },
          tasks: {
            task: 'Task',
            add: 'Add tasks',
            title: 'Task title',
            description: 'Description',
            teammates: 'Choose teammates',
            descriptionRequired: 'Please input description!',
          },
        },
      },
      ru: {
        translation: {
          description: {
            part1: 'Редактировать <1>src/App.js</1> и сохранить для перезагрузки.',
            part2: 'Выучи React',
          },
          header: {
            main: 'На главную',
            board: 'Доска',
            boardList: 'Список досок',
            newBoard: 'Новая доска',
            search: 'Поиск',
            signIn: 'Войти',
            signUp: 'Зарегистрироваться',
            signOut: 'Выйти',
            profile: 'Редактировать профиль',
            toggleLng: 'Переключить язык',
            welcome: 'Страница приветствия',
          },
          sign: {
            login: 'логин',
            password: 'пароль',
            name: 'имя',
            signInQuestion: 'Уже зарегистрированы?',
            regQuestion: 'Еще не зарегистрированы? ',
            submit: 'Подтвердить',
            editProfile: 'Редактировать профиль',
            delete: 'Удалить профиль',
            danger: 'Учетная запись будет удалена безвозвратно',
            question: 'Вы уверены?',
            ok: 'Да',
            cancel: 'Нет',
          },
          formRules: {
            nameRequired: 'Введите имя!',
            nameLength: 'Минимум 3 символа',
            loginRequired: 'Введите логин!',
            loginLength: 'Минимум 3 символа',
            passwordRequired: 'Введите пароль!',
            passwordLength: 'Минимум 8 символов',
            passwordPattern: 'Только цифры и латинские буквы без пробелов',
          },
          welcome: {
            appTitle: 'Канбан-доска',
            appSubtitle:
              'Упраляйте своими проектами, достигайте максимальной эффективности, помогите своей AGILE и DevOps команде упорядочить повседневную работу',
            team: 'Наша команда',
            teammate1: 'Денис Баженов',
            teammate2: 'Михаил Дворкин',
            teammate3: 'Юрий Лабацевич',
            api: 'Взаимодействие с api',
            auth: 'Регистрация/авторизация',
            main: 'Главная страница',
          },
          search: {
            searchTitle: 'Найти задания',
            searchCardTitle: 'Идентификатор задания:',
            searchTaskTitle: 'Название задания:',
            searchTaskDescription: 'Описание задания:',
            searchLabel: 'Поиск',
            searchByKeyword: 'по ключевому слову',
            searchByKeywordErr: 'Пожалуйста, введите запрос!',
            searchByKeywordPlaceholder: 'Введите ключевое слово',
            searchById: 'по идентификатору',
            searchByIdErrInput: 'Пожалуйста, введите идентификатор!',
            searchByIdErrLength: 'Идентификатор состоит из 24 символов!',
            searchByIdErrType: 'Только числа и буквы!',
            searchByIdPlaceholder: 'Введите полный идентификатор',
            searchByIdAddButton: 'Добавить поле',
            searchButton: 'Поиск',
            searchMessage: 'Пока ничего не найдено. Попробуйте еще раз.',
          },
          message: {
            errorMessage: 'Содержание ошибки',
            unexpectedError: 'Произошла неожиданная ошибка',
            badRequest: 'Неверный запрос.',
            taskNotFound: 'Задание не найдено!',
            boardNotFound: 'Доска не найдена!',
            authorizationError: 'Неверный логин/пароль!',
            invalidToken: 'Невалидный токен!',
            loginExist: 'Логин уже существует!',
            createBoardSuccess: 'Доска успешно создана!',
            createBoardError: 'Ошибка создания доски!',
            createColumnSuccess: 'Колонка успешно создана!',
            createColumnError: 'Ошибка создания колонки!',
            createTaskSuccess: 'Задание успешно создано!',
            createTaskError: 'Ошибка создания задания!',
            deleteColumnSuccess: 'Колонка успешно удалена!',
            deleteColumnError: 'Ошибка при удалении колонки!',
            deleteBoardSuccess: 'Доска успешно удалена!',
            deleteBoardError: 'Ошибка при удалении доски!',
            deleteTaskSuccess: 'Задание успешно удалено!',
            deleteTaskError: 'Ошибка при удалении задания!',
            deleteUserSuccess: 'Пользователь успешно удален!',
            deleteUserError: 'Ошибка при удалении пользователя!',
            getAllTasksByIdsEmptySuccess: 'Поиск выполнен! Ничего не найдено.',
            getAllTasksByIdsSuccess: 'Поиск выполнен!',
            getAllTasksByIdsError: 'Ошибка при поиске!',
            getAllTasksByKeywordEmptySuccess: 'Поиск выполнен! Ничего не найдено.',
            getAllTasksByKeywordSuccess: 'Поиск выполнен!',
            getAllTasksByKeywordError: 'Ошибка при поиске!',
            getBoardColumnError: 'Ошибка при загрузке колонок!',
            getBoardsError: 'Ошибка при загрузке досок!',
            getTasksByBoardIdError: 'Ошибка при загрузке заданий!',
            getTasksByColumnError: 'Ошибка при загрузке заданий!',
            getTitleByBoardIdError: 'Ошибка при загрузке названия доски!',
            getUsersError: 'Ошибка при загрузке!',
            signInSuccess: 'Вход успешно выполнен!',
            signInError: 'Ошибка авторизации!',
            signUpSuccess: 'Пользователь успешно создан!',
            signUpError: 'Ошибка при создании пользователя!',
            updateColumnTitleSuccess: 'Название колонки успешно изменено!',
            updateColumnTitleError: 'Ошибка при изменении названия колонки!',
            updateTaskSuccess: 'Задание успешно изменено!',
            updateTaskError: 'Ошибка при изменении задания!',
            updateUserSuccess: 'Данные пользователя успешно изменены!',
            updateUserError: 'Ошибка при изменении данных пользователя!',
            deleteConfirm: 'Вы уверены, что хотите удалить ',
            task: 'задачу',
            column: 'колонку',
            board: 'доску',
          },
          boards: {
            header: 'Ваши доски',
            title: 'Заголовок',
            modalTitle: 'Создание доски',
            description: 'Описание',
            created: 'Создано пользователем',
          },
          columns: {
            back: 'Назад',
            add: 'Добавить колонку',
            title: 'Заголовок колонки',
          },
          tasks: {
            task: 'Задача',
            add: 'Добавить задачу',
            title: 'Заголовок задачи',
            description: 'Описание',
            teammates: 'Выбрать исполнителей',
            descriptionRequired: 'Введите описание!',
          },
        },
      },
    },
  });

export default i18n;
