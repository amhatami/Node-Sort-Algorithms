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
 * 	... TODO .............................................
 *	   **Comparison sorts**
 *	Intro Sort
 *	Cube Sort
 *	In-place merge Sort
 *	Binary tree Sort
 *	Cycle Sort
 *	Library Sort
 *	Patience Sorting
 *	Smooth Sort
 *	Strand Sort
 *	Tournament Sort
 *	Comb Sort
 *	Gnome Sort
 *	UnShuffle Sort[10]
 *	Franceschini method Sort
 *	Block Sort
 *	Odd-Even Sort
 *   **Non-comparison sorts**
 *	Pigeonhole Sort
 *	Bucket Sort(uniform keys)
 *	Bucket Sort(integer keys)
 *	LSD Radix Sort
 *	MSD Radix Sort
 *	MSD Radix Sort(in-place)
 *	Spread Sort
 *	Burst Sort
 *	Flash Sort
 *	Postman Sort
 *
 *      
 * Author: Amir Hatami
 */
 
var displaymode = "No"; // by defualt No details display 
var code = new Array();
 
module.exports = function(inputArray,displayStatus,callback) {
  displaymode = displayStatus;
  try {
    code = getArrayInfo(inputArray);   // code[0]:max element   Code[1]:bucket size square of lenght    code[2] array lenght  code[3] min element 
    if (displaymode=="Yes") console.log("max",code[0],"lenght square",code[1],"array lenght",code[2],"min",code[3]);
    if (!inputArray || inputArray.length === undefined) {
        throw new Error("Input array is not valid !");
    // } else if (code[3] < 0 ) {
    //     throw new Error("negative element not accepted ! ");
    } else 
       callback(null, {
            bucketSort: function () {
              if (code[3] < 0 ) throw new Error("Negative element are not accepted ! for Bucket Sort.");
              if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with bucketSort");
        		  if (code[0]<=0) return beadSortLocalfractions(inputArray.slice(0),10,code[2]);
              else return beadSortLocalBucket(inputArray.slice(0),code);
			},
			      binSort:function () {
              if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with bucketSort which is the same as binSort!");
        		  return beadSortLocalBucket(inputArray.slice(0),code);
			},
            mergeSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with mergeSort");
        		  return mergeSortLocal(inputArray.slice(0),0,code['length']-1);
			},
            mergeSort3Way: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with 3 Way mergeSort");
        		  return mergeSort3WayLocal(inputArray.slice(0));
			},
            mergeSortKWay: function (inputArray,kWay) {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with "+kWay+" Way mergeSort");
              if  ( isOdd(kWay) ) return mergeSortLocal(inputArray.slice(0),0,code['length']-1);
              else  return mergeSort3WayLocal(inputArray.slice(0));
			},
            quickSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with QuickSort");
        		  return quickSortlocal(inputArray.slice(0),0,code['length']-1);
			},
            quickSort3Way: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with 3 way QuickSort");
        		  return quickSort3Waylocal(inputArray.slice(0),0,code['length']-1);
			},
            quickSortKWay: function (inputArray,kWay) {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with "+kWay+" way QuickSort");
            if  ( isOdd(kWay) ) return quickSortlocal(inputArray,0,code['length']-1);
            else  return quickSort3Waylocal(inputArray.slice(0),0,code['length']-1);
			},
            insertionSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with insertionSort");
        		  return insertionSortlocal(inputArray.slice(0));
			},
            radixSort: function (inputArray,base) {
			base = typeof base !== 'undefined' ? base : 10;
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with radixSort on Baase ",base);
        		  return radixSortlocal(inputArray.slice(0),code['length'],base);
			},
            countingSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with countingSort");
        		  return countingSortMain(inputArray.slice(0),code[0]);
			},
            beadSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with beadSort");
        		  return beadSortLocal(inputArray.slice(0),code['length']);   // code[2] inputArray.lenght  code[0] maximum 
			},
            gravitySort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with beadSort or gravitySort");
        		  return beadSortLocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            timSort: function () {
            RUN = typeof RUN !== 'undefined' ? RUN : 32;
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with TimSort");
        		  return timSortlocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            selectionSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with SelectionSort");
        		  return selectionSortlocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            shellSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with Shell Sort");
        		  return shellSortlocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            bubbleSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with Bubble Sort");
        		  return bubbleSortLocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            bubbleSortOptimized: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with Bubble Sort Optimized");
        		  return bubbleSortLocalOptimized(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            cocktailSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with Cocktail Sort");
        		  return cocktailSortLocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            heapSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with HeapSort or Cocktail Sort");
        		  return heapSortLocal(inputArray.slice(0),code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
			      defaultSort:function () {
			        var inputArrayLocal = inputArray.slice(0);
              if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with default Javascript Sorting!");
        		  return inputArrayLocal.sort(sortNumber);
			}
    });
  }
  catch (error) {
        callback(error,null);
  }
}


// exports.bucketSort = function(inputArray) {
//   if(!inputArray) return -1;
//   if(inputArray.length === undefined) return -1;

//   var code = getArrayInfo(inputArray);   // code[0] : max element   Code[1] :bucket Size    Code[2] : Array length
//   if (code[0]<=0) return beadSortLocalfractions(inputArray,10,code[2]);
//   else return beadSortLocal(inputArray,code);
// }

/*
 * General Functions : 
 *      to be used by most of algoritmss
 *        
 *        getArrayInfo    
 *        sortNumber
 *        
 *        
 *        
 *
 * Author: Pooya Hatami
 */

// Function to : 
//   find bigest element
//   creat bucket size
//   find Array lenght  
// *******  original for Bead Sort but used by most of algoritms
getArrayInfo = function(input)
{
  var output = new Array();
  var arrlen = input.length;
  var max = input[0];
  var min = input[0];
  for (var i = 1; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
    }
    if (min > input[i]) {
      min = input[i];
    }
  }
  output[0] = Math.floor(max);
  output[1] = Math.floor(Math.sqrt(input.length));
  output[2] = arrlen;
  output[3] = Math.floor(min);
  output['max'] = Math.floor(max);
  output['bucketsizeoffer'] = Math.floor(Math.sqrt(input.length));
  output['length'] = arrlen;
  output['min'] = Math.floor(min);
  return output;
}

// Function to : 
//   for defualt javascript sorting numbers
sortNumber = function(a,b)
{
    return a - b;
}

// A utility function to swap two elements
// *******  original for Quick Sort but used by Slection Sort as well
swap = function(a, b)
{
  return [b,a];
}


// Helper function
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
};

// The padding function
function addLeftPad(userString,num) {
    return " ".repeat(clamp(num - userString.length, 0, num)) + userString;
}

// Helper function to to determine if a number is odd 
function isOdd(num) { return num % 2;}

/*
 * Tim sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	O(nLogn) 
 * Best-case performance	O(n) 
 * Average performance	O(nLogn)
 * Worst-case space complexity
 *   where n is the size of the input array.
 *   The size of RUN may vary from 32 to 64 depending upon size of array.
 *   Note: We divides the Array into blocks known as Run. 
 *         We sort those runs using insertion sort one 
 *         by one and then merge those runs
 *
 * Author: Pooya Hatami
 */
 
