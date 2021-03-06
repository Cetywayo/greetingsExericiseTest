describe('greet the name with the selected language', function(){
    let greetNames = greetMe();

   it('should  greet the name in xhosa', function(){
   greetNames = greetMe();
  
   assert.equal('Molo, Siwe', greetNames.enterTheName('isixhosa','Siwe'));
       
   });


   it('should  greet the name in english', function(){
    greetNames = greetMe();
   
    assert.equal('Hello, Siwe', greetNames.enterTheName('english','Siwe'));
        
    });

    it('should  return error message', function(){
        greetNames = greetMe();
       
        assert.equal('Enter alphabet only', greetNames.enterTheName('afrikaans','-Siwe'));
            
        });

        it('should  greet the name in afrikaans', function(){
            greetNames = greetMe();
           
            assert.equal('Hallo, Siwe', greetNames.enterTheName('afrikaans','Siwe'));
                
            });


   it('should  greet the Musa in xhosa', function(){
    greetNames = greetMe();
   
    assert.equal('Molo, Musa', greetNames.enterTheName('isixhosa','Musa'));
        
    });




  
   it('should  greet the name in english', function(){
    greetNames = greetMe();
   
    assert.equal('Hello, Siwe', greetNames.enterTheName('english','Siwe'));
        
    });

    

        it('should  return error message', function(){
            greetNames = greetMe();
           
            assert.equal('Enter alphabet only', greetNames.enterTheName('english','O12345yi'));
                
            });

    it('should  greet the Oyi in english', function(){
        greetNames = greetMe();
       
        assert.equal('Hello, Oyi', greetNames.enterTheName('english','Oyi'));
            
        });

       

    it('should  greet the name in afrikaans', function(){
        greetNames = greetMe();
       
        assert.equal('Hallo, Siwe', greetNames.enterTheName('afrikaans','Siwe'));
            
        });

        

        it('should  return error message', function(){
            greetNames = greetMe();
           
            assert.equal('Enter alphabet only', greetNames.enterTheName('afrikaans','Ma123khe'));
                
            });

            it('should  return error message', function(){
                greetNames = greetMe();
               
                assert.equal('Enter alphabet only', greetNames.enterTheName('afrikaans','Makhe123'));
                    
                });
      
        it('should return list of greeted names', function(){
            greetNames = greetMe();
            greetNames.countGreetedNames('Siwe') 
            greetNames.countGreetedNames('Musa') 
            greetNames.countGreetedNames('Oyena') 
            greetNames.countGreetedNames('Masa') 
        

            assert.deepEqual([ 'Siwe', 'Musa', 'Oyena', 'Masa' ] ,greetNames.displayNamesGreeted());
                
            });
            


        it('should return the length of the array', function(){
            greetNames.countGreetedNames("Siwe") 
            greetNames.countGreetedNames("Piwe") 
            greetNames.countGreetedNames("Oyena") 
            greetNames.countGreetedNames("Masa") 
            greetNames.countGreetedNames("Onke") 
            greetNames.countGreetedNames("Onikayo") 
            greetNames.countGreetedNames("Makhe") 
            greetNames.countGreetedNames("Ntando") 
              
            assert.equal(9, greetNames.getCount());
                
            });
  

});

