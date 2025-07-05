function double_element(){
    let arr_1=[2,3,4,5,6];
    arr_1_len=arr_1.length;
    for(let i=0;i<arr_1_len;i++){
        arr_1[i]=arr_1[i]*2;
    }
    console.log(arr_1);
}




arr_1=[2,3,4,5,6,7];

double_element(arr_1);



let test_arr=[5,4,6,7,8,9,7]



let evensorter=(test_arr)=>{
    new_arr=[]
    for(let i=0;i<test_arr.length;i++){
        if(arr_1[i]%2==0){
            new_arr.push(test_arr[i])
        }
    }
    console.log(new_arr)
}

console.log(evensorter)