// iterative Timsort function to sort the
// array[0...n-1] (similar to merge sort)
timSortlocal = function(input, n)
{
    // Sort individual subarrays of size RUN
    for (var i = 0; i < n; i+=RUN)
        input = insertionSortTim(input, i, Math.min((i+31), (n-1)));
 
    // start merging from size RUN (or 32). It will merge
    // to form size 64, then 128, 256 and so on ....
    for (var size = RUN; size < n; size = 2*size)
    {
        // pick starting point of left sub array. We
        // are going to merge input[left..left+size-1]
        // and input[left+size, left+2*size-1]
        // After every merge, we increase left by 2*size
        for (var left = 0; left < n; left += 2*size)
        {
            // find ending point of left sub array
            // mid+1 is starting point of right sub array
            var mid = left + size - 1;
            var right = min((left + 2*size - 1), (n-1));
 
            // merge sub array input[left.....mid] &
            // input[mid+1....right]
            input = merge(input, left, mid, right);
        }
    }
    return input;
}


insertionSortTim = function(input, left, right)
{
    for (var i = left + 1; i <= right; i++)
    {
        var temp = input[i];
        var j = i - 1;
        while (input[j] > temp && j >= left)
        {
            input[j+1] = input[j];
            j--;
        }
        input[j+1] = temp;
    }
    
    return input;
}


/*
 * Merge Sort algorithm (2 Way)!
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	O(nLogn) 
 * Best-case performance	O(n log n) typical, O(n) natural variant 
 * Average performance	O(nLogn)
 * Worst-case space complexity  О(n) total, O(n) auxiliary
 *   where n is the size of the input array.
 *   input array elements could be negative/positive and also integer or float .
 *   Note: there are another kind of Merg sort by the name of 3-way Merge Sort . 
 *         Merge sort involves recursively splitting the array into 2 parts, sorting and finally merging them. 
 *         A variant of merge sort is called 3-way merge sort where instead of splitting the array into 2 parts 
 *         we split it into 3 parts.
 *         Merge sort recursively breaks down the arrays to subarrays of size half. Similarly, 
 *         3-way Merge sort breaks down the arrays to subarrays of size one third.
 *
 * Author: Pooya Hatami
 */

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
merge = function(arr,l,m,r)
{
    var i, j, k;
    var n1 = m - l + 1;
    var n2 =  r - m;
 
    /* create temp arrays */
    var L = new Array(n1);
    var R = new Array(n2);
 
    /* Copy data to temp arrays L[] and r[] */
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1+ j];
 
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    /* Copy the remaining elements of L[], if there
       are any */
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    /* Copy the remaining elements of R[], if there
       are any */
    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }

  return arr;
}
 
/* l is for left index and r is right index of the
   sub-array of arr to be sorted */
mergeSortLocal = function(arr,l,r)
{
    if (l < r)
    {
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        var m = Math.floor(l+(r-l)/2);
        if (displaymode == "Yes") console.log("mid of ",l,"and",r,"is",m);
        // Sort first and second halves
        mergeSortLocal(arr, l, m);
        mergeSortLocal(arr, m+1, r);
 
        merge(arr, l, m, r);
    }
    return arr;
}
 
/* UTILITY FUNCTIONS */
/* Function to print an array */
printArray = function(a,size)
{
    var i;
    for (var i=0; i < size; i++)
        console.log(a[i]);
    console.log("\n");
}

/*
 * Merge Sort algorithm (3 Way)!
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	O(nLogn) 
 * Best-case performance	O(n log n) typical, O(n) natural variant 
 * Average performance	O(nLogn)
 * Worst-case space complexity  О(n) total, O(n) auxiliary
 *   where n is the size of the input array.
 *   input array elements could be negative/positive and also integer or float .
 *   Note: there are another kind of Merg sort by the name of 3-way Merge Sort . 
 *         Merge sort involves recursively splitting the array into 2 parts, sorting and finally merging them. 
 *         A variant of merge sort is called 3-way merge sort where instead of splitting the array into 2 parts 
 *         we split it into 3 parts.
 *         Merge sort recursively breaks down the arrays to subarrays of size half. Similarly, 
 *         3-way Merge sort breaks down the arrays to subarrays of size one third.
 *
 * Author: Pooya Hatami
 */

// Function mergeSort3Way  for 3-way merge sort process    
mergeSort3WayLocal = function(gArray)
    {
        // if array of size is zero returns null
        if (gArray == null)
            return;
        // creating duplicate of given array
        fArray = new Array(gArray.length);
 
         if (displaymode == "Yes") console.log("\nlet satrt with empty array ",fArray);
        // copying alements of given array into
        // duplicate array
        for (var i = 0; i < fArray.length; i++)
            fArray[i] = gArray[i];
 
         if (displaymode == "Yes") console.log("\nNow it has been copied with input array ",fArray);

        // sort function
        mergeSort3WayRec(fArray, 0, gArray.length, gArray);

        if (displaymode == "Yes") console.log("\nHere you are sorted Array : ",fArray);
        // copy back elements of duplicate array
        // to given array
        for (var i = 0; i < fArray.length; i++)
            gArray[i] = fArray[i];
            
    return  fArray;       
    }
 
/* Performing the merge sort algorithm on the
   given array of values in the rangeof indices
   [low, high).  low is minimum index, high is
   maximum index (exclusive) */
mergeSort3WayRec = function(gArray, low, high, destArray)
    {
        //if (displaymode == "Yes") console.log("Rec; Sorting; ",(high-low)," = (",high,"-",low,")");

        // If array size is 1 then do nothing
        //console.log(destArray,high,low,gArray);
        if (high - low < 2)
            return gArray;
 
        // Splitting array into 3 parts
        mid1 = Math.floor(low + Math.floor((high - low) / 3));
        mid2 = Math.floor(low + 2 * Math.floor((high - low) / 3) + 1);
        if (displaymode == "Yes") console.log("Recursively sort : low mid1 mid2 high: ",low, mid1,mid2,high);

        // Sorting 3 arrays recursively

        if (displaymode == "Yes") console.log("  part 1; ",low, mid1);
           var lowMemory = low , mid1Memory = mid1 , mid2Memory = mid2 , highMemory = high ; 
        mergeSort3WayRec(destArray, low, mid1, gArray);
           low = lowMemory , mid1 =  mid1Memory ,  mid2 =  mid2Memory ,  high = highMemory ;

        if (displaymode == "Yes") console.log("    part 2;",mid1, mid2);
          var lowMemory = low , mid1Memory = mid1 , mid2Memory = mid2 , highMemory = high ; 
        mergeSort3WayRec(destArray, mid1, mid2, gArray);
          low = lowMemory , mid1 =  mid1Memory ,  mid2 =  mid2Memory ,  high = highMemory ;

        if (displaymode == "Yes") console.log("      part 3;",mid2, high);
          var lowMemory = low , mid1Memory = mid1 , mid2Memory = mid2 , highMemory = high ; 
        mergeSort3WayRec(destArray, mid2, high, gArray);
          low = lowMemory , mid1 =  mid1Memory ,  mid2 =  mid2Memory ,  high = highMemory ;
 
        // Merging the sorted arrays
        merge3(destArray, low, mid1, mid2, high, gArray);

      return destArray;
    }
 
/* Merge the sorted ranges [low, mid1), [mid1,
   mid2) and [mid2, high) mid1 is first midpoint
   index in overall range to merge mid2 is second
   midpoint index in overall range to merge*/
