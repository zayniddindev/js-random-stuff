const akhmed = {
    name: 'Akhmed',
    work: function (speed) {
        console.log(`My name is ${this.name} and I work ${speed}`);
    }
}

// akhmed.work('hard');

const jushkin = {
    name: 'Jushkun',
}

akhmed.work.apply(jushkin, ['slow']);
