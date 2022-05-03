
let personArray = new Array();
let salaryArray = new Array();
let $ = function(id)
{
    return document.getElementById(id);
}

function addSalary()
{

    if($('employeename').value === "" || $('employeesalary').value === "")
    {
        alert("Please enter required values.");
        return;
    } else if (isNaN($('employeesalary').value) || $('employeesalary').value < 0)
    {
        alert("Please enter a valid number in the salary field")
        return;
    }

    let name = $('employeename').value;
    let salary = parseFloat($('employeesalary').value).toFixed(2);

    for(let i=0; i < personArray.length; i++)
    {
        if(personArray[i] === name)
        {
            salaryArray[i] = salary;
            return;
        }
    }

    personArray.push(name);
    salaryArray.push(salary);
}

function displayResults()
{

    let avg = calcAvg();
    let highestString = calcHighest();

    $('results').innerHTML = ("The average salary of the chosen employees is: $" + avg + "<br />" + highestString);
}

function calcAvg()
{
		if(salaryArray.length == 0)
    {
    	return 0;
    } else if (salaryArray.length == 1)
    {
    	return salaryArray[0];
    }

        let sum = 0.00;
        for(let i = 0; i < salaryArray.length; i++)
        {
                sum += parseInt(salaryArray[i]);
            console.log(sum);
        }

        console.log(sum);
        return (sum / salaryArray.length).toFixed(2);
}


function calcHighest()
{
    let highestSalary = 0;
    let highestPerson = null;
    
    for(let i = 0; i < salaryArray.length; i++)
    {
        if(salaryArray[i] > highestSalary)
        {
            highestSalary = salaryArray[i];
            highestPerson = personArray[i];
        }
    }

    
    return ("The person with the highest salary is " + highestPerson + " at $" + highestSalary + ".");
}


function displaySalary()
{
	$('employeetablebody').innerHTML = "";
    for(let i = 0; i < personArray.length; i++)
    {
        let row = $('employeetablebody').insertRow(i);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        cell0.innerHTML = personArray[i];
        cell1.innerHTML = salaryArray[i];
    }
}