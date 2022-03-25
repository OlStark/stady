//let output = document.querySelector('.output');
//let num = document.getElementById('num').value;
//let percent = document.getElementById('percent').value;

export function getPercents(num,percent) {

	if(num > 0 && percent > 0) {
	    const result = num / 100 * percent;
	    return result;
	}else if((num === '' || percent === '') || (num === false || percent === false)) {
        return 'Данные не найдены';
    } else if(num <= 0 || percent <= 0) {
        return 'Одно или оба введённых значения отрицательные или равны нулю';
    } else if(num !== isNaN(num) && percent !== isNaN(percent)) 	{
        return 'Одно или оба введённых значения не являются числом';
    } 

}

