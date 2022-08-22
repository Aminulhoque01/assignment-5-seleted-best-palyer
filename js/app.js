
const array=[];

function getBtnId(element){
    const name= element.parentNode.children[0].innerText;
    
    const object={
        name: name,
    }
    array.push(object);
    

    display(array)

    

    
}

function display(name){
    

    
    if(name.length  > 5){
        alert('you choices 5 players');
        return;
    }else{
        const cartContainer = document.getElementById("list-parent");
        cartContainer.textContent = '';
        for(let i = 0; i < name.length; i++){
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${name[i].name}</td>
            
            `;
            cartContainer.appendChild(tr);
    
           
        }
        const tr = document.createElement('tr');
        cartContainer.appendChild(tr);
    
    }
    const totalPlayer= name.length;
        
   

    document.getElementById('Calculate-btn').addEventListener('click', function(){
    
        const Calculate= getInputValueId('money input');
        
        
        const calculetIntu= Calculate * totalPlayer;
    
        const totalExpance= document.getElementById('player-cost');
        totalExpance.innerText= calculetIntu;
        

        
    })


    document.getElementById('Calculate-total').addEventListener('click', function(){
        const Calculate= getInputValueId('money input');
        const calculetIntu= Calculate * totalPlayer;
        const managerFill= getInputValueId('manegar-input');
        const coachFill= getInputValueId('coach-input');
    
        const toatalCost= calculetIntu + managerFill + coachFill;
    
        const costFill= document.getElementById('total-cost');
        costFill.innerText =toatalCost;
    })
}




function getInputValueId(input){
    const CalculateFill= document.getElementById(input);
    const CalculateString= CalculateFill.value;
    const CalculateNumber= parseFloat(CalculateString);
    return CalculateNumber;
}

// document.getElementById('Calculate-btn').addEventListener('click', function(){
    
//     const Calculate= getInputValueId('money input');
//     const cartContainer =document.getElementById("list-parent");
//     const totalmanstirng= cartContainer.innerText;
//     const totalPlayer= parseFloat(totalmanstirng);
//     console.log(totalPlayer);

    
//     const calculetIntu= Calculate * total;

//     const totalExpance= document.getElementById('player-cost');
//     totalExpance.innerText= calculetIntu;

    
// })

