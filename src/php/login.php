<?php include( "/xampp/htdocs/electronic/src/database/db.php" ) ?>

<?php include( "/xampp/htdocs/electronic/src/database/includes/header.php") ?>

<div class="container mt-5">

        <form action="validate.php" method="GET" class="row">
            <h3 class="mb-5">Sign In</h3>
      
      <div class="col-md-5">
        <label for="validationServer03" class="form-label">Email</label>
        <input type="mail" class="form-control is-invalid" name="gmail" placeholder="example@gmail.com" id="validationServer03" aria-describedby="validationServer03Feedback" required>
        <div id="validationServer03Feedback" class="invalid-feedback">
          <!-- Please provide a valid email. -->
        </div>
      </div>

      <div class="col-md-5">
        <label for="validationServer04" class="form-label">Password</label>
        <input type="password" class="form-control is-invalid" name="pass" id="validationServer04" aria-describedby="validationServer04Feedback" required>
        <div id="validationServer03Feedback" class="invalid-feedback">
          <!-- Please provide a valid password. -->
        </div>
      </div>
      
      <div class="col-12">
        <button class="btn btn-primary" type="submit" name="validation_login">Sign In</button>
      </div>
    </form>
</div>

<?php include( "/xampp/htdocs/electronic/src/database/includes/footer.php") ?> 