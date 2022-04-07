// your code here...
let status = ['','','','','','','','','']
let x= 1
function total(){
document.querySelectorAll(".cell").forEach(function(item,index){
    document.querySelector(".game--status").innerHTML=" It's X's turn" 
    item.addEventListener('click',function(e){
        let stat = document.querySelector('.game--status').innerHTML
        if(stat==="Player X has won" || stat ==="Player O has won"){
            if(e.target.textContent == ''){
                return ''
            }else{
                status[index]
            }
        }else if(status.includes('')===false){
            document.querySelector('.game--status').innerHTML=" Game ended in a draw"
        }
        if(status[index]==''){
        if((x%2)!=0){
            e.target.textContent='X'
            document.querySelector(".game--status").innerHTML=" It's O's turn" 
            // status[index]='O'
            iswinner(index)
            x++
        }else{
            e.target.textContent='O'
            document.querySelector(".game--status").innerHTML=" It's X's turn" 
            iswinner(index)
            x++
        }

    }else{return false}
        status[index]= `${e.target.textContent}`
        console.log(status)

    })

    })
}

function restart(){
document.querySelector('.game--restart').addEventListener('click',function(e) {
    document.querySelector(".game--status").innerHTML=" It's X's turn"
    x=1
    document.querySelectorAll(".cell").forEach(function(item,index){
        item.textContent = ''
    })
    status = ['','','','','','','','','']
    console.log(status)
    total()
})
}
function iswinner(index){
        if(x > 4){
            let cell = document.querySelectorAll('.cell')
                if(cell[0].innerHTML == 'X' && cell[1].innerHTML == 'X' && cell[2].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }if(cell[3].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[5].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }if(cell[6].innerHTML == 'X' && cell[7].innerHTML == 'X' && cell[8].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }if(cell[0].innerHTML == 'X' && cell[3].innerHTML == 'X' && cell[6].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }if(cell[1].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[7].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }if(cell[2].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[8].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }
                if(cell[0].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[8].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }if(cell[2].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[6].innerHTML == 'X'){
                    document.querySelector('.game--status').innerHTML="Player X has won"
                }
                if(cell[0].innerHTML == 'O' && cell[1].innerHTML == 'O' && cell[2].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }if(cell[3].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[5].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }if(cell[6].innerHTML == 'O' && cell[7].innerHTML == 'O' && cell[8].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }if(cell[0].innerHTML == 'O' && cell[3].innerHTML == 'O' && cell[6].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }if(cell[1].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[7].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }if(cell[2].innerHTML == 'O' && cell[5].innerHTML == 'O' && cell[8].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }
                if(cell[0].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[8].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }if(cell[2].innerHTML == 'O' && cell[4].innerHTML == 'O' && cell[6].innerHTML == 'O'){
                    document.querySelector('.game--status').innerHTML="Player O has won"
                }
  
    }

}


total()
restart()