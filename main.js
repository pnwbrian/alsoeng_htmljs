/*

In main.js create a function that takes an array argument. The array will contain objects of
the form 
{first: "Amanda", last: "Byron", group: "Sales"}.
The function should return an object that organizes each entry by group, and combines
the name, making sure to put the last name first if 'nameOrder' is "reverse". The example
below shows a possible input to the function, but the function should be able to handle
any alpha-numeric group names.

*/

/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

function OrganizeByGroup (data) {

	let organized = {};

	if (Array.isArray(data) && (data.length > 0)) {

		// Find the unique set of 'group' values 
		const groups = new Set(data.map(e => e.group.toLowerCase()));

		// assert if 'undefined' found anywhere in groups -- bad input! 

		// Create elements (albeit empty array) for each group
		groups.forEach(group => organized[group] = []);

		// Now, process the data, mapping names to their group
		data.forEach(item => {

			// A little bulletproofing
			if (!('first' in item)) item.first = "----";
			if (!('last' in item)) item.last = "----";

			let named = `${item.first} ${item.last}`;

			// Ternary operator is slicker, but more obtuse 
			if (("nameOrder" in item) && ("reverse" === item.nameOrder)) {

				named = `${item.last} ${item.first}`;

			}

			organized[item.group.toLowerCase()].push(named);

		});

	}

	return organized;

}

// Part 2 Answer Here

console.log(OrganizeByGroup(employees));

// Test cases tested:

// Empty data ===> {}
// Single entry ===> as expected
// Single, invalid entry ===> gracefully degrades, though 'group' shows 'undefined'
// Multiple entry w/100% valid ===> as expected
// Multiple entry w/50% valid ===> gracefully degrades, though 'group' shows 'undefined'

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
