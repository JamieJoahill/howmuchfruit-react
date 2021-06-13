const Form = () => {

  // Get fruit data
  const getData = async () => {
    const response = await fetch('./db.json',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }

  // Calculate weight function
const calcWeight = (fruit, selectedWeight, inputWeight) => {

	let total;
	let output = '';
	
	getData()
		.then(data => {
			data.items.filter(item => {

				if(fruit === item.name) {

					if(selectedWeight === 'kg') {
						total = Math.floor(inputWeight / item.weight);
						output = `You weigh, rounded to the nearest ${item.icon} ${fruit}. ${total} ${fruit}s.`;
					}

					if(selectedWeight === 'pounds') {
						total = Math.floor((inputWeight / 2.205) / item.weight);
						output = `You weigh, rounded to the nearest ${item.icon} ${fruit}. ${total} ${fruit}s.`;
					}

					if(selectedWeight === 'stone') {
						total = Math.floor((inputWeight * 6.35029318) / item.weight);
						output = `You weigh, rounded to the nearest ${item.icon} ${fruit}. ${total} ${fruit}s.`;
					}
				}
			});

			// Create a div to display the message
			const div = document.createElement('div');

			// Add classes to div
			div.className = `fruit-output`;

			// Add text to div
			div.appendChild(document.createTextNode(`${output}`));

			// Get parent element
			const formSection = document.querySelector('.form__section');

			// Get form results
			const formResults = document.querySelector('#form-results');

			// Insert alert above form results div
			formSection.insertBefore(div, formResults);
	})    
}

  class UI {

    showAlert(message, className) {

      // Create a div to display the message
      const div = document.createElement('div');

      // Add classes to div
      div.className = `alert ${className}`;

      // Add text to div
      div.appendChild(document.createTextNode(message));

      // Get Parent element
      const container = document.querySelector('.form__section');

      // Get form
      const form = document.querySelector('#fruit-form');

      // Insert above form
      container.insertBefore(div, form);

      // Remove alert after 3 seconds
      setTimeout(() => {
          document.querySelector('.alert').remove();
      }, 5000)
    }

    clearFields() {

      document.querySelector('#fruit-name').value = '';
      document.querySelector('#weight').value = '';
      document.querySelector('#inputWeight').value = '';

    }

    disableInput() {

      document.querySelector('#fruit-name').disabled = true;
      document.querySelector('#weight').disabled = true;
      document.querySelector('#inputWeight').disabled = true;

    }

    formReset() {

      document.querySelector('#submit__btn').value = `Enter new measurement?`;

      document.querySelector('#submit__btn').addEventListener('click', e => {

          window.location.reload();

          e.preventDefault();
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fruit = e.target.[0].value;
    const selectedWeight = e.target.[1].value;
    const inputWeight = e.target.[2].value;

    // Instantiate UI Object
    const ui = new UI();

    // Validate Form Entries
    if(fruit === '' || selectedWeight === '' || inputWeight === '') {

      // Show error alert
      ui.showAlert('Please fill in all fields!', 'error');

  } else {

      // Clear fields after submit
      ui.clearFields();

      // Show Output
      calcWeight(fruit, selectedWeight, inputWeight);

      // Disable input
      ui.disableInput();

      // Reset form for new measurement
      ui.formReset();
    }

  }

  return (
    <div className="form__section">

      <form onSubmit={handleSubmit} id="fruit-form" autoComplete="off">

      <div className="form__inputs">
          <label htmlFor="fruit-name">Fruit</label>
          <select id="fruit-name" className="full__width">
            <option value="">Choose fruit?</option>
            <option value="apple">🍎 (Apple)</option>
            <option value="banana">🍌 (Banana)</option>
            <option value="blueberry">🫐 (Blueberry)</option>
            <option value="coconut">🥥 (Coconut)</option>
            <option value="grape">🍇 (Grape)</option>
            <option value="kiwi">🥝 (Kiwi)</option>
            <option value="lemon">🍋 (Lemon)</option>
            <option value="mango">🥭 (Mango)</option>
            <option value="orange">🍊 (Orange)</option>
            <option value="peach">🍑 (Peach)</option>
            <option value="pear">🍐 (Pear)</option>
            <option value="pineapple">🍍 (Pineapple)</option>
            <option value="strawberry">🍓 (Strawberry)</option>
            <option value="watermelon">🍉 (Watermelon)</option>
          </select>
      </div>

      <div className="form__inputs form__input__PT">
        <label htmlFor="weight">Mass</label>
        <select id="weight" className="full__width">
          <option value="">Choose mass?</option>
          <option value="kg">Kg</option>
          <option value="pounds">Pounds</option>
          <option value="stone">Stone</option>
        </select>
      </div>

      <div className="form__inputs form__input__PT">
        <label htmlFor="weight-entered">Enter Weight</label>
        <input type="number" id="inputWeight" placeholder="Enter your weight" className="full__width"/>
      </div>

      <div>
        <input type="submit" value="how much fruit?" id="submit__btn"/>
      </div>

      </form>

      <div id="form-results"></div>

    </div>
   );
}
 
export default Form;