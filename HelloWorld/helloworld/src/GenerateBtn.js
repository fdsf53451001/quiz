
const changeText = function(event){
    event.target.innerText = event.target.innerText + "被點了";
};

const MultiButton = function(){
    var output = [];
    for(var step=0;step<10;step++){
        output.push(<button onClick={changeText}>第{step+1}個按鍵</button>);
    }
    return output;
};

function GenerateBtn(){
    return(
    <div className="Btn">
        {MultiButton()}
    </div>);
};

export default GenerateBtn;
