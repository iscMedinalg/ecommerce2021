<?php

include("db.php");

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $query = "SELECT * FROM users WHERE id = $id";
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) ==1){
        $row = mysqli_fetch_array($result);
        $name = $row['name'];
        $gmail = $row['gmail'];
        $password = $row['password'];
        
    }
}
    if(isset($_POST['update'])){
        $id = $_GET['id'];
        $name = $_POST['name'];
        $gmail = $_POST['gmail'];
        $password = $_POST['password'];

        $query = "UPDATE users set name = '$name', gmail = '$gmail', password ='$password' WHERE id = '$id' ";
        $result = mysqli_query($conn, $query);
        $_SESSION['message'] ='updated successfuly';
        $_SESSION['message_type']= 'light';

        header("Location: index.php");
    }

?>

<?php include("includes/header.php") ?>

<div class="container p-4">
    <div class="row">
        <div class="col-md-4 mx-auto">
            <div class="card card-body">
                <form action="edit_task.php?id=<?php echo $_GET['id'];?>" method="POST">

                    <div class="form-group">
                        <input type="text" name="name" value="<?php echo $name;?>"
                        class="form-control" placeholder="Update Name">
                    </div>

                    <div class="form-group">
                        <input type="mail" name="gmail" class="form-control" placeholder="Update email">
                        <?php echo $gmail; ?>
                    </div>

                    <div class="form-group">
                        <input type="password" name="password" class="form-control" placeholder="Update Password">
                        <?php echo $password; ?>
                    </div>
                    <button class="btn btn-success" name="update">Update</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php include("includes/footer.php") ?>