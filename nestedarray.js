// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false
function canNext(arr1,arr2)
{
    let arr1_max=0;
    let arr1_min=arr1[0];
    let arr2_max=0;
    let arr2_min=arr2[0];
    for(let ind=0;ind<arr1.length;ind++)
    {
        if(arr1_max<=arr1[ind])
        {
            arr1_max=arr1[ind];
        }
        else{
            arr1_min=arr1[ind];
        }
    }
    for(let ind=0;ind<arr2.length;ind++)
    {
      if(arr2_max<=arr2[ind])
      {
        arr2_max=arr2[ind];
      }
      else
      {
        arr2_min=arr2[ind];
      }
    }
    if(arr1_max<arr2_max && arr1_min>arr2_min)
    {
        console.log("true")
    }
    else{
        console.log("false")
    }
}
let arr1=[1,2,3,4]
let arr2=[2,3]
canNext(arr1,arr2);