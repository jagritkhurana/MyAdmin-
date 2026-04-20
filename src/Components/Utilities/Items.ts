

function setItem<T>(key:string,value:T):void{
    localStorage.setItem(key,JSON.stringify(value))

}

function getItem<T>(key:string,value:T):T|null{
    const data=localStorage.getItem(key)
    return data? JSON.parse(data):null;

}