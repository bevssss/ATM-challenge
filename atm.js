var balance = 100.0; //set initial balance.

	function bal_inquiry() {
		//get value(balance)
		document.querySelector('#result').innerHTML = 'Your current balance is'+' '+ parseFloat(localStorage.getItem('money'));
		// display the hidden h6 
		document.querySelector('#result').style.display = 'block';
		
	}
	function do_deposit() {
		document.querySelector('#input').style.display = 'block';
		document.querySelector('#condeposit').style.display = 'block';
		}

	function confirm_deposit() {
		var deposit = parseFloat(document.querySelector('#input').value); 				
		if (isNaN(deposit) || deposit === '') {
		document.querySelector('#result').innerHTML = 'Error please enter a number';
		
		} else {
			balance = balance + deposit;
			if (localStorage.getItem('money')===null){
				localStorage.setItem('money', balance);
			}else{
  				//Get balance from localStorage and adds the deposited money
   			balance = deposit + parseFloat(localStorage.getItem('money'));
  				//Re-set back to localStorage
  			localStorage.setItem('money', balance);
}

	document.querySelector('#result').innerHTML = 'Thank you for depositing: Your current money is:'+' '+ balance ;
	document.querySelector('#result').style.display = 'block';
	document.getElementById('input').value = '';
				
		}
	}

	function do_withdrawal() {
		document.querySelector('#input').style.display = 'block';
		document.querySelector('#conwithdraw').style.display = 'block';
	}

	function confirm_withdrawal() {
		
		var withdrawal = parseFloat(document.querySelector('#input').value);
		
		if (isNaN(withdrawal) || withdrawal === '') {
			document.querySelector('#result').innerHTML = 'Error please enter a number';
			document.getElementById('input').value = '';
			//do_withdrawal();
		} else {
			balance -= withdrawal;
			if (localStorage.getItem('money')===null){
				// Set to localStorage
				localStorage.setItem('money', balance);
			}else{
  				//Get bookmarks from localStorage
   				balance = balance - withdrawal;
  				//Re-set back to localStorage
  				localStorage.setItem('money', balance);
}
}
			//alert(balance);
			document.querySelector('#result').innerHTML = 'You have withdrawn an amount of:' + withdrawal + '<br>'+
			'Your current money is:'+' '+balance;
			document.querySelector('#result').style.display = 'block';
			
		
	}
	
	function exit() {
		var confirm_leave = confirm('NO MORE TRANSACTIONS?');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		}
	}

	function atm() {
		var url = "mainmenu.html";
    	window.location(url);	
		//document.querySelector('#result').innerHTML = 'Have More Transactions';
		//document.querySelector('#result').style.display = 'block';

		}




		/*('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
		if (choice === 1) {
			get_balance();
		} else if (choice === 2) {
			do_deposit();
		} else if (choice === 3) {
			do_withdrawal();
		} else if (choice === 4) {
			exit();
		} else {
			error();
		}
	}
	atm();*/


	//lsiten for form Submit
