let fileinput= document.getElementById('fileinput');

fileinput.addEventListener('change',function(){

    [...this.files].forEach(file=>{

        if(file.type.startsWith('image/')){

            let reader = new FileReader();

            reader.onload=function(){

                
                let img = document.createElement('img');
                let tdimage= document.querySelector('.tdimage');
                img.setAttribute('src',reader.result);
                tdimage.appendChild(img);

                let tdname= document.querySelector('.tdname');
                tdname.innerText=file.name;

                let tdsize=document.querySelector('.tdsize');
                tdsize.innerText=file.size;

                let tddelete=document.querySelector('.tddelete');
                tddelete.innerHTML('<i class="fa-solid fa-ban"></i>');


                

            }

            reader.readAsDataURL(file);
        }
        else{
            alert("format sehvdir!!!")
        }
    })
})

let imgupload= document.querySelector('.upldimg');
imgupload.addEventListener('click',function(){
    fileinput.click();
})