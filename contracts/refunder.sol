
pragma solidity >=0.7.0 <0.9.0;

contract refunder{
    enum StateType { Created, InTransit, Completed, OutOfCompliance}
    struct employee {
        address identity;
        uint256 latitude;
        uint256 longitude;
        string name;
        string email;
    }
    uint256 range;
    employee[] public employees;

    address public employer;
    bool public  complianceStatus;
    
    function addEmployee(
        address identity,
        uint256 latitude,
        uint256 longitude,
        string memory name,
        string memory email) public 
    {
        employees.push(employee(
            identity,
            latitude,
            longitude,
            name,
            email
        ));
        
    }

    function getEmployees() public returns(employee[] memory){
        return employees;
    }


    function removeEmployee(uint index) public returns(employee[] memory) {
        
        for (uint i = index; i<employees.length-1; i++){
            employees[i] = employees[i+1];
        }
        delete employees[employees.length-1];
        employees.length-1;
        return employees;
    }


    
    function checkPosition(uint256 _latitude, uint256 _longitude) public returns(bool) {
        
        if (_latitude < range){
            complianceStatus = true;
        }else{
            complianceStatus = false;
        }

        return complianceStatus;
    }

    function claimPayment(uint256 _latitude, uint256 _longitude) public returns(bool){
        
        if (_latitude < range){
            complianceStatus = true;
        }else{
            complianceStatus = false;
        }

        return complianceStatus;
    }


}