merge3 = function(gArray, low, mid1, mid2, high, destArray)
    {
        var i_low = low , l_low = low , j_mid1 = mid1 , k_mid2 = mid2 ; 
        if (displaymode == "Yes") console.log("         merege: low mid1 mid2 high: ",low, mid1,mid2,high);
        // choose smaller of the smallest in the three ranges
        while ((i_low < mid1) && (j_mid1 < mid2) && (k_mid2 < high))
        {
//            if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
            if (gArray[i_low] <  gArray[j_mid1])
            {
//                if (gArray[i].compareTo(gArray[k_mid2]) < 0)
                if (gArray[i_low] <  gArray[k_mid2])
                    destArray[l_low++] = gArray[i_low++];
 
                else
                    destArray[l_low++] = gArray[k_mid2++];
            }
            else
            {
//                if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
                if (gArray[j_mid1] <  gArray[k_mid2])
                    destArray[l_low++] = gArray[j_mid1++];
                else
                    destArray[l_low++] = gArray[k_mid2++];
            }
        }
 
        // case where first and second ranges have
        // remaining values
        while ((i_low < mid1) && (j_mid1 < mid2))
        {
  //          if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
            if (gArray[i_low] <  gArray[j_mid1])
                destArray[l_low++] = gArray[i_low++];
            else
                destArray[l_low++] = gArray[j_mid1++];
        }
 
        // case where second and third ranges have
        // remaining values
        while ((j_mid1 < mid2) && (k_mid2 < high))
        {
//            if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
            if (gArray[j_mid1] <  gArray[k_mid2])
                destArray[l_low++] = gArray[j_mid1++];
 
            else
                destArray[l_low++] = gArray[k_mid2++];
        }
 
        // case where first and third ranges have
        // remaining values
        while ((i_low < mid1) && (k_mid2 < high))
        {
//            if (gArray[i_low].compareTo(gArray[k_mid2]) < 0)
            if (gArray[i_low] <  gArray[k_mid2])
                destArray[l_low++] = gArray[i_low++];
            else
                destArray[l_low++] = gArray[k_mid2++];
        }
 
        // copy remaining values from the first range
        while (i_low < mid1)
            destArray[l_low++] = gArray[i_low++];
 
        // copy remaining values from the second range
        while (j_mid1 < mid2)
            destArray[l_low++] = gArray[j_mid1++];
 
        // copy remaining values from the third range
        while (k_mid2 < high)
            destArray[l_low++] = gArray[k_mid2++];
    
      
    return destArray;  
    }


/*
 * Merge Sort algorithm (3 Way)!
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	O(nLogn) 
 * Best-case performance	O(n log n) typical, O(n) natural variant 
 * Average performance	O(nLogn)
 * Worst-case space complexity  О(n) total, O(n) auxiliary
 *   where n is the size of the input array.
 *   input array elements could be negative/positive and also integer or float .
 *   Note: there are another kind of Merg sort by the name of 3-way Merge Sort . 
 *         Merge sort involves recursively splitting the array into 2 parts, sorting and finally merging them. 
 *         A variant of merge sort is called 3-way merge sort where instead of splitting the array into 2 parts 
 *         we split it into 3 parts.
 *         Merge sort recursively breaks down the arrays to subarrays of size half. Similarly, 
 *         3-way Merge sort breaks down the arrays to subarrays of size one third.
 *
 * Author: Pooya Hatami
 */

// Function mergeSortKWay  for K-way merge sort process    
mergeSortKWayLocal = function(gArray,kWay)
    {
        // kWay atleast should be biger than 2 
        kWay =  ( typeof kWay !== 'undefined' && kWay >= 2 ) ? kWay :  2 ;
        // if array of size is zero returns null
        if (gArray == null)
            return;
        // creating duplicate of given array
        fArray = new Array(gArray.length);
 
         if (displaymode == "Yes") console.log("\nlet satrt with empty array ",fArray);
        // copying alements of given array into
        // duplicate array
        for (var i = 0; i < fArray.length; i++)
            fArray[i] = gArray[i];
 
         if (displaymode == "Yes") console.log("\nNow it has been copied with input array ",fArray);

        // sort function
        mergeSortKWayRec(fArray, 0, gArray.length, kWay, gArray);

        if (displaymode == "Yes") console.log("\nHere you are sorted Array : ",fArray);
        // copy back elements of duplicate array
        // to given array
        for (var i = 0; i < fArray.length; i++)
            gArray[i] = fArray[i];
            
    return  fArray;       
    }
 
/* Performing the merge sort algorithm on the
   given array of values in the rangeof indices
   [low, high).  low is minimum index, high is
   maximum index (exclusive) */
mergeSortKWayRec = function(gArray, low, high, kWay , destArray)
    {
        //if (displaymode == "Yes") console.log("Rec; Sorting; ",(high-low)," = (",high,"-",low,")");

        // If array size is 1 then do nothing
        //console.log(high,low,kWay-1);
        if ( (high - low) < (kWay-1) )
            return gArray;
 
        midArr = new Array(kWay);
        midArr[0]=low;
        // Splitting array into 3 parts
        for(var k_index=1 ; k_index< kWay ; k_index++){
          midArr[k_index] = Math.floor(low + k_index * Math.floor((high - low) / kWay) + (k_index-1));
        }
        midArr[kWay]=high;

        // mid1 = Math.floor(low + Math.floor((high - low) / 3));
        // mid2 = Math.floor(low + 2 * Math.floor((high - low) / 3) + 1);
        if (displaymode == "Yes") console.log("Recursively sort : low midArr high: ",low, midArr ,high);

        // Sorting kWay arrays recursively
        var padBef = "    " ;
        for(var k_loop=0 ; k_loop< kWay ; k_loop++){
                  padBef = addLeftPad(padBef,kWay);
                  if (displaymode == "Yes") console.log(padBef+"  part "+k_loop+"; ",midArr[k_loop], midArr[k_loop+1]);
           var midArrMemory = midArr.slice(0);
          // i0=midArr[0] ;   
          // i1=midArr[1] ;   
          // i2=midArr[2] ;   
          // i3=midArr[3] ;   
           mergeSortKWayRec(destArray, midArr[k_loop], midArr[k_loop+1], kWay , gArray);
           midArr = midArrMemory.slice(0); 

//                  if (displaymode == "Yes") console.log(padBef+"  part "+k+"; ",midArr,midArrMemory,kWay);
          // midArr[0] =i0 ;   
          // midArr[1] =i1 ;   
          // midArr[2] =i2 ;   
          // midArr[3] =i3 ;   
        }
        // if (displaymode == "Yes") console.log("  part 1; ",low, mid1);
        //   var lowMemory = low , mid1Memory = mid1 , mid2Memory = mid2 , highMemory = high ; 
        // mergeSort3WayRec(destArray, low, mid1, gArray);
        //   low = lowMemory , mid1 =  mid1Memory ,  mid2 =  mid2Memory ,  high = highMemory ;

        // if (displaymode == "Yes") console.log("    part 2;",mid1, mid2);
        //   var lowMemory = low , mid1Memory = mid1 , mid2Memory = mid2 , highMemory = high ; 
        // mergeSort3WayRec(destArray, mid1, mid2, gArray);
        //   low = lowMemory , mid1 =  mid1Memory ,  mid2 =  mid2Memory ,  high = highMemory ;

        // if (displaymode == "Yes") console.log("      part 3;",mid2, high);
        //   var lowMemory = low , mid1Memory = mid1 , mid2Memory = mid2 , highMemory = high ; 
        // mergeSort3WayRec(destArray, mid2, high, gArray);
        //   low = lowMemory , mid1 =  mid1Memory ,  mid2 =  mid2Memory ,  high = highMemory ;
 
        // Merging the sorted arrays
       var midArrMemory = midArr.slice(0);
        mergeKWay(destArray, midArr , kWay , gArray);
       midArr = midArrMemory.slice(0); 

      return destArray;
    }
 
/* Merge the sorted ranges [low, mid1), [mid1,
   mid2) and [mid2, high) mid1 is first midpoint
   index in overall range to merge mid2 is second
   midpoint index in overall range to merge*/
