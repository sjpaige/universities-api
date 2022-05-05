import { readFileSync } from "fs";
import { City } from "src/universities/entities/city.entity";
import { StateEntity } from "src/universities/entities/state.entity";
import { University } from "src/universities/entities/university.entity";


export function db() {
  const data = readFileSync(`${process.cwd()}/src/db/universities.json`, 'utf-8');
  const { universities } = JSON.parse(data);

  let universitiesDB = new Map<number, University> ()
  let cities = new Map<number, City> ()
  let states = new Map<number, StateEntity> ()

  universities.forEach( university => {
    universitiesDB.set(university.id, university);
    cities.set(university.city.id, university.city);
    states.set(university.city.state.id, university.city.state);
  });

  // console.log(universitiesDB);
  // console.log(cities);
  // console.log(states);

  return {universitiesTable: universitiesDB, citiesTable: cities, statesTable: states};

}
