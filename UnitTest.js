/*
 * Class Sorting algorithms
 *      Bead Sort 
 *      Gravity Sort 
 *      Bucket Sort 
 *      Bin Sort 
 *      Counting Sort
 *      Insertion Sort
 *      Radix Sort
 *      Tim Sort
 *      Merge Sort
 *      Merge Sort 3 Way
 *      Quick Sort
 *      Quick Sort 3 Way
 *      Selection Sort
 *      Shell Sort
 *      Bubble Sort
 *      Bubble Sort Optimized
 *      Cocktail Sort
 *      Heap Sort
 *      
 *      
 * Author: Amir Hatami
 */

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