mergeKWay = function(gArray, midArr , kWay, destArray)
    {
        var i_midArr = midArr.slice(0);; 
        var des_midArr = midArr.slice(0);; 
        var des_low = midArr[0];
//        var i_low = low , des_low = low , j_mid1 = mid1 , k_mid2 = mid2 ; 
        if (displaymode == "Yes") console.log("         merege: midArr : ",midArr);
        // choose smaller of the smallest in the kWay ranges

//         var whileCondition = true;
//         while (whileCondition)
// //        while ((i_low < mid1) && (j_mid1 < mid2) && (k_mid2 < high))
//         {

//             var smallest_i = 0 ; 
//             for (i=0 ; i<kWay-1 ; i++) {
//               if (gArray[i_midArr[smallest_i]] <  gArray[i_midArr[i+1]]) smallest_i = i;
//               else smallest_i= i+1;
//             }
//             destArray[des_low++] = gArray[i_midArr[smallest_i]];
//             i_midArr[smallest_i]++;

// // //            if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
// //             if (gArray[i_low] <  gArray[j_mid1])
// //             {
// // //                if (gArray[i].compareTo(gArray[k_mid2]) < 0)
// //                 if (gArray[i_low] <  gArray[k_mid2])
// //                     destArray[des_low++] = gArray[i_low++];
 
// //                 else
// //                     destArray[des_low++] = gArray[k_mid2++];
// //             }
// //             else
// //             {
// // //                if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
// //                 if (gArray[j_mid1] <  gArray[k_mid2])
// //                     destArray[des_low++] = gArray[j_mid1++];
// //                 else
// //                     destArray[des_low++] = gArray[k_mid2++];
// //             }

//           for (i=0; i<kWay;i++){
//             if (i_midArr[i]>=midArr[i+1]) whileCondition = false
//           }

//         }



        var i_midArr_full = new Array(kWay).fill(0);

        var smallest_i = 0;
        for ( var k_rep=0 ; k_rep< kWay ; k_rep++) {
        if (displaymode == "Yes") console.log("         merege: i_midArr_full : ",i_midArr_full);
        var whileCondition = true;
        while (whileCondition)
//        while ((i_low < mid1) && (j_mid1 < mid2) && (k_mid2 < high))
        {
            var steps = 1;
            var smallest_i = 0;
            for (var i=0 ; i<kWay-1 ; i++) {
              //console.log(smallest_i, i , steps);
              smallest_i = smallest_i + i_midArr_full[i];
              if (i_midArr[i]<midArr[i+1]) {
                if (gArray[i_midArr[smallest_i]] <  gArray[i_midArr[i+steps+i_midArr_full[i]]]) smallest_i = i;
                else smallest_i= i+steps+i_midArr_full[i];                
              } else {
//                smallest_i = ( smallest_i == i ) ? i+steps+i_midArr_full[i] :  smallest_i ;
                smallest_i = smallest_i +i_midArr_full[i] ;
              }
              //steps++;
            }
            destArray[des_low++] = gArray[i_midArr[smallest_i]++];
            i_midArr[smallest_i]++;

// //            if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
//             if (gArray[i_low] <  gArray[j_mid1])
//             {
// //                if (gArray[i].compareTo(gArray[k_mid2]) < 0)
//                 if (gArray[i_low] <  gArray[k_mid2])
//                     destArray[des_low++] = gArray[i_low++];
 
//                 else
//                     destArray[des_low++] = gArray[k_mid2++];
//             }
//             else
//             {
// //                if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
//                 if (gArray[j_mid1] <  gArray[k_mid2])
//                     destArray[des_low++] = gArray[j_mid1++];
//                 else
//                     destArray[des_low++] = gArray[k_mid2++];
//             }

          for (var i=0; i<=kWay;i++){
            if (i_midArr[i]>=midArr[i+1] ) {
                whileCondition = false
                i_midArr_full[i] = 1;
              }
          }
          
        } //while (whileCondition)
          
        } //for ( k_rep



//         var i_midArr_full = new Array(kWay).fill(false);

//         var smallest_i = 0;
//         for ( var k_rep=0 ; k_rep< kWay ; k_rep++) {
//         if (displaymode == "Yes") console.log("         merege: i_midArr_full : ",i_midArr_full);
//         var whileCondition = true;
//         while (whileCondition)
// //        while ((i_low < mid1) && (j_mid1 < mid2) && (k_mid2 < high))
//         {
//             var steps = 1;
//             for (var i=0 ; i<kWay-1 ; i++) {
//               //console.log(smallest_i, i , steps);
//               if (i_midArr[i]<midArr[i+1]) {
//                 if (gArray[i_midArr[smallest_i]] <  gArray[i_midArr[i+steps]]) smallest_i = i;
//                 else smallest_i= i+steps;                
//               } else {
//                 smallest_i = ( smallest_i == i ) ? i+steps :  smallest_i ;
//               }
//               //steps++;
//             }
//             destArray[des_low++] = gArray[i_midArr[smallest_i]++];
//             i_midArr[smallest_i]++;

// // //            if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
// //             if (gArray[i_low] <  gArray[j_mid1])
// //             {
// // //                if (gArray[i].compareTo(gArray[k_mid2]) < 0)
// //                 if (gArray[i_low] <  gArray[k_mid2])
// //                     destArray[des_low++] = gArray[i_low++];
 
// //                 else
// //                     destArray[des_low++] = gArray[k_mid2++];
// //             }
// //             else
// //             {
// // //                if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
// //                 if (gArray[j_mid1] <  gArray[k_mid2])
// //                     destArray[des_low++] = gArray[j_mid1++];
// //                 else
// //                     destArray[des_low++] = gArray[k_mid2++];
// //             }

//           for (var i=0; i<=kWay;i++){
//             if (i_midArr[i]>=midArr[i+1] ) {
//                 whileCondition = false
//               }
//           }
//         } //while (whileCondition)
          
//         } //for ( k_rep




// 3   3   2+1          1-2-3  1-2   1-3   2-3
// 4   6   3+2+1        1-2-3  2-3-4  1-2   1-3   1-4   2-3   2-4   3-4 
// 5   10  4+3+2+1      1-2-3-4  2-3-4-5  1-2-3  2-3-4  3-4-5  1-2   1-3   1-4   1-5   2-3   2-4   2-5   3-4   3-5   4-5  
// 6   15  5+4+3+2+1    1-2   1-3   1-4   1-5   1-6   2-3   2-4   2-5   2-6   3-4   3-5   3-6   4-5    4-6    5-6
// 7   21  6+5+4+3+2+1  1-2   1-3   1-4   1-5   1-6   1-7   2-3   2-4   2-5   2-6   2-7   3-4   3-5    3-6    3-7    4-5   4-6    4-7    5-6    5-7     6-7



// 3   3   2+1          3 * [1]-2-3    1-2-[3]    1-[2]-3 
// 4   6   3+2+1        4 * [1]-2-3-4  1-2-3-[4]  1-2-[3]-4  1-[2]-3-4
// 5   10  4+3+2+1      5 * 1-2-3-4-5  1-2-3-4-5  1-2-3-4-5  1-2-3-4-5
// 6   15  5+4+3+2+1    6 * 1-2-3-4-5-6  1-2-3-4-5-6  1-2-3-4-5-6  1-2-3-4-5-6  1-2-3-4-5-6
// 7   21  6+5+4+3+2+1  7 * 1-2-3-4-5-6-7 



//             for (i_sublooplog = kWay ; i_loopsublog > 0 ; i_loopsublog--) 
//             {
//                 for (i_subsublooplog = 0 ; i_subsublooplog < kWay-i_sublooplog ; i_subsublooplog++) 
//                 {
//                     var whileCondition = true;
//                     while (whileCondition)
//               //        while ((i_low < mid1) && (j_mid1 < mid2) && (k_mid2 < high))
//                     {
              
//                         var smallest_i = i_subsublooplog ; 
//                         for (i=i_subsublooplog ; i<i_sublooplog-1 ; i++) {
//                           if (gArray[i_midArr[smallest_i]] <  gArray[i_midArr[i+1]]) smallest_i = i;
//                           else smallest_i= i+1;
//                         }
//                         destArray[des_low++] = gArray[i_midArr[smallest_i]];
//                         i_midArr[smallest_i]++;
              
//               // //            if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
//               //             if (gArray[i_low] <  gArray[j_mid1])
//               //             {
//               // //                if (gArray[i].compareTo(gArray[k_mid2]) < 0)
//               //                 if (gArray[i_low] <  gArray[k_mid2])
//               //                     destArray[des_low++] = gArray[i_low++];
              
//               //                 else
//               //                     destArray[des_low++] = gArray[k_mid2++];
//               //             }
//               //             else
//               //             {
//               // //                if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
//               //                 if (gArray[j_mid1] <  gArray[k_mid2])
//               //                     destArray[des_low++] = gArray[j_mid1++];
//               //                 else
//               //                     destArray[des_low++] = gArray[k_mid2++];
//               //             }
              
//                       for (i=i_subsublooplog ; i<i_sublooplog;i++){
//                         if (i_midArr[i]>=midArr[i+1]) whileCondition = false
//                       }
        
//                     } //while (whileCondition)
//                 } //for (i_subsublooplog
//             } //for (i_sublooplog

 
//         // case where first and second ranges have
//         // remaining values
//         while ((i_low < mid1) && (j_mid1 < mid2))
//         {
//   //          if (gArray[i_low].compareTo(gArray[j_mid1]) < 0)
//             if (gArray[i_low] <  gArray[j_mid1])
//                 destArray[des_low++] = gArray[i_low++];
//             else
//                 destArray[des_low++] = gArray[j_mid1++];
//         }
 
//         // case where second and third ranges have
//         // remaining values
//         while ((j_mid1 < mid2) && (k_mid2 < high))
//         {
// //            if (gArray[j_mid1].compareTo(gArray[k_mid2]) < 0)
//             if (gArray[j_mid1] <  gArray[k_mid2])
//                 destArray[des_low++] = gArray[j_mid1++];
 
//             else
//                 destArray[des_low++] = gArray[k_mid2++];
//         }
 
//         // case where first and third ranges have
//         // remaining values
//         while ((i_low < mid1) && (k_mid2 < high))
//         {
// //            if (gArray[i_low].compareTo(gArray[k_mid2]) < 0)
//             if (gArray[i_low] <  gArray[k_mid2])
//                 destArray[des_low++] = gArray[i_low++];
//             else
//                 destArray[des_low++] = gArray[k_mid2++];
//         }
 
//         // copy remaining values from the first range
//         while (i_low < mid1)
//             destArray[des_low++] = gArray[i_low++];
 
//         // copy remaining values from the second range
//         while (j_mid1 < mid2)
//             destArray[des_low++] = gArray[j_mid1++];
 
//         // copy remaining values from the third range
//         while (k_mid2 < high)
//             destArray[des_low++] = gArray[k_mid2++];
    
      
    return destArray;  
    }

