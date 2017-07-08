/*
 * Class Sorting algorithms
 *      Bead Sort 
 *      Gravity Sort 
 *      Bucket Sort 
 *      Bin Sort 
 *      Counting Sort
 *      Insertion Sort
 *      Merge Sort
 *      Radix Sort
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
        		  if (code[0]<=0) return bsfractions(inputArray,10,code[2]);
              else return bs(inputArray,code);
			},
            mergeSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with mergeSort");
        		  return ms(inputArray,0,code[2]-1);
			},
            insertionSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with insertionSort");
        		  return insertionSortlocal(inputArray);
			},
            radixSort: function (inputArray,base) {
			base = typeof base !== 'undefined' ? base : 10;
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with radixSort on Baase ",base);
        		  return radixSortlocal(inputArray,code[2],base);
			},
            countingSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with countingSort");
        		  return countingSortMain(inputArray,code[0]);
			},
            beadSort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with beadSort");
        		  return beadSortlocal(inputArray,code['length']);   // code[2] inputArray.lenght  code[0] maximum 
			},
            gravitySort: function () {
            if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with beadSort or gravitySort");
        		  return beadSortlocal(inputArray,code['length']);  // code[2] inputArray.lenght  code[0] maximum 
			},
            binSort:function () {
              if (displaymode=="Yes") console.log("Sorting Array",inputArray,"with bucketSort which is the same as binSort!");
        		  return bs(inputArray,code);
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
//   if (code[0]<=0) return bsfractions(inputArray,10,code[2]);
//   else return bs(inputArray,code);
// }

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
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
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
ms = function(arr,l,r)
{
    if (l < r)
    {
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        var m = Math.floor(l+(r-l)/2);
        if (displaymode == "Yes") console.log("mid of ",l,"and",r,"is",m);
        // Sort first and second halves
        ms(arr, l, m);
        ms(arr, m+1, r);
 
        merge(arr, l, m, r);
    }
    return arr;
}
 
/* UTILITY FUNCTIONS */
/* Function to print an array */
printArray = function(a,size)
{
    var i;
    for (i=0; i < size; i++)
        console.log(a[i]);
    console.log("\n");
}
 

// Function to sort input[] of size n using bucket sort
// for positive float numbers  
bs = function(input,code)
{
    // 1) Create n empty buckets
    //vector<float> b[n];
    var maxelement = code[0];
    var ibucket = code[1];
    var arrlen  = code[2];
    if (displaymode == "Yes") console.log(input,ibucket,arrlen,code);
    var b = new Array(ibucket);
    for (i=0; i<ibucket; i++)
         b[i]= new Array();
    if (displaymode == "Yes") console.log("empty buckets ",b);
    // 2) Put array elements in different buckets
    for (i=0; i<arrlen; i++)
    {
       var bi = indexmaker(input[i],code); // Index in bucket
       if (displaymode == "Yes") console.log(input[i]," in bucket "+bi);
       b[bi].push(input[i]);
    }
    
    if (displaymode == "Yes") console.log("full buckets befor sort :\n",b);
    // 3) Sort individual buckets
    for (i=0; i<ibucket; i++) {
         if (displaymode == "Yes") console.log("bucket "+ i +" befor sort : "+b[i]);
         //b[i].sort(sortNumber);
         b[i] = insertionSortlocal(b[i]);   // sorting each bucket with insertionSort 
         if (displaymode == "Yes") console.log("after sort : "+b[i]);
    }
    if (displaymode == "Yes") console.log("\nfull buckets after sort :\n", b);

    // 4) Concatenate all buckets into input[]
    var index = 0;
    for (i = 0; i < ibucket; i++)
        for (j = 0; j < b[i].length; j++)
          input[index++] = b[i][j];

  return input;
  
}

