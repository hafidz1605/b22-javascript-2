function seleksiNilai(nilaiAwal,nilaiAkhir,dataArray){
    if (nilaiAwal>=nilaiAkhir){
        console.log(`nilai akhir harus lebih besar dari nilai awal`)
    }
    else if(dataArray.length<=5){
        console.log(`jumlah angka dalam dataArray harus lebih dari 5`)
    }
    else{ let p=dataArray.length-1
            let cetak=[]
          for(let x=0;x<=p;x++){
              if(dataArray[x]>nilaiAwal&&dataArray[x]<nilaiAkhir){
                  cetak.push(dataArray[x])
              }




          }
          cetak.sort(function(a, b){return a - b})
          console.log(cetak)


        
    
    
    }




}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
console.log(`----------------`)
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
console.log(`----------------`)
seleksiNilai(4, 17 , [2, 25, 4])