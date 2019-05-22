import { computedFrom } from 'aurelia-framework';
import { IPerson } from '../interfaces/iperson';
import { IColour } from '../interfaces/icolour';

export class Person implements IPerson {

  constructor(person: IPerson) {
    this.id = person.id;
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.authorised = person.authorised;
    this.enabled = person.enabled;
    this.colours = person.colours;
  }

  id: number;
  firstName: string;
  lastName: string;
  authorised: boolean;
  enabled: boolean;
  colours: IColour[];

  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @computedFrom('fullName')
  get palindrome(): boolean {

    // TODO: Step 5
    //
    // Implement the palindrome computed field.
    // True should be returned When the FullName is spelt the same
    // forwards as it is backwards. The match should ignore any
    // spaces and should also be case insensitive.
    //
    // Example: 'Bo Bob' is a palindrome.

    // Anna Lycett:
    // My knowledge of JavaScript is limited but assuming that 
    // JavaScript does not differ significantly from C# at least in
    // how conditionals and arrays can be used, I believe the 
    // following would likely be part of the solution to the this 
    // question:
    // - Using the fullName() from code directly above the to-do,
    // create a variable that stores this name without spaces (one 
    // possible approach would be to use: replace(" ", "")) and 
    // converts all characters into either lowercase or uppercase
    // (toLowerCase() or toUpperCase()).
    // - Convert the string into an array with indexes
    // [0, 1, 2, ..., n]
    // - Use a forEach loop to compare characters[0 + x] and[n - x]
    // where the value of x starts at 0, ends at n and is
    // incremented by one with every run of the forEach loop(x++)
    // - Place the above foreach statement in an if conditional 
    // statement which checks whether the characters above are 
    // identical(===).If they are not, the if conditional would 
    // break and the value returned would be false. If they are 
    // true, the conditional would continue comparing until the end
    // and once all characters have been checked, the value
    // returned would be true.

    return false;
  }
}
