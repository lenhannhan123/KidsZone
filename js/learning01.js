
var chu=['Alphabet Game',
         'Math Game',
         'Music',
         'Bacsic Color Game',
         'Animals Game',
         'Vegetables Game',
         'The days of the week Game',
         'The week of the year Game',
         'Quiz Game',
         'Orther Game'
         
        ];


var hinh=['image/abc00.png',
          'image/math00.png',
          'image/music00.png',
          'image/color00.png',
          'image/animal00.png',
          'image/Vegetables00.png',
          'image/tdotw00.png',
          'image/calender00.png',
          'image/quiz00.png',
          'image/orther00.png',
        ]


var n=9;



for (var i=0; i <=n ;i++){
    if(i==0){
        document.write('<div class="row" >');
    }


    if((i % 5 ==0) && (i<n) ){
        document.write('</div>');
        document.write('<div class="row" >');
    }
    document.write('<a id="cott" href="#">');
    if ((i==0) || (i %5 ==0) ){
        document.write('<div class="col-sm-2 col-sm-offset-1" id="tbg" >');
    } else { document.write('<div class="col-sm-2" id="tbg" >'); }

    
    document.write(' <div class="image-box" style="margin-bottom: 12%; margin-top: 3%;  border-radius: 20px; "  >');
    document.write(' <img src="'+hinh[i]+'" width="150px" height="150px" />');
    document.write('</div>');
    document.write('<div id="chu" >'+chu[i]+'</div> ');
    document.write('</div>');
    document.write('</a>');
    if((i==n) ){
        document.write('</div>'); 
    }
}




    
       
           
        
          
           

        
    

    
 