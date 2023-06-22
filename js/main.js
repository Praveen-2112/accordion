var question=document.querySelectorAll(".faq-column");
var answer=document.querySelectorAll(".faq-detail");

question.forEach(function (qtn) {
    qtn.addEventListener("click", function (){
        var b =qtn.nextElementSibling.classList.contains("view");
        answer.forEach(function (ans)  {
            ans.classList.remove("view");
        });
        if(b== true){
            qtn.nextElementSibling.classList.remove("view");
            qtn.firstChild.nextSibling.nextElementSibling.nextElementSibling.classList.
            add(
                "rotatel"
            );
        }
        else{
            qtn.nextElementSibling.classList.add("view");
            qtn.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.
            add(
                "rotate"
            );
        }
    });
} );