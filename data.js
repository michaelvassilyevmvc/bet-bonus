//import { faker } from '@faker-js/faker';
import { faker } from "@faker-js/faker/locale/ru";

export const MATCHES = [];

export function createRandomOpponent() {
  return {
    id: faker.datatype.uuid(),
    opponent: faker.address.city(),
    avatar: faker.image.sports(200, 200, true),
    koef: faker.datatype.float({ min: 0.1, max: 2, precision: 0.1 }),
  };
}

Array.from({ length: 5 }).forEach(() => {
  MATCHES.push([createRandomOpponent(), createRandomOpponent()]);
});
