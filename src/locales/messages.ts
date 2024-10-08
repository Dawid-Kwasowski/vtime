const validationMessages = {
  required: "Pole jest wymagane!",
  maxLength: "Maksymalna liczba znaków: {count}",
  invalidEmail: "Nieprawidłowy email",
};

const errors = {
  conflict: "Taki użytkownik już istnieje!",
};

export const messages = {
  pl: {
    app: {
      t: "TaskTide",
      validationMessages,
      errors,
    },
    auth: {
      signInTab: "Zaloguj się",
      signUpTab: "Stwórz konto",
      editProfiles: {
        managamnet: "Zardządzaj profilami",
        editName: "Edytuj imię",
        deleteProfile: "Usuń użytkownika",
        editAvatar: "Edytuj zdjęcie",
      },
      signIn: {
        t: "Witamy ponownie",
      },
      signUp: {
        t: "Dołącz do nas",
      },
      email: "Wpisz email",
      password: "Wpisz hasło",
    },
    components: {
      confirmDialog: {
        delete: "Usuń",
        cancel: "Anuluj",
      },
    },
    accounts: {
      createProfile: "Stwórz konto",
      chooseProfile: "Wybierz profil",
      newProfile: {
        t: "Dodaj profil",
        subtitle: "Dodaj kolejny profil osoby korzystjącej z serwisu Vtime",
        username: "Wpisz imię",
        deleteAvatar: "Usuń zdjęcie",
        editPhoto: "Wybierz inne zdjęcie",
        next: "Dalej",
        cancel: "Anuluj",
      },
    },
    home: {
      fab: {
        t: "Dodaj zadanie",
      },
      bar: {
        hello: "Witaj!",
      },
      task: {
        t: "Nowe zadanie",
        placeholder: "Tytuł zadania",
        todayList: "Lista zadań na dziś",
        closestTask: "Najblisze zadania",
        emptyList: "Brak zadań",
        addTask: "Dodaj zadanie",
        editMode: "Edytuj Zadanie",
        description: "Opis zadania (opcjonalne)",
        noDescription: "Brak opisu",
        confirmDialogTitle: "Usunąć zaznaczone zadanie?",
        confirmDialogContent:
          "Zadanie zostanie usunięte na stałe, czy chcesz to zrobić?",
      },
    },
  },
};
