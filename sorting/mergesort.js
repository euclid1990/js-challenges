/////TEST CASES

//int arr[] = {12, 15, 23, 4 , 6, 10, 35, 28}; //Even number of element
//int arr[]={}; //Empty list 
int *arr = NULL; //Null pointer
//int arr[] = {4, 6, 10, 12, 15, 23, 28, 35}; //already sorted array
//int arr[] = {12, 15, 23, 4 , 6, 10, 35}; //odd length array
//int arr[] = {35, 28, 23, 15, 12, 10, 6, 4}; //descending sorted array input
//int arr[] = {12};//one element
//int arr[] = {12, 4}; // two elements
//int arr[] = {12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60};//large list of elements 
//int arr[] = {12, 15, -23, -4 , 6, 10, -35, 28}; //negative elements
int arr[] = {12, 12, 23, 4 , 6, 6, 10, -35, 28}; //duplicate elements
int arr[] = {12, 12, 12, 12, 12}; //Same element







// CODE TO IMPLEMENT
class MergeSort 
{ 
    // Merges two subarrays of arr[]. 
    // First subarray is arr[l..m] 
    // Second subarray is arr[m+1..r] 
    void merge(int arr[], int l, int m, int r) 
    { 
        // Find sizes of two subarrays to be merged 
        int n1 = m - l + 1; 
        int n2 = r - m; 
  
        /* Create temp arrays */
        int L[] = new int [n1]; 
        int R[] = new int [n2]; 
  
        /*Copy data to temp arrays*/
        for (int i=0; i<n1; ++i) 
            L[i] = arr[l + i]; 
        for (int j=0; j<n2; ++j) 
            R[j] = arr[m + 1+ j]; 
  
  
        /* Merge the temp arrays */
  
        // Initial indexes of first and second subarrays 
        int i = 0, j = 0; 
  
        // Initial index of merged subarry array 
        int k = l; 
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
  
        /* Copy remaining elements of L[] if any */
        while (i < n1) 
        { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
  
        /* Copy remaining elements of R[] if any */
        while (j < n2) 
        { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 
  
    // Main function that sorts arr[l..r] using 
    // merge() 
    void sort(int arr[], int l, int r) 
    { 
        if (l < r) 
        { 
            // Find the middle point 
            int m = (l+r)/2; 
  
            // Sort first and second halves 
            sort(arr, l, m); 
            sort(arr , m+1, r); 
  
            // Merge the sorted halves 
            merge(arr, l, m, r); 
        } 