/*
 * Bead Sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	O(nLogn) 
 * Best-case performance	O(n) 
 * Average performance	O(nLogn)
 * Worst-case space complexity
 *   where n is the size of the input array.
 *   The size of run may vary from 32 to 64 depending upon size of array.
 *   Note: We divides the Array into blocks known as Run. 
 *         We sort those runs using insertion sort one 
 *         by one and then merge those runs
 *
 * Author: Pooya Hatami
 */


// Function to sort input[] of size n using bucket sort
// for positive float numbers  
beadSortLocalBucket = function(input,code)
{
    // 1) Create n empty buckets
    //vector<float> b[n];
    var maxelement = code[0];
    var ibucket = code[1];
    var arrlen  = code[2];
    if (displaymode == "Yes") console.log("beadSortLocalBucket",input,ibucket,arrlen,code);
    var b = new Array(ibucket);
    for (var i=0; i<ibucket; i++)
         b[i]= new Array();
    if (displaymode == "Yes") console.log("empty buckets ",b);
    // 2) Put array elements in different buckets
    for (var i=0; i<arrlen; i++)
    {
       var bi = indexmaker(input[i],code); // Index in bucket
       if (displaymode == "Yes") console.log(input[i]," in bucket "+bi);
       b[bi].push(input[i]);
    }
    
    if (displaymode == "Yes") console.log("full buckets befor sort :\n",b);
    // 3) Sort individual buckets
    for (var i=0; i<ibucket; i++) {
         if (displaymode == "Yes") console.log("bucket "+ i +" befor sort : "+b[i]);
         //b[i].sort(sortNumber);
         b[i] = insertionSortlocal(b[i]);   // sorting each bucket with insertionSort 
         if (displaymode == "Yes") console.log("after sort : "+b[i]);
    }
    if (displaymode == "Yes") console.log("\nfull buckets after sort :\n", b);

    // 4) Concatenate all buckets into input[]
    var index = 0;
    for (var i = 0; i < ibucket; i++)
        for (var j = 0; j < b[i].length; j++)
          input[index++] = b[i][j];

  return input;
  
}

// Function to make bucket index 
indexmaker = function(oneinputcell,code)
{
  var output = Math.floor(oneinputcell / code[0] * (code[1] - 1))
  return output;
}


// Function to sort input[] of size n using bucket sort 
// for float numbers between 0 to 1
beadSortLocalfractions = function(input,ibucket,arrlen)
{
   if (displaymode == "Yes") console.log("fractions",input,ibucket,arrlen);
    // 1) Create n empty buckets
    //vector<float> b[n];
    var b = new Array(ibucket);
    for (var i=0; i<ibucket; i++)
         b[i]= new Array();
    if (displaymode == "Yes") console.log("empty fractions buckets ",b);
    // 2) Put array elements in different buckets
    for (var i=0; i<arrlen; i++)
    {
       var bi = Math.floor(ibucket*input[i]); // Index in bucket
       if (displaymode == "Yes") console.log(input[i]," in bucket "+bi);
       b[bi].push(input[i]);
    }
    
    if (displaymode == "Yes") console.log("full buckets befor sort :\n", b);
    // 3) Sort individual buckets
    for (var i=0; i<ibucket; i++) {
         if (displaymode == "Yes") console.log("bucket "+ i +" befor sort : "+b[i]);
         b[i].sort();
         if (displaymode == "Yes") console.log("bucket "+ i +" after sort : "+b[i]);
    }
    if (displaymode == "Yes") console.log("\nfull buckets after sort :\n", b);
 
 
    // 4) Concatenate all buckets into input[]
    var index = 0;
    for (var i = 0; i < ibucket; i++)
        for (var j = 0; j < b[i].length; j++)
          input[index++] = b[i][j];

  return input;
  
}


 /*
 * Insertion sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	О(n2) comparisons, swaps
 * Best-case performance	O(n) comparisons, O(1) swaps
 * Average performance	О(n2) comparisons, swaps
 * Worst-case space complexity
 *   where n is the size of the input array.
 *   Note: Insertion sort is very similar to selection sort.
 *
 * Author: Pooya Hatami
 */

