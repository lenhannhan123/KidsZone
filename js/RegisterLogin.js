document.write('<style>');
document.write('.modal-content{');
document.write('background-image:url('+image01+');');
document.write('background-size: 160%;');
document.write('background-repeat: no-repeat;');
document.write('}');
document.write('#font-form{');
document.write('color: white;');
document.write('text-shadow: rgb(0, 60, 255) 0px 0px 7px;');
document.write('font-size: 12pt;');
document.write('font-weight: bold;');
document.write('}');
document.write('</style>');



document.write('<div class="modal fade" id="myModal" role="dialog">');
document.write('<div class="modal-dialog">');
document.write('<div class="modal-content">');
document.write('<div class="modal-header">');
document.write('<button type="button" class="close" data-dismiss="modal">&times;</button>');
document.write('<h4 id="font-form" class="modal-title" style="text-align: center; font-size:25pt ; " >Register</h4>');
document.write('</div>');
document.write('<div class="modal-body">');
document.write('<form class="form-horizontal" action="'+home+'"  id="contactForm" >');
document.write('<div  class="form-group">');
document.write('<label id="font-form" class="control-label col-lg-4" for="mail"  >Email</label>');
document.write('<div class="col-lg-7" >');
document.write('<input type="mail" class="form-control" ');
document.write('id="form-inp" name="email" placeholder="Enter mail" >');
document.write('</div>');
document.write('</div>');
document.write('<div  class="form-group">');
document.write('<label id="font-form" class="control-label col-lg-4" for="User"  >User Name</label>');
document.write('<div class="col-lg-7" >');
document.write('<input type="text" class="form-control" ');
document.write('id="form-inp" name="user" placeholder="Enter User Name" >');
document.write('</div>');
document.write('</div>');
document.write('<div  class="form-group">');
document.write('<label id="font-form" class="control-label col-lg-4" for="pwd"  >Password</label>');
document.write('<div class="col-lg-7" >');
document.write('<input type="password" class="form-control" ');
document.write('id="form-inp" name="password" placeholder="Enter Password" >');
document.write('</div>');
document.write('</div>');
document.write('<div class="form-group">');
document.write('<label id="font-form" class="control-label col-lg-4" for="phone"  >Phone</label>');
document.write('<div class="col-lg-7" >');
document.write('<input type="phone" class="form-control" ');
document.write('id="form-inp" name="phone" placeholder="Enter Phone" >');
document.write('</div>');
document.write('</div >');
document.write('<div  class="form-group">');
document.write('<div class="col-lg-offset-3 col-lg-7" >');
document.write('<label id="font-form" class="radio-inline"  >');
document.write('<input type="radio" checked id="gender"  name="gender">Male');
document.write('</label>');
document.write('<label id="font-form" class="radio-inline"  >');
document.write('<input type="radio" id="gender" name="gender"> Female');
document.write('</label>');
document.write('</div>');
document.write('</div>');
document.write('<div class="form-group">');
document.write('<div class="col-md-8 col-md-offset-3">');
document.write('<div style="font-size: 11pt; font-weight: bold; " id="messages"></div>');
document.write('</div>');
document.write('</div>');
document.write('<div class="form-group">');
document.write('<div class=" col-md-offset-3 col-md-2" >');
document.write('<button type="submit" class="btn btn-primary">Submit</button>');
document.write('</div>');
document.write('<div class="col-md-2" >');
document.write('<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> ');
document.write('</div>');
document.write('</div> ');
document.write('</form>');
document.write('</div>');
document.write('</div>');
document.write('</div>');
document.write('</div>');
document.write('');
document.write('');
document.write('');
