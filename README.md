[![Build Status](https://raw.githubusercontent.com/amhatami/Node-Sort-Algorithms/master/img/passing.png)](https://github.com/amhatami/Node-Sort-Algorithms)

# Node-Sort-Algorithms
A sorting library for Node.js &amp; javascript made based on well kown algorithmes included : Bead Sort , Gravity Sort , Bucket Sort , Bin Sort ,  Counting Sort , Insertion Sort , Merge Sort , Radix Sort

Sorting algorithm is an algorithm that puts elements of a list in a certain order. The most-used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing the use of other algorithms (such as search and merge algorithms) which require input data to be in sorted lists; it is also often useful for canonicalizing data and for producing human-readable output. More formally, the output must satisfy two conditions:

The output is in nondecreasing order (each element is no smaller than the previous element according to the desired total order);
The output is a permutation (reordering) of the input.

 	Sorting Algorithm ! 
 	Class Sorting Algorithm
 	Data structure	Array
	   **Comparison sorts*
	      Insertion Sort
	      Tim Sort
	      Merge Sort
	      Merge Sort 3 Way
	      Quick Sort
	      Quick Sort 3 Way
	      Selection Sort
	      Shell Sort
	      Bubble Sort
	      Bubble Sort Optimized
	      Cocktail Sort
	      Heap Sort
	   **Non-comparison sorts**
	      Bead Sort 
	      Gravity Sort 
 	      Bucket Sort 
 	      Bin Sort 
 	      Counting Sort
 	      Radix Sort
 	 
	 TODO .............................................
	   **Comparison sorts**
		Quick Sort
		Merge Sort
		In-place merge Sort
		Heap Sort
		Insertion Sort
		Intro Sort
		Selection Sort
		Tim Sort
		Cube Sort
		Shell Sort
		Bubble Sort
		Binary tree Sort
		Cycle Sort
		Library Sort
		Patience Sorting
		Smooth Sort
		Strand Sort
		Tournament Sort
		Cocktail Sort
		Comb Sort
		Gnome Sort
		UnShuffle Sort[10]
		Franceschini method Sort
		Block Sort
		Odd-Even Sort
	   **Non-comparison sorts**
		Pigeonhole Sort
		Bucket Sort(uniform keys)
		Bucket Sort(integer keys)
		Counting Sort
		LSD Radix Sort
		MSD Radix Sort
		MSD Radix Sort(in-place)
		Spread Sort
		Burst Sort
		Flash Sort
		Postman Sort
	 
 	   Note: the output must satisfy two conditions:
 	        The output is in nondecreasing order (each element is no smaller
 	             than the previous element according to the desired total order);
 	        The output is a permutation (reordering) of the input.
 	
 	 Author: Amir Hatami



## Installation

  Install using the node.js package manager [npm](http://npmjs.org/):

      $ npm install node-sort-algorithms
      
  Install via git clone:

      $ git clone https://github.com/amhatami/Node-Sort-Algorithms node-sort-algorithms
      $ cd node-sort-algorithms
      $ npm install
 
  Using directly via a browser, You can download **node-sort-algorithms.js** from GitHub or just bellow hotlink to it:

      <script src="https://raw.githubusercontent.com/amhatami/Node-Sort-Algorithms/master/node-sort-algorithms.js"></script>


## Requirements

  You can install node-sort and its dependencies with npm: 
    
      $ npm install node-sort-algorithms
  
  Dependencies
  
  * [Node.js](http://nodejs.org/) v0.6+



## Usage :
```js
var nodesort = require('./node-sort-algorithms');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 
...
nodesort(inputArray, displaymode, function(err,sortRef) {
        if (err) {
            // TODO error handeling 
            }
	      else {
           var result = sortRef.beadSort(inputArray);   
           //var result = sortRef.gravitySort(inputArray);   
           // TODO output 
	            }
    });
```

## Ruls :
 * Depended on the Sort algorithms, input Array could be integers, float, decima, ocat, hex or binary.
 * Array's element could be negative for only these Algorithms; Insertion Sort , Merge Sort , 3 Way Merge Sort , Quick Sort , 3 Way Quick Sort and etc.
 * Returns error mesage if not found valid input.
 * Turn On details of Algorithms progress useing : displaymode = "Yes"  
 ```js
 var displaymode = "No"; //"Yes";
 ```

## Example

  Demos of the node-sort module are located in: [./test-Cases](https://github.com/amhatami/Node-Sort-Algorithms/tree/master/test-Cases)

```js
var nodesort = require('./node-sort-algorithms');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 
var base = 2;
var RUN = 32;

var arrin00 = [20, 8 , -11, 12, 22 , 9 , 10 ];
var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];
var arrin06 = [1, 3, -7, 25, 12, 9, 8,
                      121, 221, -10, 18, 29, 49];
var arrin07 = [1, 3, 7000000000000000000, 25, 12, 9, 8,
                      121, 221, 100000000000000000000000000 , 18, 290000000000000000000, 49];
var arrin08 = [1, 3, 75432, 25, 12, 9, 8,
                      121, 221, 976562 , 18, 299999, 49];
var arrin09 = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin10 = [1,342, 14,293 , 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin11 = [5, 8 , 11, 12, 2 , 9 , 10 , 4 , 11, 10, 12, 7, 9 ];
var arrin12 = "";
//var arrin13 = [A7,02,22,77,37,15,00,40,B00,75,04,05,07,75,52,12,50,77,71,D07];    //base16
var arrin14 = [1001,101010,11,10,01,111,100,1000,11100,10110,101,100010,0111,101,11111,1000001,1,0,111,11010];   //base 2
var arrin15 = [7,2,22,77,37,15,10770,740,70,75,04,5,107,75,52,12,50,177,71,207];   //base 8
var arrin16 = [7,2,3,15,19,12,10,4,8,11,007,5,00017,6,9,12,1,13,18,20];   // smal numbers for bead sort
var arrin17 = [45, -2, -45, 78, 30, -42, 10, 19, 73, 93];
var arrin18 = [12, 34, 54, 2, 3];
var arrin19 = [7,2,3,15,19,12,10,4,8,11,007,5,00017,6,9,12,1,13,18,20,5,8,11,15,12,2,9,10,4,11,10,12,7,9,15];   // smal numbers for bead sort


function solveSorting(inputArray,sortingMethod,KWay) {
    var arr_original = inputArray.toString() ;
    var sortedArray = inputArray;

    nodesort(inputArray, displaymode,  function(err,sortRef) {
        if (err) {
	         console.log(err);
	                }
	      else {
			  switch(sortingMethod) {
					case "mergeSort":
						var result = sortRef.mergeSort(inputArray);
						sortMehodmessage = "Merge Sort";
						break;
					case "mergeSort3Way":
						var result = sortRef.mergeSort3Way(inputArray);
						sortMehodmessage = "3 Way Merge Sort";
						break;
					case "mergeSortKWay":
						var result = sortRef.mergeSortKWay(inputArray,KWay);
						sortMehodmessage = KWay + " (K) Way Merge Sort";
						break;
					case "quickSort":
						var result = sortRef.quickSort(inputArray);
						sortMehodmessage = "Quick Sort";
						break;
					case "quickSort3Way":
						var result = sortRef.quickSort3Way(inputArray);
						sortMehodmessage = "3 Way Quick Sort";
						break;
					case "quickSortKWay":
						var result = sortRef.quickSortKWay(inputArray,KWay);
						sortMehodmessage = KWay+" (K) Way Quick Sort";
						break;
					case "insertionSort":
						var result = sortRef.insertionSort(inputArray);
						sortMehodmessage = "Insertion Sort";
						break;
					case "radixSort":
						var result = sortRef.radixSort(inputArray,base);   // Base defualt 10 
						sortMehodmessage = "Radix Sort";
						break;
					case "countingSort":
						var result = sortRef.countingSort(inputArray);
						sortMehodmessage = "Counting Sort";
						break;
					case "bucketSort":
						var result = sortRef.bucketSort(inputArray);
						sortMehodmessage = "Bucket Sort";
						break;
					case "binSort":
						var result = sortRef.binSort(inputArray);
						sortMehodmessage = "Bin Sort";
						break;
					case "beadSort":
						var result = sortRef.beadSort(inputArray);
						sortMehodmessage = "Bead Sort";
						break;
					case "gravitySort":
						var result = sortRef.gravitySort(inputArray);
						sortMehodmessage = "Gravity Sort";
						break;
					case "timSort":
						var result = sortRef.timSort(inputArray);
						sortMehodmessage = "Gravity Sort";
						break;
					case "selectionSort":
						var result = sortRef.selectionSort(inputArray);
						sortMehodmessage = "Selection Sort";
						break;
					case "shellSort":
						var result = sortRef.shellSort(inputArray);
						sortMehodmessage = "Shell Sort";
						break;
					case "bubbleSort":
						var result = sortRef.bubbleSort(inputArray);
						sortMehodmessage = "Bubble Sort";
						break;
					case "bubbleSortOptimized":
						var result = sortRef.bubbleSortOptimized(inputArray);
						sortMehodmessage = "Bubble Sort Optimized";
						break;
					case "cocktailSort":
						var result = sortRef.cocktailSort(inputArray);
						sortMehodmessage = "Cocktail Sort";
						break;
					case "heapSort":
						var result = sortRef.heapSort(inputArray);
						sortMehodmessage = "Heap Sort";
						break;
					default:
						var result = sortRef.defaultSort(inputArray);  
						sortMehodmessage = "defualt javascript Sort";
				}

	         console.log("Success attempt to sort below array by "+sortMehodmessage+" : \r\n \t ["+arr_original+" ] \r\n and result is : \r\n \t [ "
                + result + " ]" );
  
	      sortedArray = result;
	            }
	      console.log("----------------------------------------------------------"); 
    });
    
    return sortedArray;
};

solveSorting(arrin16);
solveSorting(arrin16,'beadSort');
solveSorting(arrin15,'gravitySort');
solveSorting(arrin00,'bucketSort');
solveSorting(arrin11,'bucketSort');
solveSorting(arrin03,'binSort');  //
solveSorting(arrin03,'countingSort');
solveSorting(arrin09,'insertionSort');
solveSorting(arrin14,'radixSort');
solveSorting(arrin16,'timSort');
solveSorting(arrin10,'mergeSort');
solveSorting(arrin17.slice(0),'mergeSort3Way');
solveSorting(arrin16.slice(0),'quickSort');
solveSorting(arrin16,'quickSort3Way');
solveSorting(arrin16,'selectionSort');
solveSorting(arrin16,'shellSort');
solveSorting(arrin16,'bubbleSort');
solveSorting(arrin16,'bubbleSortOptimized');
solveSorting(arrin16,'cocktailSort');
solveSorting(arrin16,'heapSort');
solveSorting(arrin17.slice(0),'quickSortkWay' , 3); 
solveSorting(arrin17.slice(0),'mergeSort3Way', 3 ); 
```


## API Documentation

**Parameters**

  * **array** - array to be sorted
  * **displaymode** - for more details of algorithm progress 
  * **base** - for positional numeral system with a radix, or base  e.g.(2 Binary - 8 Octal - 10 Decimal - 16 Hexadecimal - 60 	Sexagesimal etc. ) [List of numeral systems](https://en.wikipedia.org/wiki/List_of_numeral_systems) 


**Functions**

	   	**Comparison sorts**
	   
  * **Insertion Sort - .insertionSort( array )**
  
  * **Merge Sort - .mergeSort( array )**

  * **Merge Sort 3 Way - .mergeSort3Way( array )**

  * **Quick Sort - .quickSort( array )**

  * **Quick Sort 3 Way - .quickSort3Way( array )**

  * **Tim Sort - .timSort( array )**

  * **Selection Sort - .selectionSort( array )**

  * **Shell Sort - .shellSort( array )**

  * **Bubble Sort - .bubbleSort( array )**

  * **Bubble Sort Optimized - .bubbleSortOptimized( array )**

  * **Cocktail Sort - .cocktailSort( array )**

  * **Heap Sort - .heapSort( array )**

	  	**Non-comparison sorts**  

  * **Radix Sort - .radixSort( array , base )**

  * **Counting Sort - .countingSort( array )**

  * **Bucket Sort - .bucketSort( array )**

  * **Bin Sort - .binSort( array )**

  * **Bead Sort - .beadSort( array )**

  * **Gravity Sort - .gravitySort( array )**

Coming soon :) !

  * **Intro Sort - .introSort( array )**

  * **Cube Sort - .cubeSort( array, [comparator] )**

	 TODO .............................................
	   **Comparison sorts**
		Intro Sort
		Cube Sort
		Shell Sort
		Bubble Sort
		In-place merge Sort
		Binary tree Sort
		Cycle Sort
		Library Sort
		Patience Sorting
		Smooth Sort
		Strand Sort
		Tournament Sort
		Cocktail Sort
		Comb Sort
		Gnome Sort
		UnShuffle Sort[10]
		Franceschini method Sort
		Block Sort
		Odd-Even Sort
	   **Non-comparison sorts**
		Pigeonhole Sort
		Bucket Sort(uniform keys)
		Bucket Sort(integer keys)
		Counting Sort
		LSD Radix Sort
		MSD Radix Sort
		MSD Radix Sort(in-place)
		Spread Sort
		Burst Sort
		Flash Sort
		Postman Sort


## Testing

  Issue the following node command in the same directory to run the UnitTest.js test cases:
  
      $ node UnitTest

## LICENSE

  node-sort-algorithms: Copyright (c) 2016 Amir Hatami
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Refrences

 * https://en.wikipedia.org/wiki/Sorting_algorithm
 * http://algs4.cs.princeton.edu/20sorting/
 * https://www.toptal.com/developers/sorting-algorithms
 * http://www.geeksforgeeks.org/sorting-algorithms/
 * https://www.hackerrank.com/domains/algorithms/arrays-and-sorting
 * https://leetcode.com/problemset/algorithms/
 * https://www.topcoder.com/community/data-science/data-science-tutorials/sorting/
 