// Function to sort input[] of size n using bucket sort 
// for numbers positive or negative
insertionSortlocal = function(input) {

        var n = input.length;
        for (var i=1; i<n; ++i)
        {
            var key = input[i];
            var j = i-1;
			
			if (displaymode=="Yes") console.log("inserting ",input[i],"with index ",i);
            // Move elements of input[0..i-1], that are
            //   greater than key, to one position ahead
            //   of their current position 
            while (j>=0 && input[j] > key)
            {
                input[j+1] = input[j];
                j = j-1;
            }
			if (displaymode=="Yes") console.log("to new index ",j+1);
            input[j+1] = key;
        }

      return input;
   };
   

 /*
 * Counting sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	O(n+k)
 * Best-case performance	O(n+k)
 * Average performance	O(n+k)
 * Worst-case space complexity 
 *   where n is the number of elements in input array and k is the range of input.
 *   size of the input array.
 *   Note: if k is greater than log(n) then an n*log(n) algorithm would be a
 *         better fit. In reality we can always change the radix to make k
 *         less than log(n).
 *
 * Author: Pooya Hatami
 */


// A function to do counting sort of input[] according to
countingSortMain = function(input,maxrange) {

        var n = input.length;
        ++maxrange;
        
        // The output character array that will have sorted input
        var output = new ArrayBuffer();
//      var output = [];

        // Create a count array to store count of inidividul
        // characters and initialize count array as 0
        var count = new ArrayBuffer(maxrange);
//      var count =  [maxrange];
  
        for (var i=0; i<maxrange; ++i)
            count[i] = 0;
        // store count of each character
        for (var i=0; i<n; ++i)
            ++count[input[i]];
        
        // Change count[i] so that count[i] now contains actual
        // position of this character in output array
        for (var i=1; i<=maxrange; ++i)
            count[i] += count[i-1];

        // Build the output character array
        for (var i = 0; i<n; ++i)
        {
            output[count[input[i]]-1] = input[i];
            --count[input[i]];
        }
 
        // Copy the output array to input, so that input now
        // contains sorted characters
        for (var i = 0; i<n; ++i)
            input[i] = output[i];

      return input;
   }; 
 
  
 /*
 * Radix sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n*k) comparisons, swaps
 * Best-case performance	O(n*k) comparisons, O(1) swaps
 * Average performance	О(n*k) comparisons, swaps
 * Worst-case space complexity
 *   where k is the length of the longest number and n is the
 *   size of the input array.
 *   Note: if k is greater than log(n) then an n*log(n) algorithm would be a
 *         better fit. In reality we can always change the radix to make k
 *         less than log(n).
 *
 * Author: Pooya Hatami
 */
 

// A utility function to calculate index value from digitPlace and base
getIndexDigit = function(value, digitPlace, base){
		return (Math.floor((value/digitPlace ) % base));
	}


// The main function to that sorts inputArr[] of size arrLen using
// Radix Sort
radixSortlocal = function(inputArr,arrLen,base)
{
	// Find the maximum number to know number of digits
	var m = code[0];
	//var base = 10;  // 10 for decimal , 16 for HEX and 2 for binary 
    if (displaymode=="Yes") console.log("===array ",inputArr," length ",arrLen," max ",m," base ",base);
	// Do counting sort for every digit. Note that instead
	// of passing digit number, place is passed. place is base^i
	// where i is current digit number
	for(var place=1; place <= m; place *= 10){
		// Use counting sort at each digit's place
		inputArr = countingSortlocal(inputArr, arrLen , place , base);
		//console.log(inputArr);   
	}

  return inputArr;
}
   
// A function to do counting sort of input[] according to
// the digit represented by exp.
countingSortlocal = function(input,arrLen,exp,base) {

  if (displaymode=="Yes") console.log("array ",input," length ",arrLen," Place ",exp," base ",base);
  var output = [arrLen];
  var count = [base], i;
   // set all elemt to zero memset(count, 0, base*sizeof(unsigned));
   for (var i = 0; i < 10; i++)
		count[i] = 0 ;
		

  // count occurrence of each element 
  for (var i = 0; i < arrLen; i++) {
	  var index_i = getIndexDigit(input[i], exp, base); // Math.floor
	  count[index_i]++;

  }

  if (displaymode=="Yes") console.log("count ",count);
  // rearrange count[] so that it contains actual position of
  // each element in output[] 
  for (var i = 1; i < base; i++)
	  count[i] += count[i-1];
  
  // NOTE: filling the output array in a reversed way 
  for (var i = arrLen-1; i >= 0 ; i--){
		  var index_i = getIndexDigit(input[i], exp, base); //Math.floor
		  output[--count[index_i]] = input[i];
  	      if (displaymode=="Yes") console.log("input[i] ",input[i]," index_i ",index_i," i ",i);

	  }

  // copy output[] into input[] 
  for (var i = 0; i < arrLen; i++) {
		 input[i] = output[i];
	  }
	  
return input; 

}  

/*
 * Bead sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(s) comparisons, S is the sum of the input integers
 * Best-case performance	O(1) comparisons, O(1) swaps
 * Average performance	О(n) comparisons, swaps
 * Worst-case space complexity
 *   where n is the size of the input array.
 *   ans S S is the sum of the input integers.
 *   Note: The algorithm’s run–time complexity ranges from O(1) to O(S) (S is
 *         the sum of the input integers) depending on the user’s perspective.
 *        Finally, three possible implementations are suggested.
 *
 * Author: Pooya Hatami
 */
 
// A function to do counting sort of input[] according to
// the digit represented by exp.
beadSortLocal = function(input,arrLen) 
{
  if (displaymode=="Yes") console.log("inputArray ",input," length ",arrLen," Maximum ",code['max']," minimum ",code['min']);

  var arrMax = code[0];  //getMax(input,arrLen);
 
  //console.log(input,arrLen,arrMax);
	//Set up abacus
  var grid = new Array(arrLen); 
	  for (var i = 0; i < arrLen; i++) {
		  grid[i] = new Array(arrMax);
		}

  var levelcount = new Array(arrMax);
			for(var i=0;i<arrMax;i++)
			{
				levelcount[i]=0;
				for(var j=0;j<arrLen;j++){
			//console.log(j,i);
					grid[j][i]='_';
				  
				}
			}
			
  if (displaymode=="Yes") display1D(input,'inputArray');
  if (displaymode=="Yes") display1D(levelcount,'counting array');
  if (displaymode=="Yes") display2D(grid);
  //Drop the beads
		for(var i=0;i<arrLen;i++)
		{
			var num=input[i];
			for(var j=0;num>0;j++)
			{
				grid[levelcount[j]++][j]='*';
				num--;
			}
		}
  if (displaymode=="Yes") console.log("");
  if (displaymode=="Yes") display2D(grid);
		//Count the beads
		var sorted=new Array(arrLen);
		for(var i=0;i<input.length;i++)
		{
			var putt=0;
			for(var j=0;j<arrMax&&grid[arrLen-1-i][j]=='*';j++)
				putt++;
			sorted[i]=putt;
		}

	return sorted;      
  
}      
  

// A utility function to display one dimention input[]
display1D  = function(input,description)
	{
	  var onelinestr = "";
		for(var i=0;i<input.length;i++)
			onelinestr += input[i]+" ";
		console.log(description,onelinestr);
	}
// A utility function to display one dimention input[]
display1Dln  = function(input)
	{
	  var onelinestr = "";
		for(var i=0;i<input.length;i++)
			onelinestr += input[i]+" ";
		console.log(onelinestr);
	  console.log(" ");
	}
// A utility function to display Two dimention input[]
display2D  = function(input)
	{
	  var onelinestr = "";
		for(var i=0;i<input.length;i++){
			display1D(input[i],i);
		}
	  console.log(" ");
	}



