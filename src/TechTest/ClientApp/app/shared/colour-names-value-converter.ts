import { IColour } from '../people/interfaces/icolour';

export class ColourNamesValueConverter {

  toView(colours: IColour[]) {

    // TODO: Step 4
    //
    // Implement the value converter function.
    // Using the colours parameter, convert the list into a comma
    // separated string of colour names. The names should be sorted
    // alphabetically and there should not be a trailing comma.
    //
    // Example: 'Blue, Green, Red'

    // Anna Lycett:
    // I believe this would entail the following:
    // - Use the method to sort the list alphabetically, something 
    // along the lines of IColour.sort(); and storing it in a
    // variable, e.g.var arr
    // - Following that, use the join method, e.g.:
    // var str = arr.join(", ");
    //- Print the colour names: document.write(str);

    return 'Todo';
  }

}
