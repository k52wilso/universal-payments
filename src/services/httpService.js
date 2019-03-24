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

let id = 0;
function createData(name, amount, date, cardID) {
  id += 1;
  return { id, name, amount, date, cardID};
}

const rows = [
  createData("Walmart", 198.99, Date.now(), "010"),
  createData("Costco", 300, Date.now(), "011"),
  createData("Moxies", 29.00, Date.now(), "010")
];

const transcations = {
    data: rows
};

const getReceiptForTranscation = (id) => {
    for (let i = 0; i < transcations.data.length; i++) {
        if (id === transcations.data[i].id) return transcations.data[i];
    }
    
    return {};
}

const alerts = [{
    id: "010",
    status: "approaching",
    name: "Daily Limit",
    currentValue: 120,
    bounds: {
        min: 0,
        max: 1000
    }
}, {
    id: "011",
    status: "exceeded",
    name: "Monthly Limit",
    currentValue: 1350,
    bounds: {
        min: 0,
        max: 1300
    }
}]

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

    static getTranscations(){
        return new Promise((resolve) => {
            resolve(transcations);
        });
    }

    static getReceipt(id) {
        const receipt = getReceiptForTranscation(id);
        return new Promise((resolve) => {
            if (id) {
                resolve(receipt);
            } else {
                console.log('Error getting receipt');
            }
        });
    }

    static getAlerts() {
        return new Promise((resolve) => {
            resolve(alerts);
        });
    }
}

export default HttpService;