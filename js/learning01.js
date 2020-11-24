
var chu=['Alphabet Game',
         'Math Game',
         'Music',
         'Bacsic Color Game',
         'Animals Game',
         'Vegetables Game',
         'The days of the week Game',
         'The week of the year Game',
         'Quiz Game'
         
        ];


var hinh=['../image/abc00.png',
          '../image/math00.png'
        ]


var n=8;



for (var i=0; i <=n ;i++){
    if(i==0){
        document.write('<div class="row" >');
    }


    if((i % 4 ==0) && (i<n) ){
        document.write('</div>');
        document.write('<div class="row" >');
    }
    document.write('<a id="cott" href="#">');
    document.write('<div class="col-sm-2 col-sm-offset-1" id="tbg" >');
    document.write(' <div class="image-box" style="margin-bottom: 12%; margin-top: 3%;  border-radius: 20px; "  >');
    document.write(' <img src="'+hinh[i]+'" width="150px" height="150px" />');
    document.write('</div>');
    document.write('<span id="chu" >'+chu[i]+'</span> ');
    document.write('</div>');
    document.write('</a>');
    if((i==n) ){
        document.write('</div>'); 
    }
}




    
       
           
        
          
           

        
    

    
 