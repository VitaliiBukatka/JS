function userCard(number) {
    let cardInformation = {balance: 100, transactionLimit: 100, historyLogs: [], key: number};
    let getCardOptions = {
        getCardOptions: function () {
            console.log(cardInformation, `Баланс карти # ${cardInformation.key} - 100`);
        }
    };
    let putCredits = {
        putCredits: function (put) {
            cardInformation.balance = cardInformation.balance + put;
            setHistoryLogs.setHistoryLogs('Received credits', put);
            console.log(cardInformation, `Баланс карти # ${cardInformation.key} - після поповнення на ${put}`);

        }
    };
    let takeCredits = {
        takeCredits: function (take) {
            cardInformation.balance = cardInformation.balance - take;
            setHistoryLogs.setHistoryLogs('Withdrawal of credits', take);
            console.log(cardInformation, `Баланс карти # ${cardInformation.key} - після зняття на ${take}`);
        }
    };
    let setTransactionLimit = {
        setTransactionLimit: function (limit) {
            cardInformation.transactionLimit = limit;
            setHistoryLogs.setHistoryLogs('Transaction limit change', limit);
            console.log(cardInformation, `Інформація по карті # ${cardInformation.key} - після встановлення ліміту операцій на ${limit}`);
        }
    };
    let transferCredits = {
        transferCredits: function (transfer, card) {
            let transferAndTaxes = transfer + transfer * 0.005;
            if (transferAndTaxes > cardInformation.balance) {
                console.log('Недостатньо коштів на карті');
            } else if (transferAndTaxes > cardInformation.transactionLimit) {
                console.log('Перевищено ліміт транзакцій');
            } else {
                takeCredits.takeCredits(transferAndTaxes);
                card.putCredits.putCredits(transfer);
            }
        }
    };
    let setHistoryLogs = {
        setHistoryLogs: function (operation, credits) {
            let received = {
                operationType: operation,
                credits: credits,
                operationTime: new Date().toLocaleString('en-GB')
            };
            cardInformation.historyLogs.push(received)
        }
    };
    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits};
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length > 3) {
            console.log('У Вас забагато карток');
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(number) {
        return this.cards[number - 1];
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.getCardOptions.getCardOptions();
card2.getCardOptions.getCardOptions();
card1.putCredits.putCredits(500);
card1.setTransactionLimit.setTransactionLimit(800);
card1.transferCredits.transferCredits(300, card2);
card2.takeCredits.takeCredits(50);