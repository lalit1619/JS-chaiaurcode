const firstButton=document.querySelector("#button1");
firstButton.addEventListener("click",function(event)
{
    console.log(event);
    console.log(this);
})

//whenever we use eventListner in any element
//js engine  -- line bt line executed
//browser -- js engine + extra features
//browser -- js engine + webapi  
//jab browser ko pata chala ki user ne event perform kiya
//jo humh listen kar rahe hae

//browser ------2
//1) callback function hae vo js engine ko dega
//2)callbacl function ke sath browser jo event hua hai uski info bhi dega
//ye info hamein ek object ke form mai milega
