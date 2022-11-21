$(document).ready(function(){

    $(".burger-nav").on("click", function(){

        $(".nav").toggleClass("open");

    });

});

const container = document.querySelector('.container');
const booktimes = document.querySelectorAll('.time .booktime:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const time = document.querySelector('.time');


$('.time').on('click', function(){
    let value = parseInt($(this).attr('value'));
    const selectedBooktimes = document.querySelectorAll('.time .booktime.selected');
    const selectedBooktimesCount = selectedBooktimes.length;
    
    total.innerText = selectedBooktimesCount * value;
    console.log(value)
    
    });
    
    console.log(typeof value);
        
function updateSelectedCount(){
        const selectedBooktimes = document.querySelectorAll('.time .booktime.selected');
        const selectedBooktimesCount = selectedBooktimes.length;

        count.innerText = selectedBooktimesCount;
        // total.innerText = selectedBooktimesCount * value;

        console.log(selectedBooktimesCount);
        
}

container.addEventListener('click', (e) => 
{
    if (e.target.classList.contains('booktime') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected')
    }
        updateSelectedCount();
});
