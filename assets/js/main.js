const ajaxJsonBtn = document.getElementById('ajax-json-btn')

const xhr = new XMLHttpRequest()

const loadJson = () => {
    console.log('Current State: ', xhr.readyState)
    xhr.open('GET', 'Exotics.json', true)
    console.log('Current State: ', xhr.readyState)
    
    xhr.onprogress = () => {
        console.log('Current State: ', xhr.readyState)
    }

    xhr.onload = () => {
        if (xhr.status === 200) {
          console.log('Current State: ', xhr.readyState)
          console.log(xhr.responseText)
          const Exotics = JSON.parse(xhr.responseText)
          console.log(Exotics)
          Exotics.forEach(p => {
              const { Name, Type } = p
              console.log(p.Name)
              console.log(Name)
              console.log(`Name: ${Name}, Type: ${Type}`)
              document.getElementById(`Name${i}`).append(p.Name)
              document.getElementById(`Type${i}`).append(p.Type)
              document.getElementById(`Description${i}`).append(p.Description)
              i++
          });
        } else if (xhr.status === 404) {
            console.log('Error. file not found.')
      }

    } 
    xhr.send()
}

ajaxJsonBtn.addEventListener('click', loadJson)



$(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });