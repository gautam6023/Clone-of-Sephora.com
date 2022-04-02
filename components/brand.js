export function displayAtoZ(){
    const arr=[]
    for(let i=0;i<26;i++){
        arr.push(String.fromCharCode(65+i))
    }
    return [...arr,'#']
}
