const campoRequerido =(value)=>{
    if(value.trim() === ''){
        return false
    } else{
        return true
    }
}

const rangoPrecio =(value) =>{
    if(value > 0 && value < 2000){
        return true
    } else{
        return false
    }
}
export {campoRequerido, rangoPrecio}