/*
 * Quick Sort algorithm (2 way)!
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n^2) 
 * Best-case performance	O(nlogn) (simple partition) or O(n) (three-way partition and equal keys)
 * Average performance	O(nlogn)
 * Worst-case space complexity O(n) auxiliary (naive) O(log n) auxiliary (Sedgewick 1978)
 *   where n is the size of the input array.
 *   and we choos an element as pivot.(could be Random, first, last etc.)
 *   Note: The key process in quickSort is partition(). Target of partitions is, 
 *   given an array and an element x of array as pivot, put x at 
 *   its correct position in sorted array and put all smaller 
 *   elements (smaller than x) before x, and put all greater 
 *   elements (greater than x) after x. All this should be 
 *   done in linear time.
 *
 * Author: Pooya Hatami
 */

 
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
partition  = function(arr, low, high)
{
    pivot = arr[high];    // pivot
    if (displaymode == "Yes") console.log("pivot : ",pivot , low , high );
    i = (low - 1);  // Index of smaller element
 
    for (var j = low; j <= high- 1; j++)
    {
        // If current element is smaller than or
        // equal to pivot
        if (displaymode == "Yes") console.log("check ", j, arr[j],"with",pivot);
        if (arr[j] <= pivot)
        {
           i++;    // increment index of smaller element
           if (displaymode == "Yes") console.log("bef: ", i, arr[i], j ,arr[j]);
//            swap(&arr[i], &arr[j]);
           [ arr[i] , arr[j] ]  = swap(arr[i], arr[j]);
           if (displaymode == "Yes") console.log("aft:", i, arr[i], j ,arr[j]);
        }
    }
//          swap(&arr[i + 1], &arr[high]);
           [arr[i+1],arr[high]] = swap(arr[i+1], arr[high]);
    return (i + 1);
}
 
/* The main function that implements QuickSort
 arr[] --> Array to be sorted,
  low  --> Starting index,
  high  --> Ending index */
quickSortlocal = function(arr, low, high)
{
    if (displaymode == "Yes") console.log("rec ",arr, low, high);
    if (low < high)
    {
        /* pi is partitioning index, arr[p] is now
           at right place */
        pi = partition(arr, low, high);
 
        // Separately sort elements before
        // partition and after partition
        arr = quickSortlocal(arr, low, pi - 1);
        arr = quickSortlocal(arr, pi + 1, high);
    }
    
    return arr;
}
 
/* Function to print an array */
printArray = function(arr, size)
{
    var i;
    for (var i=0; i < size; i++)
        printf("%d ", arr[i]);
        console.log(" ",arr[i])
   // printf("n");
}


/*
 * Quick Sort algorithm (3 way)!
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n^2) 
 * Best-case performance	O(nlogn) (simple partition) or O(n) (three-way partition and equal keys)
 * Average performance	O(nlogn)
 * Worst-case space complexity O(n) auxiliary (naive) O(log n) auxiliary (Sedgewick 1978)
 *   where n is the size of the input array.
 *   and we choos an element as pivot.(could be Random, first, last etc.)
 *   Note: The key process in quickSort is partition(). Target of partitions is, 
 *   given an array and an element x of array as pivot, put x at 
 *   its correct position in sorted array and put all smaller 
 *   elements (smaller than x) before x, and put all greater 
 *   elements (greater than x) after x. All this should be 
 *   done in linear time.
 *
 * Author: Pooya Hatami
 */

/* This function partitions a[] in three parts
   a) a[low..mid2] contains all elements smaller than pivot
   b) a[mid2+1..mid1-1] contains all occurrences of pivot
   c) a[mid1..high] contains all elements greater than pivot */
partition3Way = function(input, low, high, mid2, mid1)
{
    mid2 = low-1, mid1 = high;
    var p = low-1, q = high;
    var pivot = input[high];
    if (displaymode == "Yes") console.log("pivot : ",pivot , low , high , "mid1" ,mid1 , "mid2" , mid2 );
 
    while (true)
    {
        // From left, find the first element greater than
        // or equal to v. This loop will definitely terminate
        // as v is last element
        while (input[++mid2] < pivot);
 
        // From right, find the first element smaller than or
        // equal to pivot
        while (pivot < input[--mid1])
            if (mid1 == low)
                break;
 
        // If mid2 and mid1 cross, then we are done
        if (mid2 >= mid1) break;
 
        // Swap, so that smaller goes on left greater goes on right
        [input[mid2], input[mid1]] = swap(input[mid2], input[mid1]);
 
        // Move all same left occurrence of pivot to beginning of
        // array and keep count using p
        if (input[mid2] == pivot)
        {
            p++;
            [input[p], input[mid2]] = swap(input[p], input[mid2]);
        }
 
        // Move all same right occurrence of pivot to end of array
        // and keep count using q
        if (input[mid1] == pivot)
        {
            q--;
            [input[mid1], input[q]] = swap(input[mid1], input[q]);
        }
    }
 
    // Move pivot element to its correct index
    [input[mid2], input[high]] = swap(input[mid2], input[high]);
 
    // Move all left same occurrences from beginning
    // to adjacent to arr[i]
    mid1 = mid2-1;
    for (var k = low; k < p; k++, mid1--)
        [input[k], input[mid1]] = swap(input[k], input[mid1]);
 
    // Move all right same occurrences from end
    // to adjacent to arr[i]
    mid2 = mid2+1;
    for (var k = high-1; k > q; k--, i++)
        [input[mid2], input[k]] = swap(input[mid2], input[k]);
        
        
    return [mid2, mid1];
}
 
// 3-way partition based quick sort
quickSort3Waylocal = function(input, low, high)
{
    if (high <= low) return input;
 
    var  mid2, mid1;
    if (displaymode == "Yes") console.log("rec ",input, low, high);
    // Note that mid2 and mid1 are passed as reference
    [mid2, mid1] = partition3Way(input, low, high, mid2, mid1);
 
   if (displaymode == "Yes") console.log("rec:",input, low , high , "mid1" ,mid1 , "mid2" , mid2 );
    // Recur
    input = quickSort3Waylocal(input, low, mid1);
    input = quickSort3Waylocal(input, mid2, high);
    
    return input;
}


/*
 * SelectionSort Sort !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n^2) 
 * Best-case performance	О(n^2)
 * Average performance	О(n^2)
 * Worst-case space complexity О(n) total, O(1) auxiliary
 *   where n is the size of the input array.
 *   Note: Selection sort can also be used on list structures that make add and remove
 *         efficient, such as a linked list. In this case it is more common to remove
 *         the minimum element from the remainder of the list, and then insert it at
 *         the end of the values sorted so far. 
 *
 * Author: Pooya Hatami
 */

// void swap(int *xp, int *yp)
// {
//     int temp = *xp;
//     *xp = *yp;
//     *yp = temp;
// }
 
