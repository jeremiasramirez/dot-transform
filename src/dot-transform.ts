
function dotTransform(data:Number) : any{
    let lastData: String = String(data);
    
    // 1,000 = 4
    if(lastData.length == 4){
        lastData =lastData.substring(0,1)+","+lastData.substring(1,4)
    }

    // 10,000 =5
    else if(lastData.length == 5){
        lastData =lastData.substring(0,2)+","+lastData.substring(2,5)
    }
    // 100,000 = 6
    else if(lastData.length == 6){
        lastData =lastData.substring(0,3)+","+lastData.substring(3,6)
    }

    // 1,000000 = 7
    else if(lastData.length == 7){
        lastData =lastData.substring(0,1)+","+lastData.substring(4,7) + ","+lastData.substring(4,7)
    }

    //   20.550.000
    else if(lastData.length == 8){
        lastData =lastData.substring(0,2)+","+lastData.substring(2,5) + ","+lastData.substring(5,8)
    }

        //   100.000.000
    else if(lastData.length == 9){
        lastData =lastData.substring(0,3)+","+lastData.substring(3,6) + ","+lastData.substring(6,9)
    }
        //   1000.000.000
    else if(lastData.length == 10){
        lastData =lastData.substring(0,4)+","+lastData.substring(4,7) + ","+lastData.substring(7,10)
    }
    
    return lastData;

}
 

export default dotTransform
 
 