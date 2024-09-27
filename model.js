//App

//Input

//Data

const model = {
    app: {
        // currentPage endres avhengig av hvilken side som skal vises
        currentPage: "loginForm", //loginForm, registerForm, mainPage
        loggedInUser: null,
        shownMovie: 50,
    }, 

    input: {
        loginForm: {
            email: null,
            password: null,
        },
        createAccount:{
            email: null,
            password: null,
        },
        searchField:{
            searchText: null,
        },
        users:{
            userPicture: null,
            userGenre: [],
        },
        giveRating:{
            numberRating: 0,
        }
    },

    data: {
        genres: [
            "horror",
            "comedy",
            "action",
            "romance",
            "truecrime",
        ],
        userProfile: [ 
            {
            id: 11,
            email: "eksempel@gmail.com",
            password: "hei123",
            userGenre: ["horror", "comedy", "action", "romance", "truecrime"],
            userPicture: "pictures/user11.png",
            },
        ],
        movie: [
            {
                id: 1,
                name: "Interstellar Odyssey",
                genre: "sci-fi",
                year: 2028,
                actor: ["Emma Stone", "John Boyega"],
                description: "A team of astronauts embarks on a perilous journey through a newly discovered wormhole.",
                rating: null,
            },
            {
                id: 2,
                name: "The Last Laugh",
                genre: "comedy",
                year: 2025,
                actor: ["Ryan Reynolds", "Tiffany Haddish"],
                description: "A retired comedian comes out of retirement for one last shot at stardom.",
                rating: null,
            },
            {
                id: 3,
                name: "Whispers in the Dark",
                genre: "horror",
                year: 2026,
                actor: ["Anya Taylor-Joy", "Oscar Isaac"],
                description: "A paranormal investigator uncovers a centuries-old conspiracy in a haunted mansion.",
                rating: null,
            },
            {
                id: 4,
                name: "Heart of the Storm",
                genre: "drama",
                year: 2027,
                actor: ["Viola Davis", "Mahershala Ali"],
                description: "A small coastal town faces an unprecedented natural disaster, testing the bonds of community.",
                rating: null,
            },
            {
                id: 5,
                name: "Chrono Heist",
                genre: "action",
                year: 2029,
                actor: ["Tom Holland", "Zendaya"],
                description: "A team of time-traveling thieves attempt to pull off the ultimate score across different eras.",
                rating: null,
            },
            {
                id: 6,
                name: "Rambo",
                genre: "action",
                year: 1982,
                actor: ["Sylvester Stallone", "Richard Crenna"],
                description: "A troubled Vietnam War veteran and former U.S. Army Special Forces soldier is skilled in many aspects of survival, weaponry, hand-to-hand combat and guerrilla warfare. He is recruited for dangerous missions.",
                rating: null,
            },
        ], 
    },
}
