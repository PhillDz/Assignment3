// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll(".btn-danger");
        for(button of deleteButtons) {
        button.addEventListener("click",(event)=>{
            if(!confirm("Are you sure you will like to delete this entry?")) {
                event.preventDefault();
                window.location.assign("/records");
            }
        })
    }
    }
    window.addEventListener("load", Start);

})();