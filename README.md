<!DOCTYPE html>
<!--
Name:suraj rawat
Location:Uttarakhand
-->
<html>
    <head>
        <title>Student Enrollment Form </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://login2explore.com/jpdb/resources/js/0.0.3/jpdb-commons.js"></script>
        <script src="resources/js/student.js"></script>
    </head>
    <body>
        <div class="container-fluid" style="background-image:url('resources/images/bg1.png');height: 1000px;background-repeat: no-repeat;background-size: cover;">

            <div class="container" style="border:3px solid black ;background-color: white;height:auto;width:800px;border-top:25px solid lavender;margin-top: 15px;"> 
                <h2 style="text-align: center;margin-top: 7px;margin-bottom: 35px">Student Enrollment Form</h2>
                <form id="form1" method="GET">
                <div class="form-group">
                
                
                        <label>Roll_no</label>
                        <input type="text" class="form-control" id="Roll_no" placeholder="Enter Roll_no of student" onchange='getemp()' ></div>
                    <div class="form-group">
                    
                        <label>Full_Name</label>
                        <input type="text" class="form-control" id="Full_Name" placeholder="Enter Name of student"  ></div>
                    <div class="form-group">
                    
                    <label>Class</label>
                        <input type="text" class="form-control" id="Class" placeholder="Enter the class of student"  ></div>
                    <div class="form-group">
                        
                  
                        <label >Birth_date</label>
                        <input type="date" class="form-control" id="date" placeholder="Enter  the date">
                    </div>
                    
                    <div class="form-group">
                        <label >Address</label>
                        <input type="text" class="form-control" id="Address" placeholder="Enter Adress">
                    </div>
                    <div class="form-group">
                        <label >Enrollment_date</label>
                        <input type="date" class="form-control" id="date" placeholder="Enter date">
                    </div>


                </form>
                
                <div class="text-center" style="margin-bottom: 10px;margin-top: 20px;">
                    <button type="submit" id='submit' class="btn btn-primary" onclick='save()' disabled>Save</button>
                    <button type="button" id='change' class="btn btn-primary" onclick='change()' disabled>Update</button>
                    <button type="button" id='reset' class="btn btn-primary" onclick='reset()' disabled >Reset</button>                  
                </div>

            </div>
        </div>

    </body>
</html>
