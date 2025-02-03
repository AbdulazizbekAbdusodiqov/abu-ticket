
enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export const customerStub = () => {
    return {
        id: 1,
        first_name: "nimadir",
        last_name: "nimadirov",
        phone: "12345678",
        password: "parol",
        email: "emailjon@gmail.com",
        hashed_refresh_token: "qanaqadirtoken",
        birth_day: "01-01-2025",
        langId: 1,
        gender: Gender.Male,
    }
}