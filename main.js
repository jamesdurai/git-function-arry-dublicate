let arr =[1,2,2,3,4,5,6,6,7,8,4,5]

function dublicate(arr){
    let result =[];
    for (i=0; i<arr.length; i++){
        let exists= false;
        for(j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                exists=true;
                break;
            }
        }
        if (!exists){
            result.push(arr[i]);
        }
    }
    return result;
}

document.write(dublicate(arr));