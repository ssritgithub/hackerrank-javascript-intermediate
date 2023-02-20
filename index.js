{
    function calucatematches(index, matches, value, possiblevalue) {
        var nextarr = []
        for(var j =0;j < matches.length;j++){
            if(matches[j]["key"] < index && matches[j]["val"] === possiblevalue){
                nextarr.push({
                    key: index,
                    val: possiblevalue + value
                })
            }
        }
        return nextarr
    }
    const count = (matched, index) => (match, string) => {
        var oldMatch = matched
        var newMatch = []
        if(index === match.length) {
            return matched.length
        }
        for(var i =0;i < string.length;i++){
            if((match[index] === string[i]) && index === 0) {
                newMatch.push({
                    key: i,
                    val: string[i]
                })
            }
            if((match[index] === string[i]) && index > 0) {
                var res = match.slice(0,index)
                newMatch.push(...calucatematches(i, oldMatch, match[index], res)) 
            }
        }
        index = index + 1
        return count(newMatch,index) (match, string)
    }
     var M = 1000000007;
    return ( count([], 0) (newName, oldName) ) % M
}