selectionSortlocal = function(input, n)
{
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (var i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (var j = i+1; j < n; j++)
          if (input[j] < input[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        [input[min_idx], input[i]] = swap(input[min_idx], input[i]);
    }
    
  return input;
}
 


/*
 * ShellSort Sort !     
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance		O(nlog2^2n) 
 * Best-case performance	O(nlogn)
 * Average performance	Depends on gap sequence
 * Worst-case space complexity О(n) total, O(1) auxiliary
 *   where n is the size of the input array.
 *   Note: The idea of shellSort is to allow exchange of far items.
 *       In shellSort, we make the array h-sorted for a large value of h.
 *       We keep reducing the value of h until it becomes 1. An array is
 *       said to be h-sorted if all sublists of every h’th element is sorted. 
 *
 * Author: Pooya Hatami
 */

/* function to sort input using shellSort */
shellSortlocal = function(input, arrlen)
    {
        //var arrlen = input.length;
        if (displaymode == "Yes") console.log(input,arrlen);  
        // Start with a big gap, then reduce the gap
        for (var gap = Math.floor(arrlen/2); gap > 0; Math.floor(gap /= 2))
        {
            gap = Math.floor(gap);
            if (gap==0) break;
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (var i = gap; i < arrlen; i += 1)
            {
                if (displaymode == "Yes") console.log(gap,i,input[i]);
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                var temp = input[i];
 
                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                var j;
                for (var j = i; j >= gap && input[j - gap] > temp; j -= gap)
                    input[j] = input[j - gap];
 
                // put temp (the original a[i]) in its correct
                // location
                input[j] = temp;
            }
        }
        return input;
    }


/*
 * Bubble Sort (sinking sort)!   
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n^2) 
 * Best-case performance	О(n)
 * Average performance	О(n^2)
 * Worst-case space complexity O(1) auxiliary
 *   where n is the size of the input array.
 *   Note: Odd-even sort is a parallel version of bubble sort, for message passing systems.
 *        Cocktail sort is another parallel version of the bubble sort
 *        In some cases, the sort works from right to left (the opposite direction), 
 *        which is more appropriate for partially sorted lists, or lists with unsorted 
 *        items added to the end.
 *   Optimized Implementation:
 *        The above function always runs O(n^2) time even if the array is sorted. 
 *        It can be optimized by stopping the algorithm if inner loop didn’t cause any swap.
 *
 * Author: Pooya Hatami
 */



// A function to implement bubble sort
bubbleSortLocal = function(input, arrLen)
{
   var i, j;
   if (displaymode == "Yes") console.log(input,arrLen);
   
   for (var i = 0; i < arrLen-1; i++)      
 
       // Last i elements are already in place   
       for (var j = 0; j < arrLen-i-1; j++) { 
           if (input[j] > input[j+1]) {
              [input[j], input[j+1]] = swap(input[j], input[j+1]);
               if (displaymode == "Yes") console.log(i,j,input[j], input[j+1]);
           }
       }
   
   return input;
}


// An optimized version of Bubble Sort
bubbleSortLocalOptimized = function(input, arrLen)
{
   var i, j;
   var swapped;  //bool
   if (displaymode == "Yes") console.log(input,arrLen,swapped);

   for (var i = 0; i < arrLen-1; i++)
   {
     swapped = false;
     for (var j = 0; j < arrLen-i-1; j++)
     {
        if (input[j] > input[j+1])
        {
           [input[j], input[j+1]] = swap(input[j], input[j+1]);
           swapped = true;
           if (displaymode == "Yes") console.log(i,j,input[j], input[j+1]);
       }
     }
 
     // IF no two elements were swapped by inner loop, then break
     if (swapped == false)
        break;
   }
   
   return input;
}

/*
 * Cocktail Sort !
  * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n^2) 
 * Best-case performance	О(n)
 * Average performance	О(n^2)
 * Worst-case space complexity O(1) auxiliary
 *   where n is the size of the input array.
 *   Note: Cocktail Sort is a variation of Bubble sort. The Bubble sort algorithm always
 *         traverses elements from left and moves the largest element to its correct position
 *         in first iteration and second largest in second iteration and so on. Cocktail Sort
 *         traverses through a given array in both directions alternatively.
 *   Also: Cocktail shaker sort, also known as bidirectional bubble sort, cocktail sort, shaker sort 
 *         (which can also refer to a variant of selection sort), ripple sort, shuffle sort,
 *         or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm
 *         and a comparison sort. 
 *
 * Author: Pooya Hatami
 */

cocktailSortLocal = function(input , arrLen)
    {
        var  swapped = true;  //boolean
        var  start = 0;
        var  end = arrLen ; //input.length;
        if (displaymode == "Yes") console.log(input,arrLen,start,end,swapped);

        while (swapped==true)
        {
            // reset the swapped flag on entering the 
            // loop, because it might be true from a 
            // previous iteration.
            swapped = false;
 
            // loop from bottom to top same as
            // the bubble sort
            for (var i = start; i < end-1; ++i)
            {
                if (input[i] > input[i + 1])
                {
                    var temp = input[i];
                    input[i] = input[i+1];
                    input[i+1] = temp;
                    swapped = true;
                   if (displaymode == "Yes") console.log(i,input[i], input[i+1]);

                }
            }
 
            // if nothing moved, then array is sorted.
            if (swapped==false)
                break;
 
            // otherwise, reset the swapped flag so that it
            // can be used in the next stage
            swapped = false;
 
            // move the end point back by one, because
            // item at the end is in its rightful spot
            end = end-1;
 
            // from top to bottom, doing the
            // same comparison as in the previous stage
            for (var i = end-1; i >=start; i--)
            {
                if (input[i] > input[i+1])
                {
                    var temp = input[i];
                    input[i] = input[i+1];
                    input[i+1] = temp;
                    swapped = true;
                   if (displaymode == "Yes") console.log(i,input[i], input[i+1]);

                }
            }
 
            // increase the starting point, because
            // the last stage would have moved the next
            // smallest number to its rightful spot.
            start = start+1;
        }
        
        return input;
    }


/*
 * Heap Sort !     
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	O(nlog n)
 * Best-case performance	O(nlog n)
 * Average performance	O(nlog n)
 * Worst-case space complexity O(1) auxiliary
 *   where n is the size of the input array.
 *   Note: Heap sort is an in-place algorithm.
 *         Its typical implementation is not stable, but can be made stable 
 *
 * Author: Pooya Hatami
 */
 
// To heapify a subtree rooted with node i which is
// an index in input[]. n is size of heap
heapify = function(input, arrLen, i)
{
    var largest = i;  // Initialize largest as root
    var l = 2*i + 1;  // left = 2*i + 1
    var r = 2*i + 2;  // right = 2*i + 2
    if (displaymode == "Yes") console.log("heapify",largest,l, r);
    
    // If left child is larger than root
    if (l < arrLen && input[l] > input[largest])
        largest = l;
 
    // If right child is larger than largest so far
    if (r < arrLen && input[r] > input[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i)
    {
        [input[i], input[largest]] = swap(input[i], input[largest]);
        if (displaymode == "Yes") console.log("  - swap",input[i],input[largest]);
 
        // Recursively heapify the affected sub-tree
        heapify(input, arrLen, largest);
    }
}
 
// main function to do heap sort
heapSortLocal = function(input, arrLen)
{
    if (displaymode == "Yes") console.log(input,arrLen);


    // Build heap (rearrange array)
    for (var i = Math.floor((arrLen / 2) - 1); i >= 0; i--){
        heapify(input, arrLen, i);
        if (displaymode == "Yes") console.log("   rearrange",Math.floor((arrLen / 2) - 1),arrLen,i);
      
    }
 
    // One by one extract an element from heap
    for (var i=arrLen-1; i>=0; i--)
    {
        // Move current root to end
        [input[0], input[i]] = swap(input[0], input[i]);
        if (displaymode == "Yes") console.log("  -- swap",input[0],input[i]);
 
        // call max heapify on the reduced heap
        heapify(input, i, 0);
    }
    
    return input;
}


/*
 
 TODO .............................................
   **Comparison sorts**
	Intro Sort
	Cube Sort
	In-place merge Sort
	Binary tree Sort
	Cycle Sort
	Library Sort
	Patience Sorting
	Smooth Sort
	Strand Sort
	Tournament Sort
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
	LSD Radix Sort
	MSD Radix Sort
	MSD Radix Sort(in-place)
	Spread Sort
	Burst Sort
	Flash Sort
	Postman Sort
		
 */
