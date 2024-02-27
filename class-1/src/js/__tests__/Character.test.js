import Character from '../Character';

describe('Конструктор Character', () => {
  test('Проверяем что класс корректно создает объект', () => {
    const result = {
      name: 'Serg',
      type: 'Bowman',
      health: 100,
      level: 1,
    };
  
    expect(new Character('Serg', 'Bowman')).toEqual(result);
  });

  test('Проверяем что класс выбрасывает ошибку если имя содержит меньше 2 символов', () => {
    expect(() => new Character('I', 'Bowman')).toThrowError();
  });

  test('Проверяем что класс выбрасывает ошибку если имя содержит больше 10 символов', () => {
    expect(() => new Character('Ifdsfsdsdfsdf', 'Bowman')).toThrowError();
  });

  test('Проверяем что класс выбрасывает ошибку передать некорректный тип персонажа', () => {
    expect(() => new Character('Serg', 'Superman')).toThrowError();
  });
});

describe('Методы Character', () => {
  test('Метод levelUp должен выбросить ошибку если health равно 0', () => {
    const testLevelUp = new Character('Serg', 'Bowman');
    testLevelUp.health = 0;
    expect(() => testLevelUp.levelUp()).toThrowError('Нельзя повысить левел умершего');
  });

  test('метод damage должен снижать здоровье', () => {
    const testDamage = new Character('Serg', 'Bowman');
    testDamage.health = 100;
    testDamage.defence = 10;
    testDamage.damage(50);

    expect(testDamage.health).toBeLessThan(100);
    expect(testDamage.health).toBeGreaterThan(0);
  });

  test('Метод damage должен устанавливать health в 0, если health стал отрицательным', () => {
    const testDamage = new Character('Serg', 'Bowman');
    testDamage.health = 0;

    testDamage.damage(50);

    expect(testDamage.health).toBe(0);
  });

});




// test('Метод levelUp должен повышать level на 1, attack и defence на 20%', () => {
//   const testLevelUp = new Character('Serg', 'Bowman', 30, 30);
//   testLevelUp.levelUp();

//   const expectedObject = {
//     name: 'Serg',
//     type: 'Bowman',
//     health: 100,
//     level: 2,
//     attack: 30,
//     defence: 30,
//   };

//   expect(testLevelUp).toEqual(expectedObject);
// });



