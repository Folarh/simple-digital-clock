const digitalClock= document.querySelector(".clock");

const tick= ()=>{

    const current= new Date();

    const hour= current.getHours();


    const minutes= current.getMinutes();

    const seconds= current.getSeconds();



  const temp =`
 
  <span>${hour}</span> : 
  <span>${minutes}</span> : 
  <span>${seconds}</span> 
  `;

  digitalClock.innerHTML=temp;

};

 setInterval(tick, 1000);