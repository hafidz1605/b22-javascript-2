let nama = [
    `abigail`, `alexandra`, `alison`,
    `amanda`, `angela`, `bella`,
    `carol`, `caroline`, `carolyn`,
    `deirdre`, `diana`, `elizabeth`,
    `ella`, `faith`, `olivia`, `penelope`]
   
    function cari(a,b){
        return (b.indexOf(a))
        }   
        
        function searchName(a,b,callback){
          let cetak=[]
          let i=0    
          
            for (let x=0;x<16;x++){
              
                panjang=nama[i].length-1
                param=callback(a,nama[i])    
                    if(param>=0){
                    cetak.push(nama[i])
                    b--;

                  }
                  
                if(b==0){break}
                
              i++
              }
            
            console.log(cetak)
            
          }

          searchName("an",3,cari)
          console.log(`---------`)
          searchName("el",2,cari)
