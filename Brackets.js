function validParentheses(parens){
    console.log(parens)
    let br={'{':'}'}
    parens=parens.split('')
    if (parens.length%2===1) {
        return false}
    if (parens[0]===')') {
        return false}
    let stack=[]
    let isOpen=(e)=>e=='('?true:false
    for (let i=0;i<parens.length;i++){
        if (isOpen(parens[i])){
            stack.push(parens[i])
        }
        else {
            {if (br[parens[i]]===stack.pop()){
                return false
            }
            }}}
    if (stack.length>=1){
        return false}
    else {
        return true
    }}




