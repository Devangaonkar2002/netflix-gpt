export const checkValidData= (email,password)=>{

  const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if(!isEmailValid) return "Email id is not valid";
  if(!isPasswordValid) return "Password should be minimum 8 characters long and should contain atleast one letter and one number";
  return null;
}