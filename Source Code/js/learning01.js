//Create List Box Inside Categories Page
        for (var i=0; i <=n ;i++){
            if(i==0){
                document.write('<div class="row" >');
            }
            if((i % 5 ==0) && (i<n) ){
                document.write('</div>');
                document.write('<div class="row" >');
            }
            document.write('<a id="cott" href="'+link[i]+'">');
            
            if ((i==0) || (i %5 ==0) ){
                document.write('<div class="col-sm-2 col-sm-offset-1" id="tbg" >');
            } else { document.write('<div class="col-sm-2" id="tbg" >'); }

            
            document.write('<div class="image-box" style="margin-bottom: 12%; margin-top: 3%;  border-radius: 20px; "  >');
            document.write('<img src="'+ actIcon[i] +'" width="150px" height="150px" />');
            document.write('</div>');
            document.write('<div id="activity" >'+ act[i] + '</div> ');
            document.write('</div>');
            document.write('</a>');
            if((i==n) ){
                document.write('</div>'); 
            }
        }




    
       
           
        
          
           

        
    

    
 