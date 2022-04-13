 <script>
    $(function() {
      
      $.get("./src/data/data", function(data) {
        $('#pageData').html(data)
        console.log(data); // this is not called !!
      });
      console.log('end logging');
    });
  </script>
