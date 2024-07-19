# JavaScript-Payroll-App
Code that will enable a payroll manager to view and manage an employee's  payroll data

#What is a Payroll Tracker
Jaascript code that will enable a payroll manager to input employee's first name, last name, & salary. They can also view console logged computable and aggregate data

#How to use
visit, file:///C:/Users/pdaily/BootcampCode/JavaScript-Payroll-App/index.html > click on blue button > enter data that you are prompted for > when you are finished hit cancel > your datat will be displayed in a table 

#Synopsis
This project was a bit challenging. I had to start from scratch a few times trying to figure out the best code to use that is easily understandable. I ran into issues where my code was duplicated and canceling out other code. I was able to troubleshoot and get to th e point of what you see when you visit the link.

I noticed it does not give an error if you enter in somethng invalid that is something I can improve on. It also doesn't sort alphavbetically. 

#Screenshot of actual Payroll Tracker
 ![IMG_0257](https://github.com/user-attachments/assets/ef935edf-22c6-4014-bd55-43ca87438ef1)
![IMG_0258](https://github.com/user-attachments/assets/68ccfd33-f6e5-44d4-a82f-3f1963e39641)


#Unused code

I couldn't figure out where to add this code to make sure the proper information was added but it was in my though process:

addEmployeesBtn.addEventListener('click', function() {
    // Validate input before adding employees
    if (isValidInput()) {
        // Add employees
    } else {
        alert('Invalid input. Please check your data.');
    }
});
