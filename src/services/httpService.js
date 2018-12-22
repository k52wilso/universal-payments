
const wallet = {
    user: {
        name: "Kyle Wilson-McCormack",
        imageURL: "/assets/images/me.jpg"
    },
    total: "28520",
    cards: [{
        id: "010",
        type: "VISA",
        number: "1234 5678 9000 1000",
        cardOwner: "Kyle Wilson-McCormack",
        expiryDate: "02/21"
    }, {
        id: "011",
        type: "MASTERCARD",
        number: "1234 5678 9000 1000",
        cardOwner: "Kyle Wilson-McCormack",
        expiryDate: "02/21"
    }]
};

const dashboard = {
    charts: [{
        data : [
            {name: 'Apr', savings: 2390, spending: 3800, amt: 2500},
            {name: 'May', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Jun', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Jul', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Aug', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Sep', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Oct', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Nov', savings: 3490, spending: 4300, amt: 2100},
        ],
        type: "money-history"
    }],
    savingsSummary: {
        total: "CAN 280,520.00",
        trend: "15%",
        carousel: [] // items for carousel
    }
}


class HttpService {
    static getWallet() {
        return new Promise((resolve) => {
            resolve(wallet);
        });
    }

    static getDashboard(){
        return new Promise((resolve) => {
            resolve(dashboard);
        });
    }
}

export default HttpService;