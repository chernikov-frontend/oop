const types = [
    "Bowman",
    "Swordsman",
    "Magician",
    "Daemon",
    "Undead",
    "Zombie",
];


export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов');
        } else {
            this.name = name;
        }

        if (!types.includes(type)) {
            throw new Error("Неизвестный тип существа");
        } else {
            this.type = type;
        }
        this.level = 1;
        this.health = 100;
    };

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего');
        } else {
            this.level += 1;
            this.attack += this.attack * 0.2;
            this.defence += this.defence * 0.2;
            this.health = 100;
        }
    };

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else if (this.health <= 0) {
            this.health = 0;
        }
    }

}