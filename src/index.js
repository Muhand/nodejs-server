import boot from './boot';

//Start booting up the server
boot((errs, app)=>{
  if(errs){
    //If there was an issue booting up the server
    console.log(`Server failed to boot for the following reasons:`);

    //Start printing each error
    errs.forEach((err)=>{
      console.log(`- ${err}\n`);
    });
  } else {
    //If server booted successfully
    console.log(`Server started on port: ${app.server.address().port}`);
  }
});
