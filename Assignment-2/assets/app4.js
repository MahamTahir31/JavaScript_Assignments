 setTimeout(function() {
    alert("Welcome");
    setTimeout(function() {
      alert("hello");
    }, 1000); // wait 1 second before displaying the second message
  }, 1000); // wait 1 second before displaying the first message
  