// Function to : 
//   find bigest element
//   creat bucket size
//   find Array lenght           
getArrayInfo = function(input)
{
  var output = new Array();
  var arrlen = input.length;
  var max = input[0];
  var min = input[0];
  for (i = 1; i < input.length; i++) {
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

// Function to make bucket index 
indexmaker = function(oneinputcell,code)
{
  var output = Math.floor(oneinputcell / code[0] * (code[1] - 1))
  return output;
}

sortNumber = function(a,b)
{
    return a - b;
}

// Function to sort input[] of size n using bucket sort 
// for float numbers between 0 to 1
bsfractions = function(input,ibucket,arrlen)
{
   if (displaymode == "Yes") console.log(input,ibucket,arrlen);
    // 1) Create n empty buckets
    //vector<float> b[n];
    var b = new Array(ibucket);
    for (i=0; i<ibucket; i++)
         b[i]= new Array();
    if (displaymode == "Yes") console.log("empty fractions buckets ",b);
    // 2) Put array elements in different buckets
    for (i=0; i<arrlen; i++)
    {
       var bi = Math.floor(ibucket*input[i]); // Index in bucket
       if (displaymode == "Yes") console.log(input[i]," in bucket "+bi);
       b[bi].push(input[i]);
    }
    
    if (displaymode == "Yes") console.log("full buckets befor sort :\n", b);
    // 3) Sort individual buckets
    for (i=0; i<ibucket; i++) {
         if (displaymode == "Yes") console.log("bucket "+ i +" befor sort : "+b[i]);
         b[i].sort();
         if (displaymode == "Yes") console.log("bucket "+ i +" after sort : "+b[i]);
    }
    if (displaymode == "Yes") console.log("\nfull buckets after sort :\n", b);
 
 
    // 4) Concatenate all buckets into input[]
    var index = 0;
    for (i = 0; i < ibucket; i++)
        for (j = 0; j < b[i].length; j++)
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
        for (i=1; i<n; ++i)
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
countingSortMain = function(inpute,maxrange) {

        var n = inpute.length;
        ++maxrange;
        
        // The output character array that will have sorted inpute
        var output = new ArrayBuffer();
//      var output = [];

        // Create a count array to store count of inidividul
        // characters and initialize count array as 0
        var count = new ArrayBuffer(maxrange);
//      var count =  [maxrange];
  
        for (i=0; i<maxrange; ++i)
            count[i] = 0;
        // store count of each character
        for (i=0; i<n; ++i)
            ++count[inpute[i]];
        
        // Change count[i] so that count[i] now contains actual
        // position of this character in output array
        for (i=1; i<=maxrange; ++i)
            count[i] += count[i-1];

        // Build the output character array
        for (i = 0; i<n; ++i)
        {
            output[count[inpute[i]]-1] = inpute[i];
            --count[inpute[i]];
        }
 
        // Copy the output array to inpute, so that inpute now
        // contains sorted characters
        for (i = 0; i<n; ++i)
            inpute[i] = output[i];

      return inpute;
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
	for(place=1; place <= m; place *= 10){
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
   for (i = 0; i < 10; i++)
		count[i] = 0 ;
		

  // count occurrence of each element 
  for (i = 0; i < arrLen; i++) {
	  var index_i = getIndexDigit(input[i], exp, base); // Math.floor
	  count[index_i]++;

  }

  if (displaymode=="Yes") console.log("count ",count);
  // rearrange count[] so that it contains actual position of
  // each element in output[] 
  for (i = 1; i < base; i++)
	  count[i] += count[i-1];
  
  // NOTE: filling the output array in a reversed way 
  for (i = arrLen-1; i >= 0 ; i--){
		  var index_i = getIndexDigit(input[i], exp, base); //Math.floor
		  output[--count[index_i]] = input[i];
  	      if (displaymode=="Yes") console.log("input[i] ",input[i]," index_i ",index_i," i ",i);

	  }

  // copy output[] into input[] 
  for (i = 0; i < arrLen; i++) {
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
beadSortlocal = function(input,arrLen) 
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

