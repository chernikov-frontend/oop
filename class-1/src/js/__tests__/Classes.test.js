import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

describe('Создает Classes', () => {

    test ('Должна создать Bowman', () => {
        const result = {
            name: 'Serg',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        };
        expect(new Bowman('Serg','Bowman')).toEqual(result);
    });

    test ('Должна создать Undead', () => {
        const result = {
            name: 'Serg',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        };
        expect(new Undead('Serg','Undead')).toEqual(result);
    });

    test ('Должна создать Daemon', () => {
        const result = {
            name: 'Serg',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        };
        expect(new Daemon('Serg','Daemon')).toEqual(result);
    });

    test ('Должна создать Magician', () => {
        const result = {
            name: 'Serg',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        };
        expect(new Magician('Serg','Magician')).toEqual(result);
    });

    test ('Должна создать Swordsman', () => {
        const result = {
            name: 'Serg',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        };
        expect(new Swordsman('Serg','Swordsman')).toEqual(result);
    });

    test ('Должна создать Zombie', () => {
        const result = {
            name: 'Serg',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        };
        expect(new Zombie('Serg','Zombie')).toEqual(result);
    });
});


test('Метод levelUp должен повышать level на 1, attack и defence на 20%', () => {
    const testBowman = new Bowman('Serg', 'Bowman');
    testBowman.levelUp();
    const expectedObject = {
        name: 'Serg',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };
    expect(testBowman).toEqual(expectedObject);
});