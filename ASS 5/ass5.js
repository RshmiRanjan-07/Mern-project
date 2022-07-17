let employee={
    name:'Emp',
    email:'emp123@gmail.com',
    Phone_No:'9876543210',
    basic_sal:80000,
    total_sal:function(){
        if(this.basic_sal>40000 && this.basic_sal<=50000)
        {
            return this.basic_sal+this.basic_sal*0.15+this.basic_sal*0.2-this.basic_sal*0.1;
            
        }
        else if(this.basic_sal>50000  && this.basic_sal<=70000){
            return this.basic_sal+this.basic_sal*0.15+this.basic_sal*0.2-this.basic_sal*0.15;
            
        }
        else if(this.basic_sal>70000  && this.basic_sal<=100000){
            return this.basic_sal+this.basic_sal*0.15+this.basic_sal*0.2-this.basic_sal*0.2;
        
        }
        else{
            return this.basic_sal+this.basic_sal*0.15+this.basic_sal*0.2-this.basic_sal*0.3;
        }
    }
}
console.log(employee.name);
console.log(employee.email);
console.log(employee.Phone_No);
console.log(`Total sal= ${employee.total_sal()}`)