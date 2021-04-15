export class LoginModel{
    public Email:string;
    public Password:string;
    public Phone:string;
    public FullName:string;
    public Address:string;
    public Age:number;



    isValid():boolean{
        if(
            this.Email!= "" &&
            this.Password!= "" &&
            this.Phone!= "" &&
            this.FullName!= "" && 
            this.Address!= "" &&
            this.Age != NaN
        ){
            return true;
        }
        else
        {
            return false;
        }
    }

}