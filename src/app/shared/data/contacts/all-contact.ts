export interface contactData {
    title_id: number,
    status: boolean,
    title: string,
    contect: number,
    data: {
        id: number;
        status: boolean;
        img: string;
        fname: string;
        lname: string;
        email: string;
        profileImage: string;
        gender: string;
        dd: number;
        mm: string;
        yyyy: number;
        personality: string;
        city: string;
        mobileno: string;
        website: string;
        interest: string;
    }[];
}

export interface lastDataList {
    city: string,
    dd: number,
    email: string,
    fname: string,
    gender: string,
    id: number
    img: string,
    interest: string,
    lname: string,
    mm: string,
    mobileno: string,
    personality: string,
    profileImage: string,
    status: boolean
    website: string,
    yyyy: number
}

export const Personal: contactData[] = [
    {
        title_id: 1,
        status: true,
        title: "Personal",
        contect: 5,
        data: [{
            id: 1,
            status: true,
            img: 'assets/images/avatar/1.jpg',
            fname: 'Bucky',
            lname: 'Barnes',
            email: 'barnes@gmail.com',
            profileImage: "assets/images/avatar/1.jpg",
            gender: "Male",
            dd: 18,
            mm: "May",
            yyyy: 1994,
            personality: "Cool",
            city: "moline acres",
            mobileno: "+0 1800 76855",
            website: "www.test.com",
            interest: "photography",

        },
        {
            id: 2,
            status: false,
            img: 'assets/images/avatar/2.jpg',
            fname: 'Comeren',
            lname: 'Diaz',
            email: 'comeren@gmail.com',
            profileImage: "assets/images/avatar/2.jpg",
            gender: "Female",
            dd: 7,
            mm: "Feb",
            yyyy: 1995,
            personality: "Cool",
            city: "Delhi",
            mobileno: "+0 1800 55812",
            website: "www.cometest@.com",
            interest: "sports",
        },
        {
            id: 3,
            status: false,
            img: 'assets/images/avatar/3.jpg',
            fname: 'Issa',
            lname: 'Bell',
            email: 'issabell@gmail.com',
            profileImage: "assets/images/avatar/3.jpg",
            gender: "Male",
            dd: 20,
            mm: "Jul",
            yyyy: 1993,
            personality: "Cool",
            city: "Mumbai",
            mobileno: "+0 1800 87412",
            website: "www.belltest@.com",
            interest: "cooking",
        },
        {
            id: 4,
            status: false,
            img: 'assets/images/avatar/4.jpg',
            fname: 'Andew',
            lname: 'Jon',
            email: 'andewjon@gmail.com',
            profileImage: "assets/images/avatar/4.jpg",
            gender: "Male",
            dd: 25,
            mm: "Aug",
            yyyy: 1996,
            personality: "Cool",
            city: "Amreli",
            mobileno: "+0 1800 79877",
            website: "www.test@.com",
            interest: "photography",
        },
        {
            id: 5,
            status: false,
            img: 'assets/images/avatar/5.jpg',
            fname: 'Jason',
            lname: 'Borne',
            email: 'jasonb@gmail.com',
            profileImage: "assets/images/avatar/5.jpg",
            gender: "Male",
            dd: 30,
            mm: "Oct",
            yyyy: 1992,
            personality: "Cool",
            city: "Delhi",
            mobileno: "+0 1800 11547",
            website: "www.jason@.com",
            interest: "photography",
        },
        {
            id: 6,
            status: false,
            img: 'assets/images/avatar/6.jpg',
            fname: 'Monty',
            lname: 'Carlo',
            email: 'monty@gmail.com',
            profileImage: "assets/images/avatar/6.jpg",
            gender: "Male",
            dd: 12,
            mm: "Nov",
            yyyy: 1994,
            personality: "Cool",
            city: "Amreli",
            mobileno: "+0 1800 87944",
            website: "www.mon@.com",
            interest: "sports",
        },
        {
            id: 7,
            status: false,
            img: 'assets/images/avatar/7.jpg',
            fname: 'Brock',
            lname: 'Lee',
            email: 'lee@gmail.com',
            profileImage: "assets/images/avatar/7.jpg",
            gender: "Male",
            dd: 8,
            mm: "Dec",
            yyyy: 1992,
            personality: "Cool",
            city: "Ahemdabad",
            mobileno: "+0 1800 58712",
            website: "www.lee.com",
            interest: "photography",
        },

        ]
    },
]

export const Organization: contactData[] = [
    {
        title_id: 2,
        status: false,
        title: "Organization",
        contect: 10,
        data: [
            {
                id: 1,
                status: true,
                img: 'assets/images/avatar/6.jpg',
                fname: 'Mark',
                lname: 'jecno',
                email: 'markjecno@gmail.com',
                profileImage: "assets/images/avatar/6.jpg",
                gender: "Male",
                dd: 18,
                mm: "May",
                yyyy: 1994,
                personality: "Cool",
                city: "moline acres",
                mobileno: "+0 1800 76855",
                website: "www.test.com",
                interest: "photography",
            },
            {
                id: 2,
                status: false,
                img: 'assets/images/user/3.jpg',
                fname: 'Jason',
                lname: 'Borne',
                email: 'jasonb@gmail.com',
                profileImage: "assets/images/user/3.jpg",
                gender: "Male",
                dd: 7,
                mm: "Feb",
                yyyy: 1995,
                personality: "Cool",
                city: "Delhi",
                mobileno: "+0 1800 55812",
                website: "www.cometest@.com",
                interest: "sports",
            },
            {
                id: 3,
                status: false,
                img: 'assets/images/user/4.jpg',
                fname: 'Sarah',
                lname: 'Loren',
                email: 'barnes@gmail.com',
                profileImage: "assets/images/user/4.jpg",
                gender: "Female",
                dd: 20,
                mm: "Jul",
                yyyy: 1993,
                personality: "Cool",
                city: "Mumbai",
                mobileno: "+0 1800 87412",
                website: "www.belltest@.com",
                interest: "cooking",
            },
            {
                id: 4,
                status: false,
                img: 'assets/images/user/10.jpg',
                fname: 'Andew',
                lname: 'Jon',
                email: 'andrewj@gmail.com',
                profileImage: "assets/images/user/10.jpg",
                gender: "Female",
                dd: 18,
                mm: "May",
                yyyy: 1994,
                personality: "Cool",
                city: "moline acres",
                mobileno: "+0 1800 76855",
                website: "www.test.com",
                interest: "photography",
            },
        ]
    },
]

export const viewList = [
    {
        title: 'Follow Up'
    },
    {
        title: 'Favorites'
    },
    {
        title: 'Ideas'
    },
    {
        title: 'Important'
    },
    {
        title: 'Business'
    },
    {
        title: 'Holidays'
    }
]

