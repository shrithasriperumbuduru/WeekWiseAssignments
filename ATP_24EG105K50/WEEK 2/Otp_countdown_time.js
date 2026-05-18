console.log("OTP Sent Successfully")
let seconds=11;
let intervel=setInterval(()=>{
    {
        seconds--;
        console.log(seconds)
        if(seconds===0)
        {
            console.log("Resend Otp")
            clearInterval(intervel)
        }
    }},1000)