pragma solidity >=0.4.25 <0.6.0;

contract refunder{
    enum StateType { Created, InTransit, Completed, OutOfCompliance}
    struct employee {
        address identity,
        uint256 latitude,
        uint256 longitude,
        string name,
        string email
    };
    employee[] public employees;

    address public employer;
    
    function addEmployee(){}

    function removeEmployee(){}

    function checkEmployeeExists(){}

    function getLocation(){}
    
    function checkPosition(uint256 _latitude, uint256 _longitude){}

    function claimPayment(){}

    function getFeedback(){}

    function reportCompliance(){}




}