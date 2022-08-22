
const array=[];

    function getBtnId(element){
        const name= element.parentNode.children[0].innerText;
        
        const object={
            name: name,
        }
        array.push(object);
        

        display(array)

        
    
    }

   
    function getElementById(elementId){
        const saveBtn= document.getElementById(elementId);
        const btn= saveBtn.disabled= true;
        return btn
    }


   
    const saveBtn=document.querySelector('#save-btn');
    saveBtn.addEventListener('click', function()  {
        saveBtn.style.backgroundColor='#dddddd' ;
        getElementById("save-btn")
    });

    const saveBtn2=document.querySelector('#save-btn2');
    saveBtn2.addEventListener('click', function()  {
        saveBtn2.style.backgroundColor='#dddddd' ;
        getElementById("save-btn2")
    });

    const saveBtn3=document.querySelector('#save-btn3');
    saveBtn3.addEventListener('click', function()  {
        saveBtn3.style.backgroundColor='#dddddd' ;
        getElementById("save-btn3")
    });

    const saveBtn4=document.querySelector('#save-btn4');
    saveBtn4.addEventListener('click', function()  {
        saveBtn4.style.backgroundColor='#dddddd' ;
        getElementById("save-btn4")
    });

    const saveBtn5=document.querySelector('#save-btn5');
    saveBtn5.addEventListener('click', function()  {
        saveBtn5.style.backgroundColor='#dddddd' ;
        getElementById("save-btn5")
    });

    const saveBtn6=document.querySelector('#save-btn6');
    saveBtn6.addEventListener('click', function()  {
        saveBtn6.style.backgroundColor='#dddddd' ;
        getElementById("save-btn6")
    });
    
    const saveBtn7=document.querySelector('#save-btn7');
    saveBtn7.addEventListener('click', function()  {
        saveBtn7.style.backgroundColor='#dddddd' ;
        getElementById("save-btn7")
    });
    
    const saveBtn8=document.querySelector('#save-btn8');
    saveBtn8.addEventListener('click', function()  {
        saveBtn8.style.backgroundColor='#dddddd' ;
        getElementById("save-btn8")
    });

    const saveBtn9=document.querySelector('#save-btn9');
    saveBtn9.addEventListener('click', function()  {
        saveBtn9.style.backgroundColor='#dddddd' ;
        getElementById("save-btn9")
    });

  
    



    


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



