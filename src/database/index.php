<?php include( "db.php" ) ?>

<?php include( "includes/header.php") ?>

<?php 


?>

    

<div class="container mt-5">

<?php if(isset ($_SESSION['message'])) {?>
        <div class="alert alert-<?= $_SESSION['message_type']; ?> alert-dismissible fade show" role="alert">
            <?= $_SESSION['message'] ?>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
<?php } ?>

        <form action="save_task.php" method="POST" class="row g-3">
      <div class="col-md-4">
        <label for="validationServer01" class="form-label">First name</label>
        <input type="text" class="form-control is-valid" name="fname" id="validationServer01" placeholder="Mark" autofocus required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationServer02" class="form-label">Last name</label>
        <input type="text" class="form-control is-valid" name="lname" id="validationServer02" placeholder="Zuckerberg" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
          <input type="text" class="form-control is-invalid" name="username" placeholder="MarkZ01" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
          <div id="validationServerUsernameFeedback" class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <label for="validationServer03" class="form-label">Email</label>
        <input type="mail" class="form-control is-invalid" name="gmail" placeholder="example@gmail.com" id="validationServer03" aria-describedby="validationServer03Feedback" required>
        <div id="validationServer03Feedback" class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>

      <div class="col-md-4">
        <label for="validationServer04" class="form-label">Password</label>
        <input type="password" class="form-control is-invalid" name="pass" id="validationServer04" aria-describedby="validationServer04Feedback" required>
        <div id="validationServer03Feedback" class="invalid-feedback">
          Please provide a valid password.
        </div>
      </div>
      
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
          <label class="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div id="invalidCheck3Feedback" class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" name="save_task">Sign Up</button>
      </div>
    </form>
</div>

<?php include( "includes/footer.php") ?> 