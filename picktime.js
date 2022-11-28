//Start kod för välja specifik tid


const container = document.querySelector('.container');
const booktimes = document.querySelectorAll('.time .booktime:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const time = document.querySelector('.time');

let value = parseInt(time.value);
console.log(typeof value);
console.log(value);

// $('.time').on('click', function(){
//     let value = parseInt($(this).attr('value'));
        
function updateSelectedCount()
{
        const selectedBooktimes = document.querySelectorAll('.time .booktime.selected');
        const selectedBooktimesCount = selectedBooktimes.length;

        count.innerText = selectedBooktimesCount;
        total.innerText = selectedBooktimesCount * value;

        // console.log(selectedBooktimesCount);
        
}

container.addEventListener('click', (e) => 
{
    if (e.target.classList.contains('booktime') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected')
    }
           updateSelectedCount();
});

//Slut kod för välja specifik tid